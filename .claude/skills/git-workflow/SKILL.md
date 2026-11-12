---
name: git-workflow
description: Безопасный Git-процесс: ветка, worktree, коммит, PR, интеграция.
disable-model-invocation: true
---
Аргумент: $ARGUMENTS (start|commit|integrate <ветка>).
- start: `git switch -c feature/<id>-<slug>` или `git worktree add ../LW-<id> -b feature/<id>` (один агент на worktree).
- commit: `git diff --stat`; добавляй файлы поимённо (не `git add -A`), без секретов и без пользовательских чужих правок; сообщение «что и зачем».
- integrate: проверь `git diff main...<ветка>`, `/quality-gate`, затем PR (`gh` не установлен — подготовь описание и запушь ветку после согласия пользователя). Прямой push в main и force-push запрещены хуком.
