---
name: quality-gate
description: Прогон Quality Gates 1–5 для задачи перед статусом DONE.
disable-model-invocation: true
---
Аргумент: $ARGUMENTS (ID задачи).
Последовательно, остановка на первом FAIL:
1. Gate 1 — агент `technical-director` на `git diff main...HEAD`.
2. Gate 2 — агент `code-reviewer`.
3. Gate 3 — `/build`, затем `/test`; приложи реальный вывод.
4. Gate 4 — агент `lead-cpp-engineer`: интерфейсы, сохранения, зависимые системы.
5. Gate 5 — агент `producer`: TASKS, PROJECT_STATUS, ADR, CHANGELOG.
Результат — таблица гейт/вердикт/доказательство; DONE ставится только при 5×PASS. Запись в `docs/AGENT_LOG.md`.
