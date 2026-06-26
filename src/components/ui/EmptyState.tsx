import type { HTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  actionHref?: string;
  illustration?: ReactNode;
};

function DefaultEmptyIllustration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 120"
      className="h-28 w-36"
      fill="none"
    >
      <rect
        x="24"
        y="24"
        width="112"
        height="72"
        rx="12"
        className="fill-muted stroke-border"
        strokeWidth="2"
      />
      <path
        d="M48 48h64M48 64h44M48 80h28"
        className="stroke-muted-foreground/60"
        strokeLinecap="round"
        strokeWidth="6"
      />
      <circle cx="112" cy="80" r="18" className="fill-primary/80" />
      <path
        d="M104 80h16M112 72v16"
        className="stroke-foreground"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

export function EmptyState({
  title,
  message,
  actionLabel,
  onAction,
  actionHref,
  illustration,
  className,
  ...props
}: EmptyStateProps) {
  const hasAction = Boolean(actionLabel && (onAction || actionHref));
  const actionClassName =
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed bg-card px-6 py-10 text-center",
        className,
      )}
      {...props}
    >
      <div className="mb-5 flex items-center justify-center text-foreground">
        {illustration ?? <DefaultEmptyIllustration />}
      </div>
      <h2 className="font-heading text-xl font-bold text-foreground">
        {title}
      </h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {message}
      </p>
      {hasAction && actionHref ? (
        <a href={actionHref} className={cn("mt-6", actionClassName)}>
          {actionLabel}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      ) : null}
      {hasAction && onAction && !actionHref ? (
        <button
          type="button"
          onClick={onAction}
          className={cn("mt-6", actionClassName)}
        >
          {actionLabel}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}
