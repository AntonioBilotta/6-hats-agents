---
tipo: overview
data_creazione: 2026-06-30
data_aggiornamento: 2026-07-02
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
| Sorgenti ingеstate | 7 |
| Pagine cappelli (hats/) | 6 |
| Pagine agenti (agents/) | 0 |
| Pagine workflow (workflows/) | 1 |
| Problemi tracciati (problems/) | 0 |
| Decisioni archiviate (decisions/) | 0 |
| Pagine entità (entities/) | 1 |
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

*Nessun agente definito ancora in `wiki/agents/`.* I file `.agent.md` operativi saranno posizionati in `.github/agents/` per essere accessibili sia da Chat view che da Copilot CLI. Aggiungi le specifiche in `raw/specs/` e ingestale per avviare la definizione formale.

---

## Workflow attivi

| Workflow | Descrizione |
|----------|-------------|
| [[full_spectrum]] | Simulazione completa di tutti i cappelli in sequenza — per decisioni importanti |

---

## Problemi / Decisioni in corso

*Nessun problema aperto. Avvia una sessione aggiungendo un file in `raw/sessions/`.*

---

## Architettura del sistema

**Piattaforma target:** GitHub Copilot Chat (VS Code) con supporto Copilot CLI per esecuzione autonoma.

**Pattern di orchestrazione:** Coordinator + Worker via subagenti. Il [[cappello_blu]] è il coordinatore; gli altri cinque cappelli sono worker con `user-invocable: false` (accessibili solo tramite Blu).

**Formato agenti:** file `.agent.md` in `.github/agents/` — compatibili sia con Chat view (subagents) che con Copilot CLI.

**Isolation mode per CLI:** Folder isolation (scrittura diretta in `wiki/decisions/`).

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

*Nessuna decisione aperta registrata.*

---

## Requisiti di alto livello

*Da specificare. Aggiungi i requisiti in `raw/specs/` e ingestali.*
