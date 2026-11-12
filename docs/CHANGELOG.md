# CHANGELOG

## 2026-11-13 — ветка `studio/infrastructure`
- Добавлены: CLAUDE.md, PROJECT_STATUS.md, `.claude/{settings.json,hooks/guard.js,rules,agents,skills}`, docs/*.
- Исходный код и контент не изменялись.
- Добавлены: хуки guard/session-end (+тест), 11 агентов, 25 skills, MCP_INTEGRATION, AGENT_ROSTER, AGENT_LOG, TECHNICAL_DEBT, audits/CPP_DEPENDENCIES.

## 2026-11-13 (позже)
- ADR: 0001, 0002, 0003, 0005, 0006, 0009, 0010 → APPROVED; план T-006.
- Config: ProjectName → LIVINGWORLDRPG; SecurityToken очищен; добавлено правило Asset Manager для GameFeatureData; `.gitattributes` — доп. LFS-паттерны.
- .uproject: ModelContextProtocol и AllToolsets → TargetAllowList [Editor]; добавлен EnhancedInput. Версия UE и существующие плагины не менялись.
