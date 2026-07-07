# Orivex Brand Guide

A living reference for anyone writing copy, designing UI, or contributing documentation to the Orivex repository.

## Voice & Tone

- **Confident, not boastful** — Orivex speaks plainly about what learners can do, never with empty superlatives.
- **Inclusive** — the platform is built for emerging markets. Plain language, the learner's locale first, English as a fallback.
- **Specific** — "$0.25 USDC" beats "earn rewards". Show the value, not the abstract idea.
- **Respectful** — we never imply the learner is behind. We position the platform as a tool, not a saviour.

## Naming Conventions

- **Product** — always *Orivex* (capital O). Lower-cased "orivex" only in URLs or code identifiers.
- **Components** — PascalCase in code (`Hero`, `RewardCelebrationModal`). Never prefix with the brand.
- **Repos** — `Kqirox/Orivex`, `Kqirox/Orivex-Contracts`, `Kqirox/Orivex-Backend`.
- **Tokens** — USDX (USDC on Stellar), native XLM. Never invent a token called "ORX" or "Orivex token".

## Required Tokens

Every learner-facing surface should expose:

- A primary CTA in **Stellar Gold** (`#F5B841`).
- A secondary accent in **Neon Teal** (`#14B8A6`) for links and secondary actions.
- Body copy on white (`#FFFFFF`) at `#0F172A` to satisfy WCAG AA on every screen size.

## Anti-patterns

- ❌ Comparisons that frame traditional education as "broken".
- ❌ Crypto jargon without an inline plain-language gloss on first use.
- ❌ Email addresses that point at a previous-org domain (e.g. `toneflix.net`).
- ❌ External design system URLs (e.g. `figma.com/file/…`) in tracked files.

## How to Update this Guide

Open a PR that touches only `docs/BRAND.md`. Reviewers must include the design owner or a contributor with at least one shipped rebrand behind them.
