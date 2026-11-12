---
name: develop
description: Реализация задачи из TASKS.md: код, сборка, тест, документация.
disable-model-invocation: true
---
Аргумент: $ARGUMENTS (ID задачи).
1. Прочитай задачу, ADR, rules. Создай ветку `feature/<id>-<slug>` или worktree: `git worktree add ../LW-<id> -b feature/<id>`.
2. Делегируй по зоне: C++ → unreal-engine-engineer, симуляция → simulation-engineer, AETHER → aether-engineer.
3. Реализуй минимально достаточно; затем `/build`, `/test`.
4. Обнови документацию и статус задачи (не выше фактически подтверждённого).
5. Вызови `code-reviewer`; исправь критичное; закоммить; подготовь описание PR.
