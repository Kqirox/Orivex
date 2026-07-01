"use client";

import { BadgeCheck, ExternalLink, MapPin, GraduationCap } from "lucide-react";
import type { Candidate } from "@/types/employer";

export interface CandidateDetailPanelProps {
  candidate: Candidate;
}

export function CandidateDetailPanel({ candidate }: CandidateDetailPanelProps) {
  const completionPct = Math.round(
    (candidate.completedModules / candidate.totalModules) * 100,
  );

  return (
    <div className="rounded-[28px] border border-[#E5EAF0] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F4B42A] text-lg font-bold text-[#1A1A1A] sm:h-16 sm:w-16 sm:text-xl">
            {candidate.initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-[#12161F] sm:text-2xl">
                {candidate.name}
              </h2>
              <BadgeCheck className="h-5 w-5 shrink-0 text-[#F4B42A]" aria-label="Verified credentials" />
            </div>
            <p className="mt-1 text-sm text-[#506078]">{candidate.title}</p>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-[#64748B]">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {candidate.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <GraduationCap className="h-3.5 w-3.5" />
                {candidate.completedModules}/{candidate.totalModules} modules
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {candidate.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#F4B42A]/40 bg-[#FFF8E8] px-3 py-1 text-xs font-semibold text-[#C98A00]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#E5EAF0]">
            <div
              className="rounded-full bg-[#F4B42A]"
              style={{ width: `${completionPct}%` }}
            />
          </div>
          <span className="text-sm font-medium text-[#64748B]">
            {completionPct}% module completion
          </span>
        </div>
      </div>

      <div className="border-t border-[#E5EAF0]">
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-[#12161F]">
              On-chain credentials
            </h3>
            <span className="rounded-full bg-[#FFF8E8] px-3 py-1 text-xs font-semibold text-[#C98A00]">
              {candidate.credentials.length} verified
            </span>
          </div>
          <p className="mt-1 text-sm text-[#506078]">
            Verifiable credentials minted on the Stellar blockchain
          </p>

          <div className="mt-5 space-y-3">
            {candidate.credentials.map((cred) => (
              <div
                key={cred.id}
                className="rounded-2xl border border-[#E5EAF0] bg-[#FCFCFD] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-[#12161F]">
                        {cred.title}
                      </p>
                      <BadgeCheck className="h-4 w-4 shrink-0 text-[#14B8A6]" aria-label="Verified on-chain" />
                    </div>
                    <p className="mt-1 text-sm text-[#506078]">
                      {cred.description}
                    </p>
                    <p className="mt-1 text-xs text-[#94A3B8]">
                      Earned {cred.earnedDate}
                    </p>
                  </div>
                  <div className="rounded-full bg-[#14B8A6]/10 p-2 text-[#14B8A6]">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#94A3B8]">
                  <span className="truncate font-mono">TX: {cred.txHash}</span>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
