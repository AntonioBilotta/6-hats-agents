---
tipo: workflow
data_creazione: 2026-06-30
data_aggiornamento: 2026-07-02
fonti_correlate: ["[[sei_cappelli_7_prompt_ia]]", "[[copilot_cli_vscode]]", "[[copilot_custom_agents_vscode]]", "[[copilot_subagents_vscode]]"]
tags: [workflow, full-spectrum, decisione, simulazione]
---

# 🌈 Full Spectrum — La Matrice Decisionale

**Tipo:** Workflow completo
**Orchestratore:** [[cappello_blu]]
**Durata stimata:** Completa (tutti e 6 i cappelli in sequenza)

---

## Descrizione

Il workflow Full Spectrum è la **simulazione completa** del metodo dei 6 cappelli: tutti gli agenti vengono attivati in sequenza, ognuno contribuisce con 3 punti di analisi, e il [[cappello_blu]] chiude con una raccomandazione finale che bilancia i contributi di tutti.

È il workflow da usare per **decisioni importanti o irreversibili**, dove una visione parziale sarebbe rischiosa.

---

## Prompt completo (da [[sei_cappelli_7_prompt_ia]])

> "Esegui una simulazione 'Six Thinking Hats' su [DECISIONE/STRATEGIA].
> Passa attraverso ogni cappello (Bianco, Rosso, Nero, Giallo, Verde, Blu) in sequenza.
> Per ogni cappello, fornisci una breve analisi di 3 punti basata sui principi di Edward de Bono.
> Concludi con una raccomandazione finale del 'Blue Hat' che bilancia i rischi del Black Hat con le opportunità dello Yellow e del Green Hat."

---

## Sequenza standard

> [!important] Aggiornamento da ricerca (2026-07-02)
> La sequenza ufficiale De Bono per "Choosing Between Alternatives" — il caso più vicino al full spectrum — è:
> **💙 → 🤍 → (💚) → 💛 → 🖤 → ❤️ → 💙**
> Il [[cappello_rosso]] viene **dopo** il Nero, non prima del Giallo: serve a raccogliere la reazione istintiva al piano complessivo emerso, non all'inizio. Vedi [[sequenze_per_obiettivo]] per la tabella completa.

| Step | Agente | Output |
|------|--------|--------|
| 1 | 💙 [[cappello_blu]] (apertura) | Enunciazione problema + scelta sequenza |
| 2 | 🤍 [[cappello_bianco]] | Fatti noti, lacune, domande per colmarle |
| 3 | 💚 [[cappello_verde]] | Alternative creative, idee non convenzionali |
| 4 | 💛 [[cappello_giallo]] | Vantaggi, valore, scenario migliore |
| 5 | 🖤 [[cappello_nero]] | Rischi, punti di fallimento, ostacoli |
| 6 | ❤️ [[cappello_rosso]] | Reazione viscerale al piano emerso (~30 sec) |
| 7 | 💙 [[cappello_blu]] (chiusura) | Raccomandazione finale bilanciata + prossimi passi |

---

## Formato output per ogni cappello

Ogni agente produce esattamente **3 punti analitici** nella sua prospettiva, senza sconfinare in quella degli altri.

**Template per la pagina di decisione generata:**

```markdown
## 🤍 Bianco — Fatti e dati
1. ...
2. ...
3. ...

## ❤️ Rosso — Emozioni e intuizioni
1. ...
2. ...
3. ...

## 💛 Giallo — Valore e opportunità
1. ...
2. ...
3. ...

## 🖤 Nero — Rischi e criticità
1. ...
2. ...
3. ...

## 💚 Verde — Alternative creative
1. ...
2. ...
3. ...

## 💙 Blu — Sintesi e raccomandazione
**Raccomandazione:** ...
**Prossimi passi:**
1. ...
2. ...
3. ...
```

---

## Implementazione tecnica con Copilot CLI

Il workflow Full Spectrum può essere eseguito in due modalità su VS Code:

| Modalità | Superficie | Supervisione | Adatto quando |
|---|---|---|---|
| **Subagents (automatica)** | Chat view — coordinatore Blu invoca i cappelli | L'utente vede i cappelli come tool call collassabili | Si vuole decisione rapida |
| **Handoffs (guidata)** | Chat view — pulsanti tra un cappello e l'altro | L'utente legge ogni cappello e clicca per procedere | Si vuole seguire il ragionamento |
| **CLI autonoma** | Copilot CLI (background) | Minima — il workflow gira da solo | Il problema è già ben definito |

**Pattern Coordinator + Worker (subagents):**
Il Cappello Blu è il coordinatore con `tools: ['agent']` e la lista esplicita dei worker in `agents: [...]`. I cappelli-worker hanno `user-invocable: false` — non sono visibili nel dropdown, accessibili solo tramite Blu. Vedi [[copilot_subagents_vscode]] per i dettagli tecnici.

**Flusso raccomandato per la modalità autonoma:**
1. Aprire Chat view, selezionare l'agente Cappello Blu
2. Enunciare il problema e confermare la sequenza dei cappelli
3. Hand-off a Copilot CLI dalla Session Target dropdown
4. Il Blu orchestra i cappelli-worker come subagenti in sequenza
5. Risultato finale archiviato in `wiki/decisions/`

> [!important] Isolation mode
> Usare **Folder isolation** (non Worktree) in modo che il Cappello Blu possa scrivere direttamente le pagine `wiki/decisions/` nel vault. Vedi [[copilot_cli_vscode]].

> [!note] Limitazione CLI
> Solo custom agents definiti nel workspace (`.github/agents/`) sono disponibili in CLI. I file `.agent.md` dei cappelli vanno quindi messi in `.github/agents/`, non nel profilo utente.

### Modalità alternativa: Handoffs (workflow guidato)

Alternativa ai subagenti: ogni cappello mostra un pulsante per passare al successivo. L'utente legge la risposta completa di ogni cappello prima di procedere.

```yaml
# Esempio frontmatter Cappello Bianco con handoff
handoffs:
  - label: "→ Cappello Verde"
    agent: cappello_verde
    prompt: "Basandoti sui dati raccolti, proponi alternative creative."
    send: false
```

**Quando preferire handoffs a subagents:**
- Si vuole leggere e valutare ogni cappello prima di procedere
- Sessioni didattiche o di apprendimento del metodo
- Decisioni dove la supervisione step-by-step è importante

Vedi [[copilot_custom_agents_vscode]] per la documentazione tecnica dei handoffs.

---

## Quando usare questo workflow

- Decisioni strategiche importanti o ad alto impatto
- Situazioni in cui il gruppo ha tendenza a convergere troppo presto su una soluzione
- Quando si vuole un audit completo di una proposta prima di procedere

---

## Collegato a

- [[edward_de_bono]] — creatore del metodo
- [[parallel_thinking]] — principio su cui si basa l'intero workflow
- [[cappello_blu]], [[cappello_bianco]], [[cappello_rosso]], [[cappello_giallo]], [[cappello_nero]], [[cappello_verde]]
