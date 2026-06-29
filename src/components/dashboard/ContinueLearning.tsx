"use client";

import { BookOpen, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";


interface Module {
  title: string;
  progress: number;
  reward: string;
  estimatedTime: string;
  tier: string;
}

interface ContinueLearningProps {
  modules: Module[];
  className?: string;
}

function ModuleCard({ module }: { module: Module }) {
  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
          {module.tier}
        </span>
      </div>

      <h3 className="mt-3 text-sm font-semibold text-foreground">
        {module.title}
      </h3>

      <div className="mt-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{module.progress}% complete</span>
        </div>
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${module.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {module.estimatedTime}
          </span>
          <span className="font-medium text-primary">+{module.reward}</span>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-primary transition hover:text-secondary"
        >
          Continue
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function ContinueLearning({
  modules,
  className,
}: ContinueLearningProps) {
  return (
    <div className={cn("rounded-2xl border bg-card p-5 shadow-sm sm:p-6", className)}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Continue Learning
        </p>
        <button
          type="button"
          className="text-xs font-medium text-primary transition hover:text-secondary"
        >
          View all
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {modules.map((module) => (
          <ModuleCard key={module.title} module={module} />
        ))}
      </div>
    </div>
  );
}
