import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { createRef } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders children and defaults to the solid primary variant", () => {
    render(<Button>Start Learning</Button>);
    const btn = screen.getByRole("button", { name: "Start Learning" });
    expect(btn).toBeInTheDocument();
    expect(btn.className).toMatch(/bg-\[#F5B841\]/);
    // default type is button so it never submits an enclosing form by accident
    expect(btn).toHaveAttribute("type", "button");
  });

  it("applies the correct classes for each solid + outline variant", () => {
    const { rerender } = render(<Button variant="secondary">x</Button>);
    expect(screen.getByRole("button").className).toMatch(/bg-\[#FEF3C7\]/);

    rerender(<Button variant="tertiary">x</Button>);
    expect(screen.getByRole("button").className).toMatch(/bg-\[#EADBC0\]/);

    rerender(<Button variant="outline">x</Button>);
    expect(screen.getByRole("button").className).toMatch(/border-\[#D1D5DB\]/);
  });

  it("renders the link variant with a trailing arrow and teal text", () => {
    const { container } = render(<Button variant="link">Forgot PIN</Button>);
    const btn = screen.getByRole("button", { name: /Forgot PIN/ });
    expect(btn.className).toMatch(/text-\[#14B8A6\]/);
    // link arrow is an inline SVG
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("maps sizes to the design-system type scale", () => {
    const { rerender } = render(<Button size="lg">x</Button>);
    expect(screen.getByRole("button").className).toMatch(/text-\[20px\]/);

    rerender(<Button size="sm">x</Button>);
    expect(screen.getByRole("button").className).toMatch(/text-\[14px\]/);

    rerender(<Button size="xs">x</Button>);
    expect(screen.getByRole("button").className).toMatch(/text-\[12px\]/);
  });

  it("exposes a keyboard-visible focus ring", () => {
    render(<Button>x</Button>);
    expect(screen.getByRole("button").className).toMatch(
      /focus-visible:ring-2/
    );
  });

  it("is non-interactive and marked disabled when disabled", () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        x
      </Button>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("aria-disabled", "true");
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("shows a spinner and blocks clicks while loading", () => {
    const onClick = vi.fn();
    render(
      <Button loading onClick={onClick}>
        Submit
      </Button>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("aria-busy", "true");
    expect(screen.getByRole("status")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("fires onClick when enabled and renders custom icon slots", () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} leftIcon={<Mail data-testid="left" />}>
        Continue
      </Button>
    );
    expect(screen.getByTestId("left")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("merges custom className overrides and forwards a ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(
      <Button ref={ref} className="w-full">
        x
      </Button>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.className).toMatch(/w-full/);
  });
});
