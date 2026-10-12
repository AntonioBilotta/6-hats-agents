---
tipo: problem
data_creazione: 2026-10-12
data_aggiornamento: 2026-10-12
stato: mitigato (v0.2.0 verificata)
fonti_correlate: ["[[test_plugin_claude_homelab]]", "[[porting_claude_plugin]]", "[[test_plugin_v020_ristrutturazione]]"]
tags: [problem, plugin-claude, isolamento, memoria, subagenti]
---

# Problema — Context leak della memoria nei subagenti

**Stato:** mitigato — la correzione della v0.2.0 del [[plugin_six_hats]] è stata verificata in [[test_plugin_v020_ristrutturazione]]. Resta aperta un'osservazione minore (vedi sotto). L'isolamento resta garantito solo dalle istruzioni.

---

## Descrizione

Nella prima sessione reale del plugin ([[test_plugin_claude_homelab]]), Giallo, Nero e Bianco hanno usato fatti personali che non erano nel loro prompt (progetti di lavoro, pratica del contatore, CILA).

**Causa:** i subagenti ricevono la memoria dell'utente dall'ambiente.

**Perché non si spegne da configurazione** ([[porting_claude_plugin]]): la memoria viene iniettata dall'ambiente e nessun campo del frontmatter la spegne (`omitClaudeMd` riguarda solo CLAUDE.md, `memory` è un'altra cosa). L'isolamento è quindi garantito solo dalle istruzioni.

**Scelta di progetto:** cappelli isolati per ora; il "dual-me" (cappelli che usano la memoria e segnalano ogni fatto preso da lì, es. *(da memoria)*) è rimandato a una fase successiva.

**Effetto collegato:** Giallo e Nero hanno anche aggiunto in coda proposte di "salvare in memoria", che il [[cappello_blu]] (agent) ha dovuto togliere.

---

## Correzione (v0.2.0)

- Isolamento per istruzione.
- Regola "solo il blocco del cappello".
- Controlli "Context leak" ed "Extra output" nell'arbitraggio del Blu.

---

## Verifica (v0.2.0)

Sessione [[test_plugin_v020_ristrutturazione]], con un tema scelto apposta come **esca per la memoria** (la ristrutturazione, su cui la memoria dell'utente contiene molti dettagli non scritti nel prompt):

- ✅ Nessun fatto personale preso dalla memoria: CILA e bonus compaiono solo come informazioni generali sul tema, mai come fatti dell'utente. Le lacune sono state trasformate in domande.
- ✅ Nessuna proposta di salvataggio e nessuna nota in coda.

> [!note] Osservazione aperta
> Tra i dettagli suggeriti dal Blu in apertura ci sono "presenza di un tecnico" e "bonus fiscali": domande generiche e pertinenti, che però coincidono con dati presenti in memoria. Non è un leak, perché non afferma nulla; resta da capire se la memoria orienti le domande.

---

## Collegato a

- [[plugin_six_hats]]
- [[dominio_progetto_homelab]]
- [[impresa_unica_o_piu_ditte]]
