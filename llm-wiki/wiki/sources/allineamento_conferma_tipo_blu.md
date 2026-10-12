---
tipo: source
data_creazione: 2026-10-12
data_aggiornamento: 2026-10-12
fonti_correlate: ["[[porting_claude_plugin]]", "[[test_plugin_v020_ristrutturazione]]"]
tags: [source, spec, cappello-blu, sequenze, conferma-tipo, allineamento]
---

# Allineamento — Conferma del tipo di attività nel Cappello Blu

- **Provenance**: `raw/specs/allineamento_conferma_tipo_blu.md`
- **Date**: 2026-10-12

**Tipo sorgente:** specifica (`raw/specs/`), stato "chiuso"

---

## Riassunto

Specifica che risolve la contraddizione nella pagina [[cappello_blu]] (agent): la riga "Default se il tipo non è chiaro: Choosing Between Alternatives" non corrisponde più al comportamento implementato. Fissa la regola valida per Copilot e per il [[plugin_six_hats]] su Claude.

---

## Punti chiave

- Il Blu chiede sempre all'utente di confermare il tipo di attività prima di invocare qualsiasi cappello.
- Se il tipo non è chiaro, propone "Choosing Between Alternatives", ma attende comunque la conferma: niente default silenziosi.
- Dalla v0.2.0 del plugin Claude riconferma il tipo quando il problema cambia: una conferma data per una formulazione precedente non vale per la nuova.
- Implementazione Copilot in `agents/cappello-blu.agent.md` (Fase 1 — Apertura); implementazione Claude in `claude-plugin/skills/six-hats/SKILL.md` (plugin v0.2.1), punti 3 e 4.
- Eccezioni previste solo nella skill Claude: l'utente ha già indicato il tipo (per esempio "/six-hats quick feedback: ..."), oppure nessuno può rispondere (sessione non presidiata); in questi casi il Blu procede e dichiara la scelta.

---

## Pagine toccate

- [[cappello_blu]] (agent) — riga del default sostituita e marcata come superata
- [[architettura_agenti]] — eccezioni aggiunte alla decisione sulla sequenza
