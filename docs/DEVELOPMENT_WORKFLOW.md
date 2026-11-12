# DEVELOPMENT WORKFLOW

## Git
- `main` — стабильная; прямой push заблокирован хуком. Ветки: `feature/<id>-<slug>`, `fix/*`, `studio/*`, `art/*`.
- Агенты: `git worktree add ../LW-<id> -b feature/<id>` (рядом с проектом, вне репозитория). Один worktree — один агент.
- Коммиты небольшие, сообщение: что и зачем. PR в main; перед слиянием: `/build`, `/test`, `/studio-review`.
- Без force-push и переписи истории (запрещено в `settings.json` и хуком).
- Git LFS: `.uasset/.umap/.fbx/.blend/.png/.tga/.psd/.wav/.mp3/.ogg/.mp4` (см. `.gitattributes`). Известные пробелы: см. KNOWN_ISSUES.
- Бинарные ассеты не мержатся: один владелец на ассет/карту; при многопользовательской работе — `git lfs lock`.

## Определение готовности
Статус задачи — по шкале NOT_STARTED…DONE (CLAUDE.md). Статус повышается только подтверждённым действием (сборка, тест, интеграция).

## Сессии
Начало: прочитать PROJECT_STATUS.md и TASKS.md. Конец: обновить их, закоммитить, указать «следующий шаг».

## Сборка и тесты
`/build`, `/test`. Редактор UE держит DLL: закрывать перед CLI-сборкой или использовать Live Coding.

## Quality Gates (обязательны перед статусом DONE; исполняет `/quality-gate`)
1. **Architecture** — соответствие ADR/TECHNICAL_ARCHITECTURE, нет циклов зависимостей модулей, указан владелец данных. Вердикт: `technical-director`.
2. **Implementation** — код реален (нет заглушек под видом готового), обработка ошибок, нет секретов. Вердикт: `code-reviewer`.
3. **Testing** — unit/automation/регрессия/детерминизм, `/build` без ошибок. Вердикт: `qa-engineer`, реальный вывод.
4. **Integration** — совместимость модулей, сохранений и публичных интерфейсов. Вердикт: `lead-cpp-engineer`.
5. **Documentation** — TASKS, PROJECT_STATUS, ADR, CHANGELOG актуальны. Вердикт: `producer`.
Пропуск гейта = статус не выше IMPLEMENTED.

## Интеграционный процесс
Task → Branch/Worktree → Implementation → Tests → Review (Gate 1–4) → Integration (studio-director, merge в main через PR) → Documentation (Gate 5) → Status Update.

## Иерархия и ограничения Claude Code
Субагенты Claude Code не могут порождать других субагентов. Поэтому: **Studio Director = главная сессия**; «руководители отделов» (technical-director, game-director, producer, lead-cpp-engineer) — агенты-контролёры/исполнители, которых вызывает главная сессия; делегирование идёт только сверху вниз за один шаг. Параллелизм — несколько агентов одновременно, каждый в своём worktree.

## Хуки (`.claude/settings.json`, `.claude/hooks/`)
- PreToolUse `guard.js` (Bash/Write/Edit): блок force-push, push в main, деструктивных git-команд, записи в .uasset/.umap, правки Config/Default*.ini без `LW_ALLOW_CONFIG=1`, секретных файлов. Тест: `node .claude/hooks/guard.test.js`.
- Stop `session-end.js`: напоминание об обновлении PROJECT_STATUS/TASKS и о незакоммиченных изменениях (не блокирует).
Тяжёлые проверки (сборка/тесты) в хуки не вынесены намеренно — запускаются командами `/build`, `/test`.
