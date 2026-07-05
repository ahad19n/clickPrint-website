# ClickPrint Design System

Reference doc for porting the mobile app's visual language to the web app. Style is **SadaPay-inspired fintech**: soft off-white canvas, floating white cards, saturated flat-color accent blocks, large pill radii, and colored "glow" shadows instead of neutral gray shadows.

Source of truth: [constants/colors.js](constants/colors.js), analyzed alongside [app/(tabs)/home.jsx](app/(tabs)/home.jsx), [app/(tabs)/profile.jsx](app/(tabs)/profile.jsx), [app/shop-details.jsx](app/shop-details.jsx).

---

## 1. Color Palette

### Brand / accent colors
| Token | Hex | Role |
|---|---|---|
| `primary` (green) | `#00D9A3` | Brand color. Balance card background, active/loading states, "top match" badges, success/online status dots, focus accents. |
| `primaryLight` | `#1DE0AD` | Hover/lighter variant of primary. |
| `primaryDark` | `#00C793` | Pressed/darker variant of primary. |
| `creditWallet` (blue) | `#3B9EFF` | Secondary accent. "Load Money" action card, badge counters (Active Jobs count). |
| `creditWalletDark` | `#2A8AEF` | Pressed variant of blue. |
| `printRequest` (orange/coral) | `#FF8B7B` | Primary CTA / main brand orange. "New Print" action card, primary buttons (Continue, Logout), selected states, active nav icon. |
| `printRequestDark` | `#FF7B6B` | Pressed variant of orange. |

Despite the app being described as "orange main," the code treats **green as `primary`** (used for loaders, success, balance card) while **orange (`printRequest`) is the dominant CTA/action color** and **blue (`creditWallet`) is the secondary accent**. Treat it as a 3-color flat accent system: green = primary/success, orange = primary action/brand, blue = secondary action.

### Neutral / surface colors
| Token | Hex | Role |
|---|---|---|
| `background` | `#F7F8FA` | App canvas background (very light gray, not pure white). |
| `cardBackground` | `#FFFFFF` | Cards, sheets, headers, inputs-on-canvas. |
| `textPrimary` | `#1A1F36` | Headings, primary body text, dark navy (not pure black). |
| `textSecondary` | `#8F9BB3` | Secondary/meta text, placeholders, inactive icons. |
| `borderLight` | `rgba(228, 233, 242, 0.8)` | Hairline dividers/borders between sections and cards. |
| `navActive` | `#FF8B7B` (= printRequest) | Active tab/nav item. |
| `navInactive` | `#858b96` | Inactive tab/nav item. |

### Overlay / supporting tints
| Token | Value | Role |
|---|---|---|
| `merchantBackground` | `#E3F2FD` | Light blue tint background (icon chips). |
| `merchantIcon` | `#3B9EFF` | Icon color on merchant tint. |
| `cardOverlay` | `rgba(255,255,255,0.2)` | Icon-chip background *on top of* a colored action card (e.g. white 20% over orange/blue). |
| `cardOverlayHover` | `rgba(255,255,255,0.3)` | Hover/press state of the above. |

### Shadow colors (colored glow, not neutral)
| Token | Value | Used with |
|---|---|---|
| `shadowLight` | `rgba(143,155,179,0.08)` | Default neutral card shadow (e.g. shop list cards). |
| `shadowMedium` | `rgba(143,155,179,0.12)` | Slightly stronger neutral shadow (footers, tab bar). |
| `shadowPrimary` | `rgba(0,217,163,0.25)` | Shadow under the green balance card — the shadow is *tinted to match the card's own fill color*. |
| `shadowCreditWallet` | `rgba(59,158,255,0.25)` | Shadow under the blue action card. |
| `shadowPrintRequest` | `rgba(255,139,123,0.25)` | Shadow under the orange action card. |

**Rule: every saturated colored surface casts a shadow of its own hue at ~25% opacity**, not a generic black/gray shadow. Neutral cards (white, on light background) use the low-opacity gray shadows instead. This is the single most distinctive visual signature to carry over to web (translate directly to CSS `box-shadow` with a matching `rgba` color).

