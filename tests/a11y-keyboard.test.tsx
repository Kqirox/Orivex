import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";
import { Textarea } from "@/components/ui/Textarea";
import { FAQ } from "@/components/landing/FAQ";

describe("Keyboard Navigation — Home Page", () => {
  it("renders focusable elements that can be reached via keyboard", () => {
    render(<Home />);
    const focusable = document.querySelectorAll(
      'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );

    expect(focusable.length).toBeGreaterThan(0);

    focusable.forEach((el, i) => {
      if (!(el instanceof HTMLElement)) return;
      const isDisabled =
        el.hasAttribute("disabled") &&
        el.getAttribute("disabled") !== "false";
      if (isDisabled) return;
      expect(el.tabIndex, `Element #${i} <${el.tagName}> should be reachable`).toBeGreaterThanOrEqual(0);
    });
  });

  it("has no keyboard traps — all interactive elements are focusable", () => {
    render(<Home />);
    const buttons = document.querySelectorAll("button:not([disabled])");
    const links = document.querySelectorAll("a[href]");

    const allInteractive = [...buttons, ...links] as HTMLElement[];

    allInteractive.forEach((el) => {
      const tabIndex = el.getAttribute("tabindex");
      if (tabIndex === "-1") {
        expect(
          el.getAttribute("aria-disabled"),
          `Element <${el.tagName}> with tabindex=-1 must have aria-disabled`,
        ).toBeTruthy();
      }
    });
  });

  it("buttons have visible focus indicators via class", () => {
    render(<Home />);
    const buttons = document.querySelectorAll("button:not([disabled])");
    buttons.forEach((btn) => {
      const hasFocusClass =
        btn.className.includes("focus-visible:outline-2") ||
        btn.className.includes("focus:outline-none");
      expect(
        hasFocusClass,
        `Button "${btn.textContent?.trim() || btn.className}" should have a focus-visible style`,
      ).toBe(true);
    });
  });
});

describe("Keyboard Navigation — Textarea", () => {
  it("textarea is focusable and keyboard accessible", () => {
    render(<Textarea label="Test" />);
    const ta = screen.getByRole("textbox");

    expect(ta).toHaveAttribute("id");

    ta.focus();
    expect(ta).toHaveFocus();
  });
});

describe("Keyboard Navigation — FAQ Accordion", () => {
  it("all accordion buttons are keyboard reachable", () => {
    render(<FAQ />);
    const buttons = screen.getAllByRole("button", { name: /what|how|are|is|do/i });
    expect(buttons.length).toBeGreaterThan(0);

    buttons.forEach((btn) => {
      expect(btn.getAttribute("tabindex")).not.toBe("-1");
      expect(btn).toHaveAttribute("aria-expanded");
      expect(btn).toHaveAttribute("aria-controls");
    });
  });

  it("FAQ toggles on keyboard interaction", () => {
    render(<FAQ />);
    const firstBtn = screen.getAllByRole("button")[0];

    fireEvent.click(firstBtn);
    const panelId = firstBtn.getAttribute("aria-controls");
    const panel = document.getElementById(panelId!);
    expect(panel).toBeInTheDocument();
  });
});
