import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  shimmer?: boolean;
};

export function Skeleton({
  className,
  shimmer = true,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-md bg-muted",
        shimmer && "feedback-skeleton-shimmer",
        className,
      )}
      {...props}
    />
  );
}

type SkeletonGroupProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

function SkeletonGroup({
  className,
  label = "Loading content",
  children,
  ...props
}: SkeletonGroupProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn("animate-pulse motion-reduce:animate-none", className)}
      {...props}
    >
      {children}
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function CardSkeleton({
  className,
  ...props
}: SkeletonGroupProps) {
  return (
    <SkeletonGroup
      label={props.label ?? "Loading card"}
      className={cn("rounded-lg border bg-card p-4 shadow-sm", className)}
      {...props}
    >
      <div className="flex items-start gap-3">
        <Skeleton className="h-11 w-11 shrink-0 rounded-lg" />
        <div className="min-w-0 flex-1 space-y-3">
          <Skeleton className="h-4 w-3/5" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <Skeleton className="h-8 w-24 rounded-lg" />
        <Skeleton className="h-8 w-20 rounded-lg" />
      </div>
    </SkeletonGroup>
  );
}

type ListSkeletonProps = SkeletonGroupProps & {
  rows?: number;
};

export function ListSkeleton({
  rows = 4,
  className,
  ...props
}: ListSkeletonProps) {
  const safeRows = Math.max(1, Math.floor(rows));

  return (
    <SkeletonGroup
      label={props.label ?? "Loading list"}
      className={cn("space-y-3", className)}
      {...props}
    >
      {Array.from({ length: safeRows }, (_, index) => (
        <div
          key={index}
          className="flex items-center gap-3 rounded-lg border bg-card p-3"
        >
          <Skeleton className="h-9 w-9 shrink-0 rounded-full" />
          <div className="min-w-0 flex-1 space-y-2">
            <Skeleton className="h-3.5 w-2/5" />
            <Skeleton className="h-3 w-3/4" />
          </div>
          <Skeleton className="h-7 w-16 rounded-lg" />
        </div>
      ))}
    </SkeletonGroup>
  );
}

export function WalletSkeleton({
  className,
  ...props
}: SkeletonGroupProps) {
  return (
    <SkeletonGroup
      label={props.label ?? "Loading wallet"}
      className={cn("rounded-lg border bg-card p-5 shadow-sm", className)}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-8 w-36" />
        </div>
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <Skeleton className="h-16 rounded-lg" />
        <Skeleton className="h-16 rounded-lg" />
      </div>
      <div className="mt-4 flex gap-3">
        <Skeleton className="h-10 flex-1 rounded-lg" />
        <Skeleton className="h-10 flex-1 rounded-lg" />
      </div>
    </SkeletonGroup>
  );
}
