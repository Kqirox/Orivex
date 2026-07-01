# feat: Leaderboard & Achievements/Badges UI (#176)

## Summary

Implements the `Leaderboard`, `Badge`, and `Achievements` UI components per the Learnault design system. These components cover the gamification layer described in the TRD (streaks, badges, leaderboards).

## Changes

| File | Description |
|---|---|
| `src/components/ui/Leaderboard.tsx` | Ranked leaderboard list with medal highlights and current-user indicator |
| `src/components/ui/Badge.tsx` | Individual achievement badge with four tiers, earned/locked states |
| `src/components/ui/Achievements.tsx` | Badge grid with progress bar and earned count |
| `tests/Leaderboard-Badge-Achievements.test.tsx` | 27 tests covering all three components |

## Components

### `Leaderboard`

Displays a ranked list of learners.

```tsx
<Leaderboard
  title="Weekly Top"
  entries={[
    { rank: 1, name: "Alice", score: 1200 },
    { rank: 2, name: "Bob",   score: 950 },
    { rank: 3, name: "Carol", score: 800, isCurrentUser: true },
  ]}
/>
```

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `entries` | `LeaderboardEntry[]` | required | Sorted list of leaderboard entries |
| `title` | `string` | `"Leaderboard"` | Section heading |
| `className` | `string` | — | Extra Tailwind classes |

**`LeaderboardEntry`:**

| Field | Type | Description |
|---|---|---|
| `rank` | `number` | Position (1-based) |
| `name` | `string` | Display name |
| `score` | `number` | Points total |
| `avatarUrl` | `string?` | Optional avatar image |
| `isCurrentUser` | `boolean?` | Highlights the current user's row |

---

### `Badge`

Single achievement badge with tier styling and locked/earned states.

```tsx
<Badge label="First Steps" tier="gold" icon="🚀" earned={true} description="Complete your first module" />
```

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | required | Badge name |
| `tier` | `"bronze" \| "silver" \| "gold" \| "platinum"` | `"bronze"` | Visual tier |
| `icon` | `string?` | — | Emoji or text icon; falls back to tier default |
| `earned` | `boolean` | `true` | Locked (greyed) when `false` |
| `description` | `string?` | — | Tooltip via `title` attribute |

---

### `Achievements`

Badge grid with earned/total counter and progress bar.

```tsx
<Achievements
  title="My Achievements"
  achievements={[
    { id: "1", label: "First Steps", tier: "bronze", earned: true },
    { id: "2", label: "Scholar",     tier: "silver", earned: true },
    { id: "3", label: "Legend",      tier: "gold",   earned: false },
  ]}
/>
```

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `achievements` | `Achievement[]` | required | List of achievement objects |
| `title` | `string` | `"Achievements"` | Section heading |
| `className` | `string` | — | Extra Tailwind classes |

---

## States

### Leaderboard

| State | Trigger |
|---|---|
| Normal row | Default |
| Highlighted row | `isCurrentUser: true` — gold ring + `(you)` label |
| Medal rank | Ranks 1–3 get gold/silver/bronze circle backgrounds |
| Empty | No entries — shows "No entries yet" |

### Badge

| State | Trigger |
|---|---|
| Earned | `earned={true}` (default) |
| Locked | `earned={false}` — grayscale + reduced opacity + sr-only "locked" |

### Achievements

| State | Trigger |
|---|---|
| Progress | `earned / total` ratio fills the progress bar |
| Empty | No achievements — shows "No achievements yet" |

---

## Accessibility

- `Leaderboard` uses `<section aria-label>`, `<ol>`, `aria-current="true"` for current user, `aria-label` on rank badges
- `Badge` uses `role="img"` with descriptive `aria-label` including locked state
- `Achievements` uses `role="progressbar"` with `aria-valuenow/min/max`, `role="list"` on badge grid

## Testing

```bash
pnpm test tests/Leaderboard-Badge-Achievements.test.tsx
```

27/27 tests pass.

## CI

```
✓ npm run lint  — 0 errors (2 pre-existing warnings in testimonial.tsx and tailwind.config.js)
✓ npm run build — compiled successfully
✓ 27/27 new tests pass
```

## Closes

Fixes #176
