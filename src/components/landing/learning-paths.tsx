"use client";

import { Syne } from "next/font/google";
import { 
  Clock, 
  BarChart, 
  PlayCircle, 
  FileText, 
  ChevronRight,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
});

interface LearningPath {
  tier: number;
  reward: string;
  title: string;
  duration: string;
  difficulty: string;
  description: string;
  videos: number;
  articles: number;
  unlockInfo?: string;
  isUnlocked: boolean;
  buttonText: string;
}

const learningPaths: LearningPath[] = [
  {
    tier: 1,
    reward: "80 XLM",
    title: "Stellar Basics",
    duration: "4 hours",
    difficulty: "Beginner",
    description: "Understand the fundamentals of blockchain and how the Stellar network works. Set up your wallet and start making your first transactions.",
    videos: 12,
    articles: 5,
    unlockInfo: "Unlocks 5 Quests and Access to Tier 2",
    isUnlocked: true,
    buttonText: "Start Tier 1",
  },
  {
    tier: 2,
    reward: "120 XLM",
    title: "Stellar Integration",
    duration: "3 hours",
    difficulty: "Beginner",
    description: "Learn how to interact with Stellar using SDKs and build simple integrations including payments and asset management.",
    videos: 5,
    articles: 10,
    isUnlocked: false,
    buttonText: "Complete Tier 1",
  },
  {
    tier: 3,
    reward: "540 XLM",
    title: "Scale node to L2",
    duration: "7 hours",
    difficulty: "Intermediate",
    description: "Learn how to interact with Stellar using SDKs and build simple integrations including payments and asset management.",
    videos: 12,
    articles: 11,
    isUnlocked: false,
    buttonText: "Complete Tier 1",
  },
];

const LearningPathCard = ({ path }: { path: LearningPath }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative flex flex-col h-full rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-center rounded-full border border-[#F5B841] px-4 py-1">
          <span className="text-xs font-bold text-[#F5B841]">Tier {path.tier}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-[#1E1F24]">{path.reward}</span>
        </div>
      </div>

      {/* Title & Meta */}
      <h3 className={`${syne.className} mb-4 text-xl font-bold text-[#1E1F24]`}>
        {path.title}
      </h3>

      <div className="mb-6 flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-sm text-[#64748B]">
          <Clock size={16} className="text-[#94A3B8]" />
          <span>{path.duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-[#64748B]">
          <BarChart size={16} className="text-[#94A3B8]" />
          <Trophy size={16} className="text-[#F5B841] hidden" /> {/* For active state if needed */}
          <span>{path.difficulty}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mb-8 text-sm leading-relaxed text-[#64748B]">
        {path.description}
      </p>

      {/* Stats Box */}
      <div className="mt-auto mb-8 flex flex-col gap-3 rounded-xl bg-[#F8FAFC] p-4">
        <div className="flex items-center gap-2.5 text-sm font-medium text-[#1E1F24]">
          <PlayCircle size={18} className="text-[#94A3B8]" />
          <span>{path.videos} Videos lessons</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm font-medium text-[#1E1F24]">
          <FileText size={18} className="text-[#94A3B8]" />
          <span>{path.articles} Articles</span>
        </div>
      </div>

      {/* Footer Info */}
      {path.unlockInfo && (
        <div className="mb-4 text-center">
          <span className="rounded-full bg-[#F1F5F9] px-4 py-1.5 text-[11px] font-semibold text-[#64748B]">
            {path.unlockInfo}
          </span>
        </div>
      )}

      {/* Action Button */}
      <button
        disabled={!path.isUnlocked}
        className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all ${
          path.isUnlocked
            ? "bg-[#F5B841] text-[#1E1F24] hover:bg-[#E2A62F]"
            : "bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed"
        }`}
      >
        {path.buttonText}
      </button>
    </motion.div>
  );
};

const LearningPaths = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        {/* Section Header */}
        <div className="mb-16 max-w-[580px]">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#F5B841] px-4 py-1.5">
            <span className="text-xs font-bold text-[#F5B841]">Stellar Learning Path</span>
          </div>
          <h2 className={`${syne.className} mb-6 text-4xl font-bold leading-tight text-[#1E1F24] sm:text-5xl`}>
            Master Stellar. Earn as you progress.
          </h2>
          <p className="text-lg leading-relaxed text-[#64748B]">
            A structured, tier-based course that takes you from beginner to building real applications 
            on the Stellar blockchain — with rewards and quests unlocked at every stage.
          </p>
        </div>

        {/* Cards Grid/Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {learningPaths.map((path, index) => (
              <LearningPathCard key={index} path={path} />
            ))}
          </div>

          {/* Carousel Arrow (Desktop Only Visual Placeholder) */}
          <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 lg:flex">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-[#E2E8F0] hover:bg-gray-50 transition-colors">
              <ChevronRight size={24} className="text-[#1E1F24]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
