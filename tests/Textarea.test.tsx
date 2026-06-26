import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Textarea } from "@/components/ui/Textarea";

describe("Textarea", () => {
  it("renders label with pencil icon and placeholder in default state", () => {
    render(<Textarea />);
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Write description here...")
    ).toBeInTheDocument();
    expect(screen.getByText(/Max 200 texts/)).toBeInTheDocument();
  });

  it("shows indigo border class when state='focus' is forced", () => {
    render(<Textarea state="focus" value="hello" onChange={() => {}} />);
    const ta = screen.getByRole("textbox");
    expect(ta.className).toMatch(/border-indigo-500/);
  });

  it("shows faded text class when state='filled' is forced", () => {
    render(<Textarea state="filled" value="some text" onChange={() => {}} />);
    const ta = screen.getByRole("textbox");
    expect(ta.className).toMatch(/text-\[#94A3B8\]/);
  });

  it("shows error state and alert when state='error' is forced", () => {
    render(<Textarea state="error" value="x" onChange={() => {}} />);
    const ta = screen.getByRole("textbox");
    expect(ta.className).toMatch(/border-\[#DC2626\]/);
    expect(ta).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Reached the 200 text limit"
    );
  });

  it("automatically enters error state when character count reaches max", () => {
    const longText = "a".repeat(200);
    render(<Textarea value={longText} onChange={() => {}} />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("updates character count live as user types", () => {
    render(<Textarea />);
    const ta = screen.getByRole("textbox");
    fireEvent.change(ta, { target: { value: "Hello" } });
    expect(screen.getByText(/5\/200/)).toBeInTheDocument();
  });

  it("associates label, helper text and error message accessibly", () => {
    render(<Textarea />);
    const ta = screen.getByRole("textbox");
    // aria-describedby points to helper when not in error
    const descId = ta.getAttribute("aria-describedby");
    expect(descId).toBeTruthy();
    expect(document.getElementById(descId!)).toBeInTheDocument();
  });
});
