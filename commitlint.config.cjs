const fs = require('fs');
const path = require('path');

const PATHS_TO_DIR = ['packages', 'packages/utils'];
const REPO_SCOPES = ['deps', 'release', 'docs', 'root'];

const packageScopes = PATHS_TO_DIR.flatMap(dirPath => {
  const fullPath = path.resolve(__dirname, dirPath);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name.replace(/^medusa-/, ''));
});

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [...packageScopes, ...REPO_SCOPES]],
    'scope-empty': [1, 'never'],
    'header-max-length': [2, 'always', 200],
  },
};
