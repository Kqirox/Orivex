import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WalletDashboard from "@/components/wallet/wallet-dashboard";

describe("WalletDashboard", () => {
  it("renders the wallet overview, history, and shareable credentials", () => {
    render(<WalletDashboard />);

    expect(screen.getByText("Your rewards, badges, and next payout")).toBeInTheDocument();
    expect(screen.getByText("Balance overview")).toBeInTheDocument();
    expect(screen.getByText("Recent activity")).toBeInTheDocument();
    expect(screen.getByText("Shareable credentials")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Withdraw to mobile money/i })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /Share card/i }).length).toBeGreaterThan(0);
  });
});
