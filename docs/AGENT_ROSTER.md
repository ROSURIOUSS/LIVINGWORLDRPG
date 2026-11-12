# AGENT ROSTER

Иерархия (реальная, с учётом ограничений Claude Code — субагенты не порождают субагентов):
- **L1 Studio Director** = главная сессия Claude Code. Единственный владелец общей архитектуры, планирует, делегирует, интегрирует, сливает.
- **L2 контролёры/руководители** (агенты): technical-director, game-director, producer, lead-cpp-engineer.
- **L3 исполнители** (агенты): unreal-engine-engineer, simulation-engineer, aether-engineer, qa-engineer, performance-engineer, technical-artist; code-reviewer — независимый ревьюер.

| Агент (`.claude/agents/`) | Зона | Права | Не может |
|---|---|---|---|
| technical-director | Gate 1, ADR | чтение | править код |
| game-director | соответствие VISION | чтение | править код |
| producer | TASKS/PROJECT_STATUS/ROADMAP | чтение, правка docs | менять архитектуру |
| lead-cpp-engineer | стандарты C++, ядро-контракты, Gate 4 | Source/** | UObject в ядре, обход ADR |
| unreal-engine-engineer | UE-слой, Build.cs, сборка | Source/**, MCP | .uasset вручную, Config без ADR |
| simulation-engineer | ядро симуляции | Source/** (Core/Sim/World) | недетерминизм, LLM-вызовы |
| aether-engineer | LWAether | Source/** | запись в мир в обход валидатора |
| qa-engineer | тесты, Gate 3 | Source/**/Tests, MCP-тесты | скрывать падения |
| performance-engineer | замеры | бенчмарки, docs/PERFORMANCE.md | заявлять о масштабе без замеров |
| code-reviewer | Gate 2 | только чтение | правки |
| technical-artist | Blender/ассеты | Blender MCP, UE MCP | коммит ассетов без PROTOTYPE-метки |

**Отложены до старта своих фаз** (не создаются «для красоты»): world-generation, npc, biology, society, economy, civilization, culture, ecology, save-system, tools, aether-* подроли, design-отдел, art-отдел (кроме technical-artist), build-engineer (функцию пока выполняет `/build`).

Правила: один файл — один агент одновременно; общие контракты (LWCore) меняет только Studio Director; отчёт каждого агента в формате «сделано/проверено/не сделано/риски».
Задачи — `docs/TASKS.md`; состояние — `PROJECT_STATUS.md`; журнал — `docs/AGENT_LOG.md`.
