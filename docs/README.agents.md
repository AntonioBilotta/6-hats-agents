# 🎩 Six Thinking Hats — GitHub Copilot Agents

Un sistema multi-agente per VS Code che implementa il metodo **Sei Cappelli per Pensare** di Edward de Bono. Il Cappello Blu orchestra 5 agenti specializzati, ciascuno con un ruolo cognitivo distinto.

> **Requisiti**: VS Code + estensione GitHub Copilot (con supporto Custom Agents)

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_Cappello_Blu-0098FF?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_blu.agent.md)
[![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install_Cappello_Blu-24bfa5?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_blu.agent.md)

---

## Installazione in un click

Installa il **Cappello Blu** (orchestratore): è sufficiente per avviare l'intero sistema.

| Agente | Ruolo | Installa |
|--------|-------|----------|
| 🔵 Cappello Blu | Orchestratore — avvia la sessione | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_blu.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_blu.agent.md) |
| 🤍 Cappello Bianco | Fatti, dati e lacune informative | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_bianco.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_bianco.agent.md) |
| 💛 Cappello Giallo | Valore, opportunità e ottimismo logico | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_giallo.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_giallo.agent.md) |
| 🖤 Cappello Nero | Rischi, criticità e avvocato del diavolo | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_nero.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_nero.agent.md) |
| ❤️ Cappello Rosso | Emozioni, intuizioni e reazioni viscerali | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_rosso.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_rosso.agent.md) |
| 💚 Cappello Verde | Creatività deliberata e pensiero laterale | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_verde.agent.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/agent?url=vscode-insiders%3Achat-agent%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FYOUR_USERNAME%2Fsix-hats-agents%2Fmain%2Fagents%2Fcappello_verde.agent.md) |

---

## Come si usa

1. Clicca **Install in VS Code** sul Cappello Blu (e sui 5 worker se vuoi installarli individualmente)
2. Apri la chat di GitHub Copilot in VS Code (`Ctrl+Shift+I`)
3. Seleziona l'agente **Cappello Blu** dal selettore agenti
4. Descrivi il tuo problema o la decisione da analizzare

Il Cappello Blu classifica automaticamente il tipo di problema, sceglie la sequenza di cappelli ottimale e orchestra i subagenti uno alla volta.

---

## Installazione manuale

In alternativa ai badge, copia i file nella directory `.github/agents/` del tuo progetto:

```bash
mkdir -p .github/agents
curl -fsSL https://raw.githubusercontent.com/YOUR_USERNAME/six-hats-agents/main/agents/cappello_blu.agent.md \
  -o .github/agents/cappello_blu.agent.md
# ripeti per gli altri 5 cappelli
```

---

## Struttura del sistema

```
Cappello Blu (orchestratore, user-invocable: true)
├── Cappello Bianco  → fatti e dati         [tools: search, read]
├── Cappello Giallo  → opportunità           [tools: nessuno]
├── Cappello Nero    → rischi                [tools: search, read]
├── Cappello Rosso   → emozioni              [tools: nessuno]
└── Cappello Verde   → creatività            [tools: nessuno]
```

---

## Licenza

Il metodo "Sei Cappelli per Pensare" è un framework di Edward de Bono / The de Bono Group.
Questi file di configurazione sono rilasciati sotto licenza MIT per uso personale e professionale.
