---
tipo: entity
data_creazione: 2026-10-12
data_aggiornamento: 2026-10-12
fonti_correlate: ["[[test_plugin_claude_homelab]]", "[[porting_claude_plugin]]", "[[test_plugin_v020_ristrutturazione]]"]
tags: [entity, plugin, claude, agenti, implementazione]
---

# Plugin six-hats (Claude)

Implementazione del sistema multi-agente 6 Cappelli come **plugin Claude**, installabile dal marketplace GitHub del repo. Il [[cappello_blu]] (agent) orchestra; gli altri cappelli girano come subagenti reali.

---

## Architettura

Porting dai custom agents di GitHub Copilot (`agents/*.agent.md`) a un plugin in `claude-plugin/`, installabile dal marketplace del repo (`.claude-plugin/marketplace.json`). Fonte: [[porting_claude_plugin]].

```
six-hats (skill, invocata dall'utente)   ← Cappello Blu, orchestratore
├── white-hat   agente → fatti e dati           [Read, Grep, Glob, WebSearch, WebFetch]
├── yellow-hat  agente → valore e opportunità   [nessun tool]
├── black-hat   agente → rischi                 [Read, Grep, Glob]
├── red-hat     agente → emozioni               [nessun tool]
└── green-hat   agente → creatività             [WebSearch, WebFetch]
```

Gli agenti compaiono nella sessione come `six-hats:<cappello>`, la skill come `six-hats:six-hats`. Tutti gli agenti usano `model: inherit`. Nomi e istruzioni in inglese, output in italiano.

### Mappatura Copilot → Claude

| Copilot | Claude |
|---|---|
| `cappello-blu.agent.md`, `user-invocable: true` | skill `six-hats` |
| worker con `user-invocable: false` | agenti con descrizione "invocato solo dalla skill six-hats". Non si possono nascondere: compaiono nella lista degli agenti |
| `agents: [...]` nel Blu | nessun equivalente: la skill nomina esplicitamente i 5 agenti |
| `search/codebase`, `read/readFile`, `search` | `Read`, `Grep`, `Glob`, `WebSearch`, `WebFetch` |

Le decisioni del porting sono archiviate in [[architettura_agenti]].

---

## Supporto per superficie

Gli agenti dei plugin vengono ignorati in chat (web, tab Chat dell'app desktop, mobile) e caricati in Cowork e Claude Code; la skill si carica ovunque. Fonte citata dalla spec: [Plugin feature support across platforms](https://claude.com/docs/plugins/platform-support). Senza agenti il Blu si ferma al controllo iniziale (nessun fallback a skill unica).

---

## Versioni

### v0.1.0

Prima versione usata in una sessione reale ([[test_plugin_claude_homelab]], sessione agentica cloud di Claude collegata al Mac tramite app desktop).

**Ha funzionato:**
- Il controllo iniziale ha trovato i 5 agenti come `six-hats:<cappello>`.
- Ogni cappello è stato eseguito come subagente reale, in sequenza, con il passaggio di contesto previsto.
- I tool dichiarati sono stati rispettati (il Bianco ha cercato sul web, il Giallo e il Rosso no).
- Nessuno sconfinamento di ruolo; il controllo di adeguatezza ha intercettato una domanda troppo generica.

**Problemi emersi:**
- **Context leak** dalla memoria dell'utente → [[context_leak_memoria_subagenti]].
- **Output extra:** Giallo e Nero hanno proposto di "salvare in memoria".
- **Riconferma mancata** del tipo di attività quando il problema è cambiato.

### v0.2.0

Corregge i tre problemi della v0.1.0: isolamento per istruzione, regola "solo il blocco del cappello", riconferma quando cambia il problema, controlli "Context leak" ed "Extra output" nell'arbitraggio del Blu.

**Verifica** ([[test_plugin_v020_ristrutturazione]], tema scelto come esca per la memoria):

| Verifica | Esito |
|---|---|
| Riconferma del tipo quando il problema cambia | ✅ |
| Isolamento: nessun fatto personale preso dalla memoria | ✅ |
| Output pulito: nessuna proposta di salvataggio e nessuna nota in coda | ✅ |
| Cappelli nel ruolo | ✅ Bianco, Nero e Rosso. ⚠️ Il Giallo ha introdotto un'alternativa nuova (ibrida). |
| Arbitraggio del Blu | ⚠️ Non ha segnalato lo sconfinamento del Giallo. |

### v0.2.1

Corregge gli sconfinamenti emersi nella verifica della v0.2.0 ([[test_plugin_v020_ristrutturazione]]):
- Nel Giallo: divieto di introdurre nuove alternative. Al massimo può segnalarne una in una riga, come domanda per il Blu.
- Nel Blu: voce di arbitraggio "New alternatives outside Green". Il Blu chiede all'utente se aggiungere l'opzione prima di proseguire.

Stato: da ritestare.

---

## Osservazioni sui tool

- **YAML e `<example>`:** gli esempi `<example>` nella descrizione, scritti come nella guida ufficiale (testo multilinea non indentato), rompono lo YAML: l'agente si carica lo stesso ma perde in silenzio `tools` e `model`. Soluzione: `description: |` con il testo indentato. Rilevato da `claude plugin validate` ([[porting_claude_plugin]]).
- **Zero tool:** non esiste un modo documentato per dare zero tool a un agente. Se `tools` è omesso l'agente li eredita tutti; con una lista vuota la documentazione di Claude Code dice che l'agente "di solito non parte". Nella sessione cloud del 2026-10-12 invece `tools: []` ha funzionato ([[porting_claude_plugin]]).
- Test preliminare sul [[cappello_rosso]] (agent), invocato fuori da una sessione per verificare `tools: []`: ha riportato di avere solo il tool interno per restituire la risposta e di non aver potuto leggere un file. La lista agenti lo indicava invece come "All tools".

---

## Verifiche aperte

Dalla spec [[porting_claude_plugin]]:

- [ ] **Claude Code:** gli agenti compaiono in `/agents`? `red-hat` e `yellow-hat` con `tools: []` partono o danno errore? Se danno errore, sostituire con un solo tool che non legge dati e non accede al web.
- [ ] **Chat semplice:** il Blu si ferma al controllo iniziale senza improvvisare i cappelli?
- [x] **v0.2.0 nella sessione agentica:** riconferma del tipo quando il problema cambia, nessun context leak, nessun output extra. Verificato il 2026-10-12 con la sessione "impresa unica o più ditte" ([[test_plugin_v020_ristrutturazione]]).
- [ ] **v0.2.1 — alternative fuori dal Verde:** aggiunti il divieto nel Giallo e il controllo nell'arbitraggio del Blu. Da ritestare.
- [ ] **Arbitraggio con rilancio:** il rilancio di un cappello non è ancora stato provato.
- [ ] **Sessioni agentiche già aperte:** in altre sessioni gli agenti non sono partiti; da chiarire se dipende dall'apertura prima dell'installazione o dal tipo di sessione.
- [ ] **Dual-me:** progettare la variante con cappelli che usano la memoria e segnalano ogni fatto preso da lì (es. *(da memoria)*).

---

## Collegato a

- [[porting_claude_plugin]] — specifica del porting

- [[architettura_agenti]] — decisioni architetturali del sistema
- [[dominio_progetto_homelab]] — decisione presa nella prima sessione di test
- [[impresa_unica_o_piu_ditte]] — decisione presa nella sessione di verifica della v0.2.0
