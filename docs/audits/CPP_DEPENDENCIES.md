# Аудит зависимостей C++ модуля LIVINGWORLDRPG (T-010, 2026-11-13)
Исполнитель: general-purpose в роли code-reviewer (кастомные агенты тогда ещё не были загружены). Проверка: главный агент перепроверил grep'ом пункты, отмеченные ✔. Сборка не запускалась.

## Build.cs
- Все модули используются: EnhancedInput, AIModule, StateTreeModule, GameplayStateTreeModule, UMG, Slate (SVirtualJoystick ✔ во всех трёх PlayerController).
- InputCore (`Build.cs:15`) по include не подтверждён ✔ (нигде в коде не упомянут) — безвреден, оставлен шаблоном.
- Всё лежит в `PublicDependencyModuleNames`; наружу не используется — для игрового модуля допустимо, для будущих LW* библиотек использовать Private.
- `PublicIncludePaths` (`Build.cs:26-34`) перечисляют подпапки Variant_*; код смешивает "Variant_X/…" и короткие include'ы — скрывает границы.

## Граф include
- Корень не включает Variant_*.
- Заголовки Shooter ✔ включают только корневые `LIVINGWORLDRPGCharacter.h` и `ShooterWeaponHolder.h`. Horror ↔ Shooter не связаны.
- `.cpp` AI/Characters включают `ShooterGameMode.h` ✔ (`ShooterNPC.cpp:10`, `ShooterNPCSpawner.cpp:12`, `ShooterCharacter.cpp:15`) — зависимость «вверх», цикла в заголовках нет. Остальные перекрёстные `.cpp`-ссылки (GameMode↔PlayerController↔Character) заявлены агентом, мной не перепроверялись.

## .uproject
- StateTree и GameplayStateTree включены ✔.
- EnhancedInput явно не указан (в UE 5 включён по умолчанию; на 5.8 не проверялось).
- ModelContextProtocol и AllToolsets включены ✔ без `TargetAllowList` — могут попасть в Game-сборку; нужно ограничить Editor (требует санкции на правку, T-008).

## Рекомендации (в TASKS: T-008/T-011)
1. Ограничить MCP-плагины `TargetAllowList: [Editor]`. 2. Явно указать EnhancedInput. 3. Для новых модулей LW* — Private-зависимости и чистые include-пути без PublicIncludePaths на подпапки.
