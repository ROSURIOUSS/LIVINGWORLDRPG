// Stop hook: не блокирует; печатает напоминание, если есть изменения без обновления статуса.
const { execSync } = require("child_process");
const sh = c => { try { return execSync(c, { encoding: "utf8" }).trim(); } catch { return ""; } };
const dirty = sh("git status --porcelain").split("\n").filter(Boolean);
if (!dirty.length) process.exit(0);
const touched = f => dirty.some(l => l.includes(f));
const msgs = [`Незакоммиченных изменений: ${dirty.length} (ветка ${sh("git branch --show-current")}).`];
if (!touched("PROJECT_STATUS.md")) msgs.push("PROJECT_STATUS.md не обновлён в этой сессии.");
if (!touched("TASKS.md")) msgs.push("docs/TASKS.md не обновлён.");
console.log(JSON.stringify({ systemMessage: "[LW] " + msgs.join(" ") }));
