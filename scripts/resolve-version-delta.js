#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

async function main() {
  const target = process.env.TARGET_VERSION
  if (!target) {
    console.error('TARGET_VERSION env var is required')
    process.exit(1)
  }

  const repo = process.env.GITHUB_REPOSITORY || 'gorgojs/medusa-plugins'
  const badgesBranch = process.env.BADGES_BRANCH || 'badges'

  const examplesDir = path.join(process.cwd(), 'examples')
  const examples = fs.existsSync(examplesDir)
    ? fs.readdirSync(examplesDir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
    : []

  const versions = new Set()
  const outdated = []

  for (const example of examples) {
    if (!fs.existsSync(path.join(process.cwd(), 'packages', `medusa-${example}`))) continue

    let tested = null
    try {
      const url = `https://raw.githubusercontent.com/${repo}/${badgesBranch}/medusa-${example}.json`
      const res = await fetch(url, { headers: { 'Cache-Control': 'no-cache' } })
      if (res.ok) {
        const data = await res.json()
        tested = typeof data.message === 'string' ? data.message.replace(/^v/, '') || null : null
      }
    } catch {}

    if (tested) versions.add(tested)
    if (tested !== target) outdated.push(`medusa-${example}`)
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

  console.log(`Current versions: ${currentVersions || '(none)'}`)
  console.log(`Target version: ${target}`)
  console.log(`Outdated packages: ${outdatedPackages || '(none)'}`)
}

main()
