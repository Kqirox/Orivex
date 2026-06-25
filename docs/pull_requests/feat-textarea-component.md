# feat: labelled Textarea with character-limit indicator

## Summary
Implements the `Textarea` UI component per `docs/design/design_system.md`.

## Changes
- `src/components/ui/Textarea.tsx` — new component
- `tests/Textarea.test.tsx` — 7 tests (all passing)

## States
| State | Trigger |
|---|---|
| Default | No value, not focused |
| Focus/Active | `state="focus"` prop or textarea focused |
| Filled/Inactive | `state="filled"` prop or has value, not focused |
| Error | `state="error"` prop or character count reaches `maxLength` (200) |

## Acceptance Criteria
- [x] All four states reachable via `state` prop
- [x] Live character count vs. max (200) displayed as `n/200`
- [x] Accessible: `aria-describedby`, `aria-invalid`, `role="alert"`, `htmlFor` label association

## Testing
```bash
pnpm test tests/Textarea.test.tsx
```
All 7 tests pass.
