import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LessonView, MOCK_LESSON } from "@/components/learn/lesson-view";

describe("LessonView", () => {
  it("renders the first step's heading, body and illustration", () => {
    render(<LessonView />);
    const first = MOCK_LESSON.steps[0];
    expect(
      screen.getByRole("heading", { name: first.heading })
    ).toBeInTheDocument();
    expect(screen.getByText(first.body[0])).toBeInTheDocument();
    expect(screen.getByAltText(first.image.alt)).toBeInTheDocument();
  });

  it("exposes an in-module progress affordance", () => {
    render(<LessonView />);
    expect(
      screen.getByText(`Step 1 of ${MOCK_LESSON.steps.length}`)
    ).toBeInTheDocument();
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "1");
    expect(bar).toHaveAttribute(
      "aria-valuemax",
      String(MOCK_LESSON.steps.length)
    );
  });

  it("advances to the next step via Continue and updates progress", () => {
    render(<LessonView />);
    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    expect(
      screen.getByRole("heading", { name: MOCK_LESSON.steps[1].heading })
    ).toBeInTheDocument();
    expect(screen.getByText("Step 2 of 3")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "2"
    );
  });

  it("disables Back on the first step and re-enables it after advancing", () => {
    render(<LessonView />);
    expect(screen.getByRole("button", { name: "Back" })).toBeDisabled();
    fireEvent.click(screen.getByRole("button", { name: "Continue" }));
    expect(screen.getByRole("button", { name: "Back" })).toBeEnabled();
  });

  it("shows Finish on the last step and calls onComplete", () => {
    const onComplete = vi.fn();
    render(<LessonView onComplete={onComplete} />);

    fireEvent.click(screen.getByRole("button", { name: "Continue" }));
    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    const finish = screen.getByRole("button", { name: "Finish" });
    expect(finish).toBeInTheDocument();
    fireEvent.click(finish);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});
