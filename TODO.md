# TODO - Issue #162 Tailwind design tokens & refactor hard-coded colors

- [x] Create branch `blackboxai/issue-162-tailwind-design-tokens`
- [x] Read design system spec + inspect current globals.css and tailwind config
- [x] Update `tailwind.config.js` to include all required palette tokens as Tailwind colors
- [x] Refactor `src/components/landing/hero.tsx` to use tokens (no spec hex for background/text/border)
- [x] Refactor `src/components/landing/how-it-works.tsx` to use tokens (background/text/border/surface)
- [ ] Refactor remaining `src/components/landing/*` components to remove raw hex values
- [ ] Ensure no raw hex values remain in `src/components/landing/*`
- [ ] Fix formatting issues introduced during previous edits in landing components (extra indentation/blank lines)

- [ ] Verify Tailwind utilities exist for semantic/text/background/surface tokens
- [ ] Run `npm test` and/or `npm run lint` to confirm acceptance criteria

