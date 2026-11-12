# PROJECT STATUS (обновлено 2026-11-13)

**Фаза:** 2 (Architecture Foundation) — ADR утверждены частично; T-006 (LWCore) READY, реализация не начата.
**Прогресс:** методика — доля фаз ROADMAP со статусом ≥ TESTED. Сейчас 0/11 (кода симуляции нет). Общий процент игры ≈ 0%.

## Статусы ключевых задач (источник — docs/TASKS.md)
- T-002 AI Studio — **REVIEW** (файлы и хуки проверены; ни один кастомный агент не выполнял реальную задачу).
- T-003 ADR — DONE: APPROVED 0001, 0002, 0003, 0005, 0006, 0009, 0010; PROPOSED 0004, 0007, 0008.
- T-004 Blender MCP — DONE (Blender 5.3.0, аддон 2.0).
- T-006 LWCore — READY (план: docs/plans/T-006_LWCore.md).
- T-008 Config, T-011 .uproject — REVIEW (изменено и проверено UBT-экспортом; запуск редактора и сборка не выполнялись).

## Реально существует
- Шаблон UE 5.8.4 First Person + Variant_Horror/Shooter (C++ ~45 файлов, 29 BP, 3 карты) — сохранён (ADR-0010).
- Git: `main` = `origin/main` (5d63195), LFS 542 файла, fsck OK. Рабочая ветка `studio/infrastructure`.
- MCP: Unreal — работает; Blender — работает; Context7 — загружен, не проверялся.
- Тулчейн: UE `D:/Game/UE_5.8`, MSVC (`D:/VisualStudio2022`), node, uv. Нет: CMake, gh, рабочего python.

## Прототипы / реализованные системы симуляции
Нет.

## Критические ошибки
Нет. См. docs/KNOWN_ISSUES.md.

## Не проверено
Загрузка изменённых Config/.uproject самим редактором; полная пересборка; кастомные агенты в деле; Context7.

## Блокеры
Нет жёстких. Решения директора ожидаются по ADR-0004/0007/0008 (не блокируют T-006).

## Ветки / агенты
`main` 5d63195; `studio/infrastructure` (см. git log). Активных агентов нет.

## Следующая задача
T-006 шаг 1: Id + Hash + Assert + тестовый раннер (`Source/LWCore`).
