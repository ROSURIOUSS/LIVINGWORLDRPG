---
name: studio
description: Состояние студии: Git, сборка, MCP, статус систем, задачи.
disable-model-invocation: true
---
1. Прочитай `PROJECT_STATUS.md` и `docs/TASKS.md`.
2. Выполни `git status -sb`, `git branch -vv`, `git log --oneline -10`, `git worktree list`.
3. Проверь MCP: `mcp__unreal-mcp__list_toolsets` (жив ли редактор), `mcp__blender__get_addon_status`.
4. Сверь статусы систем в PROJECT_STATUS с кодом (`Source/`). Расхождения → `docs/KNOWN_ISSUES.md`.
5. Выведи таблицу: ветка, чистота дерева, MCP, текущая фаза, топ-3 задачи, блокеры.
