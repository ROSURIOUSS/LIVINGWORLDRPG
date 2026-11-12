---
name: test
description: Запуск тестов: Automation, детерминизм, save/load.
disable-model-invocation: true
---
Аргумент: $ARGUMENTS (фильтр).
Через Unreal MCP: toolset `AutomationTestToolset.AutomationTestToolset` → DiscoverTests, ListTests, RunTests, GetTestStatus/GetTestResults. Либо CLI: `D:/Game/UE_5.8/Engine/Binaries/Win64/UnrealEditor-Cmd.exe "D:/My game/LIVINGWORLDRPG/LIVINGWORLDRPG.uproject" -ExecCmds="Automation RunTests LIVINGWORLD; Quit" -unattended -nullrhi -log`. Приводи фактический вывод; провалы → KNOWN_ISSUES.
