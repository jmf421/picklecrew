# PickleCrew System Patterns

## System Architecture
Currently in design system phase — no application architecture yet.

## Design System Architecture

### File Structure
```
PickleCrew Design System/
├── README.md                    — Full design system documentation
├── SKILL.md                     — Agent skill definition
├── colors_and_type.css          — CSS custom properties (all tokens)
├── assets/
│   ├── logo-dark.png            — Horizontal logo for light backgrounds
│   └── logo-light.png           — Horizontal logo for dark backgrounds
├── preview/                      — Standalone HTML preview pages
│   ├── colors-primary.html
│   ├── colors-neutrals.html
│   ├── colors-semantic.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── spacing-tokens.html
│   ├── spacing-radius.html
│   ├── components-buttons.html
│   ├── components-cards.html
│   ├── components-badges.html
│   ├── components-inputs.html
│   └── components-nav.html
├── ui_kits/app/
│   ├── index.html               — Mobile app UI kit (click-thru prototype)
│   ├── index-bundle.html        — Bundled version
│   ├── Components.jsx            — Core shared components
│   └── Screens.jsx               — Screen implementations
└── uploads/
    ├── Horizontal 1.png         — Dark-background logo variant
    └── Horizontal 2.png         — Light-on-dark logo variant
```

### Design Token System
- CSS custom properties defined in `colors_and_type.css`
- Token categories: colors, typography, spacing, radius, shadows, motion
- Mobile-first responsive approach
- Dark mode supported via token switching

### Component Patterns
- **Buttons:** Primary (navy), Accent (blue), Ghost, Destructive — pill or rounded
- **Cards:** White/Navy-800 bg, 12px radius, 1px border, subtle shadow
- **Badges:** Achievement system with evocative names
- **Inputs:** Form elements with consistent styling
- **Nav:** Bottom tab bar (mobile 5 tabs) + top app bar (56px) / desktop sidebar (240px)

### Key Design Decisions
- Barlow Condensed for display/headlines, Inter for body/UI
- 4px spacing base unit
- 44px minimum touch target
- Spring easing for animations (cubic-bezier(0.34, 1.56, 0.64, 1))
- Lucide icons (stroke-based, 2px weight)