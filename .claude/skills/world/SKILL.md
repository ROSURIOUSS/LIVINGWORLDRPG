---
name: world
description: Генерация и проверка планеты/региона по Seed.
disable-model-invocation: true
---
Аргумент: $ARGUMENTS (seed, масштаб).
1. Проверь, реализован ли модуль WorldGeneration (PROJECT_STATUS). Если нет — сообщи NOT_STARTED и предложи задачу ROADMAP Phase 3.
2. Иначе запусти генерацию через автотест/commandlet с Seed, выведи хэш состояния и метрики (время, память).
3. Повтори с тем же Seed (хэши совпадают) и с другим (отличаются). Запиши результат в `docs/PERFORMANCE.md`.
