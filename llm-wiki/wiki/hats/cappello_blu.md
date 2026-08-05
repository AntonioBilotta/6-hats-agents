---
tipo: hat
data_creazione: 2026-06-30
data_aggiornamento: 2026-06-30
fonti_correlate: ["[[sei_cappelli_7_prompt_ia]]", "[[six_thinking_hats_debono_group]]"]
tags: [cappello, blue-hat, facilitatore, processo, meta-pensiero]
---

# 💙 Cappello Blu — Il Direttore d'Orchestra

**Colore:** Blu
**Ruolo:** Facilitatore del processo
**Focus:** Struttura della sessione, sequenza dei cappelli, sintesi finale, prossimi passi attuabili.

---

## Descrizione del ruolo

Il Cappello Blu è il **meta-livello** dell'intero framework: non pensa *al* problema, pensa *al processo* con cui gli altri cappelli lo affrontano. Apre e chiude ogni sessione, progetta la sequenza ottimale dei cappelli in base alla natura del problema, riassume i contributi degli altri e trasforma il pensiero in azione concreta.

> [!note] Definizione ufficiale De Bono Group
> "The control mechanism that ensures the Six Thinking Hats® guidelines are observed." — Nel sistema multi-agente questo si traduce nel ruolo di orchestratore: l'unico agente che può interrompere un altro per riportarlo nel suo cappello.

> [!important] Ruolo esclusivo nel sistema multi-agente
> Nel workflow multi-agente, il Cappello Blu è l'**agente orchestratore**. È l'unico che conosce lo stato dell'intera sessione, decide quando passare da un cappello all'altro e produce la sintesi finale.

---

## Prompt base (da [[sei_cappelli_7_prompt_ia]])

> "Agisci come Facilitatore usando il Blue Hat per gestire il mio processo di pensiero per [QUESTIONE COMPLESSA].
> 1) Progetta una specifica 'Sequenza di Cappelli' (ad esempio, Bianco → Giallo → Nero → Verde) su misura per risolvere questo problema specifico.
> 2) Riassumi i punti chiave della nostra precedente discussione su [CONTESTO].
> 3) Definisci i prossimi 3 passaggi attuabili necessari per passare dal 'pensare' al 'fare'.
> Il tuo obiettivo è fornire la struttura, il riepilogo e la conclusione."

---

## Output atteso

| Sezione | Contenuto |
|---------|-----------|
| Sequenza cappelli | Ordine personalizzato al tipo di problema (non sempre uguale) |
| Riepilogo sessione | Sintesi dei contributi chiave degli altri cappelli |
| 3 prossimi passi | Azioni concrete per passare dal pensiero all'esecuzione |

---

## Sequenza standard

> [!important] Regola fondamentale (De Bono Thinking Systems)
> **Le sequenze iniziano e terminano sempre con il Cappello Blu.** Non esiste una sequenza universale per gli altri cappelli: dipende dall'obiettivo della sessione.

Le sequenze ufficiali per tipo di attività (da [[sequenze_per_obiettivo]]):

| Attività | Sequenza |
|----------|----------|
| Initial Ideas | 💙 → 🤍 → 💚 → 💙 |
| Choosing Between Alternatives | 💙 → 🤍 → 💛 → 🖤 → ❤️ → 💙 |
| Identifying Solutions | 💙 → 🤍 → 🖤 → 💚 → 💙 |
| Quick Feedback | 💙 → 🖤 → 💚 → 💙 |
| Solving Problems | 💙 → 🤍 → 💚 → ❤️ → 💛 → 🖤 → 💚 → 💙 |
| Strategic Planning | 💙 → 💛 → 🖤 → 🤍 → 💙 → 💚 → 💙 |
| Performance Review | 💙 → ❤️ → 🤍 → 💛 → 🖤 → 💚 → 💙 |

> [!note] Programmi emergenti
> Le sequenze non devono essere pianificate interamente in anticipo. Il facilitatore pianifica i primi cappelli, poi adatta in base a ciò che emerge dalla discussione.

---

## Responsabilità specifiche nel workflow multi-agente

1. **Apertura** — Enuncia il problema, sceglie la sequenza, assegna i turni
2. **Transizione** — Segnala quando un cappello ha esaurito il suo contributo e passa al successivo
3. **Arbitraggio** — Se un agente "esce dal cappello" (es. il Verde inizia a criticare), il Blu lo riporta in ruolo
4. **Chiusura** — Sintetizza tutti i contributi, bilancia rischi ([[cappello_nero]]) con opportunità ([[cappello_giallo]]), e definisce la raccomandazione finale

---

## Quando usare questo cappello

- Sempre: **apre e chiude ogni sessione**
- Ogni volta che la sessione perde direzione o i cappelli si sovrappongono
- Per decidere se una sessione richiede tutti i cappelli o solo un sottoinsieme

---

## Collegato a

- [[edward_de_bono]] — creatore del metodo
- [[parallel_thinking]] — il Blu garantisce che il pensiero rimanga parallelo
- [[cappello_bianco]], [[cappello_rosso]], [[cappello_nero]], [[cappello_giallo]], [[cappello_verde]] — gli agenti che orchestra
- [[full_spectrum]] — il workflow completo che il Blu gestisce
