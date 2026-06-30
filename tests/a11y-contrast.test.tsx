import { describe, it, expect } from "vitest";

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  return {
    r: Number.parseInt(clean.substring(0, 2), 16),
    g: Number.parseInt(clean.substring(2, 4), 16),
    b: Number.parseInt(clean.substring(4, 6), 16),
  };
}

function relativeLuminance(r: number, g: number, b: number) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1: string, hex2: string) {
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);
  const l1 = relativeLuminance(c1.r, c1.g, c1.b);
  const l2 = relativeLuminance(c2.r, c2.g, c2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

type TokenPair = {
  fg: string;
  bg: string;
  usage: string;
};

const requiredPairs: TokenPair[] = [
  { fg: "#0F172A", bg: "#FFFFFF", usage: "Primary text on white surface" },
  { fg: "#0F172A", bg: "#F9FAFB", usage: "Primary text on primary background" },
  { fg: "#0F172A", bg: "#F5B841", usage: "Primary text on primary gold (CTA)" },
  { fg: "#475569", bg: "#FFFFFF", usage: "Secondary text on white" },
  { fg: "#475569", bg: "#F9FAFB", usage: "Secondary text on primary background" },
  { fg: "#475569", bg: "#F8F9FB", usage: "Secondary text on section bg" },
  { fg: "#1A1A1A", bg: "#F4B42A", usage: "Button text on gold" },
  { fg: "#1A1A1A", bg: "#FFFFFF", usage: "Gold button text on white (badge)" },
  { fg: "#506078", bg: "#FFFFFF", usage: "Body text on white (learning-paths)" },
  { fg: "#506078", bg: "#F8F9FB", usage: "Body text on section bg" },
  { fg: "#696E78", bg: "#FFFFFF", usage: "Muted text on white" },
  { fg: "#696E78", bg: "#F8F9FB", usage: "Muted text on section bg" },
  { fg: "#5F6368", bg: "#FFFFFF", usage: "Testimonial text on white" },
  { fg: "#5F6368", bg: "#F9FAFB", usage: "Testimonial text on section bg" },
  { fg: "#FFFFFF", bg: "#0F172A", usage: "White text on dark bg" },
  { fg: "#9CA3AF", bg: "#0C0D0F", usage: "Footer description on dark bg" },
  { fg: "#9CA3AF", bg: "#0C0D0F", usage: "Footer section heading on dark bg" },
  { fg: "#F1F1F1", bg: "#0C0D0F", usage: "Footer brand text on dark bg" },
  { fg: "#DC2626", bg: "#FFFFFF", usage: "Error text on white" },
  { fg: "#15803D", bg: "#FFFFFF", usage: "Success text on white" },
  { fg: "#6B7280", bg: "#FFFFFF", usage: "Muted/filled text on white" },
  { fg: "#475569", bg: "#E2E8F0", usage: "Disabled button text on disabled bg" },
  { fg: "#4A4A4A", bg: "#F5C563", usage: "Quest section body text on gold bg" },
  { fg: "#7A5300", bg: "#FFF8E8", usage: "Tier badge text on badge bg" },
  { fg: "#272A30", bg: "#FFFFFF", usage: "Hero CTA border text on white" },
];

describe("WCAG AA Contrast Verification", () => {
  for (const pair of requiredPairs) {
    it(`${pair.fg} on ${pair.bg} — ${pair.usage}`, () => {
      const ratio = contrastRatio(pair.fg, pair.bg);

      expect(
        ratio,
        [
          `Contrast ratio ${ratio.toFixed(2)}:1 is below WCAG AA minimum 4.5:1`,
          `  Foreground: ${pair.fg}`,
          `  Background: ${pair.bg}`,
          `  Usage: ${pair.usage}`,
        ].join("\n"),
      ).toBeGreaterThanOrEqual(4.5);
    });
  }

  it("large text sizes can use 3:1 threshold for primary CTA buttons", () => {
    const ratio = contrastRatio("#1A1A1A", "#F4B42A");
    expect(ratio).toBeGreaterThanOrEqual(3);
  });

  it("documents all computed contrast ratios", () => {
    const results = requiredPairs.map((p) => {
      const ratio = contrastRatio(p.fg, p.bg);
      return {
        foreground: p.fg,
        background: p.bg,
        ratio: Number(ratio.toFixed(2)),
        passAA: ratio >= 4.5,
        passAALarge: ratio >= 3,
        usage: p.usage,
      };
    });

    const passed = results.filter((r) => r.passAA).length;
    const failed = results.filter((r) => !r.passAA).length;

    expect(failed).toBe(0);
    expect(passed).toBeGreaterThan(0);
  });
});
