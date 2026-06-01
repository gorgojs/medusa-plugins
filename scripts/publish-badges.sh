#!/usr/bin/env bash
set -euo pipefail

: "${TARGET_VERSION:?TARGET_VERSION is required}"
: "${PASSED:?PASSED is required}"
: "${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}"
: "${GH_TOKEN:?GH_TOKEN is required}"

BADGES_BRANCH="${BADGES_BRANCH:-badges}"

tmp="$(mktemp -d)"
remote="https://x-access-token:${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

if git clone --depth 1 --branch "$BADGES_BRANCH" "$remote" "$tmp" 2>/dev/null; then
  :
else
  git clone --depth 1 "$remote" "$tmp"
  git -C "$tmp" checkout --orphan "$BADGES_BRANCH"
  git -C "$tmp" rm -rf . >/dev/null 2>&1 || true
fi

IFS=',' read -ra ITEMS <<< "$PASSED"
for example in "${ITEMS[@]}"; do
  [ -z "$example" ] && continue
  cat > "$tmp/medusa-${example}.json" <<JSON
{
  "schemaVersion": 1,
  "label": "Tested with Medusa",
  "message": "v${TARGET_VERSION}",
  "color": "green"
}
JSON
done

cd "$tmp"
git add -A
if git -c user.name="${COMMITTER_NAME:?COMMITTER_NAME is required}" \
      -c user.email="${COMMITTER_EMAIL:?COMMITTER_EMAIL is required}" \
      commit -m "chore: tested on Medusa v${TARGET_VERSION} (${PASSED})"; then
  git push origin "$BADGES_BRANCH"
else
  echo "No badge changes to publish"
fi
