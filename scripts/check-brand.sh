#!/usr/bin/env bash
# Brand guard - fails (exit 1) if a deprecated brand artifact or external
# design-system URL leaks back into the repo via tracked files or commit
# messages.
#
# Runs locally:  bash scripts/check-brand.sh
# Runs in CI:    .github/workflows/brand-guard.yml
#               (or via `pnpm brand:check`)
#
# The repo was migrated to the Orivex brand under the `Kqirox` org. This
# guard exists to make sure deprecated artifacts and external `figma.com`
# URLs do not silently re-appear in future commits.

set -u

EXIT_CODE=0

echo "Brand guard: scanning tracked files and commit messages..."
echo

# 1. Old brand name in tracked files (case-insensitive)
#    Use -I to skip binary files; -0/-z to handle weird filenames safely.
#    Exclude the brand-guard files themselves - they need to LITERALLY
#    mention these strings (as patterns + examples) to do their job.
LEAKED_FILES=$(
  git ls-files -z 2>/dev/null \
    | grep -zvE '^(scripts/check-brand\.sh|\.github/workflows/brand-guard\.yml)$' \
    | xargs -0 grep -nI -i 'learnault\|learnea' 2>/dev/null \
    || true
)

if [ -n "$LEAKED_FILES" ]; then
  echo "✗ Old brand name found in tracked files:"
  echo "$LEAKED_FILES"
  echo
  EXIT_CODE=1
fi

# 2. External Figma URLs in tracked files. We deliberately removed all
#    figma.com links during the rebrand - if any sneak back, fail loudly.
#    Same self-exclusion pattern as above.
LEAKED_FIGMA=$(
  git ls-files -z 2>/dev/null \
    | grep -zvE '^(scripts/check-brand\.sh|\.github/workflows/brand-guard\.yml)$' \
    | xargs -0 grep -nI 'figma\.com' 2>/dev/null \
    || true
)

if [ -n "$LEAKED_FIGMA" ]; then
  echo "✗ External figma.com URLs in tracked files:"
  echo "$LEAKED_FIGMA"
  echo
  EXIT_CODE=1
fi

# 3. Old brand name in commit subject lines. The rebrand used
#    `git filter-branch --msg-filter 'sed ...'` to scrub all historical commit
#    messages, so any new commit that reintroduces "Learnault" here is a bug.
LEAKED_COMMITS=$(
  git log --all --pretty=format:'%s' 2>/dev/null \
    | grep -i 'learnault\|learnea' \
    || true
)

if [ -n "$LEAKED_COMMITS" ]; then
  echo "✗ Old brand name in commit subject lines:"
  echo "$LEAKED_COMMITS"
  echo
  EXIT_CODE=1
fi

if [ "$EXIT_CODE" -ne 0 ]; then
  cat <<'EOF'

Brand guard failed. To find offenders locally:

    grep -rniI 'learnault\|figma\.com' \
        --include='*.md' --include='*.tsx' --include='*.ts' \
        --include='*.json' --include='*.mjs' --include='*.js' .

Rebrand or remove offending references, then re-run this script.
EOF
  exit "$EXIT_CODE"
fi

echo "✓ Brand guard passed. Repo is clean of deprecated brand artifacts and external design-system URLs."
echo "  $(git rev-list --count HEAD) commits scanned, $(git ls-files | wc -l) tracked files scanned."
