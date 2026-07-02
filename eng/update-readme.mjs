#!/usr/bin/env node
/**
 * update-readme.mjs
 * Reads agents/*.agent.md, generates install badge table and injects it
 * into README.md between <!-- AGENTS-TABLE-START --> and <!-- AGENTS-TABLE-END -->.
 *
 * Usage: node eng/update-readme.mjs
 *        npm run build
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const OWNER  = 'antoniobilotta';
const REPO   = '6-hats-agents';
const BRANCH = 'main';

const MARKER_START = '<!-- AGENTS-TABLE-START -->';
const MARKER_END   = '<!-- AGENTS-TABLE-END -->';

/** Files to inject the table into. */
const TARGET_FILES = [join(ROOT, 'README.md')];

/** Display order and per-agent metadata. */
const AGENTS = [
  { key: 'cappello-blu',    emoji: '🔵', role: 'Orchestrator / Orchestratore' },
  { key: 'cappello-bianco', emoji: '🤍', role: 'Facts & data / Fatti e dati' },
  { key: 'cappello-giallo', emoji: '💛', role: 'Opportunities / Opportunità' },
  { key: 'cappello-nero',   emoji: '🖤', role: 'Risks / Rischi' },
  { key: 'cappello-rosso',  emoji: '❤️', role: 'Emotions / Emozioni' },
  { key: 'cappello-verde',  emoji: '💚', role: 'Creativity / Creatività' },
];

/**
 * Parse YAML frontmatter from a file's content.
 * Returns a plain object { key: value } (string values, quotes stripped).
 */
function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const result = {};
  for (const line of m[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const k = line.slice(0, idx).trim();
    const v = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    if (k) result[k] = v;
  }
  return result;
}

/**
 * Generate the install badge markdown for a given agent filename.
 * Uses double encodeURIComponent so the nested URL is correctly percent-encoded.
 */
function makeBadges(agentFile) {
  const rawUrl = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/agents/${agentFile}`;

  const vsUri         = `vscode:chat-agent/install?url=${encodeURIComponent(rawUrl)}`;
  const vsInsidersUri = `vscode-insiders:chat-agent/install?url=${encodeURIComponent(rawUrl)}`;

  const installUrl         = `https://aka.ms/awesome-copilot/install/agent?url=${encodeURIComponent(vsUri)}`;
  const installInsidersUrl = `https://aka.ms/awesome-copilot/install/agent?url=${encodeURIComponent(vsInsidersUri)}`;

  const badge = (alt, label, color, href) =>
    `[![${alt}](https://img.shields.io/badge/${label}-Install-${color}?style=flat-square&logo=visualstudiocode&logoColor=white)](${href})`;

  return [
    badge('Install in VS Code',          'VS_Code',          '0098FF', installUrl),
    badge('Install in VS Code Insiders', 'VS_Code_Insiders', '24bfa5', installInsidersUrl),
  ].join(' ');
}

/** Build the full badge table markdown. */
function buildTable() {
  const agentsDir = join(ROOT, 'agents');
  const available = new Set(readdirSync(agentsDir).filter(f => f.endsWith('.agent.md')));

  const rows = AGENTS
    .map(({ key, emoji, role }) => {
      const file = `${key}.agent.md`;
      if (!available.has(file)) return null;
      const fm   = parseFrontmatter(readFileSync(join(agentsDir, file), 'utf8'));
      const name = fm['name'] ?? key;
      return `| ${emoji} **${name}** | ${role} | ${makeBadges(file)} |`;
    })
    .filter(Boolean);

  return ['| Agent | Role | Install |', '|-------|------|---------|', ...rows].join('\n');
}

/** Replace the content between markers in a file with the generated table. */
function inject(filePath) {
  const src = readFileSync(filePath, 'utf8');
  const si  = src.indexOf(MARKER_START);
  const ei  = src.indexOf(MARKER_END);

  if (si === -1 || ei === -1) {
    console.warn(`⚠️  Markers not found in ${filePath} — skipping`);
    return;
  }

  const updated =
    src.slice(0, si + MARKER_START.length) +
    '\n' + buildTable() + '\n' +
    src.slice(ei);

  writeFileSync(filePath, updated, 'utf8');
  console.log(`✅  ${filePath} updated`);
}

for (const f of TARGET_FILES) inject(f);
