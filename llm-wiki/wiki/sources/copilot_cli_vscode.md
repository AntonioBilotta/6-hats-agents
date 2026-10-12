---
tipo: source
data_creazione: 2026-07-02
data_aggiornamento: 2026-10-12
fonti_correlate: []
tags: [source, copilot, cli, vscode, agenti, implementazione]
---

# Copilot CLI sessions in Visual Studio Code

- **Provenance**: `raw/references/Copilot CLI sessions in Visual Studio Code.md`

**Provenienza:** Documentazione ufficiale Microsoft VS Code
**URL:** https://code.visualstudio.com/docs/agents/agent-types/copilot-cli
**Data clip:** 2026-07-02

---

## Riassunto

Copilot CLI è una modalità di esecuzione agenti in background su VS Code. A differenza degli agenti locali (Chat view), Copilot CLI gira autonomamente anche quando VS Code è chiuso, ed è integrabile con custom agents e sessioni manuali.

---

## Punti chiave

### Natura delle sessioni CLI

- Girano sul **machine locale in background**, anche a VS Code chiuso — a differenza degli agenti locali che si fermano con l'editor.
- Gestite dalla Copilot SDK, monitorabili dalla Chat view di VS Code.
- Adatte a task con **scope ben definito** che non richiedono interazione frequente: es. eseguire un workflow completo senza supervisione step-by-step.

### Isolation modes

Due modalità di isolamento che determinano dove vanno a finire le modifiche:

| Modalità | Comportamento | Approvals |
|---|---|---|
| **Worktree** | Git worktree separato; modifiche isolate fino alla review | Auto-approve (Bypass Approvals automatico) |
| **Folder** | Modifiche dirette nel workspace corrente | Configurabile (Default / Bypass / Autopilot) |

> [!note] Nota per il progetto
> Per il vault Obsidian, **Folder isolation** è la scelta corretta: le pagine wiki devono essere scritte direttamente in `wiki/`. Worktree isolation richiederebbe un merge manuale.

### Hand-off da sessione locale a CLI

È possibile iniziare una sessione in Chat view (es. con il [[cappello_blu]] che enuncia il problema e sceglie la sequenza) e poi passarla a Copilot CLI per l'esecuzione autonoma. Il contesto completo della conversazione viene trasferito.

Flusso tipico per il progetto:
1. Utente apre Chat view, usa l'agente Cappello Blu per definire il problema
2. Hand-off a CLI → i cappelli vengono invocati in sequenza come subagenti autonomamente

### Custom agents con CLI

- I custom agent (`.agent.md`) sono **compatibili con le sessioni CLI**.
- Limitazione: solo custom agents **definiti nel workspace** (cartella `.github/agents/`) sono disponibili in CLI — non quelli nel profilo utente.
- Si seleziona il custom agent al momento della creazione della sessione CLI.

### Slash commands disponibili in CLI

- `/compact` — gestisce conversazioni lunghe comprimendo il contesto
- `/research` — ricerca approfondita (preview, solo Insiders)
- `/yolo` o `/autoApprove` — toggle auto-approvazione tool calls
- `/remote on|off` — abilita controllo remoto via github.com o GitHub Mobile

### Limitazioni rilevanti

- **No extension-provided tools**: strumenti forniti da estensioni VS Code non sono disponibili.
- **Solo workspace agents**: custom agents del profilo utente non accessibili.
- **MCP con auth non supportati**: solo MCP server locali senza autenticazione.
- **Modelli limitati**: solo quelli disponibili via CLI tool.

---

## Elementi del dominio toccati

- **Workflow:** [[full_spectrum]] — modalità di esecuzione autonoma via CLI
- **Agenti:** [[cappello_blu]] — orchestratore che fa il hand-off a CLI
- **Concetto nuovo:** Isolation mode (worktree vs folder) — da considerare nella progettazione degli agenti
