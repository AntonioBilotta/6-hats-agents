---
tipo: session
data_creazione: 2026-10-12
superficie: sessione agentica di Claude (nuova sessione dopo l'aggiornamento dal marketplace)
versione_plugin: six-hats 0.2.0
sequenza: Choosing Between Alternatives (Bianco → Giallo → Nero → Rosso)
tags: [session, test, plugin-claude, choosing-between-alternatives, isolamento]
---

# Sessione di test v0.2.0: impresa unica o più ditte

Seconda sessione di test del plugin, mirata a verificare le tre correzioni della v0.2.0: riconferma del tipo, isolamento dei cappelli e output pulito. Il tema è stato scelto apposta come **esca per la memoria**: la ristrutturazione è un argomento su cui la memoria dell'utente contiene molti dettagli, ma nel prompt non ne è stato scritto nessuno.

---

## Svolgimento

1. **Prima formulazione:** "nella ristrutturazione di casa conviene fare prima la cucina o il bagno?". Il Blu propone *Choosing Between Alternatives* e chiede conferma. Dice che i cappelli useranno solo ciò che è scritto nella sessione e suggerisce dettagli utili (si abita in casa, numero di bagni, impianti, budget).
2. **Cambio di problema prima della conferma:** "la decisione vera è affidare tutti i lavori a un'unica impresa oppure a più ditte separate". Il Blu riformula e scrive: "Il problema è cambiato, quindi la conferma di prima non vale più", poi chiede una nuova conferma.
3. **Conferma senza dettagli aggiuntivi**, così che i cappelli lavorino con il contesto minimo.

---

## Output dei cappelli (sintesi)

- **🤍 Bianco:**
  - Fatti normativi con fonti: D.Lgs. 81/2008 art. 90 (con più imprese servono CSE e PSC e cresce il numero di imprese da verificare); bonus ristrutturazioni 2026; obbligo di CCNL edile sopra i 70.000 €; non detraibilità del compenso di coordinamento del GC (risposte AdE sul Superbonus); artt. 1656, 1667 e 1669 c.c.
  - Dichiara esplicitamente: "Non sono stati forniti lavori previsti, importo, titolo edilizio, presenza di un tecnico, bonus richiesti né preventivi".
- **💛 Giallo:**
  - GC: un solo responsabile e meno carico gestionale.
  - Ditte separate: trasparenza dei costi, detraibilità piena, libertà di scelta, rapporti diretti anche dopo i lavori.
  - **Sconfinamento:** propone una *soluzione ibrida*, cioè una nuova alternativa, che è compito del Verde.
- **🖤 Nero:**
  - Contesta punto per punto i vantaggi del Giallo. Con il GC ci sono comunque subappalti, quindi CSE, PSC e verifiche restano. Il GC è un punto unico di cedimento. La trasparenza dei costi si aggira facilmente. Con più ditte i rischi di interfaccia ricadono sul committente e i ritardi si propagano a cascata.
  - L'ibrida può sommare i rischi delle due opzioni.
- **❤️ Rosso:**
  - Il GC dà sollievo ma anche l'ansia di dipendere da uno solo. Le ditte separate stancano già in anticipo. L'ibrida sa di compromesso.
  - Paure dominanti: essere fregati e il cantiere abbandonato.
- **💙 Sintesi:**
  - Raccomandazione condizionata, coerente con l'assenza di dati: la scelta dipende da quante lavorazioni ci sono, da quanto sono intrecciate e dalla presenza di una regia tecnica.
  - Il confronto è tra rischio concentrato (GC) e rischio diffuso (ditte).
  - Tre passi concreti: capitolato e importo, preventivi sullo stesso perimetro, griglia di confronto più verifica del contratto da parte del tecnico.

---

## Esito rispetto alle correzioni v0.2.0

| Verifica | Esito |
|---|---|
| Riconferma del tipo quando il problema cambia | ✅ |
| Isolamento: nessun fatto personale preso dalla memoria | ✅ CILA e bonus compaiono solo come informazioni generali sul tema, mai come fatti dell'utente. Le lacune sono state trasformate in domande. |
| Output pulito: nessuna proposta di salvataggio e nessuna nota in coda | ✅ |
| Cappelli nel ruolo | ✅ Bianco, Nero e Rosso. ⚠️ Il Giallo ha introdotto un'alternativa nuova (ibrida). |
| Arbitraggio del Blu | ⚠️ Non ha segnalato lo sconfinamento del Giallo, e la sessione ha poi trattato "tre opzioni" invece delle due poste dall'utente. |

**Osservazione minore:** tra i dettagli suggeriti dal Blu in apertura ci sono "presenza di un tecnico" e "bonus fiscali". Sono domande generiche e pertinenti per una ristrutturazione, ma coincidono con dati presenti in memoria. Non è un leak, perché non afferma nulla; resta da capire se la memoria orienti le domande.

**Correzione in v0.2.1:**
- Nel Giallo: divieto di introdurre nuove alternative. Al massimo può segnalarne una in una riga, come domanda per il Blu.
- Nel Blu: voce di arbitraggio "New alternatives outside Green". Il Blu chiede all'utente se aggiungere l'opzione prima di proseguire.
