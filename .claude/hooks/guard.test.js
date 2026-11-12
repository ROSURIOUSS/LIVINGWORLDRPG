// Тест хука: node .claude/hooks/guard.test.js  (ожидаемые exit-коды зашиты в таблице)
const { spawnSync } = require("child_process");
const path = require("path");
const g = path.join(__dirname, "guard.js");
const P = "pu" + "sh";
const cases = [
  [{ tool_name: "Bash", tool_input: { command: `git ${P} --for` + `ce origin x` } }, 2],
  [{ tool_name: "Bash", tool_input: { command: `git ${P} origin main` } }, 2],
  [{ tool_name: "Bash", tool_input: { command: "git re" + "set --hard HEAD" } }, 2],
  [{ tool_name: "Bash", tool_input: { command: `git status && git ${P} -u origin studio/x` } }, 0],
  [{ tool_name: "Write", tool_input: { file_path: "D:\\p\\Content\\a.uasset" } }, 2],
  [{ tool_name: "Edit", tool_input: { file_path: "D:\\p\\Config\\DefaultEngine.ini" } }, 2],
  [{ tool_name: "Write", tool_input: { file_path: "D:\\p\\docs\\A.md" } }, 0],
  [{ tool_name: "Write", tool_input: { file_path: "D:\\p\\.env" } }, 2],
];
let fail = 0;
for (const [input, want] of cases) {
  const r = spawnSync("node", [g], { input: JSON.stringify(input), encoding: "utf8" });
  const ok = r.status === want;
  if (!ok) fail++;
  console.log((ok ? "PASS" : "FAIL") + ` want=${want} got=${r.status} ${JSON.stringify(input.tool_input).slice(0, 70)}`);
}
process.exit(fail ? 1 : 0);
