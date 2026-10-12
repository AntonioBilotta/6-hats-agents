---
tipo: source
data_creazione: 2026-10-12
data_aggiornamento: 2026-10-12
fonti_correlate: ["[[test_plugin_claude_homelab]]"]
tags: [source, spec, porting, claude, plugin, agenti, decisioni-aperte]
---

# Porting su Claude — Plugin six-hats

- **Provenance**: `raw/specs/porting_claude_plugin.md`
- **Date**: 2026-10-12

**Tipo sorgente:** specifica (`raw/specs/`), stato "parzialmente chiuso"

---

## Riassunto

Specifica del porting del sistema multi-agente dai custom agents di GitHub Copilot (`agents/*.agent.md`) a un **plugin Claude** in `claude-plugin/`, installabile dal marketplace del repo (`.claude-plugin/marketplace.json`). Raccoglie l'architettura scelta, le decisioni prese, la mappatura Copilot → Claude, le scoperte tecniche e le verifiche ancora aperte. Vedi [[plugin_six_hats]].

---

## Punti chiave

- **Architettura:** una skill `six-hats` invocata dall'utente (il Cappello Blu, orchestratore) più 5 agenti: `white-hat` [Read, Grep, Glob, WebSearch, WebFetch], `yellow-hat` [nessun tool], `black-hat` [Read, Grep, Glob], `red-hat` [nessun tool], `green-hat` [WebSearch, WebFetch]. In sessione compaiono come `six-hats:<cappello>`, la skill come `six-hats:six-hats`.
- **Plugin invece di skill unica:** con il plugin il file del cappello *è* il prompt di sistema, `tools` e `model` si dichiarano nel frontmatter, ed è 1:1 con `agents/*.agent.md`.
- **Nessun fallback a skill unica:** se gli agenti non sono caricati, il Blu si ferma al controllo iniziale e dice quali mancano.
- **Conferma del tipo di attività sempre richiesta**; dalla v0.2.0 il Blu riconferma il tipo quando il problema cambia dopo l'apertura.
- **Cappelli isolati (per ora):** lavorano solo sul contesto passato dal Blu, costruito solo da ciò che l'utente ha detto in sessione. Il "dual-me" (cappelli che conoscono l'utente) è rimandato.
- **Nomi e istruzioni in inglese, output in italiano**; `model: inherit` per tutti gli agenti; metodologia integrata nel Blu da `docs/METODOLOGIA.md`.
- **Scoperte tecniche:** gli esempi `<example>` scritti come nella guida ufficiale rompono lo YAML e fanno perdere in silenzio `tools` e `model` (soluzione: `description: |` indentato); gli agenti dei plugin sono ignorati in chat e caricati in Cowork e Claude Code; non esiste un modo documentato per dare zero tool a un agente; i subagenti vedono la memoria personale dell'utente e nessun campo del frontmatter la spegne.

---

## Entità e concetti toccati

- [[plugin_six_hats]] — oggetto della specifica
- [[architettura_agenti]] — decisioni architetturali (estese al porting su Claude)
- [[context_leak_memoria_subagenti]] — causa tecnica e scelta dell'isolamento
- [[cappello_blu]] (agent), [[cappello_bianco]] (agent), [[cappello_giallo]] (agent), [[cappello_nero]] (agent), [[cappello_rosso]] (agent), [[cappello_verde]] (agent)
- [[copilot_custom_agents_vscode]] — formato Copilot di partenza
- [[test_plugin_claude_homelab]] — sessione da cui derivano alcune scoperte
