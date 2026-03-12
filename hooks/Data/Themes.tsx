export const THEMES = {
  AURORA_INK: {
    background: "#0b1020",
    foreground: "#f4f6ff",

    card: "#121a33",
    cardForeground: "#f4f6ff",

    popover: "#121a33",
    popoverForeground: "#f4f6ff",

    primary: "#7c5cff",
    primaryRgb: "124, 92, 255",
    primaryForeground: "#0b1020",

    secondary: "#1a2547",
    secondaryForeground: "#e8ebff",

    muted: "#141d38",
    mutedForeground: "#a9b2d6",

    accent: "#2fc6c7",
    accentForeground: "#0b1020",

    destructive: "#ff4d6d",

    border: "#202c56",
    input: "#202c56",
    ring: "#7c5cff",
    radius: "0.9rem",

    chart: [
      "#7c5cff",
      "#2fc6c7",
      "#ffb84d",
      "#ff4d6d",
      "#66a6ff",
    ],
  },


  NEON_CYBER: {
  background: "#05060f",
  foreground: "#e6e9ff",

  card: "#0f1328",
  cardForeground: "#e6e9ff",

  popover: "#0f1328",
  popoverForeground: "#e6e9ff",

  primary: "#00e5ff",
  primaryRgb: "0, 229, 255",
  primaryForeground: "#05060f",

  secondary: "#121938",
  secondaryForeground: "#cfd7ff",

  muted: "#0d1330",
  mutedForeground: "#94a0d4",

  accent: "#7c5cff",
  accentForeground: "#ffffff",

  destructive: "#ff3b6b",

  border: "#1e2a5a",
  input: "#1e2a5a",
  ring: "#00e5ff",

  radius: "0.9rem",

  chart: [
    "#00e5ff",
    "#7c5cff",
    "#2affc6",
    "#ffb800",
    "#ff3b6b",
  ],
},

MIDNIGHT_AI: {
  background: "#09090b",
  foreground: "#f8fafc",

  card: "#111114",
  cardForeground: "#f8fafc",

  popover: "#111114",
  popoverForeground: "#f8fafc",

  primary: "#6366f1",
  primaryRgb: "99, 102, 241",
  primaryForeground: "#ffffff",

  secondary: "#18181b",
  secondaryForeground: "#d4d4d8",

  muted: "#101014",
  mutedForeground: "#9ca3af",

  accent: "#22d3ee",
  accentForeground: "#000000",

  destructive: "#ef4444",

  border: "#27272a",
  input: "#27272a",
  ring: "#6366f1",

  radius: "0.9rem",

  chart: [
    "#6366f1",
    "#22d3ee",
    "#f59e0b",
    "#ef4444",
    "#10b981",
  ],
},

EMERALD_AI: {
  background: "#061512",
  foreground: "#e6fff7",

  card: "#0c201c",
  cardForeground: "#e6fff7",

  popover: "#0c201c",
  popoverForeground: "#e6fff7",

  primary: "#34d399",
  primaryRgb: "52, 211, 153",
  primaryForeground: "#04110e",

  secondary: "#0f2e28",
  secondaryForeground: "#c2f7e6",

  muted: "#09241f",
  mutedForeground: "#86d7c3",

  accent: "#22c55e",
  accentForeground: "#04110e",

  destructive: "#ff4d6d",

  border: "#1a4c43",
  input: "#1a4c43",
  ring: "#34d399",

  radius: "0.9rem",

  chart: [
    "#34d399",
    "#22c55e",
    "#2dd4bf",
    "#fbbf24",
    "#f87171",
  ],
},

COSMIC_PURPLE: {
  background: "#080512",
  foreground: "#f5f3ff",

  card: "#120f25",
  cardForeground: "#f5f3ff",

  popover: "#120f25",
  popoverForeground: "#f5f3ff",

  primary: "#8b5cf6",
  primaryRgb: "139, 92, 246",
  primaryForeground: "#ffffff",

  secondary: "#1b153a",
  secondaryForeground: "#ddd6fe",

  muted: "#140f30",
  mutedForeground: "#a78bfa",

  accent: "#22d3ee",
  accentForeground: "#020617",

  destructive: "#fb7185",

  border: "#2a2456",
  input: "#2a2456",
  ring: "#8b5cf6",

  radius: "0.9rem",

  chart: [
    "#8b5cf6",
    "#22d3ee",
    "#f59e0b",
    "#fb7185",
    "#34d399",
  ],
}


};

export const themeNames = Object.keys(THEMES) as ThemeKey[]

export type ThemeKey = keyof typeof THEMES;
export type Theme = (typeof THEMES)[ThemeKey];