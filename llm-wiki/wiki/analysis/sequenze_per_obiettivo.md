---
tipo: analysis
data_creazione: 2026-07-02
data_aggiornamento: 2026-07-02
fonti_correlate: []
tags: [sequenza, workflow, blue-hat, ricerca]
---

# Sequenze ufficiali dei 6 Cappelli per obiettivo

**Fonti:** Wikipedia (citando i materiali ufficiali De Bono Thinking Systems) · BetterEvaluation

---

## Regola fondamentale — dal libro di De Bono

> "Sequences always begin and end with a blue hat."

Il [[cappello_blu]] apre **e** chiude ogni sessione senza eccezioni:
- **Apertura**: il gruppo decide insieme come strutturare il pensiero (quale sequenza usare, quanto tempo per ogni cappello)
- **Chiusura**: si valutano i risultati e si decidono i prossimi passi

---

## Tabella delle sequenze ufficiali per tipo di attività

| Attività | Sequenza |
|----------|----------|
| **Initial Ideas** | 💙 → 🤍 → 💚 → 💙 |
| **Choosing Between Alternatives** | 💙 → 🤍 → (💚) → 💛 → 🖤 → ❤️ → 💙 |
| **Identifying Solutions** | 💙 → 🤍 → 🖤 → 💚 → 💙 |
| **Quick Feedback** | 💙 → 🖤 → 💚 → 💙 |
| **Strategic Planning** | 💙 → 💛 → 🖤 → 🤍 → 💙 → 💚 → 💙 |
| **Process Improvement** | 💙 → 🤍 → 🤍* → 💛 → 🖤 → 💚 → ❤️ → 💙 |
| **Solving Problems** | 💙 → 🤍 → 💚 → ❤️ → 💛 → 🖤 → 💚 → 💙 |
| **Performance Review** | 💙 → ❤️ → 🤍 → 💛 → 🖤 → 💚 → 💙 |
| **Evaluation (BetterEvaluation)** | 💙 → ❤️ → 🤍 → 💛 → 🖤 → 💚 → 💙 |

*🤍\* = White Hat per le prospettive degli altri stakeholder (second pass)

---

## Timing raccomandato

| Cappello | Durata tipica | Note |
|----------|--------------|-------|
| 🤍 Bianco | 2 min (esteso all'inizio) | Prima sessione spesso più lunga per stabilire i fatti |
| ❤️ Rosso | **~30 secondi** | Deve essere una reazione viscerale immediata, non un giudizio — spesso implementato come dot-voting |
| 💛 Giallo | 2 min | — |
| 🖤 Nero | 2 min | — |
| 💚 Verde | 2 min | — |
| 💙 Blu | variabile | Apertura e chiusura, dipende dalla complessità |

> [!important] Il Red Hat da 30 secondi
> Questa è una delle indicazioni più controintuitive del metodo. Il Cappello Rosso deve essere breve proprio per catturare l'intuizione pura prima che il pensiero razionale la contamini. Se dura troppo, diventa ragionamento travestito da emozione.

---

## I programmi sono spesso "emergenti"

> "Programs are often emergent, which is to say that the group might plan the first few hats then the facilitator will see what seems to be the right way to go." — De Bono Thinking Systems

Il [[cappello_blu]] non deve necessariamente stabilire l'intera sequenza in anticipo. Pianifica i primi cappelli, poi adatta in base a ciò che emerge. Questa flessibilità è una feature del metodo, non un difetto.

---

## Implicazione per il sistema multi-agente

La sequenza corretta da usare come **default** nel nostro sistema è **per obiettivo**, non una sequenza fissa. Il [[cappello_blu]] come orchestratore deve:
1. All'apertura: ricevere la descrizione del problema + tipo di attività
2. Scegliere la sequenza dalla tabella sopra
3. Potenzialmente adattarla dopo i primi cappelli

### Correzione rispetto a [[full_spectrum]]
La sequenza descritta in `full_spectrum` (Bianco → Rosso → Nero → Giallo → Verde → Blu) viene dal prompt Reddit e non riflette le sequenze ufficiali. Il full spectrum dovrebbe usare: **Blu → Bianco → (Verde) → Giallo → Nero → Rosso → Blu** per decisioni complesse.

---

## Collegato a

- [[cappello_blu]] — unico cappello presente in ogni sequenza, sempre in apertura e chiusura
- [[cappello_rosso]] — timing speciale: 30 secondi
- [[full_spectrum]] — da aggiornare con la sequenza corretta
- [[parallel_thinking]] — principio che giustifica l'ordine sequenziale deliberato
