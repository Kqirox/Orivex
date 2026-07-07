import { ProfileHeader } from "@/components/dashboard/ProfileHeader";
import { StreakIndicator } from "@/components/dashboard/StreakIndicator";
import { EarningsSnapshot } from "@/components/dashboard/EarningsSnapshot";
import { ProgressSnapshot } from "@/components/dashboard/ProgressSnapshot";
import { ContinueLearning } from "@/components/dashboard/ContinueLearning";
import { RecommendedPaths } from "@/components/dashboard/RecommendedPaths";

const MOCK_USER = {
  name: "Alex Rivera",
  email: "alex.rivera@example.com",
  bio: "Web3 enthusiast learning Stellar blockchain development. Passionate about decentralized finance and building financial tools for emerging markets.",
  joinDate: "March 2026",
};

const MOCK_STREAK = {
  currentStreak: 7,
  longestStreak: 14,
  bonusMultiplier: 1.5,
  weeklyLog: [true, true, true, true, true, false, false],
};

const MOCK_EARNINGS = {
  totalUsdc: "12.50",
  weekUsdc: "2.25",
  monthUsdc: "8.75",
  totalXlm: "45",
  walletConnected: true,
};

const MOCK_PROGRESS = {
  completedCourses: 3,
  totalCourses: 8,
  overallPercent: 38,
  badges: [
    { label: "Stellar Scholar", icon: "award" },
    { label: "First Quiz", icon: "award" },
    { label: "Week Warrior", icon: "award" },
  ],
};

const MOCK_MODULES = [
  {
    title: "Introduction to Stellar",
    progress: 75,
    reward: "$0.25 USDC",
    estimatedTime: "15 min",
    tier: "Tier 1",
  },
  {
    title: "Stellar Consensus Protocol",
    progress: 30,
    reward: "$0.50 USDC",
    estimatedTime: "20 min",
    tier: "Tier 1",
  },
  {
    title: "Building with Soroban",
    progress: 10,
    reward: "$1.00 USDC",
    estimatedTime: "30 min",
    tier: "Tier 2",
  },
];

const MOCK_PATHS = [
  {
    title: "Stellar Basics",
    description:
      "Master wallets, transactions, and the Stellar Consensus Protocol.",
    reward: "80 XLM",
    difficulty: "Beginner",
    duration: "4 hours",
  },
  {
    title: "Stellar Integration",
    description:
      "Connect to Horizon, use the Stellar SDK, and build Soroban contracts.",
    reward: "120 XLM",
    difficulty: "Intermediate",
    duration: "3 hours",
  },
  {
    title: "Scale node to L2",
    description:
      "Deploy production-grade infrastructure and bridge Stellar assets to L2.",
    reward: "540 XLM",
    difficulty: "Advanced",
    duration: "7 hours",
  },
];

export const metadata = {
  title: "Dashboard — Orivex",
  description: "Your learning journey at a glance",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        <ProfileHeader
          name={MOCK_USER.name}
          email={MOCK_USER.email}
          bio={MOCK_USER.bio}
          joinDate={MOCK_USER.joinDate}
          className="mb-6"
        />

        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <StreakIndicator
            currentStreak={MOCK_STREAK.currentStreak}
            longestStreak={MOCK_STREAK.longestStreak}
            bonusMultiplier={MOCK_STREAK.bonusMultiplier}
            weeklyLog={MOCK_STREAK.weeklyLog}
          />
          <EarningsSnapshot
            totalUsdc={MOCK_EARNINGS.totalUsdc}
            weekUsdc={MOCK_EARNINGS.weekUsdc}
            monthUsdc={MOCK_EARNINGS.monthUsdc}
            totalXlm={MOCK_EARNINGS.totalXlm}
            walletConnected={MOCK_EARNINGS.walletConnected}
          />
        </div>

        <ProgressSnapshot
          completedCourses={MOCK_PROGRESS.completedCourses}
          totalCourses={MOCK_PROGRESS.totalCourses}
          overallPercent={MOCK_PROGRESS.overallPercent}
          badges={MOCK_PROGRESS.badges}
          className="mb-6"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <ContinueLearning modules={MOCK_MODULES} />
          <RecommendedPaths paths={MOCK_PATHS} />
        </div>
      </div>
    </div>
  );
}
