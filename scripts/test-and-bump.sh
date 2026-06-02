#!/usr/bin/env bash
set -uo pipefail

: "${TARGET_VERSION:?TARGET_VERSION is required}"
: "${OUTDATED_PACKAGES:?OUTDATED_PACKAGES is required}"

GITHUB_OUTPUT="${GITHUB_OUTPUT:-/dev/stdout}"

chmod +x ./scripts/update.sh

IFS=',' read -ra PACKAGES <<< "$OUTDATED_PACKAGES"

BUMPED=()
FAILED=()

for package in "${PACKAGES[@]}"; do
  [ -z "$package" ] && continue
  example="${package#medusa-}"
  echo "::group::update.sh ${example}"
  if ./scripts/update.sh "$TARGET_VERSION" "$example" --single --skip-build; then
    BUMPED+=("$example")
  else
    echo "::warning title=Medusa update::Failed to bump '${example}' to v${TARGET_VERSION}"
    git checkout -- "examples/${example}" "integration-tests/${example}" 2>/dev/null || true
    FAILED+=("$example")
  fi
  echo "::endgroup::"
done

rm -f yarn.lock
corepack yarn install --no-immutable

PASSED=()
for example in "${BUMPED[@]}"; do
  echo "::group::test ${example}"
  if corepack yarn turbo run test:unit test:integration:http test:integration:modules \
       --filter="@gorgo/it-${example}" --concurrency=1 --no-cache --force; then
    PASSED+=("$example")
  else
    echo "::warning title=Medusa update::Tests failed for '${example}' on v${TARGET_VERSION}"
    git checkout -- "examples/${example}" "integration-tests/${example}" 2>/dev/null || true
    FAILED+=("$example")
  fi
  echo "::endgroup::"
done

if [ ${#FAILED[@]} -gt 0 ]; then
  rm -f yarn.lock
  corepack yarn install --no-immutable
fi

mkdir -p badges
for example in "${PASSED[@]}"; do
  cat > "badges/medusa-${example}.json" <<JSON
{
  "schemaVersion": 1,
  "label": "Tested with Medusa",
  "message": "v${TARGET_VERSION}",
  "color": "green"
}
JSON
done

echo "commit_scope=$(IFS=,; echo "${PASSED[*]}")" >> "$GITHUB_OUTPUT"
if [ ${#PASSED[@]} -gt 0 ]; then
  echo "has_passed=true" >> "$GITHUB_OUTPUT"
else
  echo "has_passed=false" >> "$GITHUB_OUTPUT"
fi

{
  echo "pr_body<<__PR_BODY_EOF__"
  echo "Automated daily Medusa update to **v${TARGET_VERSION}**."
  echo ""
  if [ ${#PASSED[@]} -gt 0 ]; then
    echo "> [!TIP]"
    echo "> Updated and tested on Medusa v${TARGET_VERSION}:"
    for example in "${PASSED[@]}"; do echo "> - \`${example}\`"; done
    echo ""
  fi
  if [ ${#FAILED[@]} -gt 0 ]; then
    echo "> [!CAUTION]"
    echo "> Could not update on Medusa v${TARGET_VERSION} (tests failed) — excluded from this PR:"
    for example in "${FAILED[@]}"; do echo "> - **${example}**"; done
    echo ""
  fi
  echo "__PR_BODY_EOF__"
} >> "$GITHUB_OUTPUT"
