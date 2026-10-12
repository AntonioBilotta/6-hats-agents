---
tipo: agent
data_creazione: 2026-07-02
data_aggiornamento: 2026-10-12
cappello_correlato: "[[cappello_blu]]"
fonti_correlate: ["[[copilot_custom_agents_vscode]]", "[[copilot_subagents_multiagente]]", "[[test_plugin_claude_homelab]]", "[[porting_claude_plugin]]", "[[test_plugin_v020_ristrutturazione]]", "[[allineamento_conferma_tipo_blu]]"]
file_tecnico: ".github/agents/cappello_blu.agent.md"
tags: [agent, cappello-blu, coordinatore, orchestratore, user-invocable]
---

# 💙 Agente Cappello Blu — Direttore d'Orchestra

**Ruolo:** Coordinatore (user-invocable)
**File tecnico:** `.github/agents/cappello_blu.agent.md`
**Invocazione:** `@Cappello Blu` — unico agente visibile all'utente

---

## Frontmatter tecnico

```yaml
name: Cappello Blu
description: "Avvia una sessione 6 Cappelli — descrivi il tuo problema o decisione"
tools: ['agent', 'edit', 'read']
agents: ['Cappello Bianco', 'Cappello Verde', 'Cappello Giallo', 'Cappello Nero', 'Cappello Rosso']
user-invocable: true
```

---

## Ruolo nel workflow

Il Cappello Blu è il **Coordinatore** del pattern Coordinator + Worker: l'unico agente invocato direttamente dall'utente. Non produce analisi di contenuto — gestisce struttura, sequenza e sintesi dell'intera sessione. Invoca gli altri 5 cappelli come subagenti nell'ordine pianificato, uno alla volta.

---

## Fase 1 — Apertura

1. **Riformula** il problema in modo sintetico e verificabile.
2. **Classifica** il tipo di attività e seleziona la sequenza cappelli.
3. **Produce** l'output di apertura strutturato.

### Sequenze per tipo di attività

| Tipo | Sequenza cappelli-worker |
|------|--------------------------|
| Initial Ideas | Bianco → Verde |
| Choosing Between Alternatives | Bianco → Giallo → Nero → Rosso |
| Identifying Solutions | Bianco → Nero → Verde |
| Quick Feedback | Nero → Verde |
| Solving Problems | Bianco → Verde → Rosso → Giallo → Nero → Verde |
| Strategic Planning | Giallo → Nero → Bianco → Verde |
| Performance Review | Rosso → Bianco → Giallo → Nero → Verde |

> **Conferma sempre richiesta:** il Blu chiede all'utente di confermare il tipo prima di invocare i worker. Se il tipo non è chiaro propone **Choosing Between Alternatives**, ma attende comunque la conferma: niente default silenziosi. Se il problema cambia, riformula e chiede di nuovo la conferma. Fonte: [[allineamento_conferma_tipo_blu]].

> [!warning] Stale: questa pagina riportava "Default se il tipo non è chiaro: Choosing Between Alternatives". La regola è superata da [[allineamento_conferma_tipo_blu]], in coerenza con [[architettura_agenti]] e [[porting_claude_plugin]].

---

## Fase 2 — Orchestrazione

Per ogni cappello nella sequenza:
- Invoca il worker con: descrizione del problema + sintesi del contesto accumulato.
- Al termine di ogni contributo, scrive una frase di transizione.
- **Arbitraggio:** se un worker esce dal suo ruolo, interrompe, segnala lo sconfinamento e riformula il task prima di reinvocarlo.

---

## Fase 3 — Chiusura

Sintesi finale che bilancia rischi (Nero) con opportunità (Giallo + Verde), tiene conto della reazione viscerale (Rosso) e definisce **3 prossimi passi attuabili**.

---

## Output di apertura (template)

```
## 💙 Cappello Blu — Apertura

**Problema:** [riformulazione sintetica]
**Tipo di attività:** [classificazione]
**Sequenza scelta:** [cappelli in ordine con →]
**Motivazione:** [1-2 frasi]
```

## Output di chiusura (template)

```
## 💙 Cappello Blu — Sintesi finale

**Raccomandazione:** [direzione o decisione raccomandata]
**Bilanciamento rischi/opportunità:** [come i contributi si integrano]

**Prossimi 3 passi:**
1. ...
2. ...
3. ...
```

---

## Porting su Claude

Nel [[plugin_six_hats]] il Blu non è un agente ma la **skill `six-hats`** (in sessione `six-hats:six-hats`), invocata dall'utente. Fonte: [[porting_claude_plugin]].

- Il campo `agents: [...]` non ha equivalente: la skill nomina esplicitamente i 5 agenti.
- **Nessun fallback a skill unica:** se gli agenti non sono caricati, si ferma al controllo iniziale e dice quali mancano.
- **Conferma del tipo sempre richiesta**; dalla v0.2.0 riconferma il tipo quando il problema cambia dopo l'apertura.
- Costruisce il contesto per i cappelli solo da ciò che l'utente ha detto in sessione (cappelli isolati).
- Metodologia integrata da `docs/METODOLOGIA.md`: le sette sequenze con quando usarle, il controllo di adeguatezza ("quando NON usare il metodo"), la checklist anti-pattern per l'arbitraggio e il controllo della sintesi ("come leggere l'output finale").

---

## Comportamento osservato su Claude

- [[test_plugin_claude_homelab]] (v0.1.0): il controllo di adeguatezza ha intercettato una domanda troppo generica ("monolith o microservizi") e ha portato a riformularla su un caso reale. Nell'arbitraggio nessun cappello è uscito dal ruolo.
- [[test_plugin_claude_homelab]] (v0.1.0): quando il problema è cambiato, il Blu è partito **senza chiedere una nuova conferma** del tipo di attività. Ha inoltre dovuto togliere dagli output di Giallo e Nero le proposte di "salvare in memoria".
- Correzioni in v0.2.0: riconferma quando cambia il problema, controlli "Context leak" ed "Extra output" nell'arbitraggio (vedi [[plugin_six_hats]], [[context_leak_memoria_subagenti]]).
- [[test_plugin_v020_ristrutturazione]] (v0.2.0): al cambio di problema prima della conferma ha scritto "Il problema è cambiato, quindi la conferma di prima non vale più" e ha chiesto una nuova conferma ✅. In apertura ha detto che i cappelli avrebbero usato solo ciò che è scritto nella sessione.
- [[test_plugin_v020_ristrutturazione]] (v0.2.0): **non ha segnalato lo sconfinamento del Giallo** (alternativa ibrida), e la sessione ha poi trattato "tre opzioni" invece delle due poste dall'utente. Correzione in v0.2.1: voce di arbitraggio "New alternatives outside Green" — il Blu chiede all'utente se aggiungere l'opzione prima di proseguire. Da ritestare.