### Suggested CSS custom properties for the web app
```css
:root {
  /* brand */
  --color-primary: #00D9A3;
  --color-primary-light: #1DE0AD;
  --color-primary-dark: #00C793;
  --color-blue: #3B9EFF;
  --color-blue-dark: #2A8AEF;
  --color-orange: #FF8B7B;
  --color-orange-dark: #FF7B6B;

  /* surfaces */
  --color-bg: #F7F8FA;
  --color-surface: #FFFFFF;

  /* text */
  --color-text-primary: #1A1F36;
  --color-text-secondary: #8F9BB3;

  /* borders */
  --color-border: rgba(228, 233, 242, 0.8);

  /* shadows (colored glow) */
  --shadow-neutral-sm: rgba(143, 155, 179, 0.08);
  --shadow-neutral-md: rgba(143, 155, 179, 0.12);
  --shadow-primary: rgba(0, 217, 163, 0.25);
  --shadow-blue: rgba(59, 158, 255, 0.25);
  --shadow-orange: rgba(255, 139, 123, 0.25);
}
```

---

## 2. Typography

No custom font family is set anywhere in the analyzed files — the app relies on the platform default (San Francisco / Roboto). For web, pick a clean geometric/humanist sans (e.g. Inter, SF Pro, or system-ui) to match that neutral fintech feel.

| Usage | Size | Weight | Color | Notes |
|---|---|---|---|---|
| Page/section heading | 28px | 700 (bold) | `textPrimary` | e.g. onboarding heading |
| Card/section title | 18–20px | 700 | `textPrimary` | "My Drafts", "Select Print Shop" |
| Hero numeric (balance) | up to 52px (responsive, `min(16vw, 52px)`) | 700 | white (on colored card) | `letter-spacing: -2px` — tight negative tracking on large numbers |
| Body / menu item text | 16px | 500 | `textPrimary` | |
| Label / meta text | 12–14px | 400–600 | `textSecondary` | dates, addresses, counts |
| Overline / section label | 14px | 700 | `textSecondary` | `text-transform: uppercase`, `letter-spacing: 0.5px` — used for "ACCOUNT", "SETTINGS", "HELP" group headers |
| Button text | 16px | 600–700 | white (on colored button) | |
| Badge text | 11–12px | 700 | contextual | small pill badges (Top Match, active job count) |

**Patterns to reuse on web:**
- Large monetary/numeric displays get tight negative letter-spacing and live on a colored card, not on white.
- Section group headers are small, bold, uppercase, gray, letter-spaced — a common fintech-list convention (like iOS settings groups).

---

## 3. Spacing & Layout

- Base horizontal page padding: **20px**
- Content max-width on wide layouts: **600px, centered** (`maxWidth: 600, alignSelf: "center"`) — keep this for web to avoid overly stretched cards on desktop; treat it as the primary content column width, with the page background extending full-bleed behind it.
- Standard gap between grouped elements/cards: **16px**
- Section vertical rhythm: **24px** between grouped sections, **12px** between a section and the next block
- Card internal padding: **20–22px**
- List item padding: **12–16px vertical, 16–20px horizontal**

## 4. Radius Scale

Distinctly large, soft radii — a core part of the "friendly fintech" look:

| Element | Radius |
|---|---|
| Large feature cards (balance card, action cards) | 24px |
| Standard cards (shop card, menu item, dropdown) | 12–16px |
| Buttons (primary CTA) | 10–12px |
| Pills (country-code selector, status chips) | 25px (fully rounded / `height/2`) |
| Small icon chips | 8–12px |
| Badge/counter circles | fully round (`borderRadius: width/2`) |

Rule of thumb: **the bigger/more prominent the surface, the larger the radius** (24px for hero cards down to 8px for small icon chips), and anything meant to look like a "chip" or "pill" (status, filter, selector) is fully rounded.

## 5. Elevation / Shadow System

Two families, both **soft and diffuse** (large blur radius, low opacity, no hard shadows):

1. **Neutral elevation** — white cards on the light gray background:
   ```css
   box-shadow: 0 2px 8px var(--shadow-neutral-sm);
   ```
   Slightly stronger for sticky footers / floating bars:
   ```css
   box-shadow: 0 -4px 12px var(--shadow-neutral-md);
   ```

