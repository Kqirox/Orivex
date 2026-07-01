"use client";

import { useState, useMemo } from "react";
import { CandidateSearch } from "@/components/employer/CandidateSearch";
import { CandidateResultCard } from "@/components/employer/CandidateResultCard";
import { CandidateDetailPanel } from "@/components/employer/CandidateDetailPanel";
import type { Candidate } from "@/types/employer";

const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 1,
    name: "Grace Mwangi",
    initials: "GM",
    title: "Digital Finance Specialist",
    location: "Nairobi, Kenya",
    skills: ["Digital Wallets", "Financial Literacy", "Online Safety"],
    totalModules: 12,
    completedModules: 11,
    credentials: [
      {
        id: 1,
        title: "Financial Literacy Starter",
        description: "Completed all 4 modules in the Financial Literacy track",
        earnedDate: "Mar 15, 2026",
        txHash: "GB5L7...9X3F2",
      },
      {
        id: 2,
        title: "Digital Skills Badge",
        description: "Demonstrated proficiency in email, online safety, and professional profiles",
        earnedDate: "Feb 28, 2026",
        txHash: "GA2P9...7R1K8",
      },
      {
        id: 3,
        title: "Entrepreneurship Essentials",
        description: "Completed business validation and expense tracking modules",
        earnedDate: "Jan 10, 2026",
        txHash: "GD8M3...4T6H1",
      },
    ],
  },
  {
    id: 2,
    name: "Emeka Okafor",
    initials: "EO",
    title: "Small Business Operator",
    location: "Lagos, Nigeria",
    skills: ["Entrepreneurship", "Business Planning", "Digital Marketing"],
    totalModules: 8,
    completedModules: 7,
    credentials: [
      {
        id: 4,
        title: "Entrepreneurship Essentials",
        description: "Completed all 3 modules in the Entrepreneurship track",
        earnedDate: "Apr 2, 2026",
        txHash: "GC4T8...2R9P5",
      },
      {
        id: 5,
        title: "Digital Marketing Foundations",
        description: "Demonstrated understanding of digital customer acquisition",
        earnedDate: "Mar 20, 2026",
        txHash: "GB7N1...6K3L0",
      },
    ],
  },
  {
    id: 3,
    name: "Ama Serwaa",
    initials: "AS",
    title: "Remote Work Professional",
    location: "Accra, Ghana",
    skills: ["Email Communication", "Online Safety", "Professional Profiles", "Digital Wallets"],
    totalModules: 15,
    completedModules: 14,
    credentials: [
      {
        id: 6,
        title: "Digital Skills Badge",
        description: "Completed all 4 modules in the Digital Skills track",
        earnedDate: "Apr 10, 2026",
        txHash: "GA9T2...3H7M4",
      },
      {
        id: 7,
        title: "Financial Literacy Starter",
        description: "Completed all 4 modules in the Financial Literacy track",
        earnedDate: "Mar 5, 2026",
        txHash: "GD1R8...8P4X2",
      },
      {
        id: 8,
        title: "Remote Work Readiness",
        description: "Demonstrated skills in digital communication and professional presence",
        earnedDate: "Feb 12, 2026",
        txHash: "GC5F9...1N7K3",
      },
    ],
  },
  {
    id: 4,
    name: "John Kamau",
    initials: "JK",
    title: "Micro-Entrepreneur",
    location: "Nairobi, Kenya",
    skills: ["Business Planning", "Expense Tracking", "Digital Marketing"],
    totalModules: 6,
    completedModules: 3,
    credentials: [
      {
        id: 9,
        title: "Entrepreneurship Essentials",
        description: "Completed business validation module",
        earnedDate: "Apr 5, 2026",
        txHash: "GB3L6...5R9T1",
      },
    ],
  },
  {
    id: 5,
    name: "Nkechi Obi",
    initials: "NO",
    title: "Digital Skills Trainee",
    location: "Lagos, Nigeria",
    skills: ["Email Communication", "Online Safety", "Digital Wallets"],
    totalModules: 10,
    completedModules: 9,
    credentials: [
      {
        id: 10,
        title: "Digital Skills Badge",
        description: "Completed all 4 modules in the Digital Skills track",
        earnedDate: "Mar 28, 2026",
        txHash: "GA8K1...7P2M6",
      },
      {
        id: 11,
        title: "Financial Literacy Starter",
        description: "Completed 3 of 4 modules in the Financial Literacy track",
        earnedDate: "Mar 1, 2026",
        txHash: "GD4T9...3R8X5",
      },
    ],
  },
  {
    id: 6,
    name: "Kwame Asante",
    initials: "KA",
    title: "Aspiring Fintech Professional",
    location: "Accra, Ghana",
    skills: ["Digital Wallets", "Stablecoins", "Cross-Border Payments"],
    totalModules: 9,
    completedModules: 8,
    credentials: [
      {
        id: 12,
        title: "Financial Literacy Starter",
        description: "Completed all 4 modules in the Financial Literacy track",
        earnedDate: "Apr 8, 2026",
        txHash: "GC6R3...9K1N7",
      },
    ],
  },
];

