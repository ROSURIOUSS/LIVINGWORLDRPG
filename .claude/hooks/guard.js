// PreToolUse guard (см. docs/MCP_INTEGRATION.md и DEVELOPMENT_WORKFLOW.md).
// Блокирует: force-push, деструктивные git-операции, push в main, прямую запись в .uasset/.umap,
// правку Config/Default*.ini без LW_ALLOW_CONFIG=1 и запись в файлы, похожие на секреты.
// Exit code 2 = блокировка, сообщение уходит агенту через stderr.
let raw = "";
process.stdin.on("data", d => (raw += d));
process.stdin.on("end", () => {
  let e;
  try { e = JSON.parse(raw); } catch { process.exit(0); }
  const i = e.tool_input || {};
  const block = m => { console.error("BLOCKED by guard.js: " + m); process.exit(2); };
  if (e.tool_name === "Bash") {
    const c = i.command || "";
    if (/git\s+push\b.*(--force|--force-with-lease|\s-f\b)/.test(c)) block("force push запрещён");
    if (/git\s+(reset\s+--hard|clean\s+-[a-z]*f|filter-branch|rebase\s+-i)/.test(c)) block("деструктивная git-операция требует согласования");
    if (/git\s+push\b.*\borigin\s+(\S+:)?main\b/.test(c)) block("прямой push в main запрещён; используйте PR");
  } else {
    const p = (i.file_path || "").split("\\").join("/");
    if (/\.(uasset|umap)$/i.test(p)) block("бинарные ассеты редактируются только через Unreal MCP");
    if (/\/Config\/Default[A-Za-z]*\.ini$/.test(p) && !process.env.LW_ALLOW_CONFIG) block("правка Config/*.ini требует записи в ARCHITECTURE_DECISIONS.md (задайте LW_ALLOW_CONFIG=1)");
    if (/(^|\/)\.env$|\.pem$|secret/i.test(p)) block("файл похож на секрет");
  }
  process.exit(0);
});
