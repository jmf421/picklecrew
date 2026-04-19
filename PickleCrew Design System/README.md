# PickleCrew Design System

## Overview
PickleCrew is a full-stack web application (picklecrew.net) for recreational pickleball communities. It replaces messy group chats, spreadsheets, and manual scorekeeping with a polished, **mobile-first** platform for tracking games, organizing events, building groups, analyzing performance, and fueling friendly rivalries.

**Tagline:** "Your Pickleball Crew, Leveled Up"

**Sources provided:**
- `uploads/Horizontal 1.png` — Dark-background horizontal logo (PNG, 3214×518)
- `uploads/Horizontal 2.png` — Light-on-dark horizontal logo variant
- Feature description document (provided in prompt)

No codebase or Figma link was provided. This design system is built from the logo assets + feature documentation. To improve fidelity, attach the codebase or a Figma file.

---

## Products / Surfaces
1. **Mobile App** — Primary surface; full-featured iOS/Android-style experience via responsive web
2. **Desktop Web** — Same app, wider layout; primarily used for analytics, admin dashboard
3. **Open Play Board** — Public-facing page, no login required
4. **Admin Dashboard** — Role-gated internal tool

---

## Assets
- `assets/logo-dark.png` — Horizontal logo, dark (navy + blue), for use on white/light backgrounds
- `assets/logo-light.png` — Horizontal logo, white, for use on dark/navy backgrounds
- `colors_and_type.css` — CSS custom properties for the full design system

---

## Content Fundamentals

### Voice & Tone
- **Friendly competitor energy** — encouraging but with edge; the app feels like your most enthusiastic pickleball buddy
- **Concise and action-first** — short imperative CTAs: "Log a Game", "Join Crew", "Challenge Sent"
- **Community-coded** — "Crew", "Smashers", "Rivals" — names that feel earned and social
- **Celebratory** — badge earns, streaks, Golden Pickle (11-0 shutout) get their moment in the spotlight
- **Never corporate** — no passive voice, no jargon; "You've been challenged" not "A challenge has been issued"

### Casing
- **UI labels / nav:** Title Case — "Game Log", "My Groups", "Find Players"
- **Headlines / Display:** ALL CAPS (matches condensed logo font energy)
- **Body copy:** Sentence case
- **Badge names:** Title Case with evocative names — "Iron Dinker", "Golden Pickle", "Ace Achiever"
- **CTAs:** Title Case — "Log Game", "View Leaderboard", "Send Challenge"

### Pronouns
- Second person throughout: "Your Stats", "Your Crew", "You won 3 in a row!"
- First person in confirmations: "I'm looking for a game"

### Emoji Usage
- **Yes, but targeted** — used in activity feeds, rivalry indicators (🔥), badge announces, and celebratory moments
- Not used in navigation, form labels, or data tables
- Key emoji: 🔥 (hot streaks / rivalries), 🏆 (wins), 🎯 (precision shots), 👏 (reactions), 💪 (strength), 😂 (banter)

### Numerics
- Scores: "11 – 7" (en dash, space-padded)
- ELO: shown as integer "1247 ↑"
- Win rate: "67%" (no decimal)
- Dates: "Sat, Apr 19" for upcoming; "3d ago" for recency

---

## Visual Foundations

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Navy 600 | `#204160` | Primary brand — logo, headings, primary buttons |
| Navy 950 | `#0d1b29` | Dark mode background |
| Blue 500 | `#2090D0` | Accent — links, active states, highlights, the logo dot |
| Fire 500 | `#f55a20` | Rivalries, hot streaks |
| Gold 500 | `#f0c040` | Badges, achievements, Golden Pickle |
| Success 500 | `#22a05e` | Wins, positive stats |
| Danger 500 | `#e03a3a` | Losses, destructive actions |

### Typography
- **Display / Headlines:** Barlow Condensed (Black 900, Bold 700) — ALL CAPS, wide tracking. Substituted from logo; original logo font is visually similar to Barlow Condensed Black.
- **Body / UI:** Inter — 400 Regular, 500 Medium, 600 Semibold
- **Alt Body:** Barlow — for larger descriptive text that needs more sporty energy than Inter
- **Score/Stat displays:** Barlow Condensed Black, often very large (48–80px)

### Spacing
- 4px base unit; scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
- Mobile: 16px horizontal page padding (--space-4)
- Desktop: 24–32px horizontal page padding

