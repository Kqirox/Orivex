"use client";

import { BadgeCheck, MapPin, GraduationCap } from "lucide-react";
import type { Candidate } from "@/types/employer";

export interface CandidateResultCardProps {
  candidate: Candidate;
  selected: boolean;
  onSelect: (id: number) => void;
}

export function CandidateResultCard({
  candidate,
  selected,
  onSelect,
}: CandidateResultCardProps) {
  const completionPct = Math.round(
    (candidate.completedModules / candidate.totalModules) * 100,
  );

  return (
    <button
      type="button"
      onClick={() => onSelect(candidate.id)}
      className={[
        "group flex w-full gap-4 rounded-2xl border p-4 text-left transition-all sm:p-5",
        selected
          ? "border-[#F4B42A] bg-[#FFF8E8] shadow-[0_4px_20px_rgba(244,180,42,0.12)]"
          : "border-[#E5EAF0] bg-white hover:border-[#E5EAF0] hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]",
      ].join(" ")}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4B42A] text-sm font-bold text-[#1A1A1A] sm:h-14 sm:w-14 sm:text-base">
        {candidate.initials}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-base font-semibold text-[#12161F]">
                {candidate.name}
              </h3>
              <BadgeCheck className="h-4 w-4 shrink-0 text-[#F4B42A]" aria-label="Verified credentials" />
            </div>
            <p className="mt-0.5 text-sm text-[#506078]">{candidate.title}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {candidate.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <GraduationCap className="h-3.5 w-3.5" />
            {candidate.completedModules}/{candidate.totalModules} modules
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {candidate.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-[#F8F9FB] px-2.5 py-1 text-xs font-medium text-[#506078]"
            >
              {skill}
            </span>
          ))}
          {candidate.skills.length > 3 && (
            <span className="rounded-full bg-[#F8F9FB] px-2.5 py-1 text-xs font-medium text-[#64748B]">
              +{candidate.skills.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-[#E5EAF0]">
            <div
              className="rounded-full bg-[#F4B42A] transition-all"
              style={{ width: `${completionPct}%` }}
            />
          </div>
          <span className="text-xs font-medium text-[#64748B]">
            {completionPct}%
          </span>
        </div>
      </div>
    </button>
  );
}
