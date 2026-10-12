---
tipo: decision
data_creazione: 2026-10-12
data_aggiornamento: 2026-10-12
stato: raccomandazione (non definitiva)
fonti_correlate: ["[[test_plugin_claude_homelab]]"]
tags: [decision, session, choosing-between-alternatives, home-lab, modular-monolith]
---

# Decisione — Dominio del progetto home lab in modular monolith

**Sessione:** [[test_plugin_claude_homelab]] — prima sessione reale del [[plugin_six_hats]] (v0.1.0)
**Sequenza:** Choosing Between Alternatives (Bianco → Giallo → Nero → Rosso), vedi [[sequenze_per_obiettivo]]

---

## Problema

**Domanda iniziale:** come si decide se un progetto informatico deve essere fatto in modular monolith o in microservizi?

**Problema riformulato:** quale di tre varianti scegliere come dominio per un progetto da home lab in .NET 10 modular monolith. Stack: Wolverine, outbox PostgreSQL, Aspire, OpenTelemetry, NetArchTest, K3s con Traefik, Ollama. Obiettivo primario: imparare il pattern in 4 fasi:
1. eventi con outbox;
2. più consumer con idempotenza e retry;
3. un LLM che usa i moduli come tool;
4. estrazione di un modulo.

**Varianti:**
1. **V1 — HomeHub sopra Home Assistant:** consumi per fase con contatore trifase, anomalie, storico in linguaggio naturale.
2. **V2 — Hub di gestione del home lab:** inventario dei servizi K3s, backup con verifica dei restore, certificati, aggiornamenti delle immagini, notifiche, assistente.
3. **V3 — Hub sui dati personali:** assistente sopra le second brain, legato ai PoC agentici.

---

## 🤍 Bianco

- Wolverine: l'outbox transazionale su PostgreSQL supporta **un solo database**; l'archivio dei messaggi sta in uno schema condiviso. La guida ufficiale sul modular monolith suggerisce un namespace per modulo prima dei progetti separati. Sconsiglia `InvokeAsync` da un handler all'altro. `MultipleHandlerBehavior.Separated` è rilevante per la fase 2.
- Home Assistant: storico dettagliato di 10 giorni per default, statistiche orarie a lungo termine solo per i sensori con `state_class`, integrazioni ufficiali Ollama e MCP Server già presenti.
- V1 dipende da un contatore non ancora installato e da un misuratore per fase.
- V2: esistono strumenti per le singole funzioni (Velero, cert-manager, Renovate/Diun, Uptime Kuma, Homepage), ma nessun prodotto che le integri.
- V3: esistono strumenti RAG su vault markdown (confidenza media).
- **Mancano:** lo stato del cluster, la mappa moduli → eventi → consumer, il modulo da estrarre, il tempo disponibile.

## ❤️ Rosso

- **Reazione viscerale:** lo stack sembra più una vetrina che un progetto da amare. V1 accende, V2 sa di straordinario non pagato, V3 è "comodo".
- **Domanda chiave:** quale delle tre apriresti un sabato mattina senza che nessuno te lo chieda?
- **Paure:** un altro progetto lasciato a metà, e V3 scelta proprio perché non ha attriti.

## 💛 Giallo

- **V1:** il flusso di eventi più realistico, molti consumer naturali, estrazione dell'ingestion su MQTT, utilità concreta con il trifase.
- **V2:** eventi simili a quelli aziendali, idempotenza con effetti visibili, estrazione della verifica dei restore, dogfooding dell'osservabilità, caso di studio spendibile al lavoro.
- **V3:** si parte subito senza hardware, fa avanzare anche i PoC agentici, idempotenza per hash.
- **Trasversale:** lo scheletro tecnico è indipendente dal dominio; le altre varianti possono entrare dopo come moduli.

## 🖤 Nero

- **V1:** bloccata da hardware e burocrazia. La telemetria è il carico sbagliato per un outbox transazionale. Home Assistant copre già buona parte dell'utilità.
- **V2:** eventi troppo rari per allenare retry e idempotenza. Dipendenza circolare: l'hub gira sul cluster che sorveglia. Sicurezza: un LLM con permessi ampi sull'API Kubernetes.
- **V3:** un'unica pipeline con confini tra moduli artificiali, sincronizzazione del vault, rischio di scivolare verso RAG e prompt.
- **Tutte:** "cambio solo il trasporto" in fase 4 è un'aspettativa sbagliata (un solo database per l'outbox, contratti da versionare, deploy separato).
- **Conclusione:** nessuna variante sostiene bene tutte e 4 le fasi.

## 💚 Verde

*Non previsto dalla sequenza Choosing Between Alternatives.*

## 💙 Blu

- Ha osservato che la domanda iniziale era generale e ha proposto due strade: un framework decisionale generico oppure l'ancoraggio a un progetto reale. Con il contesto fornito dall'utente la domanda è cambiata.
- **Nota di processo:** al cambio del problema il Blu è partito senza chiedere una nuova conferma del tipo di attività (corretto in v0.2.0, vedi [[plugin_six_hats]]). Giallo, Nero e Bianco hanno usato fatti personali presi dalla memoria ([[context_leak_memoria_subagenti]]).

---

## Sintesi e decisione

- **Raccomandazione:** partire con V2 come primo modulo, portare V1 come secondo quando arriverà il misuratore, tenere V3 fuori dal monolith come PoC agentico separato.
- La domanda del Rosso può ribaltare la raccomandazione: la decisione resta quindi una raccomandazione, non una scelta definitiva.
- **Prossimi passi:**
  1. inventario del cluster;
  2. mappa moduli → eventi → consumer di V2, con il modulo da estrarre;
  3. riscrittura della fase 4 con l'aspettativa corretta.