### Backgrounds
- **Light mode:** White surfaces, neutral-50 (#f4f4f8) for app shell background
- **Dark mode:** Navy-950 (#0d1b29) shell, Navy-800 (#162d47) cards
- No heavy gradients; if gradients used, subtle navy-to-navy-dark or navy-to-transparent
- Cards do NOT use colored left-border-only treatment

### Cards
- Background: white (light) / navy-800 (dark)
- Border radius: 12px (--radius-lg) standard; 16px (--radius-xl) for larger feature cards
- Border: 1px solid neutral-200 (light) / navy-600 (dark)
- Shadow: --shadow-md on elevated cards; no shadow for inline cards
- No heavy drop shadows; subtle and directional

### Buttons
- **Primary:** Navy-600 fill, white text, radius-full (pill shape) or radius-lg
- **Accent:** Blue-500 fill, white text — for key CTAs like "Log Game"
- **Ghost:** transparent, navy-600 border/text
- **Destructive:** danger-500 fill
- Hover: slightly darker shade + subtle scale-up (1.02)
- Press/Active: scale-down (0.97)
- Min height: 44px (mobile touch target)

### Iconography
- Lucide icons (stroke-based, 2px stroke weight) — referenced from CDN
- No icon font; SVG inline or via Lucide React
- Icon sizes: 16px (inline/label), 20px (standard UI), 24px (nav/primary action)
- Icons are navy-600 (light) or neutral-50 (dark) by default; accent blue for active state

### Animation & Motion
- **Easing:** --ease-spring (cubic-bezier(0.34, 1.56, 0.64, 1)) for badge pop-ins, score reveals
- **Easing:** --ease-out for panel/drawer slides
- **Duration:** 150ms fast (hover), 250ms base (transitions), 400ms slow (page entries)
- Badge shelf: shimmer animation on earn
- Score updates: count-up animation
- Leaderboard rank changes: slide with ease-spring
- No heavy parallax or scroll-triggered animations in mobile

### Hover / Focus States
- Buttons: darken 10% + scale(1.02)
- Cards/rows: neutral-50 background tint
- Links: color shift to blue-600
- Focus: 2px outline, blue-500, 2px offset

### Corner Radius
- Small UI chips/badges: --radius-full (pill)
- Cards: --radius-lg (12px)
- Feature cards: --radius-xl (16px)
- Modal/sheets: --radius-2xl (24px) top corners only on mobile bottom sheets
- Buttons: --radius-full or --radius-lg depending on size

### Images / Imagery
- Avatars: circular crop, navy-200 placeholder background
- Court photos: full-bleed, slight dark overlay for text legibility
- Color vibe: slightly warm, saturated outdoor sports photography
- No heavy duotone or grain effects

### Layout Rules
- Bottom nav bar fixed on mobile (5 tabs)
- Top app bar fixed, 56px tall on mobile
- Desktop: left sidebar navigation, 240px wide
- Max content width: 768px on mobile, 1200px on desktop
- Safe area insets respected for iOS notch/home bar

---

## Iconography

Uses **Lucide Icons** (https://lucide.dev) — a consistent open-source stroke-based icon set.
- Stroke weight: 2px
- Style: rounded linecaps and joins
- CDN: `https://unpkg.com/lucide@latest`
- Loaded via Lucide's JS library: `lucide.createIcons()`

No custom icon font. No PNG icon sprites. SVG inline when needed for complex branded marks.

Emoji are used sparingly in specific contexts (see Content Fundamentals).

Key icons in use: `trophy`, `users`, `calendar`, `map-pin`, `zap`, `flame`, `star`, `bell`, `activity`, `bar-chart-2`, `shield`, `award`, `target`, `message-circle`, `plus`, `settings`

---

## File Index

```
README.md                   — This file; full design system documentation
SKILL.md                    — Agent skill definition
colors_and_type.css         — All CSS custom properties (colors, type, spacing, motion)

assets/
  logo-dark.png             — Horizontal logo, light backgrounds
  logo-light.png            — Horizontal logo, dark backgrounds

preview/
  colors-primary.html       — Navy + Blue palette swatches
  colors-neutrals.html      — Neutral scale
  colors-semantic.html      — State/semantic colors
  type-display.html         — Display & heading specimens
  type-body.html            — Body, label, caption specimens
  spacing-tokens.html       — Spacing scale tokens
  spacing-radius.html       — Border radius + shadows
  components-buttons.html   — Button variants
  components-cards.html     — Card styles
  components-badges.html    — Achievement badges
  components-inputs.html    — Form inputs
  components-nav.html       — Bottom nav + app bar

ui_kits/app/
  index.html                — Mobile app UI kit (click-thru prototype)
  Components.jsx            — Core shared components
  Screens.jsx               — Screen implementations
```
