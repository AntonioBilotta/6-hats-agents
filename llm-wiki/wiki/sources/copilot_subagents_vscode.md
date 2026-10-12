---
tipo: source
data_creazione: 2026-07-02
data_aggiornamento: 2026-10-12
fonti_correlate: ["[[copilot_custom_agents_vscode]]", "[[copilot_cli_vscode]]"]
tags: [source, copilot, subagents, vscode, implementazione, orchestrazione]
---

# Subagents in Visual Studio Code

- **Provenance**: `raw/references/Subagents in Visual Studio Code.md`

**Provenienza:** Documentazione ufficiale Microsoft VS Code
**URL:** https://code.visualstudio.com/docs/agents/subagents
**Data clip:** 2026-07-02

---

## Riassunto

I subagenti in VS Code permettono a un agente coordinatore di delegare subtask a worker con contesto isolato. È il meccanismo che implementa il pattern **Coordinator + Worker** — essenziale per il workflow 6 cappelli: il [[cappello_blu]] coordina, i cappelli-worker eseguono in sequenza ognuno nel proprio contesto separato.

---

## Punti chiave

### Meccanismo di invocazione

I subagenti sono **agent-initiated** (non invocati direttamente dall'utente):

1. L'utente descrive il task al coordinatore (Cappello Blu)
2. Il coordinatore passa al subagente solo il subtask rilevante
3. Il subagente lavora nel proprio contesto isolato e restituisce un summary
4. Il coordinatore incorpora il risultato e invoca il subagente successivo

> [!important] Prerequisito tecnico
> Il tool `agent/runSubagent` deve essere abilitato nel coordinatore. Si attiva includendo `'agent'` nella lista `tools` del frontmatter del Cappello Blu.

### Pattern Coordinator + Worker — schema per i 6 cappelli

```markdown
---
name: Cappello Blu
tools: ['agent', 'edit', 'read']
agents: ['Cappello Bianco', 'Cappello Verde', 'Cappello Giallo', 'Cappello Nero', 'Cappello Rosso']
---
Sei il Cappello Blu, orchestratore del metodo 6 cappelli...
```

```markdown
---
name: Cappello Bianco
user-invocable: false
tools: ['search', 'read']
---
Sei il Cappello Bianco. Fornisci solo fatti oggettivi...
```

Specificare esplicitamente `agents` sul coordinatore serve a:
- Impedire che il Blu invochi agenti non previsti
- Garantire la sequenza corretta dei cappelli
- Proteggere cappelli con `disable-model-invocation: true` (se usato) da invocazioni non autorizzate

### Isolamento del contesto — implementazione del Parallel Thinking

Ogni subagente ha il suo **contesto separato**. Questo è strutturalmente coerente con il [[parallel_thinking]] di De Bono: ogni cappello vede solo il summary che il Blu gli passa, non il ragionamento degli altri cappelli durante la loro fase. L'isolamento non è solo metodologico — è architetturale.

### Esecuzione sequenziale vs parallela

La documentazione mostra entrambe le modalità:
- **Parallela**: code review multi-prospettiva (es. sicurezza + performance + accessibilità in parallelo)
- **Sequenziale**: TDD (Red → Green → Refactor), o per i 6 cappelli

> [!important] Per il progetto
> I 6 cappelli devono essere invocati **in sequenza**, non in parallelo. Ogni cappello riceve il summary dei cappelli precedenti (passato dal Blu). L'esecuzione parallela violerebbe il principio del Parallel Thinking. Vedi [[parallel_thinking]].

### Selezione del modello per subagente

Priorità applicata automaticamente:
1. Parametro esplicito all'invocazione
2. Campo `model` nel `.agent.md` del subagente
3. Modello della sessione principale

**Vincolo**: il subagente non può usare un modello di costo superiore al modello principale.

> [!note] Ottimizzazione possibile
> I cappelli-worker con task semplici (es. Rosso — 30 secondi di intuizione viscerale) possono usare un modello più veloce/economico rispetto al Blu coordinatore, specificando `model` nel loro frontmatter.

### Visibilità in chat

Ogni subagente appare come un tool call **collassabile** in chat. L'utente può espandere per vedere:
- Tutti i tool call interni al subagente
- Il prompt passato al subagente dal coordinatore
- Il risultato restituito
- I crediti AI consumati

### Nested subagents

Disabilitati per default (`chat.subagents.allowInvocationsFromSubagents = false`). Max profondità: 5.

> [!note] Non necessari per il progetto
> Il workflow 6 cappelli non richiede nested subagents. Il Cappello Blu invoca i cappelli come subagenti di primo livello — non servono livelli aggiuntivi.

---

## Elementi del dominio toccati

- **Workflow:** [[full_spectrum]] — architettura Coordinator+Worker come implementazione tecnica
- **Concetti:** [[parallel_thinking]] — i subagenti implementano strutturalmente l'isolamento delle prospettive
- **Agenti:** [[cappello_blu]] — coordinatore con `tools: ['agent']` e `agents: [...]`
