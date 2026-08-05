---
tipo: spec
data_creazione: 2026-07-02
stato: parzialmente chiuso
note: Decisioni da validare durante il test dei file .agent.md reali
tags: [spec, agenti, decisioni-aperte, implementazione]
---

# Note di implementazione — Agenti Cappello

Decisioni aperte da validare durante il test in VS Code.
Spunta ogni voce dopo la verifica.

---

- [V] **Tool per Cappello Rosso** — attualmente `tools: []`. Se il Rosso deve mappare stakeholder reali del progetto (es. leggendo file di contesto nel vault), aggiungere `read`. Altrimenti lasciare vuoto per forzare la reazione viscerale pura.
Da test effettuati va bene anche senza read.

- [V] **Tool per Cappello Giallo e Verde** — attualmente `tools: []`. Valutare se Verde debba poter fare `search` per trovare analogie o riferimenti creativi esterni. Giallo probabilmente non ne ha bisogno.
Il verde può usare search.

- [V] **Sequenza default nel Blu** — il Blu usa "Choosing Between Alternatives" come fallback se il tipo di attività non è chiaro. Verificare se è il default più utile in pratica o se conviene chiedere sempre all'utente.
Conviene chiedere all'utente.

- [ ] **`agents` esplicito nel frontmatter del Blu** — il campo `agents: [...]` limita i subagenti invocabili ai soli 5 cappelli. Verificare che VS Code rispetti questo vincolo e non permetta al Blu di invocare altri agenti nel workspace.
Non ancora verificato dai test.
