# LIVINGWORLDRPG — инструкции для Claude Code

Живая фэнтези-планета (симуляция), в которой игрок — один из жителей. UE 5.8.4 (`D:/Game/UE_5.8`), C++, Git + LFS.
Репозиторий: github.com/ROSURIOUSS/LIVINGWORLDRPG. Проект: `D:\My game\LIVINGWORLDRPG`.

## Начало каждой сессии
1. Прочитай `PROJECT_STATUS.md` и `docs/TASKS.md`. Не начинай заново.
2. `git status -sb`, `git branch --show-current`. Работай в ветке `studio/*` или `feature/*`, не в `main`.
3. Фактическое состояние важнее документации; расхождения записывай в `docs/KNOWN_ISSUES.md`.

## Конец сессии
Обнови `PROJECT_STATUS.md`, `docs/TASKS.md`, закоммить, укажи незавершённое и следующий шаг.

## Жёсткие правила
- Ядро симуляции детерминировано от Seed (никакого `FMath::Rand`, `GetTime`, порядка итерации TMap в логике). См. `.claude/rules/determinism.md`.
- Игровое ядро — единственный источник истины. LLM/AETHER только предлагают; действие выполняется после проверки правил. Игра работает без интернета.
- Объективное состояние мира ≠ знания персонажа (`docs/TECHNICAL_ARCHITECTURE.md` §6).
- Нет циклических зависимостей модулей. Нет заглушек, выдаваемых за готовое. Не выдумывай результаты тестов.
- Не редактируй `.uasset/.umap` вручную; бинарные ассеты — через Unreal MCP. Не меняй `Config/*.ini` без записи в `docs/ARCHITECTURE_DECISIONS.md`.
- Спрашивай пользователя перед: удалением данных/файлов, force-push/переписью истории, платными API, сменой концепции, секретами в git.
- Статусы систем: NOT_STARTED, RESEARCH, DESIGNED, IN_PROGRESS, PROTOTYPE, IMPLEMENTED, TESTED, INTEGRATED, OPTIMIZED, DONE. DONE требует интеграции, тестов, актуальной документации.
- Статусы ADR: PROPOSED, APPROVED, IMPLEMENTED, TESTED, DEPRECATED. Не выдавай PROPOSED за реализованное.

## Инструменты
- Unreal MCP (`.mcp.json`, http://127.0.0.1:8000/mcp; редактор должен быть запущен). Вызов: `call_tool(toolset_name, tool_name, arguments)`.
- Blender MCP — требует запущенного Blender с аддоном (на момент 2026-11-13 не подключён).
- Context7 — документация библиотек. Для UE-специфики сверяйся с `D:/Game/UE_5.8/Engine` (исходники/плагины).
- Сборка: см. `/build`. Тесты: см. `/test`.

## Карта документов
`docs/VISION.md` · `TECHNICAL_ARCHITECTURE.md` · `AETHER_ARCHITECTURE.md` · `ARCHITECTURE_DECISIONS.md` · `ROADMAP.md` · `VERTICAL_SLICE.md` · `AGENT_ROSTER.md` · `DEVELOPMENT_WORKFLOW.md` · `MCP_INTEGRATION.md` · `TASKS.md` · `KNOWN_ISSUES.md` · `TECHNICAL_DEBT.md` · `AGENT_LOG.md` · `CHANGELOG.md`.
Остальные темы (магия, религия, язык, экология…) получают документ только когда начинается их разработка.

## Студия
- Studio Director = эта сессия. Агенты (`.claude/agents/`) подхватываются при старте сессии; после правки перезапусти сессию или `/agents`. Состав и права: `docs/AGENT_ROSTER.md`.
- Команды (skills): /studio /studio-plan /develop /audit /quality-gate /git-workflow /documentation-sync /architecture-review /world /history /npc /civilization /economy /politics /races /magic /aether /news /assets /blender /test /studio-review /optimize /build /report. Встроенные /plan и /review не переопределены — используй `studio-plan` и `studio-review`.
- Quality Gates и хуки: `docs/DEVELOPMENT_WORKFLOW.md`. MCP: `docs/MCP_INTEGRATION.md`. Журнал: `docs/AGENT_LOG.md`. Долг: `docs/TECHNICAL_DEBT.md`.