2. **Colored glow elevation** — saturated action cards cast a shadow tinted to their own fill:
   ```css
   /* orange card */
   box-shadow: 0 8px 24px var(--shadow-orange);
   /* blue card */
   box-shadow: 0 8px 24px var(--shadow-blue);
   /* green/primary card, larger + softer since it's the hero card */
   box-shadow: 0 8px 32px var(--shadow-primary);
   ```

Use CSS box-shadow blur ~3x the offset, matching the native `shadowRadius` values (8–32px) with `elevation` translating roughly to blur strength.

## 6. Component Patterns

### Balance / hero card
Full-bleed colored card (primary green), large bold white numeral with negative letter-spacing, label above at 90% opacity, tinted glow shadow, 24px radius. This is the visual anchor of the home screen — on web, keep it as the first, largest, most saturated element above the fold.

### Action cards (2-up column)
Two stacked colored cards (blue + orange) beside the hero card, each with:
- A small translucent white icon chip (`rgba(255,255,255,0.2)` background) containing a directional icon (arrow-down / arrow-up-right)
- Bold white label text
- Same glow-shadow rule as the hero card, matching each card's own hue

### List rows (drafts, active jobs, shop list, menu items)
White row/card on the gray canvas, icon chip on the left (light neutral or tinted background), title + meta text stacked, chevron or action button on the right. Hairline `borderLight` divider or full card border. Selected state swaps border color to the accent (orange) rather than filling the background.

### Status dot + label
8px filled circle + small bold colored label, used for binary state (Online = primary green / Offline = textSecondary gray). Reusable generic "status chip" pattern for web (order status, print job status, etc.).

### Badges
Small fully-rounded pill or circle, bold small text, tinted background at low opacity matching the accent color (e.g. `rgba(0,217,163,0.12)` behind green text) — "Top Match" badge, notification/count badges. This tint-background + solid-text-of-same-hue combo is used repeatedly and should become a reusable `.badge` component on web.

### Buttons
- **Primary CTA**: solid orange (`printRequest`) fill, white bold text, 12px radius, centered icon+label with gap, disabled state = `borderLight` gray fill.
- **Secondary/menu row**: white background, icon + label left-aligned, chevron right, subtle press-scale animation (scale to 0.97 on press-in, spring back on release) — reuse as a generic pressable list-item component; on web this maps to a hover/active scale transform or background tint transition.
- **Retry/error buttons**: solid green (`primary`) fill, white text — reserved for recovery actions.

### Section grouping (profile-style settings list)
Uppercase gray letter-spaced section label, followed by a stack of white rounded rows with 8px gaps between rows and 24px gaps between groups. Directly portable to a web settings/account page.

### Search input
White/gray input pill sitting inside a white bordered container, icon prefix, `borderLight` border, `background` color fill (not pure white) to visually recess it slightly below the header.

## 7. Interaction / Motion Notes

- Press feedback on menu items uses a spring scale animation (`0.97` → `1`), not opacity dimming — replicate with a fast CSS `transform: scale(0.97)` transition (~100–150ms) on `:active`.
- Loading states use the brand green `ActivityIndicator`/spinner consistently — keep one spinner color (green) app-wide rather than per-section colors.
- Disabled buttons drop to a flat neutral gray (`borderLight`/`navInactive`) rather than just lowering opacity — preserve full opacity, swap the fill color instead.

## 8. Design Tokens Summary (quick reference)

```
Colors:      green #00D9A3 (primary/success) · orange #FF8B7B (CTA/brand) · blue #3B9EFF (secondary)
Canvas:      #F7F8FA background · #FFFFFF cards
Text:        #1A1F36 primary · #8F9BB3 secondary
Radius:      24px hero cards · 12-16px cards/buttons · pill (fully round) chips
Shadow:      colored glow (~25% opacity, hue-matched) on saturated cards; neutral gray (~8-12% opacity) elsewhere
Spacing:     20px page padding · 16px card gaps · 24px section gaps
Type:        System/neutral sans · bold uppercase letter-spaced section labels · tight negative tracking on large numerals
Max width:   600px centered content column
```
