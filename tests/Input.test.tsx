import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "@/components/ui/Input";

describe("Input component", () => {
  it("renders label and placeholder in default state", () => {
    render(<Input id="email" label="Email" placeholder="Enter email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  it("focus state: renders input without aria-invalid", () => {
    render(<Input id="email" label="Email" state="focus" value="user@example.com" readOnly />);
    const input = screen.getByLabelText("Email");
    expect(input).not.toHaveAttribute("aria-invalid");
  });

  it("success state: renders input without aria-invalid", () => {
    render(<Input id="email" label="Email" state="success" value="user@example.com" readOnly />);
    const input = screen.getByLabelText("Email");
    expect(input).not.toHaveAttribute("aria-invalid");
  });

  it("error state: sets aria-invalid and shows error message", () => {
    render(
      <Input
        id="email"
        label="Email"
        state="error"
        value="bad-email"
        errorMessage="Email is not valid"
        readOnly
      />
    );
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");

    const error = screen.getByRole("alert");
    expect(error).toHaveTextContent("Email is not valid");
    expect(input).toHaveAttribute("aria-describedby", "email-error");
    expect(error).toHaveAttribute("id", "email-error");
  });

  it("no error message shown when state is not error", () => {
    render(<Input id="email" label="Email" state="default" errorMessage="Email is not valid" />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
