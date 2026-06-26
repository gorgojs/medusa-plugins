import { readdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { regroupChangelog, reformatChangelog, sectionForSha } from './changelog-utils.js'

const DIRS = ['packages', 'packages/utils']

function changelogFiles() {
  const files = []
  for (const dir of DIRS) {
    const base = path.resolve(dir)
    if (!existsSync(base)) continue
    for (const entry of readdirSync(base, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue
      const file = path.join(base, entry.name, 'CHANGELOG.md')
      if (existsSync(file)) files.push(file)
    }
  }
  return files
}

let formatted = 0
for (const file of changelogFiles()) {
  const original = readFileSync(file, 'utf8')
  const rebuilt = regroupChangelog(reformatChangelog(original), sectionForSha)
  if (rebuilt === original) continue
  writeFileSync(file, rebuilt, 'utf8')
  formatted++
  console.log(`formatted: ${path.relative(process.cwd(), file)}`)
}

console.log(`Formatted ${formatted} changelog(s).`)
