---
tipo: concept
data_creazione: 2026-06-30
data_aggiornamento: 2026-07-02
fonti_correlate: ["[[sei_cappelli_7_prompt_ia]]", "[[six_thinking_hats_debono_group]]", "[[copilot_subagents_vscode]]"]
tags: [concetto, parallel-thinking, de-bono, processo]
---

# Parallel Thinking

**Definizione:** Invece di adottare posizioni opposte e litigarle, tutti i partecipanti guardano nella **stessa direzione** allo stesso tempo, esplorando collettivamente ogni prospettiva prima di convergere su una conclusione.

---

## Descrizione

Il Parallel Thinking è il principio fondamentale su cui si basa l'intero framework dei [[edward_de_bono|6 Cappelli]]. Rompe con il modello tradizionale del **pensiero avversariale** (dibattito, confutazione, difesa delle posizioni) e lo sostituisce con un'esplorazione collaborativa e sequenziale.

**Prima (pensiero avversariale):**
- A propone → B critica → A difende → C media → nessuno esplora davvero
- Il risultato è spesso un compromesso difensivo, non la soluzione migliore

**Con il Parallel Thinking:**
- Tutti insieme guardano i dati (🤍)
- Tutti insieme esplorano le emozioni (❤️)
- Tutti insieme identificano i rischi (🖤)
- Il risultato è una mappa completa prima di decidere

---

## Implicazione per il sistema multi-agente

Nel contesto di questo wiki, il Parallel Thinking si traduce in:
- Ogni agente AI parla solo quando "indossa" il suo cappello
- Gli agenti non si interrompono o contraddicono durante la loro fase
- È il [[cappello_blu]] a garantire che nessun agente "esca dal cappello" e invada la prospettiva di un altro

> [!note] Implementazione strutturale con subagents
> Con l'architettura a subagenti di VS Code, il Parallel Thinking è implementato **architetturalmente**, non solo per istruzione: ogni cappello-worker gira in un contesto isolato e vede solo il summary che il Blu gli passa. Il ragionamento degli altri cappelli non è accessibile durante la fase attiva. Vedi [[copilot_subagents_vscode]].

> [!note] Vantaggio strutturale degli agenti AI
> Il De Bono Group identifica "tenere in scacco ego e protezione del territorio" come uno dei 15 benefici del metodo. Gli agenti AI non hanno ego, rendendo il Parallel Thinking strutturalmente più puro rispetto a un gruppo umano. Vedi [[benefici_e_applicazioni]].

---

## Collegato a

- [[edward_de_bono]] — creatore del principio
- [[cappello_blu]] — l'orchestratore che garantisce il rispetto del Parallel Thinking
- [[full_spectrum]] — workflow che lo applica nella sua forma più completa
- [[pensiero_laterale]] — concetto correlato, specifico del [[cappello_verde]]
- [[copilot_subagents_vscode]] — implementazione tecnica dell'isolamento del contesto
