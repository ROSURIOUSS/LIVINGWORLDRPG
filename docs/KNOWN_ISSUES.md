# KNOWN ISSUES (на 2026-11-13, из аудита)

| # | Проблема | Серьёзность | Статус |
|---|---|---|---|
| 1 | Blender MCP не подключён (`Could not connect to Blender`); исполняемый файл Blender в стандартных путях не найден | средняя (блокирует арт-пайплайн) | открыто |
| 2 | Лог: «Asset manager settings do not include a rule for assets of type GameFeatureData» (плагин GameFeatures включён, PrimaryAssetTypesToScan не настроен) | низкая сейчас, важна для Modular Gameplay | открыто, требует ADR+правки Config |
| 3 | Лог MCP: `Call to unknown method "server/discover"` (3 раза) | низкая | наблюдать |
| 4 | `LogAutomationTest: Condition failed` ×17 при старте редактора — причина не изучена | неизвестна | исследовать |
| 5 | `Config/DefaultGame.ini`: `ProjectName=First Person Template` | косметика | открыто |
| 6 | `Config/DefaultEngine.ini` в git содержит `SecurityToken` AndroidFileServer | низкая (локальный дев-токен), но не должно быть в репозитории | открыто, нужна ваша санкция на правку Config |
| 7 | `.gitattributes`: не покрыты `.exr .hdr .ubulk .uexp` и др.; нет `text=auto`/eol правил; файл с BOM | низкая | открыто |
| 8 | Тяжёлые рендер-настройки по умолчанию (RayTracing, Substrate, Lumen+VSM, DX12 SM6) без целевого «железа» | средняя для открытого мира | решить при ADR по производительности |
| 9 | `bUseSplitscreen=True` | косметика | открыто |
| 10 | `python` и `gh` не доступны из shell (python.exe не запускается; gh не установлен) | низкая | не требуется до PR-автоматизации |
| 11 | Шаблонные Variant_Horror/Variant_Shooter и редиректы `TP_FirstPerson` | техдолг | ADR-0010 |
| 12 | Mass-плагины не включены в проекте; пригодность в 5.8 не проверена | исследование | открыто |
| 13 | ModelContextProtocol/AllToolsets включены в .uproject без TargetAllowList=Editor | низкая | T-011 |
| 14 | PublicIncludePaths в Build.cs смешивают пути подпапок; границы модулей размыты | низкая | учесть в LW* модулях |
