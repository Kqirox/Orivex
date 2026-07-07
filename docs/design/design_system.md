# Orivex Design System

A light-mode-first design system for the **Orivex Learn-to-Earn platform**.

The aesthetic focuses on clarity, accessibility, and high-contrast CTAs - the exact qualities needed for educational content delivered to first-time Web3 users.

> Living document. Tokens here are the source of truth; Tailwind config and component code must mirror them.

---

# 🎨 Color System

## Main Colors

### Primary - Stellar Gold
Used for primary buttons, reward indicators, and key actions.

HEX: #F5B841  
RGB: 245, 184, 65  

Recommended text color: #0F172A

---

### Secondary - Neon Teal
Used for links, highlights, and interactive states.

HEX: #14B8A6  
RGB: 20, 184, 166  

Recommended text color: #0F172A

---

## Background

Primary Background  
HEX: #F9FAFB  
RGB: 249, 250, 251  

Secondary Background  
HEX: #F1F5F9  
RGB: 241, 245, 249  

---

## Surface

Card / Container Surface  
HEX: #FFFFFF  
RGB: 255, 255, 255  

Border Color  
HEX: #E2E8F0  
RGB: 226, 232, 240  

---

## Text Colors

Primary Text  
HEX: #0F172A  
RGB: 15, 23, 42  

Secondary Text  
HEX: #475569  
RGB: 71, 85, 105  

Muted Text  
HEX: #94A3B8  
RGB: 148, 163, 184  

All combinations maintain **WCAG AA contrast ratios**.

---

## Semantic Colors

| Token   | HEX       | RGB               | Typical usage            |
| :------ | :-------- | :---------------- | :----------------------- |
| success | `#16A34A` | `22, 163, 74`     | Quiz-passed, payouts OK  |
| warning | `#D97706` | `217, 119, 6`     | Streak expiring soon     |
| error   | `#DC2626` | `220, 38, 38`     | Validation / failure toast |  

---

# 🔤 Typography

Typography prioritizes readability for educational content while maintaining a modern Web3 aesthetic.

Google Fonts are used for easy integration.

---

## Font Families

### Headline Font

Font: **Syne**

Source  
https://fonts.google.com/specimen/Syne

Usage
- Page titles
- Section headings
- Hero text
- Major UI headings

Font Stack

```
font-family: "Syne", system-ui, sans-serif;
```

---

### Body Font

Font: **Inter**

Source  
https://fonts.google.com/specimen/Inter

Usage
- Body text
- Navigation
- UI labels
- Form inputs
- Learning content

Font Stack

```
font-family: "Inter", system-ui, sans-serif;
```

---

# Type Scale

## Headlines

H1  
Desktop: 56px / Bold / 120%  
Mobile: 40px / Bold / 120%

H2  
Desktop: 48px / Bold / 120%  
Mobile: 32px / Bold / 120%

H3  
Desktop: 32px / Bold / 120%  
Mobile: 24px / Bold / 120%

H4  
Desktop: 24px / Bold / 120%  
Mobile: 16px / Bold / 120%

H5  
Desktop: 18px / Bold / 120%  
Mobile: 14px / Bold / 120%

---

## Body Text

Body Large  
18px / Regular / 140%

Body Default  
16px / Regular / 140%

Body Small  
14px / Regular / 130%

Caption  
12px / Regular / 130%

---

## Buttons / Links

Large Button  
20px / Medium

Default Button  
16px / Medium

Small Button  
14px / Medium

Extra Small  
12px / Medium

---

## Form Fields

Input Placeholder  
16px / Regular

Input Label  
12px / Regular

Helper Text  
12px / Regular

---

## Tailwind Mapping (Recommended)

```js
fontFamily: {
  heading: ["Syne", "sans-serif"],
  body:    ["Inter", "sans-serif"],
},

colors: {
  primary:    "#F5B841",   // Stellar Gold
  secondary:  "#14B8A6",   // Neon Teal

  background:              "#F9FAFB",
  "secondary-background":  "#F1F5F9",
  surface:                 "#FFFFFF",
  border:                  "#E2E8F0",

  "text-primary":   "#0F172A",
  "text-secondary": "#475569",
  "text-muted":     "#94A3B8",

  success: "#16A34A",
  warning: "#D97706",
  error:   "#DC2626",
},
```

Configure via `tailwind.config.js` so component classes (`bg-primary`, `text-text-primary`, etc.) resolve consistently across the app.

---

# Accessibility

- Text and background combinations meet **WCAG AA** standards.
- Primary actions use **high-contrast colors** for visibility.
- Typography sizes maintain readability across devices.

---

# Design Principles

Clean  
Accessible  
Reward-driven  
Web3-native  

The system reflects Orivex's mission:

**Learning that converts directly into measurable value.**



# UI Component Implementation: Buttons & Inputs

## Overview
This issue covers the implementation of the core `Button`, `Input` (Email), and `Textarea` (Description) components based on the latest UI design specifications. Below are the required styles and states for each component.

---

## 1. Buttons
We need to implement three main variants of buttons, each with their respective states (Default, Hover/Active, Disabled).

### Solid Buttons
* **Primary** - solid `#F5B841` background, `#0F172A` text.
* **Secondary:** Lighter yellow background, black text.
* **Tertiary/Muted:** Beige/light tan background, dark text.
* **Disabled:** Light grey background, grey text.

### Outline Buttons
* **Default:** White background, dark grey border, black text.
* **Active/Filled:** Light grey background, dark grey border, black text.
* **Disabled:** White background, very faint/light border, light grey text.

### Text/Link Buttons
* **Default:** Teal text with a right-pointing arrow icon (`→`).
* **Muted/Disabled:** Faded teal text with a right-pointing arrow icon (`→`).

---

## 2. Input Fields (Email)

The email input field requires validation states with icon feedback. All inputs have a top label with an envelope icon.

* **Default** - `#E2E8F0` border, the literal placeholder *"Enter email"*.
* **Focus/Active** - indigo border, learner text entered, green checkmark icon at the right.
* **Success / Filled** - `#E2E8F0` border, learner text entered, green checkmark icon at the right.
* **Error** - `#DC2626` border, `#DC2626` text. Includes a red error icon + message (`"Email is not valid"`) below the field, with a `(i)` info icon on the far right.

---

## 3. Textarea Fields (Description)

The description textarea requires validation states and a character-count / limit indicator. All textareas have a top label with a pencil icon.

* **Default** - `#E2E8F0` border, placeholder *"Write description here..."*, helper `"Max 200 texts"`.
* **Focus / Active** - indigo border, learner text entered, helper `"Max 200 texts"`.
* **Filled / Inactive** - `#E2E8F0` border, learner text entered (faded), helper `"Max 200 texts"`.
* **Error** - `#DC2626` border, `#DC2626` text, red error icon, message `"Reached the 200 text limit"`.

---

## Assets & Notes
* **Icons Needed:** Envelope (email), Pencil (edit), Checkmark (success), Error/Alert, Info, Right Arrow.
* Please ensure proper padding, border-radius, and typography matching the Figma/design file.