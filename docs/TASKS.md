# TASKS
Приоритеты: CRITICAL/HIGH/MEDIUM/LOW. Статусы: BACKLOG · READY · IN_PROGRESS · REVIEW · BLOCKED · DONE. Задача не назначается, пока зависимости не DONE.

| ID | Задача | Приор. | Статус | Агент | Зависит | Файлы | Приёмка / проверка |
|---|---|---|---|---|---|---|---|
| T-001 | Аудит проекта и окружения | HIGH | DONE | studio-director | — | docs/KNOWN_ISSUES.md | отчёт 2026-11-12 |
| T-002 | Инфраструктура студии (AI Studio) | HIGH | **REVIEW** | studio-director | T-001 | CLAUDE.md, .claude/**, docs/** | хук 8/8, frontmatter 36/36, T-010 пройден общим агентом; ни один кастомный агент ещё не выполнил реальную задачу — **не DONE** |
| T-003 | Утвердить ADR | CRITICAL | DONE | технический директор | T-002 | docs/ARCHITECTURE_DECISIONS.md | APPROVED: 0001, 0002, 0003, 0005, 0006, 0009, 0010; PROPOSED: 0004, 0007, 0008 |
| T-004 | Подключить Blender MCP | MEDIUM | DONE | пользователь | — | — | `get_addon_status`: Blender 5.3.0, аддон 2.0; `get_scene_info`: дефолтная сцена, ничего не менялось |
| T-005 | Исследование Mass Entity в UE 5.8 (10k сущностей) | HIGH | BACKLOG | unreal-engine-engineer | ADR-0004 | docs/research/MASS.md | замеры |
| T-006 | S1 LWCore (ID/RNG/WorldTime/Events/Commands/Version), чистый C++ без UE | CRITICAL | **READY** | lead-cpp-engineer | T-003 | Source/LWCore/** | план `docs/plans/T-006_LWCore.md`; реализация не начата |
| T-007 | S2 тестовый харнесс | HIGH | BACKLOG | qa-engineer | T-006 | Source/LWTests/** | хэш состояния воспроизводим |
| T-008 | Правка конфигов (ProjectName, SecurityToken, GameFeatureData, .gitattributes) | LOW | **REVIEW** | studio-director | T-003 | Config/DefaultEngine.ini, Config/DefaultGame.ini, .gitattributes | diff показан, ключи не удалялись; второй экземпляр редактора загрузил проект без ошибки GameFeatureData; **ждёт решения директора по SecurityToken** (пустое значение отключает требование токена, см. KNOWN_ISSUES #6) |
| T-009 | Вертикальный срез S3…S10 | HIGH | BACKLOG | см. VERTICAL_SLICE | T-006, T-007 | — | docs/VERTICAL_SLICE.md |
| T-010 | Тестовый workflow: аудит зависимостей C++ | MEDIUM | DONE | general-purpose (роль code-reviewer) | T-002 | docs/audits/CPP_DEPENDENCIES.md | выборочно перепроверен |
| T-011 | MCP-плагины только Editor, явный EnhancedInput в .uproject | LOW | DONE | studio-director | T-003 | LIVINGWORLDRPG.uproject | 2026-11-13: UBT JsonExport (Game без модулей ModelContextProtocol, Editor с ними); сборка Game-цели `Result: Succeeded`; второй экземпляр редактора смонтировал EnhancedInput и ModelContextProtocol без ошибок плагинов. Не проверено: пересборка Editor-цели при закрытом редакторе |
