# Contributing / Contribuire

Thanks for your interest in improving **6 Hats Agents**! · Grazie per l'interesse a migliorare **6 Hats Agents**!

## What we accept / Cosa accettiamo

**EN**
- Bug fixes on existing agents (frontmatter, tool names, typos)
- Translation improvements (Italian ↔ English)
- Documentation improvements (README, examples, diagrams)
- New optional workers that fit the Six Thinking Hats methodology
- Build script improvements (`eng/update-readme.mjs`)

**IT**
- Correzioni di bug negli agenti esistenti (frontmatter, nomi tool, refusi)
- Miglioramenti di traduzione (IT ↔ EN)
- Miglioramenti alla documentazione (README, esempi, diagrammi)
- Nuovi worker opzionali coerenti con il metodo Sei Cappelli
- Miglioramenti allo script di build (`eng/update-readme.mjs`)

## What we don't accept / Cosa non accettiamo

- Changes that break the de Bono methodology (hats mixing roles, etc.)
- Adding tools an orchestrator/worker doesn't strictly need
- Non-namespaced tool names (`edit` → use `edit/editFiles`)
- Filenames with spaces or uppercase

## Agent file conventions / Convenzioni file agente

Every agent file lives in `agents/` and must:

1. Use extension **`.agent.md`**
2. Use **lowercase filename with hyphens**: `cappello-blu.agent.md`
3. Include YAML frontmatter with these fields:

```yaml
---
name: "Human-readable name"
description: "Brief description (shown in agents picker)"
model: "Claude Sonnet 4.6 (copilot)"
tools: ['search/codebase', 'read/readFile']
user-invocable: true   # false for worker subagents
---
```

4. For the orchestrator (`cappello-blu.agent.md`), also include:

```yaml
tools: ['agent', 'edit/editFiles', 'read/readFile']   # 'agent' is REQUIRED when using subagents
agents: ['Cappello Bianco', 'Cappello Verde', ...]    # names of workers
```

> **Important / Importante**: when the `agents:` field is present, `tools:` **must**
> include `'agent'` (or the namespaced form `'agent/runSubagent'`). VS Code's
> schema validator rejects orchestrators without it — the `agent` tool is what
> allows the orchestrator to actually invoke its subagents.
>
> Quando il campo `agents:` è presente, `tools:` **deve** includere `'agent'`
> (o la forma namespaced `'agent/runSubagent'`). Il validatore di VS Code rifiuta
> gli orchestrator senza questo tool — è ciò che permette effettivamente di invocare
> i subagent.

## Development workflow / Flusso di sviluppo

```bash
# 1. Fork & clone
git clone https://github.com/<your-user>/6-hats-agents.git
cd 6-hats-agents

# 2. Create a branch / Crea un branch
git checkout -b fix/my-improvement

# 3. Edit agent files under agents/
# Modifica i file in agents/

# 4. Regenerate the install table in README.md
# Rigenera la tabella di installazione nel README.md
npm run build

# 5. Commit & push
git commit -am "fix: describe the change"
git push origin fix/my-improvement

# 6. Open a Pull Request against main
# Apri una Pull Request verso main
```

## Pull request guidelines

- **One logical change per PR** — smaller PRs are reviewed faster
- **Run `npm run build`** before opening the PR — CI expects the README to be regenerated
- **Explain the WHY** in the PR description, not just the WHAT
- **Bilingual is welcome** but not required — English is the primary language for PR titles

## Code of Conduct

Be respectful, constructive, and assume good faith. Personal attacks, harassment,
or discriminatory language will result in issue/PR closure.

## License

By contributing you agree that your contributions are licensed under the
[MIT License](LICENSE).
