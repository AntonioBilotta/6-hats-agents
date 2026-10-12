---
tipo: source
data_creazione: 2026-10-12
data_aggiornamento: 2026-10-12
fonti_correlate: []
tags: [source, session, test, plugin-claude, choosing-between-alternatives]
---

# Sessione di test — plugin six-hats su Claude

- **Provenance**: `raw/sessions/2026-10-12_test_plugin_claude_homelab.md`
- **Date**: 2026-10-12

**Tipo sorgente:** trascrizione di sessione 6-hat (`raw/sessions/`)
**Superficie:** sessione agentica cloud di Claude (collegata al Mac tramite app desktop)
**Versione plugin:** six-hats 0.1.0
**Sequenza:** Choosing Between Alternatives (Bianco → Giallo → Nero → Rosso)

---

## Riassunto

Prima sessione reale del [[plugin_six_hats]] dopo l'installazione dal marketplace GitHub, con doppio scopo: verificare il funzionamento del plugin e prendere una decisione vera. La domanda iniziale ("monolith o microservizi") è stata riformulata dal Blu su un caso reale: quale di tre varianti scegliere come dominio per un progetto da home lab in .NET 10 modular monolith. L'esito della decisione è archiviato in [[dominio_progetto_homelab]].

---

## Punti chiave

- Il controllo di adeguatezza del [[cappello_blu]] (agent) ha intercettato una domanda troppo generica e ha portato a riformularla su un progetto reale.
- Il controllo iniziale ha trovato i 5 agenti come `six-hats:<cappello>`; ogni cappello è stato eseguito come subagente reale, in sequenza, con il passaggio di contesto previsto (il Nero ha ricevuto il Giallo, il Rosso il piano emerso).
- I tool sono stati rispettati: il Bianco ha cercato sul web (10 tool use), il Giallo e il Rosso no. Nessuno sconfinamento di ruolo.
- **Context leak:** Giallo, Nero e Bianco hanno usato fatti personali che non erano nel loro prompt, perché i subagenti ricevono la memoria dell'utente dall'ambiente → [[context_leak_memoria_subagenti]].
- **Output extra:** Giallo e Nero hanno aggiunto in coda proposte di "salvare in memoria", poi rimosse dal Blu.
- **Riconferma mancata:** quando il problema è cambiato, il Blu è partito senza chiedere una nuova conferma del tipo di attività.
- Tutti e tre i problemi sono stati corretti in v0.2.0: isolamento per istruzione, regola "solo il blocco del cappello", riconferma quando cambia il problema, controlli "Context leak" ed "Extra output" nell'arbitraggio.
- **Test preliminare sul Rosso:** invocato fuori da una sessione per verificare `tools: []`, ha riportato di avere solo il tool interno per restituire la risposta; la lista agenti lo indicava invece come "All tools".

---

## Entità e concetti toccati

- [[plugin_six_hats]] — plugin Claude in versione 0.1.0
- [[dominio_progetto_homelab]] — decisione presa nella sessione
- [[context_leak_memoria_subagenti]] — problema emerso
- [[cappello_blu]] (agent), [[cappello_bianco]] (agent), [[cappello_giallo]] (agent), [[cappello_nero]] (agent), [[cappello_rosso]] (agent)
- [[sequenze_per_obiettivo]] — sequenza Choosing Between Alternatives
