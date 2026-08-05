---
tipo: analysis
data_creazione: 2026-07-02
data_aggiornamento: 2026-07-02
fonti_correlate: ["[[copilot_subagents_vscode]]", "[[copilot_custom_agents_vscode]]", "[[copilot_cli_vscode]]"]
tags: [analysis, copilot, multi-agente, subagents, architettura, implementazione]
---

# Copilot Multi-Agente per i 6 Cappelli — Analisi e Raccomandazioni

**Origine:** QUERY del 2026-07-02 — ricerca online su subagents e multi-agente in Copilot Chat e CLI
**Sorgenti tecniche ingеstate:** [[copilot_subagents_vscode]], [[copilot_custom_agents_vscode]], [[copilot_cli_vscode]]

---

## Domanda di partenza

Come modellare gli agenti che rappresentano i 6 cappelli in Copilot Chat/CLI, dato che il flusso di esecuzione è sequenziale (un cappello alla volta)?

---

## Meccanismi disponibili in VS Code Copilot

VS Code offre tre meccanismi per orchestrare agenti specializzati in sequenza:

| Meccanismo | Come funziona | Supervisione utente | File tecnico |
|---|---|---|---|
| **Subagents** | Blu coordinatore invoca i cappelli-worker in sequenza come subtask isolati | Cappelli collassabili in chat | `.agent.md` con `tools: ['agent']` e `agents: [...]` |
| **Handoffs** | Ogni cappello mostra un pulsante per passare al successivo | Utente legge ogni cappello e clicca | `handoffs:` nel frontmatter |
| **Copilot CLI** | Sessione autonoma in background, Blu orchestra da solo | Minima, può girare a VS Code chiuso | Stessi `.agent.md` del workspace |

---

## Analisi per il caso 6 cappelli

### Perché il pattern Coordinator + Worker è quello corretto

Il metodo De Bono richiede:
1. **Sequenzialità obbligata** — un cappello alla volta, no parallelismo
2. **Isolamento delle prospettive** — ogni cappello non deve essere influenzato dal ragionamento degli altri durante la sua fase
3. **Un orchestratore** — il Cappello Blu gestisce sequenza e sintesi

Il pattern Coordinator + Worker via subagents soddisfa tutti e tre i requisiti:
- La sequenza è definita nell'istruzione del Blu (step 1 → step 2 → ...)
- L'isolamento è architetturale: ogni subagente ha contesto separato
- Il Blu è l'unico agente visibile all'utente (`user-invocable: true`)

### Confronto tra le tre modalità per i 6 cappelli

**Subagents (raccomandato per uso operativo)**
- Il Blu orchestra automaticamente tutti i cappelli
- L'utente vede il processo collassato e può espanderlo
- Adatto a sessioni di problem solving regolari
- Il risultato finale può essere salvato in `wiki/decisions/`

**Handoffs (raccomandato per apprendimento/supervisione)**
- L'utente legge ogni cappello prima di procedere al successivo
- Adatto per sessioni dove si vuole analizzare il contributo di ogni cappello
- Più lento, ma permette di intervenire tra un cappello e l'altro

**Copilot CLI (raccomandato per batch / automazione)**
- Il workflow completo gira in background senza interazione
- L'utente può avviare e tornare a guardare il risultato
- Richiede folder isolation per scrivere direttamente nel vault

---

## Schema architetturale raccomandato

```
.github/agents/
  cappello_blu.agent.md       ← coordinatore (user-invocable: true)
  cappello_bianco.agent.md    ← worker (user-invocable: false)
  cappello_verde.agent.md     ← worker (user-invocable: false)
  cappello_giallo.agent.md    ← worker (user-invocable: false)
  cappello_nero.agent.md      ← worker (user-invocable: false)
  cappello_rosso.agent.md     ← worker (user-invocable: false)
```

**Frontmatter del Cappello Blu (coordinatore):**
```yaml
---
name: Cappello Blu
description: "Avvia una sessione 6 cappelli — descrivi il tuo problema"
tools: ['agent', 'edit', 'read']
agents: ['Cappello Bianco', 'Cappello Verde', 'Cappello Giallo', 'Cappello Nero', 'Cappello Rosso']
---
```

**Frontmatter di un cappello-worker (es. Bianco):**
```yaml
---
name: Cappello Bianco
user-invocable: false
tools: ['search', 'read']
---
```

---

## Decisioni architetturali chiave

1. **Posizione file**: `.github/agents/` — unica posizione compatibile con sia Chat view che Copilot CLI
2. **`user-invocable: false`** su tutti i cappelli-worker — non appaiono nel dropdown, accessibili solo tramite Blu
3. **`agents` esplicito** sul Blu — limita i subagenti invocabili ai soli 6 cappelli
4. **Tool per cappello**: principio di least privilege — solo i tool necessari al ruolo
5. **Isolation mode CLI**: Folder (non Worktree) — per scrivere direttamente in `wiki/decisions/`

---

## Prossimi passi

1. Definire i system prompt dei 6 cappelli in `raw/specs/` → INGEST → `wiki/agents/`
2. Creare i file `.agent.md` in `.github/agents/`
3. Testare con una sessione pilota su un problema reale
4. Archiviare l'output in `wiki/decisions/`