export default function EmployerPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minCompletion, setMinCompletion] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredCandidates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return MOCK_CANDIDATES.filter((c) => {
      const matchesQuery =
        !normalizedQuery ||
        c.name.toLowerCase().includes(normalizedQuery) ||
        c.title.toLowerCase().includes(normalizedQuery) ||
        c.skills.some((s) => s.toLowerCase().includes(normalizedQuery)) ||
        c.credentials.some((cr) =>
          cr.title.toLowerCase().includes(normalizedQuery),
        );
      const matchesLocation =
        !location || c.location === location;
      const pct = c.completedModules / c.totalModules;
      const matchesCompletion = pct >= minCompletion / 100;
      return matchesQuery && matchesLocation && matchesCompletion;
    });
  }, [query, location, minCompletion]);

  const selectedCandidate =
    filteredCandidates.find((c) => c.id === selectedId) ?? null;

  const handleSelect = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const clearFilters = () => {
    setQuery("");
    setLocation("");
    setMinCompletion(0);
  };

  const hasActiveFilters = query || location || minCompletion > 0;

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#F4B42A]/40 bg-[#FFF8E8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#C98A00]">
              Employer dashboard
            </span>
            <h1 className="mt-4 text-[30px] leading-tight font-bold text-[#080B13] sm:text-[40px] lg:text-[48px]">
              Find & verify candidates
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#506078] sm:text-lg">
              Search learners by skill, location, or module completion. Review
              on-chain verified credentials before reaching out.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5EAF0] bg-white px-4 py-4 shadow-sm sm:px-5">
            <p className="text-sm font-semibold text-[#12161F]">Talent pool</p>
            <p className="mt-2 text-sm text-[#506078]">
              {MOCK_CANDIDATES.length} learners with verified credentials
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-[28px] border border-[#E5EAF0] bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-6 lg:p-8">
          <CandidateSearch
            query={query}
            onQueryChange={setQuery}
            location={location}
            onLocationChange={setLocation}
            minCompletion={minCompletion}
            onMinCompletionChange={setMinCompletion}
          />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5EAF0] pt-4">
            <p className="text-sm font-medium text-[#506078]">
              {filteredCandidates.length} candidate
              {filteredCandidates.length === 1 ? "" : "s"} found
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-semibold text-[#C98A00]"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col gap-3">
              {filteredCandidates.length > 0 ? (
                filteredCandidates.map((candidate) => (
                  <CandidateResultCard
                    key={candidate.id}
                    candidate={candidate}
                    selected={selectedId === candidate.id}
                    onSelect={handleSelect}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-[#E5EAF0] bg-[#F8F9FB] px-6 py-12 text-center">
                  <h2 className="text-xl font-semibold text-[#12161F]">
                    No candidates match your filters
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#506078]">
                    Broaden your search or clear filters to see all candidates.
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

            <div className="hidden lg:block">
              {selectedCandidate ? (
                <div className="sticky top-6">
                  <CandidateDetailPanel candidate={selectedCandidate} />
                </div>
              ) : (
                <div className="flex h-full min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-[#E5EAF0] bg-[#F8F9FB] px-6 py-12 text-center">
                  <div>
                    <p className="text-3xl">👤</p>
                    <p className="mt-3 text-lg font-semibold text-[#12161F]">
                      Select a candidate
                    </p>
                    <p className="mt-1 text-sm text-[#506078]">
                      Click on a candidate card to view their on-chain
                      credentials
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 lg:hidden">
          {selectedCandidate && (
            <CandidateDetailPanel candidate={selectedCandidate} />
          )}
        </div>
      </div>
    </div>
  );
}
