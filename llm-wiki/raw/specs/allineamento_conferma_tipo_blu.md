---
tipo: spec
data_creazione: 2026-10-12
stato: chiuso
note: Allineamento della regola di conferma del tipo di attività nel Cappello Blu; corregge la pagina wiki dell'agente rimasta al default automatico
tags: [spec, cappello-blu, sequenze, conferma-tipo, allineamento]
---

# Allineamento — Conferma del tipo di attività nel Cappello Blu

La pagina wiki dell'agente Cappello Blu riporta ancora la riga "Default se il tipo non è chiaro: Choosing Between Alternatives". Non corrisponde più al comportamento implementato: il default automatico è stato eliminato. Questa specifica fissa la regola valida per entrambe le piattaforme.

---

## Regola valida

- Il Blu **chiede sempre all'utente di confermare il tipo di attività** prima di invocare qualsiasi cappello.
- Se il tipo non è chiaro, **propone** "Choosing Between Alternatives", ma attende comunque la conferma: niente default silenziosi.
- **Riconferma quando il problema cambia** (dalla v0.2.0 del plugin Claude): se la risposta dell'utente cambia il problema, il Blu lo riformula, ripropone tipo e sequenza e chiede di nuovo la conferma. Una conferma data per una formulazione precedente non vale per la nuova.

---

## Implementazione attuale

**Copilot — `agents/cappello-blu.agent.md` (Fase 1 — Apertura):**

> Chiedi sempre all'utente di confermare il tipo prima di invocare i worker.
> Se il tipo non è chiaro, proponi "Choosing Between Alternatives", ma
> attendi comunque la conferma: niente default silenziosi.

**Claude — `claude-plugin/skills/six-hats/SKILL.md` (plugin v0.2.1):**

- Punto 3, *Always ask the user to confirm the type*: la scelta della sequenza fa parte del metodo e non va scavalcata da un default silenzioso. Il Blu propone la sua classificazione (se è incerto propone Choosing Between Alternatives) e aspetta.
- **Eccezioni** previste solo nella skill Claude: l'utente ha già indicato il tipo (per esempio "/six-hats quick feedback: ..."), oppure nessuno può rispondere (sessione non presidiata). In questi casi il Blu procede e dichiara la scelta.
- Punto 4, *Re-confirm when the problem changes*: vedi la regola sopra.

---

## Coerenza con le decisioni esistenti

- Conferma la decisione "Sequenza default nel Cappello Blu" (nessun fallback automatico su Choosing Between Alternatives) e la decisione del porting "Conferma del tipo di attività sempre richiesta".
- Le sessioni di test del 2026-10-12 mostrano il comportamento corretto dalla v0.2.0: al cambio di problema il Blu ha scritto "Il problema è cambiato, quindi la conferma di prima non vale più".

---

## Azione sul wiki

- Nella pagina dell'agente Cappello Blu, sostituire la riga del default con la regola valida e marcare la vecchia come superata.
- Aggiungere alla decisione sulla sequenza le eccezioni previste dalla skill Claude.
