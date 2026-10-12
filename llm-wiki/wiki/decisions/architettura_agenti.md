---
tipo: decision
data_creazione: 2026-07-02
data_aggiornamento: 2026-10-12
stato: parzialmente aperto
fonti_correlate: ["[[copilot_subagents_multiagente]]", "[[porting_claude_plugin]]", "[[allineamento_conferma_tipo_blu]]"]
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

**Regola allineata** ([[allineamento_conferma_tipo_blu]]): se il tipo non è chiaro il Blu propone Choosing Between Alternatives, ma attende comunque la conferma; se il problema cambia la chiede di nuovo. Nella skill Claude sono previste due eccezioni: l'utente ha già indicato il tipo (per esempio "/six-hats quick feedback: ..."), oppure nessuno può rispondere (sessione non presidiata). In questi casi il Blu procede e dichiara la scelta.

---

## ⏳ Campo `agents` esplicito nel frontmatter del Blu

**Decisione:** da verificare.

**Domanda aperta:** Il campo `agents: [...]` nel frontmatter del Cappello Blu dovrebbe limitare i subagenti invocabili ai soli 5 cappelli. Non ancora verificato se VS Code rispetti questo vincolo e impedisca al Blu di invocare altri agenti nel workspace.

---

## Porting su Claude

Decisioni validate per il porting del sistema su Claude come [[plugin_six_hats]]. Fonte: [[porting_claude_plugin]].

### ✅ Skill orchestratrice + 5 agenti, non skill unica

**Decisione:** plugin con la skill del Blu più gli agenti dichiarati.

**Motivazione:** con una skill unica i vincoli sui tool restano istruzioni e il cappello è un compito affidato a un agente generico. Con il plugin il file del cappello *è* il prompt di sistema, `tools` e `model` si dichiarano nel frontmatter, ed è 1:1 con `agents/*.agent.md`: porta su Claude le decisioni architetturali già validate su Copilot.

### ✅ Nessun fallback a skill unica

**Decisione:** se gli agenti non sono caricati, il Blu si ferma al controllo iniziale e dice quali mancano, invece di interpretare lui i cappelli.

**Motivazione:** rendere evidente cosa funziona davvero su ogni superficie.

### ✅ Conferma del tipo di attività sempre richiesta (anche su Claude)

**Decisione:** coerente con la decisione per Copilot (vedi sopra). Dalla v0.2.0 il Blu riconferma il tipo **quando il problema cambia** dopo l'apertura.

### ✅ Cappelli isolati (per ora)

**Decisione:** i cappelli lavorano solo sul contesto passato dal Blu, e il Blu costruisce quel contesto solo da ciò che l'utente ha detto in sessione. L'idea del "dual-me" (cappelli che conoscono l'utente) è rimandata. Vedi [[context_leak_memoria_subagenti]].

### ✅ Lingua, modello e metodologia

- Nomi e istruzioni in inglese, output in italiano; i template di output restano in italiano.
- `model: inherit` per tutti gli agenti: il campo `model` di Copilot (`Claude Sonnet 4.6 (copilot)`) non ha equivalente diretto.
- Metodologia integrata nel Blu da `docs/METODOLOGIA.md`: le sette sequenze con quando usarle, il controllo di adeguatezza, la checklist anti-pattern per l'arbitraggio e il controllo della sintesi.

### ✅ Tool su Claude

| Agente | Tool |
|---|---|
| white-hat | Read, Grep, Glob, WebSearch, WebFetch |
| yellow-hat | nessun tool |
| black-hat | Read, Grep, Glob |
| red-hat | nessun tool |
| green-hat | WebSearch, WebFetch |

> [!note] Campo `agents` su Claude
> Il campo `agents: [...]` del Blu non ha equivalente su Claude: la skill nomina esplicitamente i 5 agenti.

---

## Collegato a

- [[copilot_subagents_multiagente]] — analisi architetturale di partenza
- [[porting_claude_plugin]] — specifica del porting su Claude
- [[cappello_blu]] (agent) — coordinatore, unico `user-invocable: true`
