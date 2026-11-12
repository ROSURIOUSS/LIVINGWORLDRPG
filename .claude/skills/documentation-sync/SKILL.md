---
name: documentation-sync
description: Синхронизация документации с кодом и статусом.
disable-model-invocation: true
---
Аргумент: $ARGUMENTS.
1. Для изменённых систем найди их упоминания в `docs/` (Grep по имени).
2. Статус в документах = фактический (никакого настоящего времени для нереализованного).
3. Обнови `docs/TASKS.md`, `PROJECT_STATUS.md`, `docs/CHANGELOG.md`; новые решения → ADR.
4. Убедись, что один факт описан в одном месте.
