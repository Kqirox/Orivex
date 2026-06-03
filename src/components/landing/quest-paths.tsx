"use client";

import Image from "next/image";
import { Bricolage_Grotesque, Poppins } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Seeded pseudo-random for consistent dot positions
function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const DOTS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: seededRandom(i * 3) * 100,
  y: seededRandom(i * 3 + 1) * 100,
  r: 2 + seededRandom(i * 3 + 2) * 3,
  opacity: 0.6 + seededRandom(i * 3 + 3) * 0.2,
}));

// label: optional prefix text in dark, amount in green
// positions tuned to match the Stellar logo arcs
const rewardLabels = [
  { id: 1, prefix: "",               amount: "+75 XLM",  left: "28%", top: "14%" },
  { id: 2, prefix: "Quest",          amount: "+95 XLM",  left: "68%", top: "34%" },
  { id: 3, prefix: "Tier Completed", amount: "+60 XLM",  left: "18%", top: "54%" },
  { id: 4, prefix: "",               amount: "+680 XLM", left: "62%", top: "72%" },
];

const QuestPaths = () => {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ backgroundColor: "#F5C563" }}
    >
      {/* Background dots */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {DOTS.map((dot) => (
          <circle
            key={dot.id}
            cx={`${dot.x}%`}
            cy={`${dot.y}%`}
            r={dot.r}
            fill="white"
            opacity={dot.opacity}
          />
        ))}
      </svg>

      {/* Earn Quest badge */}
      <div
        className="absolute left-6 top-6 z-10 sm:left-10 sm:top-10"
        style={{ fontFamily: poppins.style.fontFamily }}
      >
        <span
          className="inline-block rounded-[20px] border border-white bg-white px-4 py-2 text-[13px] font-semibold text-[#1A1A1A]"
          style={{ fontWeight: 600 }}
        >
          Earn Quest
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 py-20 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
          {/* Left column */}
          <div className="w-full space-y-6 lg:w-1/2">
            <h1
              className={`${bricolage.className} max-w-[500px] text-[32px] leading-[1.2] font-bold tracking-[-0.5px] text-[#1A1A1A] sm:text-[40px] lg:text-[52px]`}
            >
              Complete your tier, Unlock quest and Earn more.
            </h1>

            <p
              className="max-w-[450px] text-base leading-[1.6] text-[#4A4A4A]"
              style={{ fontFamily: poppins.style.fontFamily, fontWeight: 400 }}
            >
              A structured, tier-based course designed to take you from beginner
              to building real applications on the Stellar blockchain. Unlock new
              quests and earn rewards at every stage.
            </p>

            <button
              type="button"
              className="rounded-[24px] bg-white px-8 py-3 text-base font-semibold text-[#1A1A1A] transition-shadow hover:shadow-lg"
              style={{ fontFamily: poppins.style.fontFamily, fontWeight: 600 }}
            >
              Start Learning
            </button>
          </div>

          {/* Right column — Stellar graphic */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <div
              className="quest-swoosh relative h-[420px] w-[420px] sm:h-[480px] sm:w-[480px]"
              style={{ animation: "floatY 3s ease-in-out infinite" }}
            >
              {/* Stellar logo — white, fills the container */}
              <Image
                src="/stellar.svg"
                alt="Stellar"
                fill
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
                aria-hidden="true"
              />

              {/* Reward labels — dark prefix + green amount, no icon */}
              {rewardLabels.map((label) => (
                <div
                  key={label.id}
                  className="absolute flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg"
                  style={{
                    left: label.left,
                    top: label.top,
                    transform: "translate(-50%, -50%)",
                    fontFamily: poppins.style.fontFamily,
                    fontSize: "14px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {label.prefix && (
                    <span style={{ color: "#1A1A1A" }}>{label.prefix}</span>
                  )}
                  <span style={{ color: "#22C55E" }}>{label.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Float animation */}
      <style jsx>{`
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};

export default QuestPaths;
