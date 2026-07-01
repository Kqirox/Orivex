"use client";

import { Search, MapPin, Layers } from "lucide-react";

export interface CandidateSearchProps {
  query: string;
  onQueryChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  minCompletion: number;
  onMinCompletionChange: (value: number) => void;
}

const LOCATIONS = [
  "All locations",
  "Nairobi, Kenya",
  "Lagos, Nigeria",
  "Accra, Ghana",
  "Cape Town, SA",
  "Kampala, Uganda",
];

export function CandidateSearch({
  query,
  onQueryChange,
  location,
  onLocationChange,
  minCompletion,
  onMinCompletionChange,
}: CandidateSearchProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <label className="flex flex-1 items-center gap-3 rounded-full border border-[#E5EAF0] bg-[#F8F9FB] px-4 py-3">
        <Search className="h-5 w-5 text-[#64748B]" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search by skill, name, or credential"
          className="w-full border-none bg-transparent text-sm text-[#12161F] outline-none placeholder:text-[#94A3B8]"
        />
      </label>

      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 rounded-full border border-[#E5EAF0] bg-[#F8F9FB] px-4 py-2.5">
          <MapPin className="h-4 w-4 text-[#64748B]" />
          <select
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="appearance-none border-none bg-transparent text-sm font-medium text-[#506078] outline-none"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc === "All locations" ? "" : loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#E5EAF0] bg-[#F8F9FB] px-4 py-2.5">
          <Layers className="h-4 w-4 text-[#64748B]" />
          <select
            value={minCompletion}
            onChange={(e) => onMinCompletionChange(Number(e.target.value))}
            className="appearance-none border-none bg-transparent text-sm font-medium text-[#506078] outline-none"
          >
            <option value={0}>Any completion</option>
            <option value={25}>25%+ modules</option>
            <option value={50}>50%+ modules</option>
            <option value={75}>75%+ modules</option>
            <option value={100}>100% modules</option>
          </select>
        </div>
      </div>
    </div>
  );
}
