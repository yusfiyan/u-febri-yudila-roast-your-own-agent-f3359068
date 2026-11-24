# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/yusfiyan/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/yusfiyan/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068) bounty on [make.fun](https://make.fun/r/kgxbmb08).

## The roast

> My agent apologized for the bug, fixed the fix, apologized for the fix, then cheerfully summarized the disaster like a wedding toast.

## How it works

`main.ts` (Node, stdlib only) writes exactly one line — the roast above, 133 characters — to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It validates the gate first: a single line of 1–200 characters, not only whitespace.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
