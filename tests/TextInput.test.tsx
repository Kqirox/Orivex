import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TextInput from "@/components/form/TextInput";

describe("TextInput", () => {
  // ── Rendering ────────────────────────────────────────────────────────────

  it("renders a visible label", () => {
    render(<TextInput label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("associates the label with the input via htmlFor/id", () => {
    render(<TextInput label="Email" />);
    const input = screen.getByRole("textbox");
    const label = screen.getByText("Email").closest("label");
    expect(label).toHaveAttribute("for", input.id);
  });

  it("renders a placeholder when provided", () => {
    render(<TextInput label="Email" placeholder="Enter email" />);
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  // ── Default state ────────────────────────────────────────────────────────

  it("defaults to the 'default' state with no trailing icon", () => {
    render(<TextInput label="Email" />);
    // No checkmark or error icon in default state
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  // ── Focus/Success state ──────────────────────────────────────────────────

  it("does not show an error message in the 'focus' state", () => {
    render(<TextInput label="Email" state="focus" />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("does not show an error message in the 'success' state", () => {
    render(<TextInput label="Email" state="success" />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  // ── Error state ──────────────────────────────────────────────────────────

  it("sets aria-invalid='true' when state is 'error'", () => {
    render(<TextInput label="Email" state="error" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("renders the error message in an alert role when state is 'error'", () => {
    render(
      <TextInput
        label="Email"
        state="error"
        errorMessage="Email is not valid"
      />
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Email is not valid");
  });

  it("links the input to the error message via aria-describedby", () => {
    render(
      <TextInput
        label="Email"
        state="error"
        errorMessage="Email is not valid"
      />
    );
    const input = screen.getByRole("textbox");
    const errorEl = screen.getByRole("alert");
    expect(input).toHaveAttribute("aria-describedby", errorEl.id);
  });

  it("does not render an error message when errorMessage is omitted", () => {
    render(<TextInput label="Email" state="error" />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("aria-invalid is not set outside of error state", () => {
    render(<TextInput label="Email" state="success" />);
    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid");
  });

  // ── Helper text ──────────────────────────────────────────────────────────

  it("renders helper text in non-error states", () => {
    render(
      <TextInput label="Email" state="default" helperText="We never spam." />
    );
    expect(screen.getByText("We never spam.")).toBeInTheDocument();
  });

  it("links the input to helper text via aria-describedby", () => {
    render(
      <TextInput label="Email" state="default" helperText="We never spam." />
    );
    const input = screen.getByRole("textbox");
    const helper = screen.getByText("We never spam.");
    expect(input).toHaveAttribute("aria-describedby", helper.id);
  });

  it("does not render helper text when state is 'error'", () => {
    render(
      <TextInput
        label="Email"
        state="error"
        helperText="We never spam."
        errorMessage="Email is not valid"
      />
    );
    expect(screen.queryByText("We never spam.")).not.toBeInTheDocument();
  });

  // ── Native input forwarding ──────────────────────────────────────────────

  it("forwards extra props to the underlying input element", () => {
    render(<TextInput label="Email" type="email" data-testid="email-input" />);
    const input = screen.getByTestId("email-input");
    expect(input).toHaveAttribute("type", "email");
  });

  it("accepts an explicit id and uses it on the input", () => {
    render(<TextInput label="Email" id="custom-id" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "custom-id");
  });
});
