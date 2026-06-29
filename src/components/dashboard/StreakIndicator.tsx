"use client";

import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakIndicatorProps {
  currentStreak: number;
  longestStreak: number;
  bonusMultiplier: number;
  weeklyLog: boolean[];
  className?: string;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getStreakTier(days: number): { label: string; color: string } {
  if (days >= 30) return { label: "Legendary", color: "text-purple-600" };
  if (days >= 21) return { label: "Diamond", color: "text-sky-500" };
  if (days >= 14) return { label: "Gold", color: "text-amber-500" };
  if (days >= 7) return { label: "Silver", color: "text-gray-400" };
  if (days >= 3) return { label: "Bronze", color: "text-orange-600" };
  return { label: "Starter", color: "text-muted-foreground" };
}

export function StreakIndicator({
  currentStreak,
  longestStreak,
  bonusMultiplier,
  weeklyLog,
  className,
}: StreakIndicatorProps) {
  const tier = getStreakTier(currentStreak);

  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-5 shadow-sm sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Daily Streak
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">
              {currentStreak}
            </span>
            <span className="text-sm text-muted-foreground">days</span>
          </div>
          <p className={cn("mt-1 text-sm font-medium", tier.color)}>
            <Flame className="mr-1 inline h-4 w-4" aria-hidden="true" />
            {tier.label}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Flame className="h-3.5 w-3.5" aria-hidden="true" />
            {bonusMultiplier}x earnings
          </div>
          <p className="text-xs text-muted-foreground">
            Best: {longestStreak} days
          </p>
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-medium text-muted-foreground">
          This week
        </p>
        <div className="flex gap-1.5">
          {DAYS.map((day, i) => {
            const active = weeklyLog[i] ?? false;
            return (
              <div key={day} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className={cn(
                    "h-8 w-full rounded-md transition-colors",
                    active
                      ? "bg-primary"
                      : "bg-muted",
                  )}
                  aria-hidden="true"
                />
                <span className="text-[10px] text-muted-foreground">{day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
