import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LearningCatalog from "@/components/learning/learning-catalog";

describe("LearningCatalog", () => {
  it("filters modules by category and shows an empty state when nothing matches", () => {
    render(<LearningCatalog />);

    expect(screen.getByText("Browse modules and learning paths")).toBeInTheDocument();
    expect(screen.getByText("What is a Digital Wallet?")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Entrepreneurship" }));

    expect(screen.getByText("Business Idea Validation")).toBeInTheDocument();
    expect(screen.queryByText("What is a Digital Wallet?")).not.toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Search modules or skills"), {
      target: { value: "unknown" },
    });

    expect(screen.getByText("No modules match the current filters")).toBeInTheDocument();
  });
});
