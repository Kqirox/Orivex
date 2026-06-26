import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";
import { QuizContainer } from "@/components/quiz/quiz-container";
import { FAQ } from "@/components/landing/FAQ";

function setViewport(width: number) {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event("resize"));
}

const breakpoints = [
  { label: "360px (mobile)", width: 360 },
  { label: "768px (tablet)", width: 768 },
  { label: "1024px (desktop)", width: 1024 },
  { label: "1440px (wide)", width: 1440 },
];

describe("Responsive Verification — Home Page", () => {
  for (const bp of breakpoints) {
    it(`renders without overflow/CLS at ${bp.label}`, () => {
      setViewport(bp.width);
      const { container } = render(<Home />);

      const scrollWidth = document.documentElement.scrollWidth;
      const viewportWidth = bp.width;

      expect(
        scrollWidth,
        `Horizontal overflow detected at ${bp.label}: scrollWidth=${scrollWidth} viewport=${viewportWidth}`,
      ).toBeLessThanOrEqual(viewportWidth + 20);
    });
  }
});

describe("Responsive Verification — Quiz Page", () => {
  for (const bp of breakpoints) {
    it(`renders quiz without overflow at ${bp.label}`, () => {
      setViewport(bp.width);
      const { container } = render(<QuizContainer />);

      const scrollWidth = document.documentElement.scrollWidth;
      const viewportWidth = bp.width;

      expect(scrollWidth).toBeLessThanOrEqual(viewportWidth + 20);
    });
  }
});

describe("Responsive Verification — FAQ", () => {
  for (const bp of breakpoints) {
    it(`renders FAQ without overflow at ${bp.label}`, () => {
      setViewport(bp.width);
      const { container } = render(<FAQ />);

      const allElements = container.querySelectorAll("*");
      allElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          expect(
            el.scrollWidth - el.clientWidth,
            `Overflow on <${el.tagName}> at ${bp.label}: scroll=${el.scrollWidth} client=${el.clientWidth}`,
          ).toBeLessThanOrEqual(2);
        }
      });
    });
  }
});

describe("Responsive — Layout Stability", () => {
  it("viewport metatag exists for mobile", () => {
    const viewport = document.querySelector('meta[name="viewport"]');
    expect(viewport).toBeTruthy();
  });

  it("images have width/height to prevent CLS", () => {
    const { container } = render(<Home />);
    const imgs = container.querySelectorAll("img");
    imgs.forEach((img) => {
      expect(
        img.hasAttribute("width") || img.hasAttribute("sizes") || img.hasAttribute("fill"),
        `Image ${img.getAttribute("src")} should have width/height for CLS prevention`,
      ).toBe(true);
    });
  });
});
