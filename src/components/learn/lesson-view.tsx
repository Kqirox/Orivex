"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

// Frontend/design only — static mock content, no fetching/backend.

export interface LessonStep {
  heading: string;
  /** Lightweight illustration — kept as a plain <img> for low-bandwidth. */
  image: { src: string; alt: string };
  /** Short, simple-language paragraphs optimised for readability. */
  body: string[];
}

export interface Lesson {
  title: string;
  steps: LessonStep[];
}

export const MOCK_LESSON: Lesson = {
  title: "Stellar Basics",
  steps: [
    {
      heading: "What is the Stellar network?",
      image: { src: "/assets/learning-paths/global.svg", alt: "A connected globe" },
      body: [
        "Stellar is an open network that lets people send money across the world in seconds.",
        "Instead of one company being in charge, many computers keep a shared record of every payment.",
      ],
    },
    {
      heading: "Wallets and keys",
      image: {
        src: "/assets/why-learnault/digital-wallet.svg",
        alt: "A digital wallet",
      },
      body: [
        "A wallet holds your funds and your keys. Your public key is like an address you can share.",
        "Your secret key is private — it proves the account is yours, so never share it with anyone.",
      ],
    },
    {
      heading: "Earning while you learn",
      image: { src: "/assets/why-learnault/earn.svg", alt: "A reward coin" },
      body: [
        "On Learnault you finish short lessons and quizzes to earn XLM rewards.",
        "Your progress is recorded on Stellar, giving you verifiable proof of what you have learned.",
      ],
    },
  ],
};

export function LessonView({
  lesson = MOCK_LESSON,
  onComplete,
}: {
  lesson?: Lesson;
  onComplete?: () => void;
}) {
  const [index, setIndex] = useState(0);

  const total = lesson.steps.length;
  const step = lesson.steps[index];
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const progress = Math.round(((index + 1) / total) * 100);

  return (
    <article className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-6 bg-[#F9FAFB] px-4 py-8 font-body sm:px-6">
      {/* In-module progress */}
      <header className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <h1 className="font-heading text-[20px] font-bold text-[#0F172A]">
            {lesson.title}
          </h1>
          <span className="text-[12px] font-medium text-[#94A3B8]">
            Step {index + 1} of {total}
          </span>
        </div>
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-[#E2E8F0]"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label="Lesson progress"
        >
          <div
            className="h-full rounded-full bg-[#F5B841] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Lesson content */}
      <section className="flex flex-1 flex-col gap-5 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-7">
        <div className="flex justify-center rounded-xl bg-[#F1F5F9] py-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={step.image.src}
            alt={step.image.alt}
            width={96}
            height={96}
            loading="lazy"
            className="h-24 w-24"
          />
        </div>

        <h2 className="font-heading text-[24px] font-bold leading-tight text-[#0F172A]">
          {step.heading}
        </h2>

        <div className="flex flex-col gap-4">
          {step.body.map((paragraph, i) => (
            <p
              key={i}
              className="text-[18px] leading-relaxed text-[#475569]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex items-center justify-between gap-3">
        <Button
          variant="outline"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
        >
          Back
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            isLast ? onComplete?.() : setIndex((i) => Math.min(total - 1, i + 1))
          }
        >
          {isLast ? "Finish" : "Continue"}
        </Button>
      </nav>
    </article>
  );
}
