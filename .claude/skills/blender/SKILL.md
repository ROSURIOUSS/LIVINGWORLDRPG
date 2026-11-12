---
name: blender
description: Blender: проверка соединения и пайплайн ассетов.
disable-model-invocation: true
---
Аргумент: $ARGUMENTS.
1. `mcp__blender__get_addon_status`. При "Could not connect" сообщи: запустить Blender и включить аддон (Preferences > Add-ons > Blender MCP); остановись.
2. Иначе `get_scene_info` и делегируй `technical-artist`. *.blend и FBX идут в Git LFS.
