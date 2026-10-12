# 🎩 Six Thinking Hats — Claude plugin

Claude port of the GitHub Copilot agents in [`../agents`](../agents). Same architecture: the **Blue Hat** orchestrates five isolated hat workers.

```
six-hats (skill, invoked by the user)   ← Blue Hat / Cappello Blu
├── white-hat   agent → facts & data          [Read, Grep, Glob, WebSearch, WebFetch]
├── yellow-hat  agent → value & opportunities [no tools]
├── black-hat   agent → risks                 [Read, Grep, Glob]
├── red-hat     agent → emotions              [no tools]
└── green-hat   agent → creativity            [WebSearch, WebFetch]
```

There is **no inline fallback** on purpose: if the hat agents are not loaded, the Blue Hat stops and says so instead of playing the hats itself. That keeps it obvious what actually works on each surface.

## Where it runs

| Surface | Skill (Blue) | Agents (hats) | Result |
|---|---|---|---|
| Chat (web, desktop Chat tab, mobile) | ✅ | ❌ ignored | Blue stops at preflight |
| Cowork / agentic sessions | ✅ | ✅ | Full session |
| Claude Code | ✅ | ✅ | Full session |

Source: [Plugin feature support across platforms](https://claude.com/docs/plugins/platform-support).

## Install

**From GitHub (marketplace)** — the repo root has `.claude-plugin/marketplace.json`:
1. claude.ai or desktop app → **Customize › Plugins › Add › Add marketplace**
2. Enter `antoniobilotta/6-hats-agents`
3. Add **six-hats** from the list

The plugin syncs to your account, so Claude Code gets it too at next session start (`/reload-plugins` to load it immediately).

**From a file** — zip this `claude-plugin/` folder and use **Add › Upload plugin**.

**Claude Code only** — in one step:

```
/plugin install six-hats --marketplace antoniobilotta/6-hats-agents
```

or `claude --plugin-dir ./claude-plugin` to try the local folder for a single session.

## Use

```
/six-hats <problem or decision>
/six-hats quick feedback: <plan to review>      # skips type confirmation
```

The Blue Hat restates the problem, proposes an activity type and sequence, **waits for your confirmation**, then runs the hats one at a time and closes with a synthesis and 3 next steps.

## Isolated hats

Hat agents can see the user's personal memory: the environment injects it into every subagent, and no agent frontmatter field turns it off. In the first test (v0.1.0) Yellow, Black and White used personal facts that were not in their prompts.

Since v0.2.0 the hats are **isolated by instruction**: each agent has a *Context boundary* section (use only what the Blue Hat passes), and the Blue Hat builds that context only from what the user said in the session and checks for *context leaks* during arbitration. This is a prompt-level guarantee, not a technical one.

## Test checklist

Results per surface. Agentic sessions tested on 2026-10-12: v0.1.0 (home lab domain choice) and v0.2.0 (renovation: one contractor vs separate firms).

| Check | Agentic session (cloud) | Claude Code | Plain chat |
|---|---|---|---|
| **Preflight**: Blue stops and reports missing agents | n/a | n/a | ⬜ |
| **Agents loaded** as `six-hats:<hat>` | ✅ | ⬜ | n/a |
| **Real delegation**: each hat is a subagent run | ✅ | ⬜ | n/a |
| **Sequential**, never parallel | ✅ | ⬜ | n/a |
| **Tool restrictions**: `red-hat` with `tools: []` has no tools | ✅ (the agent list shows "All tools", but at runtime Red had none) | ⬜ (docs: an empty list may make the agent fail to launch) | n/a |
| **Type confirmation** before the first agent | ✅ | ⬜ | n/a |
| **Re-confirmation** when the problem changes | ✅ v0.2.0 (❌ in v0.1.0) | ⬜ | n/a |
| **Arbitration** of out-of-role hats | ⚠️ v0.2.0: Yellow introduced a hybrid option and Blue did not flag it; check added in v0.2.1, to retest | ⬜ | n/a |
| **Context passing**: Red gets the plan, Black gets Yellow | ✅ | ⬜ | n/a |
| **Isolation**: no personal facts outside the prompt | ✅ v0.2.0, even with a memory-heavy topic (❌ in v0.1.0) | ⬜ | n/a |
| **Clean output**: no memory-saving proposals | ✅ v0.2.0 (❌ in v0.1.0) | ⬜ | n/a |

If `red-hat` or `yellow-hat` fail to launch in Claude Code because of the empty `tools` list, replace it with a single tool that reads no data and has no web access.

## Differences from the Copilot version

| Copilot (`agents/*.agent.md`) | Claude plugin |
|---|---|
| `cappello-blu` agent, `user-invocable: true` | `six-hats` **skill** (the Blue Hat) |
| Workers `user-invocable: false` | Agents with a description saying "invoked by the six-hats skill only" — Claude can't hide them, so they are visible in the agent list |
| `agents: [...]` on the Blue Hat | No equivalent: the skill names the five agents explicitly |
| `model: Claude Sonnet 4.6 (copilot)` | `model: inherit` (uses the session model) |
| `search/codebase`, `read/readFile`, `search` | `Read`, `Grep`, `Glob`, `WebSearch`, `WebFetch` |
| Blue's sequence default ("Choosing Between Alternatives") | Blue always asks for confirmation, per `llm-wiki/wiki/decisions/architettura_agenti.md` |
| — | Fit check, anti-pattern arbitration checklist and synthesis self-check from `docs/METODOLOGIA.md` |

## License

The Six Thinking Hats method is by Edward de Bono / The de Bono Group. These files are MIT-licensed, like the rest of the repo.
