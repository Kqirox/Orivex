import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type BadgeTier = "bronze" | "silver" | "gold" | "platinum";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  tier?: BadgeTier;
  icon?: string;
  earned?: boolean;
  description?: string;
}

const tierStyles: Record<BadgeTier, { ring: string; bg: string; label: string }> = {
  bronze:   { ring: "ring-[#D97706]", bg: "bg-[#FEF3C7]",   label: "text-[#D97706]" },
  silver:   { ring: "ring-[#94A3B8]", bg: "bg-[#F1F5F9]",   label: "text-[#475569]" },
  gold:     { ring: "ring-[#F5B841]", bg: "bg-[#FEF3C7]",   label: "text-[#0F172A]" },
  platinum: { ring: "ring-[#14B8A6]", bg: "bg-[#CCFBF1]",   label: "text-[#0F172A]" },
};

export function Badge({
  label,
  tier = "bronze",
  icon,
  earned = true,
  description,
  className,
  ...props
}: BadgeProps) {
  const { ring, bg, label: labelColor } = tierStyles[tier];

  return (
    <div
      role="img"
      aria-label={`${label} badge${earned ? "" : " (locked)"}`}
      title={description}
      className={cn(
        "flex flex-col items-center gap-1.5 rounded-2xl p-3 text-center transition-opacity",
        earned ? "opacity-100" : "opacity-40 grayscale",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full ring-2",
          bg,
          ring
        )}
        aria-hidden="true"
      >
        {icon ? (
          <span className="text-2xl">{icon}</span>
        ) : (
          <DefaultBadgeIcon tier={tier} />
        )}
      </span>

      <span className={cn("text-xs font-semibold leading-tight", labelColor)}>
        {label}
      </span>

      {!earned && (
        <span className="sr-only">locked</span>
      )}
    </div>
  );
}

function DefaultBadgeIcon({ tier }: { tier: BadgeTier }) {
  const icons: Record<BadgeTier, string> = {
    bronze:   "🥉",
    silver:   "🥈",
    gold:     "🥇",
    platinum: "💎",
  };
  return <span className="text-xl">{icons[tier]}</span>;
}
