---
tipo: source
data_creazione: 2026-10-12
data_aggiornamento: 2026-10-12
fonti_correlate: ["[[test_plugin_claude_homelab]]", "[[porting_claude_plugin]]"]
tags: [source, session, test, plugin-claude, choosing-between-alternatives, isolamento]
---

# Sessione di test v0.2.0: impresa unica o più ditte

- **Provenance**: `raw/sessions/2026-10-12_test_plugin_v020_ristrutturazione.md`
- **Date**: 2026-10-12

**Tipo sorgente:** trascrizione di sessione 6-hat (`raw/sessions/`)
**Superficie:** sessione agentica di Claude (nuova sessione dopo l'aggiornamento dal marketplace)
**Versione plugin:** six-hats 0.2.0
**Sequenza:** Choosing Between Alternatives (Bianco → Giallo → Nero → Rosso)

---

## Riassunto

Seconda sessione di test del [[plugin_six_hats]], mirata a verificare le tre correzioni della v0.2.0: riconferma del tipo, isolamento dei cappelli e output pulito. Il tema (ristrutturazione di casa) è stato scelto apposta come **esca per la memoria**: un argomento su cui la memoria dell'utente contiene molti dettagli, senza scriverne nessuno nel prompt. L'esito della decisione è archiviato in [[impresa_unica_o_piu_ditte]].

---

## Punti chiave

- **Riconferma del tipo ✅:** al cambio di problema prima della conferma il Blu ha scritto "Il problema è cambiato, quindi la conferma di prima non vale più" e ha chiesto una nuova conferma.
- **Isolamento ✅:** nessun fatto personale preso dalla memoria; CILA e bonus compaiono solo come informazioni generali sul tema. Il Bianco dichiara: "Non sono stati forniti lavori previsti, importo, titolo edilizio, presenza di un tecnico, bonus richiesti né preventivi".
- **Output pulito ✅:** nessuna proposta di salvataggio e nessuna nota in coda.
- **Sconfinamento del Giallo ⚠️:** ha proposto una *soluzione ibrida*, cioè una nuova alternativa, che è compito del Verde.
- **Arbitraggio del Blu ⚠️:** non ha segnalato lo sconfinamento, e la sessione ha poi trattato "tre opzioni" invece delle due poste dall'utente.
- **Osservazione minore:** tra i dettagli suggeriti dal Blu in apertura ("presenza di un tecnico", "bonus fiscali") ci sono dati che coincidono con la memoria. Non è un leak, ma resta da capire se la memoria orienti le domande.
- **Correzione in v0.2.1:** divieto nel Giallo di introdurre nuove alternative (al massimo una riga come domanda per il Blu) e voce di arbitraggio "New alternatives outside Green" nel Blu.

---

## Entità e concetti toccati

- [[plugin_six_hats]] — versione 0.2.0 e correzioni v0.2.1
- [[impresa_unica_o_piu_ditte]] — decisione presa nella sessione
- [[context_leak_memoria_subagenti]] — verifica dell'isolamento
- [[cappello_blu]] (agent), [[cappello_bianco]] (agent), [[cappello_giallo]] (agent), [[cappello_nero]] (agent), [[cappello_rosso]] (agent), [[cappello_verde]]
- [[sequenze_per_obiettivo]] — sequenza Choosing Between Alternatives
