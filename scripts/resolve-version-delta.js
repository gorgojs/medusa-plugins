#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const BADGE_REGEX = /Tested_with_Medusa-v([\d.]+)/

const target = process.env.TARGET_VERSION
if (!target) {
  console.error('TARGET_VERSION env var is required')
  process.exit(1)
}

const packagesDir = path.join(process.cwd(), 'packages')
const versions = new Set()
const outdated = []

for (const entry of fs.readdirSync(packagesDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue

  const readmePath = path.join(packagesDir, entry.name, 'README.md')
  if (!fs.existsSync(readmePath)) continue

  const content = fs.readFileSync(readmePath, 'utf8')
  const match = content.match(BADGE_REGEX)
  const testedVersion = match ? match[1] : null

  if (!testedVersion) {
    console.log(`Skipping ${entry.name}: no Tested_with_Medusa badge found in README`)
    continue
  }

  versions.add(testedVersion)

  if (testedVersion !== target) {
    outdated.push(entry.name)
  }
}

const sorted = [...versions].sort((a, b) => {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    if ((pa[i] || 0) !== (pb[i] || 0)) return (pa[i] || 0) - (pb[i] || 0)
  }
  return 0
})

const currentVersions = sorted.join(',')
const outdatedPackages = outdated.join(',')

const outPath = process.env.GITHUB_OUTPUT
if (outPath) {
  fs.appendFileSync(outPath, `new_medusa_version=${target}\n`)
  fs.appendFileSync(outPath, `current_versions=${currentVersions}\n`)
  fs.appendFileSync(outPath, `outdated_packages=${outdatedPackages}\n`)
}

console.log(`Current versions: ${currentVersions}`)
console.log(`Target version: ${target}`)
console.log(`Outdated packages: ${outdatedPackages}`)
