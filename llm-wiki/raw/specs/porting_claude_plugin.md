---
tipo: spec
data_creazione: 2026-10-12
stato: parzialmente chiuso
note: Porting del sistema 6 Cappelli da GitHub Copilot a Claude come plugin; decisioni prese e verifiche aperte
tags: [spec, porting, claude, plugin, agenti, decisioni-aperte]
---

# Porting su Claude — Plugin six-hats

Porting del sistema multi-agente dai custom agents di GitHub Copilot (`agents/*.agent.md`) a un **plugin Claude** in `claude-plugin/`, installabile dal marketplace del repo (`.claude-plugin/marketplace.json`).

---

## Architettura scelta

```
six-hats (skill, invocata dall'utente)   ← Cappello Blu, orchestratore
├── white-hat   agente → fatti e dati           [Read, Grep, Glob, WebSearch, WebFetch]
├── yellow-hat  agente → valore e opportunità   [nessun tool]
├── black-hat   agente → rischi                 [Read, Grep, Glob]
├── red-hat     agente → emozioni               [nessun tool]
└── green-hat   agente → creatività             [WebSearch, WebFetch]
```

Gli agenti compaiono nella sessione come `six-hats:<cappello>`, la skill come `six-hats:six-hats`.

---

## Decisioni

- [V] **Skill orchestratrice + 5 agenti, non skill unica.** Alternative valutate:
  - *Skill unica:* il Blu interpreta i cappelli in sequenza oppure li lancia come subagenti generici. Funziona ovunque, ma i vincoli sui tool restano istruzioni e il cappello è un compito affidato a un agente generico, non il suo prompt di sistema.
  - *Plugin:* skill del Blu più agenti dichiarati. Il file del cappello *è* il prompt di sistema, `tools` e `model` si dichiarano nel frontmatter, ed è 1:1 con `agents/*.agent.md`.

  Scelto il plugin: porta su Claude le decisioni architetturali già validate su Copilot.

- [V] **Nessun fallback a skill unica.** Se gli agenti non sono caricati, il Blu si ferma al controllo iniziale e dice quali mancano, invece di interpretare lui i cappelli. Motivazione: rendere evidente cosa funziona davvero su ogni superficie.

- [V] **Conferma del tipo di attività sempre richiesta**, in coerenza con la decisione già presa per Copilot. In più, dalla v0.2.0, il Blu riconferma il tipo **quando il problema cambia** dopo l'apertura.

- [V] **Cappelli isolati (per ora).** I cappelli lavorano solo sul contesto passato dal Blu, e il Blu costruisce quel contesto solo da ciò che l'utente ha detto in sessione. L'idea del "dual-me" (cappelli che conoscono l'utente) è rimandata a una fase successiva.

- [V] **Nomi e istruzioni in inglese, output in italiano**, per coerenza con le altre skill dell'utente. I template di output restano in italiano.

- [V] **`model: inherit`** per tutti gli agenti. Il campo `model` di Copilot (`Claude Sonnet 4.6 (copilot)`) non ha equivalente diretto.

- [V] **Metodologia integrata nel Blu** da `docs/METODOLOGIA.md`: le sette sequenze con quando usarle, il controllo di adeguatezza ("quando NON usare il metodo"), la checklist anti-pattern per l'arbitraggio e il controllo della sintesi ("come leggere l'output finale").

---

## Mappatura Copilot → Claude

| Copilot | Claude |
|---|---|
| `cappello-blu.agent.md`, `user-invocable: true` | skill `six-hats` |
| worker con `user-invocable: false` | agenti con descrizione "invocato solo dalla skill six-hats". Non si possono nascondere: compaiono nella lista degli agenti |
| `agents: [...]` nel Blu | nessun equivalente: la skill nomina esplicitamente i 5 agenti |
| `search/codebase`, `read/readFile`, `search` | `Read`, `Grep`, `Glob`, `WebSearch`, `WebFetch` |

---

## Scoperte tecniche

- **Gli esempi `<example>` nella descrizione rompono lo YAML** se scritti come nella guida ufficiale (testo multilinea non indentato). L'agente si carica lo stesso, ma **perde in silenzio `tools` e `model`**. Il Rosso avrebbe avuto tutti i tool. Soluzione: `description: |` con il testo indentato. Rilevato da `claude plugin validate`.
- **Gli agenti dei plugin funzionano solo in alcune superfici.** Vengono ignorati in chat (web, tab Chat dell'app desktop, mobile) e caricati in Cowork e Claude Code. La skill si carica ovunque. Fonte: [Plugin feature support across platforms](https://claude.com/docs/plugins/platform-support).
- **Non esiste un modo documentato per dare zero tool a un agente.** Se `tools` è omesso l'agente li eredita tutti. Con una lista vuota, la documentazione di Claude Code dice che l'agente "di solito non parte". Nella sessione cloud del 2026-10-12 invece `tools: []` ha funzionato: il Rosso è partito senza tool, anche se la lista agenti lo indicava come "All tools".
- **I subagenti vedono la memoria personale dell'utente.** La memoria viene iniettata dall'ambiente e nessun campo del frontmatter la spegne (`omitClaudeMd` riguarda solo CLAUDE.md, `memory` è un'altra cosa). L'isolamento è quindi garantito solo dalle istruzioni.
- **Due cappelli hanno proposto di "salvare in memoria"** le conclusioni, uscendo dal ruolo. Corretto in v0.2.0 con la regola "solo il blocco del cappello".

---

## Verifiche aperte

- [ ] **Claude Code**: gli agenti compaiono in `/agents`? `red-hat` e `yellow-hat` con `tools: []` partono o danno errore? Se danno errore, sostituire con un solo tool che non legge dati e non accede al web.
- [ ] **Chat semplice**: il Blu si ferma al controllo iniziale senza improvvisare i cappelli?
- [V] **v0.2.0 nella sessione agentica**: riconferma del tipo quando il problema cambia, nessun context leak, nessun output extra.
Verificato il 2026-10-12 con la sessione "impresa unica o più ditte" (vedi `sessions/2026-10-12_test_plugin_v020_ristrutturazione.md`): tutte e tre ok, anche con un tema ricco di dati in memoria.
- [ ] **v0.2.1 — alternative fuori dal Verde**: nella sessione v0.2.0 il Giallo ha introdotto un'opzione ibrida e il Blu non l'ha segnalato. Aggiunti in v0.2.1 il divieto nel Giallo e il controllo nell'arbitraggio del Blu. Da ritestare.
- [ ] **Arbitraggio con rilancio**: nel primo test nessun cappello è uscito dal ruolo, quindi il rilancio di un cappello non è ancora stato provato.
- [ ] **Sessioni agentiche già aperte**: in altre sessioni l'utente non è riuscito a far partire gli agenti. Va chiarito se dipende dal fatto che le sessioni erano state aperte prima dell'installazione o dal tipo di sessione.
- [ ] **Dual-me**: progettare la variante con cappelli che usano la memoria e segnalano ogni fatto preso da lì (es. *(da memoria)*).
