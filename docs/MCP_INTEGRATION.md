# MCP INTEGRATION (проверено 2026-11-13)

| MCP | Статус | Доказательство | Кто пользуется |
|---|---|---|---|
| unreal-mcp (`.mcp.json`, http://127.0.0.1:8000/mcp) | **РАБОТАЕТ** при запущенном редакторе | `PluginToolset.ListEnabledPlugins`, `AssetTools.find_assets` вернули данные | unreal-engine-engineer, qa-engineer, performance-engineer, technical-artist, главная сессия |
| blender | **НЕ ПОДКЛЮЧЁН** | `Could not connect to Blender. Make sure the Blender addon is running.`; blender.exe в стандартных путях не найден | technical-artist (после подключения) |
| context7 (плагин) | загружен, **функционально не проверялся** | инструменты `resolve-library-id`, `query-docs` в списке | все инженеры для сторонних библиотек (не для API UE) |

## Вызов Unreal MCP
`call_tool(toolset_name="<Toolset>", tool_name="<Tool>", arguments={...})`; схемы: `describe_toolset(toolset_name=...)`. Префикс toolset в `tool_name` НЕ указывать. ~60 toolsets: Asset, Blueprint, Actor, Scene, DataTable, Material, StateTree, BehaviorTree, PCG, Niagara, UMG, GAS, Sequencer, AutomationTest, Config, Plugin, Logs и др.

## Ограничения и безопасность
- `ConfigSettingsToolset`/`PluginToolset`/`AssetTools.write_file|delete|move` изменяют проект: использовать только в задачах с записью в TASKS и после чтения целевого ассета.
- Правка .uasset/.umap только через MCP (хук блокирует прямую запись).
- Известный шум: `LogModelContextProtocol: Call to unknown method "server/discover"`.
- Если MCP недоступен: C++/конфиги — через файлы и CLI-сборку (`/build`); тесты — CLI `UnrealEditor-Cmd` (`/test`); арт — откладывается.
