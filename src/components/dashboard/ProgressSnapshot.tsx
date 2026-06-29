"use client";

import { Award, BookOpen, Star } from "lucide-react";
import { cn } from "@/lib/utils";


interface Badge {
  label: string;
  icon: string;
}

interface ProgressSnapshotProps {
  completedCourses: number;
  totalCourses: number;
  overallPercent: number;
  badges: Badge[];
  className?: string;
}

export function ProgressSnapshot({
  completedCourses,
  totalCourses,
  overallPercent,
  badges,
  className,
}: ProgressSnapshotProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-5 shadow-sm sm:p-6",
        className,
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Your Progress
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">
              {completedCourses}/{totalCourses}
            </p>
            <p className="text-xs text-muted-foreground">Courses</p>
          </div>
        </div>

        <div className="h-10 w-px bg-border" />

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Star className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">
              {overallPercent}%
            </p>
            <p className="text-xs text-muted-foreground">Complete</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Overall completion</span>
          <span className="font-semibold text-foreground">
            {overallPercent}%
          </span>
        </div>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-700"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      {badges.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Badges ({badges.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                <Award className="h-3.5 w-3.5" aria-hidden="true" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
