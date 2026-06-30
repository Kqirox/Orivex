"use client";

import { Search, Clock3 } from "lucide-react";
import { useMemo, useState } from "react";

type Category =
  | "All"
  | "Financial Literacy"
  | "Digital Skills"
  | "Entrepreneurship";

type CourseModule = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  duration: string;
  reward: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
};

const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "What is a Digital Wallet?",
    category: "Financial Literacy",
    duration: "10 min",
    reward: "$0.25",
    difficulty: "Beginner",
    description:
      "Learn the basics of storing and sending value safely through a mobile wallet.",
  },
  {
    id: 2,
    title: "Understanding Stablecoins (USDC)",
    category: "Financial Literacy",
    duration: "12 min",
    reward: "$0.25",
    difficulty: "Beginner",
    description:
      "See how stablecoins reduce volatility and make everyday payments easier.",
  },
  {
    id: 3,
    title: "Sending Money Across Borders",
    category: "Financial Literacy",
    duration: "15 min",
    reward: "$0.50",
    difficulty: "Intermediate",
    description:
      "Explore the cost, speed, and trust factors behind low-cost remittances.",
  },
  {
    id: 4,
    title: "Using Email Effectively",
    category: "Digital Skills",
    duration: "12 min",
    reward: "$0.25",
    difficulty: "Beginner",
    description:
      "Build confidence with professional email habits, subject lines, and tone.",
  },
  {
    id: 5,
    title: "Online Safety & Scams",
    category: "Digital Skills",
    duration: "14 min",
    reward: "$0.50",
    difficulty: "Intermediate",
    description:
      "Spot phishing patterns and protect your digital identity in everyday life.",
  },
  {
    id: 6,
    title: "Creating a Professional Profile",
    category: "Digital Skills",
    duration: "10 min",
    reward: "$0.25",
    difficulty: "Beginner",
    description:
      "Turn a simple profile into a more credible introduction for jobs and gigs.",
  },
  {
    id: 7,
    title: "Business Idea Validation",
    category: "Entrepreneurship",
    duration: "15 min",
    reward: "$0.50",
    difficulty: "Intermediate",
    description:
      "Test a business concept quickly with customer signals and practical assumptions.",
  },
  {
    id: 8,
    title: "Tracking Business Expenses",
    category: "Entrepreneurship",
    duration: "12 min",
    reward: "$0.25",
    difficulty: "Beginner",
    description:
      "Learn a simple routine for separating personal and business spending.",
  },
  {
    id: 9,
    title: "Reaching Customers Digitally",
    category: "Entrepreneurship",
    duration: "16 min",
    reward: "$0.50",
    difficulty: "Advanced",
    description:
      "Choose channels that help a small business grow without overcomplicating the plan.",
  },
];

const categories: Category[] = [
  "All",
  "Financial Literacy",
  "Digital Skills",
  "Entrepreneurship",
];

const LearningCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filteredModules = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courseModules.filter((module) => {
      const matchesCategory =
        activeCategory === "All" || module.category === activeCategory;
      const searchableText = `${module.title} ${module.description} ${module.category}`.toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const clearFilters = () => {
    setActiveCategory("All");
    setQuery("");
  };

  return (
    <section className="bg-[#F8F9FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#F4B42A]/40 bg-[#FFF8E8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#C98A00]">
              In-app catalog
            </span>
            <h1 className="mt-4 text-[30px] leading-tight font-bold text-[#080B13] sm:text-[40px] lg:text-[48px]">
              Browse modules and learning paths
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#506078] sm:text-lg">
              Filter by topic, search by skill, and pick a bite-sized lesson that fits your next milestone.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5EAF0] bg-white px-4 py-4 shadow-sm sm:px-5">
            <p className="text-sm font-semibold text-[#12161F]">Trending now</p>
            <p className="mt-2 text-sm text-[#506078]">
              Digital wallets • online safety • business planning
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#E5EAF0] bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-6 lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="flex flex-1 items-center gap-3 rounded-full border border-[#E5EAF0] bg-[#F8F9FB] px-4 py-3">
              <Search className="h-5 w-5 text-[#64748B]" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search modules or skills"
                className="w-full border-none bg-transparent text-sm text-[#12161F] outline-none placeholder:text-[#94A3B8]"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-[#F4B42A] text-[#1A1A1A]"
                        : "bg-[#F8F9FB] text-[#506078] hover:bg-[#F1F5F9]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5EAF0] pt-4">
            <p className="text-sm font-medium text-[#506078]">
              {filteredModules.length} module{filteredModules.length === 1 ? "" : "s"} available
            </p>

            {(query || activeCategory !== "All") && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-semibold text-[#C98A00]"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredModules.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredModules.map((module) => (
                <article
                  key={module.id}
                  className="group flex h-full flex-col rounded-2xl border border-[#E5EAF0] bg-[#FCFCFD] p-5 transition hover:-translate-y-1 hover:border-[#F4B42A] hover:shadow-[0_16px_35px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-[#F4B42A]/40 bg-[#FFF8E8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C98A00]">
                      {module.category}
                    </span>
                    <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-semibold text-[#64748B]">
                      {module.difficulty}
                    </span>
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-[#12161F]">
                    {module.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#506078]">
                    {module.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 text-sm">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F8F9FB] px-3 py-2 text-[#506078]">
                      <Clock3 className="h-4 w-4" />
                      {module.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F8F9FB] px-3 py-2 text-[#506078]">
                      Reward {module.reward}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F4B42A] px-4 py-3 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#e6a81f]"
                  >
                    Start module
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-[#E5EAF0] bg-[#F8F9FB] px-6 py-12 text-center">
              <h2 className="text-xl font-semibold text-[#12161F]">
                No modules match the current filters
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#506078]">
                Try a broader search or reset the category filter to discover new modules.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-full bg-[#F4B42A] px-4 py-3 text-sm font-semibold text-[#1A1A1A]"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LearningCatalog;
