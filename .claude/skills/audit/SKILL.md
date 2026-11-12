---
name: audit
description: Аудит проекта: Git, сборка, MCP, зависимости модулей, расхождения док/код.
disable-model-invocation: true
---
Аргумент: $ARGUMENTS (область, по умолчанию весь проект).
1. `git status -sb`, `git log --oneline -5`, `git lfs ls-files | wc -l`.
2. MCP: `list_toolsets`, `mcp__blender__get_addon_status`; сверь с `docs/MCP_INTEGRATION.md`.
3. Зависимости: прочитай все `*.Build.cs`, построй граф модулей, найди циклы; для области — граф include между подпапками Source.
4. Сверь `PROJECT_STATUS.md`/`TASKS.md` с фактическим кодом.
5. Новые находки → `docs/KNOWN_ISSUES.md`/`TECHNICAL_DEBT.md`; итог → отчёт (проверено / не проверено).
