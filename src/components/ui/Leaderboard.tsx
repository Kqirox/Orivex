import Image from "next/image";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  avatarUrl?: string;
  isCurrentUser?: boolean;
}

interface LeaderboardProps extends HTMLAttributes<HTMLDivElement> {
  entries: LeaderboardEntry[];
  title?: string;
}

export function Leaderboard({
  entries,
  title = "Leaderboard",
  className,
  ...props
}: LeaderboardProps) {
  return (
    <section
      aria-label={title}
      className={cn(
        "rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm",
        className
      )}
      {...props}
    >
      <h2 className="mb-4 text-lg font-bold text-[#0F172A]">{title}</h2>

      {entries.length === 0 ? (
        <p className="py-8 text-center text-sm text-[#94A3B8]">
          No entries yet
        </p>
      ) : (
        <ol className="space-y-2">
          {entries.map((entry) => (
            <LeaderboardRow key={entry.rank} entry={entry} />
          ))}
        </ol>
      )}
    </section>
  );
}

function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  const isTop3 = entry.rank <= 3;
  const medalColors: Record<number, string> = {
    1: "bg-[#F5B841] text-[#0F172A]",
    2: "bg-[#94A3B8] text-white",
    3: "bg-[#D97706] text-white",
  };

  return (
    <li
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2 transition-colors",
        entry.isCurrentUser
          ? "bg-[#FEF3C7] ring-1 ring-[#F5B841]"
          : "hover:bg-[#F9FAFB]"
      )}
      aria-current={entry.isCurrentUser ? "true" : undefined}
    >
      {/* Rank */}
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
          isTop3 ? medalColors[entry.rank] : "bg-[#F1F5F9] text-[#475569]"
        )}
        aria-label={`Rank ${entry.rank}`}
      >
        {entry.rank}
      </span>

      {/* Avatar */}
      {entry.avatarUrl ? (
        <Image
          src={entry.avatarUrl}
          alt={entry.name}
          width={32}
          height={32}
          className="h-8 w-8 shrink-0 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14B8A6]/20 text-sm font-semibold text-[#14B8A6]"
        >
          {entry.name.charAt(0).toUpperCase()}
        </span>
      )}

      {/* Name */}
      <span className="min-w-0 flex-1 truncate text-sm font-medium text-[#0F172A]">
        {entry.name}
        {entry.isCurrentUser && (
          <span className="ml-1 text-xs font-normal text-[#94A3B8]">(you)</span>
        )}
      </span>

      {/* Score */}
      <span className="shrink-0 text-sm font-semibold text-[#F5B841]">
        {entry.score.toLocaleString()} pts
      </span>
    </li>
  );
}
