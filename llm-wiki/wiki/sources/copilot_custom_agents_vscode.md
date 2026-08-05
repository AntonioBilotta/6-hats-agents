---
tipo: source
data_creazione: 2026-07-02
data_aggiornamento: 2026-07-02
fonti_correlate: ["[[copilot_cli_vscode]]"]
tags: [source, copilot, custom-agents, vscode, implementazione, agent-md]
---

# Custom Agents in VS Code

**Provenienza:** Documentazione ufficiale Microsoft VS Code
**URL:** https://code.visualstudio.com/docs/agent-customization/custom-agents
**Data clip:** 2026-07-02

---

## Riassunto

I custom agents in VS Code permettono di configurare agenti AI specializzati con istruzioni, tool e comportamenti distinti, definiti in file `.agent.md`. Sono il meccanismo tecnico principale per implementare i 6 cappelli come agenti separati con ruoli, tool e modelli diversi.

---

## Punti chiave

### Struttura del file `.agent.md`

Il file è composto da:
- **Frontmatter YAML** (opzionale): configura nome, tool, subagenti consentiti, modello, handoffs
- **Corpo Markdown**: le istruzioni dell'agente (system prompt), prepended al prompt utente ad ogni invocazione

**Campi frontmatter rilevanti per il progetto:**

| Campo | Tipo | Descrizione | Uso nei 6 cappelli |
|---|---|---|---|
| `name` | string | Nome dell'agente | Nome del cappello (es. `"Cappello Bianco"`) |
| `description` | string | Mostrata nel chat input | Breve ruolo del cappello |
| `tools` | array | Tool disponibili | Limitati per ogni cappello (least privilege) |
| `agents` | array | Subagenti consentiti | Solo sul Blu coordinatore |
| `model` | string o array | Modello LLM (lista = priorità) | Può variare per cappello |
| `user-invocable` | boolean | Appare nel dropdown (default: `true`) | `false` sui cappelli-worker |
| `disable-model-invocation` | boolean | Blocca invocazione come subagente (default: `false`) | Lasciare `false` sui cappelli-worker |
| `handoffs` | array | Pulsanti transizione sequenziale | Alternativa ai subagenti |
| `hooks` | object | Comandi a eventi del ciclo agente | Log automatico sessioni |

### Posizioni dei file

| Scope | Percorso | Disponibile in CLI |
|---|---|---|
| Workspace (**raccomandato**) | `.github/agents/` | ✅ Sì |
| User profile | `~/.copilot/agents` | ❌ No |

> [!important] Per il progetto
> I file `.agent.md` dei cappelli vanno obbligatoriamente in `.github/agents/` — unica posizione compatibile con Copilot CLI. Vedi [[copilot_cli_vscode]].

> [!note] Rilevamento automatico
> VS Code rileva automaticamente come custom agent **qualsiasi file `.md`** nella cartella `.github/agents/`. L'estensione `.agent.md` è raccomandata ma non obbligatoria.

### Handoffs — workflow sequenziale controllato dall'utente

I handoffs mostrano pulsanti interattivi dopo ogni risposta per passare al cappello successivo con contesto precompilato. L'utente legge la risposta corrente e clicca per procedere.

```yaml
handoffs:
  - label: "→ Cappello Verde"
    agent: cappello_verde
    prompt: "Basandoti sui dati emersi, proponi alternative creative."
    send: false   # false = utente clicca manualmente; true = auto-submit
```

**Confronto modalità di orchestrazione:**

| | Handoffs | Subagents |
|---|---|---|
| **Controllo** | Utente approva ogni step | Blu orchestra automaticamente |
| **Visibilità** | Ogni cappello è letto integralmente | Cappelli collassati come tool call |
| **Adatto a** | Sessioni di studio del problema | Sessioni di decisione rapida |

### `user-invocable: false`

Impostare `user-invocable: false` su un cappello-worker significa:
- Non appare nel dropdown degli agenti in Chat view
- È accessibile **solo come subagente** tramite il Cappello Blu
- Implementa strutturalmente la regola "non mischiare i cappelli"

### Sicurezza e least privilege

Ogni cappello dovrebbe avere solo i tool necessari:
- **Cappello Bianco**: `['search', 'read']` — solo lettura
- **Cappello Rosso**: nessun tool — solo output testuale (30 secondi)
- **Cappello Verde**: `['search', 'web/fetch']` — ricerca per ispirazione
- **Cappello Giallo**: `['search', 'read']` — solo lettura
- **Cappello Nero**: `['search', 'read']` — solo lettura
- **Cappello Blu**: `['agent', 'edit', 'read']` — coordina + scrive output

### Generazione con AI

È possibile generare un file `.agent.md` con `/create-agent` in Agent mode, descrivendo il ruolo desiderato. L'AI pone domande di chiarimento e genera il file.

---

## Elementi del dominio toccati

- **Workflow:** [[full_spectrum]] — handoffs come modalità alternativa a subagenti per il workflow sequenziale
- **Agenti:** tutti i cappelli — formato tecnico dei file `.agent.md` e schema di tool assignment
- **Concetto operativo:** `.github/agents/` come posizione unica per compatibilità CLI + Chat
