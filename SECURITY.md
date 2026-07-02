# Security Policy / Politica di sicurezza

## Reporting a Vulnerability / Segnalare una vulnerabilità

**EN**

If you believe you have found a security issue in this repository (for example,
an agent prompt that leaks credentials, an install badge that redirects to a
malicious target, or a build script vulnerability), **please do not open a
public issue**.

Instead, report it privately using GitHub's [private vulnerability reporting](https://github.com/antoniobilotta/6-hats-agents/security/advisories/new).

Please include:

- A clear description of the issue
- Steps to reproduce (agent file, prompt, or command)
- Potential impact
- Your suggested remediation (if any)

**IT**

Se pensi di aver trovato un problema di sicurezza in questo repository (per
esempio, un prompt di un agente che espone credenziali, un badge di installazione
che redirige a target malevoli, o una vulnerabilità nello script di build),
**non aprire una issue pubblica**.

Segnala il problema in privato tramite il [private vulnerability reporting di GitHub](https://github.com/antoniobilotta/6-hats-agents/security/advisories/new).

Includi:

- Una descrizione chiara del problema
- Passi per riprodurlo (file agente, prompt, o comando)
- Impatto potenziale
- Un suggerimento di rimedio (se ne hai uno)

## Scope / Ambito

**In scope**
- Agent prompt injection or data leakage
- Malicious install URL redirections in the README
- Vulnerabilities in `eng/update-readme.mjs`

**Out of scope**
- Bugs unrelated to security (open a regular issue)
- Issues in GitHub Copilot itself → report to [GitHub Security](https://bounty.github.com/)
- Issues in VS Code itself → report to [Microsoft MSRC](https://msrc.microsoft.com/)

## Response Time / Tempi di risposta

We aim to acknowledge reports within **7 days** and provide a remediation plan
within **30 days** for confirmed vulnerabilities.

Cercheremo di prendere in carico le segnalazioni entro **7 giorni** e di fornire
un piano di risoluzione entro **30 giorni** per le vulnerabilità confermate.
