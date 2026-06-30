import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoginPage from "@/app/login/page";

describe("Login screen", () => {
  it("renders the heading, email + PIN fields and account links", () => {
    render(<LoginPage />);
    expect(
      screen.getByRole("heading", { name: /Welcome back/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByLabelText("PIN")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Forgot PIN/i })
    ).toBeInTheDocument();
    const createAccount = screen.getByRole("link", {
      name: /Create an account/i,
    });
    expect(createAccount).toHaveAttribute("href", "/signup");
  });

  it("disables the sign-in button until both fields are valid", () => {
    render(<LoginPage />);
    const submit = screen.getByRole("button", { name: "Sign in" });
    expect(submit).toBeDisabled();

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "ada@learnault.xyz" },
    });
    fireEvent.change(screen.getByLabelText("PIN"), {
      target: { value: "123456" },
    });
    expect(submit).toBeEnabled();
  });

  it("shows a visual email error after an invalid entry is blurred", () => {
    render(<LoginPage />);
    const email = screen.getByLabelText("Email address");
    fireEvent.change(email, { target: { value: "not-an-email" } });
    fireEvent.blur(email);

    expect(email).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please enter a valid email address"
    );
  });

  it("only accepts up to 6 numeric digits in the PIN field", () => {
    render(<LoginPage />);
    const pin = screen.getByLabelText("PIN") as HTMLInputElement;
    fireEvent.change(pin, { target: { value: "12ab3456789" } });
    expect(pin.value).toBe("123456");
  });
});
