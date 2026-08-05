---
tipo: decision
data_creazione: 2026-07-02
data_aggiornamento: 2026-07-02
stato: parzialmente aperto
fonti_correlate: ["[[copilot_subagents_multiagente]]"]
tags: [decision, agenti, architettura, implementazione]
---

# Decisioni architetturali — Sistema multi-agente 6 Cappelli

**Contesto:** Implementazione dei 6 agenti cappello come file `.agent.md` in `.github/agents/`, seguendo il pattern Coordinator+Worker analizzato in [[copilot_subagents_multiagente]]. Le decisioni sono state validate con test reali in VS Code.

---

## ✅ Tool per Cappello Rosso

**Decisione:** `tools: []` — nessun tool.

**Motivazione:** Il Cappello Rosso deve produrre una reazione viscerale immediata, senza accedere a file di contesto. Aggiungere `read` rischierebbe di trasformare la fase emotiva in ragionamento travestito da emozione. Confermato dai test: funziona correttamente senza accesso al vault.

---

## ✅ Tool per Cappello Verde e Giallo

**Decisione:** Verde → `tools: ['search']`. Giallo → `tools: []`.

**Motivazione:** Il Verde può usare `search` per trovare analogie e riferimenti creativi esterni utili alle tecniche di pensiero laterale. Il Giallo lavora sul contesto già accumulato dai cappelli precedenti, non ha bisogno di ricerche esterne.

---

## ✅ Sequenza default nel Cappello Blu

**Decisione:** Il Blu chiede sempre all'utente il tipo di attività — nessun fallback automatico su "Choosing Between Alternatives".

**Motivazione:** La scelta della sequenza è parte integrante del processo De Bono e non deve essere bypassata. Un default silenzioso rischierebbe di applicare la sequenza sbagliata senza che l'utente se ne accorga.

---

## ⏳ Campo `agents` esplicito nel frontmatter del Blu

**Decisione:** da verificare.

**Domanda aperta:** Il campo `agents: [...]` nel frontmatter del Cappello Blu dovrebbe limitare i subagenti invocabili ai soli 5 cappelli. Non ancora verificato se VS Code rispetti questo vincolo e impedisca al Blu di invocare altri agenti nel workspace.

---

## Collegato a

- [[copilot_subagents_multiagente]] — analisi architetturale di partenza
- [[cappello_blu]] (agent) — coordinatore, unico `user-invocable: true`
