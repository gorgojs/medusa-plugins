#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()

const APIS = {
  products: {
    specUrl: 'https://dev.wildberries.ru/api/swagger/yaml/en/02-products.yaml',
    specPath: 'openapi/wildberries-api/02-products.yaml',
    output: 'src/lib/wildberries-products-client'
  },
  'orders-fbs': {
    specUrl: 'https://dev.wildberries.ru/api/swagger/yaml/en/03-orders-fbs.yaml',
    specPath: 'openapi/wildberries-api/03-orders-fbs.yaml',
    output: 'src/lib/wildberries-orders-fbs-client'
  }
}

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' })
}

function pull(name) {
  const api = APIS[name]
  if (!api) throw new Error(`Unknown API: ${name}`)

  fs.mkdirSync(path.dirname(api.specPath), { recursive: true })

  run(`curl -L -o "${api.specPath}" "${api.specUrl}"`)
}

function generate(name) {
  const api = APIS[name]
  if (!api) throw new Error(`Unknown API: ${name}`)

  run(
    `rm -rf ${api.output} && ` +
    `openapi-generator-cli generate ` +
    `-i /local/${api.specPath} ` +
    `-g typescript-axios ` +
    `-o /local/${api.output} ` +
    `--skip-validate-spec`
  )
}

function main() {
  const [, , command, target] = process.argv

  if (!command) {
    console.error('Usage: openapi <pull|generate|all> [name]')
    process.exit(1)
  }

  const names = target ? [target] : Object.keys(APIS)

  for (const name of names) {
    if (command === 'pull') pull(name)
    else if (command === 'generate') generate(name)
    else if (command === 'all') {
      pull(name)
      generate(name)
    } else {
      throw new Error(`Unknown command: ${command}`)
    }
  }
}

main()
