# PickleCrew Tech Context

## Technologies Used

### Design System (Current Phase)
- **HTML/CSS** — Preview pages use vanilla HTML + CSS custom properties
- **React (JSX)** — UI kit components in Components.jsx and Screens.jsx
- **CSS Custom Properties** — All design tokens defined as CSS variables
- **Lucide Icons** — Stroke-based icon library via CDN
- **Google Fonts** — Barlow Condensed, Inter, Barlow

### Key Fonts
- **Barlow Condensed** (Black 900, Bold 700) — Display/headlines
- **Inter** (400, 500, 600) — Body/UI text
- **Barlow** — Alternative body text with sporty energy

### Color Palette (Core Tokens)
| Token | Hex | Usage |
|-------|-----|-------|
| Navy 600 | #204160 | Primary brand |
| Navy 950 | #0d1b29 | Dark mode bg |
| Blue 500 | #2090D0 | Accent |
| Fire 500 | #f55a20 | Rivalries, hot streaks |
| Gold 500 | #f0c040 | Badges, achievements |
| Success 500 | #22a05e | Wins, positive |
| Danger 500 | #e03a3a | Losses, destructive |

## Development Setup
- Git repository initialized at `/Users/jeremy/Development/Picklecrew`
- Remote: https://github.com/jmf421/picklecrew.git (branch: main)
- No build tooling configured yet (no package.json, no bundler)
- Preview pages are standalone HTML files

## Technical Constraints
- No application codebase exists yet — only design system assets
- No Figma file linked — design system built from logo assets + documentation
- Preview pages load fonts and icons from CDN (no local bundling)
- UI kit JSX files are reference implementations, not yet integrated into a React app

## Dependencies
- CDN-hosted: Google Fonts, Lucide Icons
- No npm packages or package.json yet