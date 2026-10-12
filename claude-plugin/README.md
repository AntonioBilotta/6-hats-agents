# 🎩 Six Thinking Hats — Claude plugin

Claude port of the GitHub Copilot agents in [`../agents`](../agents). Same architecture: the **Blue Hat** orchestrates five isolated hat workers.

```
six-hats (skill, invoked by the user)   ← Blue Hat / Cappello Blu
├── white-hat   agent → facts & data          [Read, Grep, Glob, WebSearch, WebFetch]
├── yellow-hat  agent → value & opportunities [no tools]
├── black-hat   agent → risks                 [Read, Grep, Glob]
├── red-hat     agent → emotions              [no tools]
└── green-hat   agent → creativity            [WebSearch, WebFetch]
```

There is **no inline fallback** on purpose: if the hat agents are not loaded, the Blue Hat stops and says so instead of playing the hats itself. That keeps it obvious what actually works on each surface.

## Where it runs

| Surface | Skill (Blue) | Agents (hats) | Result |
|---|---|---|---|
| Chat (web, desktop Chat tab, mobile) | ✅ | ❌ ignored | Blue stops at preflight |
| Cowork / agentic sessions | ✅ | ✅ | Full session |
| Claude Code | ✅ | ✅ | Full session |

Source: [Plugin feature support across platforms](https://claude.com/docs/plugins/platform-support).

## Install

**From GitHub (marketplace)** — the repo root has `.claude-plugin/marketplace.json`:
1. claude.ai or desktop app → **Customize › Plugins › Add › Add marketplace**
2. Enter `antoniobilotta/6-hats-agents`
3. Add **six-hats** from the list

The plugin syncs to your account, so Claude Code gets it too at next session start (`/reload-plugins` to load it immediately).

**From a file** — zip this `claude-plugin/` folder and use **Add › Upload plugin**.

**Claude Code only** — in one step:

```
/plugin install six-hats --marketplace antoniobilotta/6-hats-agents
```

or `claude --plugin-dir ./claude-plugin` to try the local folder for a single session.

## Use

```
/six-hats <problem or decision>
/six-hats quick feedback: <plan to review>      # skips type confirmation
```

The Blue Hat restates the problem, proposes an activity type and sequence, **waits for your confirmation**, then runs the hats one at a time and closes with a synthesis and 3 next steps.

## Test checklist

Things to verify on each surface — they are the open questions of this port:

- [ ] **Preflight**: in plain chat, the Blue Hat stops and reports the missing agents (does not improvise the hats)
- [ ] **Agents loaded**: in Cowork / Claude Code, the five hats appear among available agents (possibly as `six-hats:<hat>`)
- [ ] **Real delegation**: each hat block comes from a subagent run, not from the Blue Hat
- [ ] **Sequential**: hats run one after another, never in parallel
- [ ] **Tool restrictions**: `red-hat` and `yellow-hat` with `tools: []` really have no tools (ask Red to "check a file" and see what happens)
- [ ] **Type confirmation**: the Blue Hat waits for confirmation unless the type is given in the command
- [ ] **Arbitration**: a hat that leaves its role gets flagged and re-invoked once
- [ ] **Context passing**: Red receives the emerging plan; Black receives Yellow's output

## Differences from the Copilot version

| Copilot (`agents/*.agent.md`) | Claude plugin |
|---|---|
| `cappello-blu` agent, `user-invocable: true` | `six-hats` **skill** (the Blue Hat) |
| Workers `user-invocable: false` | Agents with a description saying "invoked by the six-hats skill only" — Claude can't hide them, so they are visible in the agent list |
| `agents: [...]` on the Blue Hat | No equivalent: the skill names the five agents explicitly |
| `model: Claude Sonnet 4.6 (copilot)` | `model: inherit` (uses the session model) |
| `search/codebase`, `read/readFile`, `search` | `Read`, `Grep`, `Glob`, `WebSearch`, `WebFetch` |
| Blue's sequence default ("Choosing Between Alternatives") | Blue always asks for confirmation, per `llm-wiki/wiki/decisions/architettura_agenti.md` |
| — | Fit check, anti-pattern arbitration checklist and synthesis self-check from `docs/METODOLOGIA.md` |

## License

The Six Thinking Hats method is by Edward de Bono / The de Bono Group. These files are MIT-licensed, like the rest of the repo.
