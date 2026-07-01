import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Leaderboard } from "@/components/ui/Leaderboard";
import { Badge } from "@/components/ui/Badge";
import { Achievements } from "@/components/ui/Achievements";

// ─── Leaderboard ────────────────────────────────────────────────────────────

describe("Leaderboard", () => {
  const entries = [
    { rank: 1, name: "Alice", score: 1200 },
    { rank: 2, name: "Bob",   score: 950 },
    { rank: 3, name: "Carol", score: 800, isCurrentUser: true },
  ];

  it("renders the title", () => {
    render(<Leaderboard entries={entries} />);
    expect(screen.getByText("Leaderboard")).toBeInTheDocument();
  });

  it("renders a custom title", () => {
    render(<Leaderboard entries={entries} title="Weekly Top" />);
    expect(screen.getByText("Weekly Top")).toBeInTheDocument();
  });

  it("renders all entry names", () => {
    render(<Leaderboard entries={entries} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Carol")).toBeInTheDocument();
  });

  it("renders scores with 'pts' suffix", () => {
    render(<Leaderboard entries={entries} />);
    expect(screen.getByText("1,200 pts")).toBeInTheDocument();
    expect(screen.getByText("950 pts")).toBeInTheDocument();
  });

  it("marks current user row with aria-current", () => {
    const { container } = render(<Leaderboard entries={entries} />);
    const currentRow = container.querySelector('[aria-current="true"]');
    expect(currentRow).toBeInTheDocument();
    expect(currentRow).toHaveTextContent("Carol");
  });

  it("shows '(you)' label for current user", () => {
    render(<Leaderboard entries={entries} />);
    expect(screen.getByText("(you)")).toBeInTheDocument();
  });

  it("renders rank labels accessibly", () => {
    render(<Leaderboard entries={entries} />);
    expect(screen.getByLabelText("Rank 1")).toBeInTheDocument();
  });

  it("shows empty state when entries is empty", () => {
    render(<Leaderboard entries={[]} />);
    expect(screen.getByText("No entries yet")).toBeInTheDocument();
  });

  it("renders the list as an ordered list", () => {
    render(<Leaderboard entries={entries} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("renders avatar initial when no avatarUrl is provided", () => {
    render(<Leaderboard entries={[{ rank: 1, name: "Alice", score: 100 }]} />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});

// ─── Badge ───────────────────────────────────────────────────────────────────

describe("Badge", () => {
  it("renders with label", () => {
    render(<Badge label="First Steps" />);
    expect(screen.getByRole("img", { name: /First Steps badge/i })).toBeInTheDocument();
  });

  it("includes 'locked' in accessible name when not earned", () => {
    render(<Badge label="Expert" earned={false} />);
    expect(screen.getByRole("img", { name: /locked/i })).toBeInTheDocument();
  });

  it("renders custom icon", () => {
    render(<Badge label="Star" icon="⭐" />);
    expect(screen.getByText("⭐")).toBeInTheDocument();
  });

  it("uses title attribute for description", () => {
    render(<Badge label="Early Bird" description="Signed up on day one" />);
    expect(screen.getByTitle("Signed up on day one")).toBeInTheDocument();
  });

  it("applies grayscale class when not earned", () => {
    const { container } = render(<Badge label="Pro" earned={false} />);
    expect(container.firstChild).toHaveClass("grayscale");
  });

  it("does not apply grayscale class when earned", () => {
    const { container } = render(<Badge label="Pro" earned={true} />);
    expect(container.firstChild).not.toHaveClass("grayscale");
  });

  it("renders sr-only locked text when not earned", () => {
    render(<Badge label="Hidden" earned={false} />);
    expect(screen.getByText("locked")).toBeInTheDocument();
  });

  it("renders default icons for all tiers", () => {
    const tiers = ["bronze", "silver", "gold", "platinum"] as const;
    const icons = ["🥉", "🥈", "🥇", "💎"];
    tiers.forEach((tier, i) => {
      const { unmount } = render(<Badge label={tier} tier={tier} />);
      expect(screen.getByText(icons[i])).toBeInTheDocument();
      unmount();
    });
  });
});

// ─── Achievements ────────────────────────────────────────────────────────────

describe("Achievements", () => {
  const achievements = [
    { id: "1", label: "First Steps", tier: "bronze" as const, earned: true },
    { id: "2", label: "Scholar",     tier: "silver" as const, earned: true },
    { id: "3", label: "Legend",      tier: "gold"   as const, earned: false },
  ];

  it("renders the title", () => {
    render(<Achievements achievements={achievements} />);
    expect(screen.getByText("Achievements")).toBeInTheDocument();
  });

  it("renders a custom title", () => {
    render(<Achievements achievements={achievements} title="My Awards" />);
    expect(screen.getByText("My Awards")).toBeInTheDocument();
  });

  it("shows earned count out of total", () => {
    render(<Achievements achievements={achievements} />);
    expect(screen.getByText("2/3 earned")).toBeInTheDocument();
  });

  it("renders a progress bar with correct aria attributes", () => {
    render(<Achievements achievements={achievements} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "2");
    expect(bar).toHaveAttribute("aria-valuemax", "3");
  });

  it("renders all achievement badges", () => {
    render(<Achievements achievements={achievements} />);
    expect(screen.getByRole("img", { name: /First Steps/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Scholar/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Legend/i })).toBeInTheDocument();
  });

  it("shows empty state when achievements is empty", () => {
    render(<Achievements achievements={[]} />);
    expect(screen.getByText("No achievements yet")).toBeInTheDocument();
  });

  it("shows 0/0 earned when achievements is empty", () => {
    render(<Achievements achievements={[]} />);
    expect(screen.getByText("0/0 earned")).toBeInTheDocument();
  });

  it("renders badge list as accessible list", () => {
    render(<Achievements achievements={achievements} />);
    expect(
      screen.getByRole("list", { name: "Achievement badges" })
    ).toBeInTheDocument();
  });

  it("marks unearned badge as locked", () => {
    render(<Achievements achievements={achievements} />);
    expect(screen.getByRole("img", { name: /locked/i })).toBeInTheDocument();
  });
});
