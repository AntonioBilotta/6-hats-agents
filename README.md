# 🎩 Six Thinking Hats — GitHub Copilot Agents

**EN** · A multi-agent system for VS Code implementing Edward de Bono's **Six Thinking Hats** method. The Blue Hat orchestrates 5 specialized sub-agents, each with a distinct cognitive role.

**IT** · Un sistema multi-agente per VS Code che implementa il metodo **Sei Cappelli per Pensare** di Edward de Bono. Il Cappello Blu orchestra 5 agenti specializzati, ciascuno con un ruolo cognitivo distinto.

> **Requirements / Requisiti**: VS Code + GitHub Copilot extension (Custom Agents support)

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_Cappello_Blu-0098FF?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-blu.agent.md)
[![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install_Cappello_Blu-24bfa5?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-blu.agent.md)

---

## Install / Installa

Install **Cappello Blu** (orchestrator) — it's all you need to start the full system. The 5 worker agents can be installed individually if needed.

Installa il **Cappello Blu** (orchestratore): è sufficiente per avviare l'intero sistema. I 5 worker possono essere installati individualmente se necessario.

<!-- AGENTS-TABLE-START -->
| Agent | Role | Install |
|-------|------|---------|
| 🔵 **Cappello Blu** | Orchestrator / Orchestratore | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-blu.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-blu.agent.md) |
| 🤍 **Cappello Bianco** | Facts & data / Fatti e dati | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-bianco.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-bianco.agent.md) |
| 💛 **Cappello Giallo** | Opportunities / Opportunità | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-giallo.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-giallo.agent.md) |
| 🖤 **Cappello Nero** | Risks / Rischi | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-nero.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-nero.agent.md) |
| ❤️ **Cappello Rosso** | Emotions / Emozioni | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-rosso.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-rosso.agent.md) |
| 💚 **Cappello Verde** | Creativity / Creatività | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-verde.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%253A%252F%252Fraw.githubusercontent.com%252Fantoniobilotta%252F6-hats-agents%252Fmain%252Fagents%252Fcappello-verde.agent.md) |
<!-- AGENTS-TABLE-END -->

---

## How to use / Come si usa

**EN**

1. Click **Install in VS Code** on Cappello Blu
2. Open GitHub Copilot chat (`Ctrl+Shift+I` / `Cmd+Shift+I`)
3. Select the **Cappello Blu** agent from the agents picker
4. Describe your problem or decision to analyze

Cappello Blu automatically classifies the problem type, selects the optimal hat sequence, and orchestrates sub-agents one by one.

**IT**

1. Clicca **Install in VS Code** sul Cappello Blu
2. Apri la chat di GitHub Copilot in VS Code (`Ctrl+Shift+I`)
3. Seleziona l'agente **Cappello Blu** dal selettore agenti
4. Descrivi il tuo problema o la decisione da analizzare

Il Cappello Blu classifica automaticamente il tipo di problema, sceglie la sequenza di cappelli ottimale e orchestra i subagenti uno alla volta.

---

## Documentation / Documentazione

**EN** · For a deep dive into the Six Thinking Hats method (why parallel thinking, the seven standard sequences with examples, when NOT to use the method, common anti-patterns), see:

**IT** · Per un approfondimento sul metodo dei Sei Cappelli (perché parallel thinking, le sette sequenze standard con esempi, quando NON usarlo, anti-pattern comuni), consulta:

- 📘 [**docs/METODOLOGIA.md**](docs/METODOLOGIA.md) — Metodologia in dettaglio (IT)
- 🤝 [CONTRIBUTING.md](CONTRIBUTING.md) — How to contribute / Come contribuire
- 🔒 [SECURITY.md](SECURITY.md) — Security policy / Politica di sicurezza

---

## System / Struttura

```
Cappello Blu (orchestratore, user-invocable: true)
├── Cappello Bianco  → facts & data / fatti e dati      [search/codebase, read/readFile]
├── Cappello Giallo  → opportunities / opportunità       [—]
├── Cappello Nero    → risks / rischi                    [search/codebase, read/readFile]
├── Cappello Rosso   → emotions / emozioni               [—]
└── Cappello Verde   → creativity / creatività           [—]
```

---

## Manual install / Installazione manuale

```bash
mkdir -p .github/agents
curl -fsSL https://raw.githubusercontent.com/antoniobilotta/6-hats-agents/main/agents/cappello-blu.agent.md \
  -o .github/agents/cappello-blu.agent.md
# Repeat for all 6 agents / Ripeti per tutti e 6 i cappelli
```

---

## License / Licenza

The "Six Thinking Hats" method is a framework by Edward de Bono / The de Bono Group.  
These configuration files are released under the [MIT License](LICENSE) for personal and professional use.

Il metodo "Sei Cappelli per Pensare" è un framework di Edward de Bono / The de Bono Group.  
Questi file di configurazione sono rilasciati sotto [licenza MIT](LICENSE) per uso personale e professionale.
