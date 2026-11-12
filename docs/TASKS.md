# TASKS
Приоритеты: CRITICAL/HIGH/MEDIUM/LOW. Статусы: BACKLOG · READY · IN_PROGRESS · REVIEW · BLOCKED · DONE. Задача не назначается, пока зависимости не DONE.

| ID | Задача | Приор. | Статус | Агент | Зависит | Файлы | Приёмка / тест |
|---|---|---|---|---|---|---|---|
| T-001 | Аудит проекта и окружения | HIGH | DONE | studio-director | — | docs/KNOWN_ISSUES.md | отчёт 2026-11-12 |
| T-002 | Инфраструктура студии | HIGH | REVIEW | studio-director | T-001 | CLAUDE.md, .claude/**, docs/** | хук 8/8; T-010 пройден; кастомные агенты видны после перезапуска, но ни один не запущен в деле |
| T-010 | Тестовый workflow: аудит зависимостей C++ модуля | MEDIUM | DONE | general-purpose (роль code-reviewer) | T-002 | docs/audits/CPP_DEPENDENCIES.md | отчёт с file:line, выборочно перепроверен |
| T-003 | Утвердить ADR-0001…0010 | CRITICAL | BLOCKED (решение пользователя) | пользователь | T-002 | docs/ARCHITECTURE_DECISIONS.md | статусы APPROVED |
| T-004 | Подключить Blender MCP | MEDIUM | BLOCKED (пользователь) | пользователь | — | — | `get_addon_status` OK |
| T-005 | Исследование Mass Entity в UE 5.8 (10k сущностей) | HIGH | BACKLOG | unreal-engine-engineer | T-003 | docs/research/MASS.md | замеры |
| T-006 | S1 LWCore (ID/RNG/Time/Events/Commands) | CRITICAL | BACKLOG | lead-cpp-engineer | T-003 | Source/LWCore/** | автотесты RNG/ID/порядка |
| T-007 | S2 тестовый харнесс | HIGH | BACKLOG | qa-engineer | T-006 | Source/LWTests/** | хэш состояния воспроизводим |
| T-008 | Чистка конфигов (ProjectName, token, GameFeatureData, gitattributes) | LOW | BLOCKED (санкция на Config) | unreal-engine-engineer | T-003 | Config/*.ini, .gitattributes | `/build`, запуск редактора |
| T-009 | Вертикальный срез S3…S10 | HIGH | BACKLOG | см. VERTICAL_SLICE | T-006,T-007 | — | docs/VERTICAL_SLICE.md |
| T-011 | Ограничить MCP-плагины Editor-only и добавить EnhancedInput в .uproject | LOW | BLOCKED (санкция на правку .uproject) | unreal-engine-engineer | T-003 | LIVINGWORLDRPG.uproject | редактор открывается, `/build` OK |
