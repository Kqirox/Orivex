"use client";

import { ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";


interface Path {
  title: string;
  description: string;
  reward: string;
  difficulty: string;
  duration: string;
}

interface RecommendedPathsProps {
  paths: Path[];
  className?: string;
}

const difficultyColor: Record<string, string> = {
  Beginner: "text-green-600 bg-green-50",
  Intermediate: "text-amber-600 bg-amber-50",
  Advanced: "text-red-600 bg-red-50",
};

function PathCard({ path }: { path: Path }) {
  return (
    <div className="group rounded-xl border bg-card p-4 shadow-sm transition hover:border-primary/30 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-foreground">{path.title}</h3>
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium",
            difficultyColor[path.difficulty] ?? "bg-muted text-muted-foreground",
          )}
        >
          {path.difficulty}
        </span>
      </div>

      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
        {path.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span className="font-medium text-primary">{path.reward}</span>
          </span>
          <span>{path.duration}</span>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-primary transition hover:text-secondary"
        >
          Start
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function RecommendedPaths({
  paths,
  className,
}: RecommendedPathsProps) {
  return (
    <div className={cn("rounded-2xl border bg-card p-5 shadow-sm sm:p-6", className)}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Recommended Paths
        </p>
        <button
          type="button"
          className="text-xs font-medium text-primary transition hover:text-secondary"
        >
          Browse all
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {paths.map((path) => (
          <PathCard key={path.title} path={path} />
        ))}
      </div>
    </div>
  );
}
