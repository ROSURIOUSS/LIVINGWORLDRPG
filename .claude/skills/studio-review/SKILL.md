---
name: studio-review
description: Ревью текущего диффа независимым агентом.
disable-model-invocation: true
---
Запусти агента `code-reviewer` на `git diff main...HEAD`. Дополнительно: `git diff --stat`, поиск секретов в диффе, соответствие ADR и документации. Выведи находки по серьёзности.
