# 📘 Metodologia — Sei Cappelli per Pensare

Guida di riferimento al metodo di Edward de Bono applicato al sistema multi-agente di questo repo.

> **EN note**: this document is intentionally in Italian to complement the bilingual [README.md](../README.md). For an English-language introduction to the method, see de Bono's original book *Six Thinking Hats* (1985) or the [de Bono Group official page](https://www.debonogroup.com/services/core-programs/six-thinking-hats/).

---

## 📚 Indice

- [Perché il metodo esiste](#perché-il-metodo-esiste)
- [I sei cappelli in dettaglio](#i-sei-cappelli-in-dettaglio)
- [Le sette sequenze standard](#le-sette-sequenze-standard)
- [Quando NON usare il metodo](#quando-non-usare-il-metodo)
- [Anti-pattern comuni](#anti-pattern-comuni)
- [Come leggere l'output finale](#come-leggere-loutput-finale)
- [Bibliografia](#bibliografia)

---

## Perché il metodo esiste

Il pensiero occidentale tradizionale è **adversarial**: due parti sostengono posizioni opposte e la verità dovrebbe emergere dallo scontro. Funziona in tribunale, non in una riunione di design.

De Bono propone il **parallel thinking**: tutti guardano nella stessa direzione, ma in momenti diversi. Invece di "io sono ottimista, tu sei pessimista, litighiamo", tutti indossano il cappello giallo insieme, poi tutti il nero, e così via. Il conflitto tra persone diventa **conflitto tra ruoli**, che è produttivo perché è temporaneo e strutturato.

Nel sistema multi-agente di questo repo, il parallel thinking si traduce in agenti separati: ogni cappello è un agente autonomo con un vincolo forte, invocato in sequenza dal Cappello Blu.

---

## I sei cappelli in dettaglio

### 💙 Blu — Il Direttore d'Orchestra

**Ruolo**: meta-processo. Non pensa *al problema*, pensa *al processo*.

**Vincolo assoluto**: non produce analisi di contenuto. Se scrivi "penso che questa soluzione sia migliore" → non è più blu, è giallo o rosso mascherato.

**Cosa fa**:
- Riformula il problema in modo verificabile
- Sceglie la sequenza dei cappelli
- Invoca i worker uno alla volta (mai in parallelo)
- Arbitra gli sconfinamenti (es. Verde che critica → Verde deve smettere)
- Sintetizza la sessione finale

**Segnale di uscita dal ruolo**: stai valutando i contributi invece di orchestrarli.

---

### 🤍 Bianco — Il Detective dei Dati

**Ruolo**: fatti verificabili e lacune informative.

**Vincolo assoluto**: nessuna opinione, emozione, giudizio, proposta. Solo fatti e domande per ottenere altri fatti.

**Segnale di uscita dal ruolo**: stai scrivendo "penso che", "dovresti", "sarebbe meglio" → fermati e riformula come fatto o domanda.

**Output tipico**:
- Fatti noti (numeri, eventi accaduti, misure)
- Fatti probabili (con livello di confidenza esplicito)
- Fatti mancanti (le domande da fare per procedere)

**Quando è il cappello più utile**: quando la discussione è opinion-heavy e serve rimettere i piedi per terra.

---

### 🖤 Nero — L'Architetto del Rischio

**Ruolo**: identificare sistematicamente perché un piano potrebbe fallire.

**Vincolo assoluto**: **non è pessimismo**. Il nero è logico e critico, cerca *rischi verificabili*, non fastidi generici. "Non mi piace" non è cappello nero, è cappello rosso.

**Segnale di uscita dal ruolo**: stai criticando l'idea in astratto senza collegare a un meccanismo di fallimento concreto.

**Output tipico**:
- Rischi tecnici, economici, temporali
- Assunzioni non verificate del piano
- Scenari peggiori con probabilità stimata
- Vincoli esterni ignorati (normativi, contrattuali, di mercato)

**Insidia comune**: il nero è il cappello *più facile da indossare* e *più spesso frainteso*. Molte persone credono di usare il nero quando in realtà stanno sfogando disagio (che è rosso).

---

### 💛 Giallo — Il Cacciatore di Valore

**Ruolo**: ottimismo *logico*. Cerca sistematicamente il valore, i vantaggi, i benefici nascosti.

**Vincolo assoluto**: il valore deve essere fondato sulla realtà, non inventato. "Se andasse tutto perfettamente..." non è cappello giallo, è fantasia.

**Segnale di uscita dal ruolo**: stai valutando rischi (nero) o cercando idee nuove (verde).

**Output tipico**:
- Benefici diretti e misurabili
- Benefici secondari o di lungo periodo
- Sinergie con progetti esistenti
- Opportunità di massimizzazione (come amplificare il valore)

**Coppia critica**: giallo funziona solo se subito **dopo** o **prima** del nero. Da solo diventa marketing; insieme al nero diventa business case.

---

### ❤️ Rosso — Lo Smascheratore dell'Intuizione

**Ruolo**: legittima l'emozione senza richiedere giustificazioni logiche.

**Vincolo assoluto — La regola dei 30 secondi**: la reazione emotiva si esprime, non si spiega. Se stai costruendo un ragionamento → non è più rosso.

**Segnale di uscita dal ruolo**: la frase inizia con "perché", "dato che", "considerando che" → torna alla sensazione pura.

**Output tipico**:
- Reazioni viscerali immediate ("mi sembra sbagliato", "mi entusiasma", "mi spaventa")
- Paure inespresse
- Desideri non articolati
- Intuizioni ("qualcosa non torna")

**Perché è essenziale**: le decisioni umane vengono prese emotivamente e razionalizzate a posteriori. Il rosso porta questo in superficie **prima** che sabotii l'implementazione.

**Quando invocarlo**: dopo che è emerso un piano concreto (rosso reagisce al piano, non al problema astratto).

---

### 💚 Verde — Il Catalizzatore della Crescita

**Ruolo**: creatività **deliberata**. Non aspetta l'ispirazione, la produce con tecniche formali di pensiero laterale.

**Vincolo assoluto**: ignora completamente i vincoli pratici, economici, logistici. Il filtraggio avviene dopo, con gli altri cappelli.

**Segnale di uscita dal ruolo**: stai valutando se un'idea è fattibile → non è compito tuo.

**Tecniche formali**:
- **Provocazione** (PO — Provocative Operation): affermare deliberatamente qualcosa di impossibile per generare movimento ("PO: le auto senza ruote")
- **Random word**: introdurre una parola casuale e forzare connessioni con il problema
- **Concept extraction**: astrarre il pattern di una soluzione da un altro dominio
- **Movement**: da un'idea folle, cercare la direzione utile che suggerisce

**Insidia comune**: verde ≠ brainstorming libero. Brainstorming senza tecnica produce le stesse idee dei partecipanti + rumore. Verde con tecnica produce spazi di soluzione inesplorati.

---

## Le sette sequenze standard

Il Cappello Blu sceglie la sequenza in base al **tipo di problema**. Ecco le sette combinazioni con un esempio concreto di quando ciascuna si applica bene.

### 1. Initial Ideas — `Bianco → Verde`

**Quando**: hai bisogno di esplorare un territorio nuovo, non conosci ancora il problema.

**Esempio**: "Vogliamo aggiungere una funzione di collaborazione real-time al nostro prodotto. Da dove iniziamo?"

**Perché funziona**: prima raccogli i dati (cosa esiste, cosa hanno fatto altri, che tecnologie ci sono), poi generi ipotesi creative sopra quella base. Non ha senso indossare il nero prima di avere idee da criticare.

---

### 2. Choosing Between Alternatives — `Bianco → Giallo → Nero → Rosso`

**Quando**: hai già N opzioni sul tavolo e devi sceglierne una.

**Esempio**: "Dobbiamo scegliere tra AWS, GCP e on-premise per il nuovo cluster. Quale?"

**Perché funziona**: prima verifichi i fatti su ciascuna alternativa, poi ne cerchi il valore, poi identifichi i rischi, e alla fine registri la reazione emotiva. La sequenza è deliberatamente costruita per **contrastare il bias di conferma**: il rosso arriva alla fine perché altrimenti dominerebbe tutto il processo.

**Default del Cappello Blu**: se non riesce a classificare il problema, usa questa sequenza.

---

### 3. Identifying Solutions — `Bianco → Nero → Verde`

**Quando**: hai un problema definito e cerchi una soluzione che non hai ancora.

**Esempio**: "Le build CI ci mettono 45 minuti. Come le riduciamo?"

**Perché funziona**: fatti (dove va il tempo?), rischi delle soluzioni ovvie (cache non invalidata correttamente, flakiness), poi creatività per soluzioni non ovvie.

---

### 4. Quick Feedback — `Nero → Verde`

**Quando**: qualcuno ha già proposto un piano e vuoi una revisione veloce.

**Esempio**: "Ecco il mio design per la nuova API. Cosa ne pensate?"

**Perché funziona**: nero prima (dove può fallire questo piano?), verde subito dopo (come lo miglioriamo?). Senza verde alla fine, la revisione demotiva chi ha proposto il piano.

**Attenzione**: usa questa sequenza solo se il piano è già ben articolato. Se il piano è vago, torna a *Initial Ideas*.

---

### 5. Solving Problems — `Bianco → Verde → Rosso → Giallo → Nero → Verde`

**Quando**: problema complesso, alto impatto, tempo disponibile.

**Esempio**: "Il tasso di abbandono degli utenti è raddoppiato negli ultimi 3 mesi. Cosa facciamo?"

**Perché funziona**: sequenza completa che espande (verde) e contrae (giallo/nero) alternando. Il verde finale è cruciale — trasforma i rischi identificati dal nero in idee di mitigazione.

**Costo**: è la sequenza più lunga. Non usarla per decisioni piccole.

---

### 6. Strategic Planning — `Giallo → Nero → Bianco → Verde`

**Quando**: pianificazione a medio-lungo termine, orizzonte >6 mesi.

**Esempio**: "Roadmap prodotto per il 2027."

**Perché funziona**: parti dal valore (dove vogliamo essere), identifichi cosa può andare storto, verifichi i fatti (mercato, competitor, risorse), e chiudi con creatività su come arrivarci.

**Nota**: il bianco è terzo (non primo) perché in strategia i fatti *da soli* ancorano al presente. Iniziare da giallo/nero apre lo spazio delle possibilità prima di stringerlo con i dati.

---

### 7. Performance Review — `Rosso → Bianco → Giallo → Nero → Verde`

**Quando**: retrospettiva su un periodo o progetto concluso.

**Esempio**: "Sprint retrospective del team backend."

**Perché funziona**: rosso *per primo* (raro!) perché in una retro le persone hanno bisogno di sfogare l'emozione prima di poter parlare di fatti. Se salti il rosso, il resto della discussione è contaminato dalle emozioni represse.

---

## Quando NON usare il metodo

Il metodo dei 6 cappelli è **potente ma costoso** in termini di attenzione. Non usarlo per:

1. **Decisioni reversibili di basso impatto** — se posso tornare indietro in 5 minuti, non serve strutturare il pensiero
2. **Problemi puramente tecnici con risposta oggettiva** — "qual è la complessità di questo algoritmo?" non richiede il cappello rosso
3. **Emergenze** — quando c'è la casa che brucia, decidi e agisci; il metodo va bene per il post-mortem
4. **Discussioni tra 2 persone che si conoscono bene** — il metodo brilla quando c'è ambiguità sui ruoli mentali dei partecipanti; in coppia consolidata è overhead
5. **Quando il problema è mal definito** — riformula il problema *prima* di applicare il metodo, altrimenti ogni cappello analizza un problema diverso

---

## Anti-pattern comuni

### 🚫 Cappelli sovrapposti

**Sintomo**: durante il cappello verde qualcuno inizia a criticare le idee.

**Rimedio**: il Cappello Blu deve interrompere immediatamente e riportare il ruolo. Se lasci scivolare, il metodo perde tutta la sua efficacia.

### 🚫 "Brainstorming = Verde"

**Sintomo**: il verde produce le stesse idee ovvie che i partecipanti avevano già in testa.

**Rimedio**: applica una tecnica formale (provocazione, random word). Se il verde non usa tecniche, non è verde — è chiacchiera.

### 🚫 Nero come sfogo

**Sintomo**: il nero produce lamentele senza meccanismi di fallimento specifici.

**Rimedio**: ogni contributo del nero deve rispondere a "*come* esattamente questo fallisce?" Se non lo fa, è rosso mascherato.

### 🚫 Rosso senza legittimazione

**Sintomo**: nessuno esprime emozioni durante il cappello rosso.

**Rimedio**: il Cappello Blu deve rendere esplicito che l'emozione è *richiesta*, non tollerata. Il silenzio significa che il team non si sente al sicuro.

### 🚫 Blu che decide

**Sintomo**: il Cappello Blu prende decisioni di contenuto invece di orchestrare.

**Rimedio**: la sintesi finale del blu **bilancia** i contributi degli altri cappelli — non aggiunge nuove analisi.

---

## Come leggere l'output finale

La sintesi del Cappello Blu ha una struttura precisa:

```
💙 Cappello Blu — Sintesi finale

**Raccomandazione**: [direzione emersa dal bilanciamento]
**Bilanciamento rischi/opportunità**: [come giallo e nero si integrano]

**Prossimi 3 passi**:
1. [azione concreta, con owner e deadline]
2. [azione concreta, con owner e deadline]
3. [azione concreta, con owner e deadline]
```

Se la raccomandazione **non riflette** i contributi degli altri cappelli, il Cappello Blu ha fallito la fase di sintesi. È un segnale per rieseguire la sessione.

Se i **prossimi 3 passi** sono vaghi ("valutare meglio", "approfondire"), la sessione non ha convergato — probabilmente serve un altro giro con dati aggiuntivi (torna al Bianco).

---

## Bibliografia

- **de Bono, E.** (1985). *Six Thinking Hats*. Little, Brown and Company.
- **de Bono, E.** (1970). *Lateral Thinking: Creativity Step by Step*. Harper & Row.
- **de Bono Group** — [Official Six Thinking Hats page](https://www.debonogroup.com/services/core-programs/six-thinking-hats/)
- **MindTools** — [Six Thinking Hats overview](https://www.mindtools.com/a2xerbb/six-thinking-hats) (introduzione compatta in inglese)
