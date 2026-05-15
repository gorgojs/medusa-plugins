import { exec } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import util from "node:util";

const promiseExec = util.promisify(exec);
const cwd = process.cwd();

async function getGitDate(filePath: string): Promise<string> {
  try {
    const { stdout } = await promiseExec(
      `git log -1 --pretty="format:%cI" "${filePath}"`,
    );
    return stdout.trim() || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
}

async function getAllMdxFiles(
  dir: string,
  results: string[] = [],
): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await getAllMdxFiles(fullPath, results);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        results.push(fullPath);
      }
    }),
  );
  return results;
}

async function main() {
  const docsDir = path.join(cwd, "src", "app", "[locale]", "(docs)");
  const outputPath = path.join(cwd, "src", "generated", "edit-dates.json");

  const allFiles = await getAllMdxFiles(docsDir);
  console.log(`Generating edit dates for ${allFiles.length} MDX files...`);

  const entries = await Promise.all(
    allFiles.map(async (filePath) => {
      const key = path.relative(cwd, filePath).split(path.sep).join("/");
      const date = await getGitDate(filePath);
      return [key, date] as const;
    }),
  );

  const editDates = Object.fromEntries(entries);

  const dir = path.dirname(outputPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  await writeFile(outputPath, JSON.stringify(editDates, null, 2));
  console.log(`Done. Generated ${Object.keys(editDates).length} edit dates.`);
}

main().catch((err) => {
  console.error("Failed to generate edit dates:", err);
  process.exit(1);
});
