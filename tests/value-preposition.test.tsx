import { render, screen } from "@testing-library/react";
import ValuePreposition from "@/components/landing/value-preposition";
import { describe, it, expect } from "vitest";

describe("ValuePreposition", () => {
  it("renders the value proposition section", () => {
    render(<ValuePreposition />);
    expect(screen.getByRole("heading", { name: /why learnault is the best way to learn, earn, and grow\./i })).toBeInTheDocument();
    expect(screen.getByText(/earn real rewards/i)).toBeInTheDocument();
    expect(screen.getByText(/verify your skills on-chain/i)).toBeInTheDocument();
  });
});
