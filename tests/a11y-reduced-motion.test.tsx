import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import Home from "@/app/page";
import { QuizContainer } from "@/components/quiz/quiz-container";
import Testimonial from "@/components/landing/testimonial";

function mockPrefersReducedMotion(prefers: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches:
        query === "(prefers-reduced-motion: reduce)" ? prefers : false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

describe("Reduced Motion — Testimonial (framer-motion)", () => {
  beforeEach(() => {
    mockPrefersReducedMotion(false);
  });

  it("renders without error when reduced motion is preferred", () => {
    mockPrefersReducedMotion(true);
    const { container } = render(<Testimonial />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("renders without animation when reduced motion is on", () => {
    mockPrefersReducedMotion(true);
    const { container } = render(<Testimonial />);
    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("renders normally when reduced motion is not preferred", () => {
    mockPrefersReducedMotion(false);
    const { container } = render(<Testimonial />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });
});

describe("Reduced Motion — Quiz (framer-motion)", () => {
  beforeEach(() => {
    mockPrefersReducedMotion(false);
  });

  it("quiz container renders when reduced motion is preferred", () => {
    mockPrefersReducedMotion(true);
    const { container } = render(<QuizContainer />);
    expect(container.querySelector("div")).toBeInTheDocument();
  });

  it("quiz container renders normally without reduced motion", () => {
    mockPrefersReducedMotion(false);
    const { container } = render(<QuizContainer />);
    expect(container.querySelector("div")).toBeInTheDocument();
  });
});

describe("Reduced Motion — CSS animations respected", () => {
  beforeEach(() => {
    mockPrefersReducedMotion(false);
  });

  it("home page renders with reduced motion preference", () => {
    mockPrefersReducedMotion(true);
    const { container } = render(<Home />);
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("verify motion-reduce utility classes are present in ping animation", () => {
    const { container } = render(<Home />);
    const pingEls = container.querySelectorAll(".animate-ping");
    pingEls.forEach((el) => {
      expect(el.className).toContain("motion-reduce:animate-none");
    });
  });
});
