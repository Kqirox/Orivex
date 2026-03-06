# Learnault Design System

A light-mode-first design system for the **Learnault Learn-to-Earn platform**.  
The aesthetic focuses on clarity, accessibility, and high-contrast CTAs suitable for educational content and Web3 interfaces.

---

# 🎨 Color System

## Main Colors

### Primary — Stellar Gold
Used for primary buttons, reward indicators, and key actions.

HEX: #F5B841  
RGB: 245, 184, 65  

Recommended text color: #0F172A

---

### Secondary — Neon Teal
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

Success  
HEX: #16A34A  
RGB: 22, 163, 74  

Warning  
HEX: #D97706  
RGB: 217, 119, 6  

Error  
HEX: #DC2626  
RGB: 220, 38, 38  

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

# Tailwind Mapping (Recommended)

```
fontFamily: {
  heading: ['Syne', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
}

colors: {
  primary: "#F5B841",
  secondary: "#14B8A6",
  background: "#F9FAFB",
  surface: "#FFFFFF",
  success: "#16A34A",
  warning: "#D97706",
  error: "#DC2626"
}
```

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

The system reflects Learnault’s mission:

**Learning that converts directly into measurable value.**



# UI Component Implementation: Buttons & Inputs

## Overview
This issue covers the implementation of the core `Button`, `Input` (Email), and `Textarea` (Description) components based on the latest UI design specifications. Below are the required styles and states for each component.

---

## 1. Buttons
We need to implement three main variants of buttons, each with their respective states (Default, Hover/Active, Disabled).

### Solid Buttons
* **Primary:** Solid mustard/yellow background, black text.
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

* **Default:** Light grey border, placeholder text ("Enter email").
* **Focus/Active:** Purple/indigo border, user text entered, green checkmark icon on the right.
* **Success/Filled:** Light grey border, user text entered, green checkmark icon on the right.
* **Error:** Red border, red user text. Includes a red error icon and message below the field ("Email is not valid"), alongside an info `(i)` icon on the far right.

---

## 3. Textarea Fields (Description)
The description textarea requires validation states and a character count/limit indicator. All textareas have a top label with a pencil icon.

* **Default:** Light grey border, placeholder text ("Write description here..."). Includes info text below: "Max 200 texts".
* **Focus/Active:** Purple/indigo border, user text entered. Includes info text below: "Max 200 texts".
* **Filled/Inactive:** Light grey border, user text entered (faded text). Includes info text below: "Max 200 texts".
* **Error:** Red border, red user text. Includes a red error icon and message below the field ("Reached the 200 text limit").

---

## Assets & Notes
* **Icons Needed:** Envelope (email), Pencil (edit), Checkmark (success), Error/Alert, Info, Right Arrow.
* Please ensure proper padding, border-radius, and typography matching the Figma/design file.