---
tipo: overview
data_creazione: 2026-06-30
data_aggiornamento: 2026-10-12
fonti_correlate: []
tags: []
---

# Overview — Workflow Multi-Agente — 6 Cappelli per il Pensiero

> [!note] Come usare questo wiki
> 1. **Ingest** — aggiungi una sorgente in `raw/` e chiedi al LLM di ingestarla: leggerà, discuterà i punti chiave con te e aggiornerà il wiki.
> 2. **Query** — fai una domanda: il LLM legge l'index, recupera le pagine rilevanti e sintetizza una risposta con citazioni. Le risposte ricche vengono archiviate in `wiki/analysis/`.
> 3. **Lint** — chiedi una passata di manutenzione: il LLM individua contraddizioni, pagine orfane, cross-reference mancanti e gap di conoscenza.
> 4. **Evoluzione schema** — se la struttura del wiki non si adatta più al dominio, aggiorna `.github/copilot-instructions.md` e documenta il cambiamento nel `log.md`.

---

## Stato della conoscenza

| Categoria | Conteggio |
|-----------|-----------|
| Sorgenti ingеstate | 11 |
| Pagine cappelli (hats/) | 6 |
| Pagine agenti (agents/) | 6 |
| Pagine workflow (workflows/) | 1 |
| Problemi tracciati (problems/) | 1 |
| Decisioni archiviate (decisions/) | 3 |
| Pagine entità (entities/) | 2 |
| Pagine concetti (concepts/) | 3 |
| Analisi archiviate (analysis/) | 2 |

---

## Descrizione del progetto

Progettazione e sviluppo di un sistema di **problem solving e decision making multi-agente** basato sul metodo dei **6 Cappelli per il Pensiero** di Edward de Bono.

Il sistema prevede sei agenti AI, ciascuno incarnante un cappello diverso, orchestrati da un agente facilitatore (Cappello Blu). Ogni agente apporta una prospettiva distinta e separata al problema, evitando il pensiero confuso che nasce dal mescolare logica, emozione, critica e creatività nello stesso momento.

---

## I 6 Cappelli — Panoramica

| Cappello | Colore | Ruolo | Focus |
|----------|--------|-------|-------|
| [[cappello_bianco]] | 🤍 Bianco | Detective dei dati | Fatti, dati, informazioni oggettive. Zero opinioni. |
| [[cappello_rosso]] | ❤️ Rosso | Smascheratore dell'intuizione | Sentimenti, intuizioni, reazioni emotive degli stakeholder |
| [[cappello_giallo]] | 💛 Giallo | Cacciatore di valore | Benefici, ottimismo logico, scenario migliore |
| [[cappello_nero]] | 🖤 Nero | Architetto del rischio | Rischi, punti di fallimento, cautela costruttiva |
| [[cappello_verde]] | 💚 Verde | Catalizzatore della crescita | Alternative non convenzionali, [[pensiero_laterale]] |
| [[cappello_blu]] | 💙 Blu | Direttore d'orchestra | Processo, sequenza, meta-pensiero, sintesi finale |

---

## Agenti AI definiti

Sei agenti definiti in `wiki/agents/`: [[cappello_blu]] (agent, coordinatore), [[cappello_bianco]], [[cappello_rosso]], [[cappello_giallo]], [[cappello_nero]], [[cappello_verde]] (worker). Su Claude il Blu diventa la skill `six-hats` e i cinque worker gli agenti `white-hat`, `yellow-hat`, `black-hat`, `red-hat`, `green-hat` del [[plugin_six_hats]] (fonte: [[porting_claude_plugin]]).

---

## Workflow attivi

| Workflow | Descrizione |
|----------|-------------|
| [[full_spectrum]] | Simulazione completa di tutti i cappelli in sequenza — per decisioni importanti |

---

## Problemi / Decisioni in corso

| Pagina | Tipo | Stato |
|--------|------|-------|
| [[dominio_progetto_homelab]] | decisione | raccomandazione (non definitiva) — prima sessione reale del [[plugin_six_hats]] |
| [[impresa_unica_o_piu_ditte]] | decisione | raccomandazione condizionata — sessione di verifica della v0.2.0 |
| [[context_leak_memoria_subagenti]] | problema | mitigato — v0.2.0 verificata, osservazione minore aperta |

---

## Architettura del sistema

**Piattaforma target:** GitHub Copilot Chat (VS Code) con supporto Copilot CLI per esecuzione autonoma.

**Pattern di orchestrazione:** Coordinator + Worker via subagenti. Il [[cappello_blu]] è il coordinatore; gli altri cinque cappelli sono worker con `user-invocable: false` (accessibili solo tramite Blu).

**Formato agenti:** file `.agent.md` in `.github/agents/` — compatibili sia con Chat view (subagents) che con Copilot CLI.

**Isolation mode per CLI:** Folder isolation (scrittura diretta in `wiki/decisions/`).

**Seconda piattaforma — Claude:** il sistema è stato portato su Claude come [[plugin_six_hats]] in `claude-plugin/`, installabile dal marketplace del repo: skill orchestratrice `six-hats` (Blu) + 5 agenti dichiarati, nessun fallback a skill unica, cappelli isolati dalla memoria dell'utente per istruzione. Gli agenti dei plugin sono caricati in Cowork e Claude Code, ignorati in chat. Vedi [[porting_claude_plugin]] e [[architettura_agenti]].

Vedi [[copilot_cli_vscode]] per i dettagli tecnici della piattaforma. I dettagli di implementazione degli agenti andranno in `wiki/agents/` dopo ingest delle specifiche da `raw/specs/`.

---

## Applicazioni del metodo

Uso documentato dal De Bono Group (con ROI misurabile in aziende worldwide):

- Leadership Development
- Produttività del team, allineamento e comunicazione
- Pensiero creativo e innovativo
- Leadership nelle riunioni e decision making
- Miglioramento prodotti/processi e project management
- Pensiero critico, analitico e problem solving
- Cambiamento organizzativo e performance

Vedi [[benefici_e_applicazioni]] per l'elenco completo dei 15 benefici.

---

## Decisioni architetturali aperte

Dalla spec [[porting_claude_plugin]] (elenco completo in [[plugin_six_hats]]):

- Agenti in Claude Code: compaiono in `/agents`? Gli agenti con `tools: []` partono?
- Chat semplice: il Blu si ferma al controllo iniziale senza improvvisare i cappelli?
- v0.2.1: divieto di nuove alternative nel Giallo e controllo "New alternatives outside Green" nel Blu, da ritestare ([[test_plugin_v020_ristrutturazione]]).
- Arbitraggio con rilancio di un cappello, non ancora provato.
- Sessioni agentiche già aperte in cui gli agenti non sono partiti.
- Dual-me: variante con cappelli che usano la memoria.
- Su Copilot: campo `agents` esplicito nel frontmatter del Blu (vedi [[architettura_agenti]]).

---

## Requisiti di alto livello

*Da specificare. Aggiungi i requisiti in `raw/specs/` e ingestali.*
