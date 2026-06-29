import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Badge, BadgeTier } from "./Badge";

export interface Achievement {
  id: string;
  label: string;
  tier: BadgeTier;
  icon?: string;
  earned: boolean;
  description?: string;
}

interface AchievementsProps extends HTMLAttributes<HTMLDivElement> {
  achievements: Achievement[];
  title?: string;
}

export function Achievements({
  achievements,
  title = "Achievements",
  className,
  ...props
}: AchievementsProps) {
  const earned = achievements.filter((a) => a.earned).length;
  const total = achievements.length;

  return (
    <section
      aria-label={title}
      className={cn(
        "rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#0F172A]">{title}</h2>
        <span className="text-sm text-[#94A3B8]">
          {earned}/{total} earned
        </span>
      </div>

      {/* Progress bar */}
      {total > 0 && (
        <div
          role="progressbar"
          aria-valuenow={earned}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label={`${earned} of ${total} achievements earned`}
          className="mb-4 h-2 w-full overflow-hidden rounded-full bg-[#E2E8F0]"
        >
          <div
            className="h-full rounded-full bg-[#F5B841] transition-all duration-500"
            style={{ width: total > 0 ? `${(earned / total) * 100}%` : "0%" }}
          />
        </div>
      )}

      {/* Badge grid */}
      {achievements.length === 0 ? (
        <p className="py-8 text-center text-sm text-[#94A3B8]">
          No achievements yet
        </p>
      ) : (
        <div
          className="grid grid-cols-3 gap-2 sm:grid-cols-4"
          role="list"
          aria-label="Achievement badges"
        >
          {achievements.map((achievement) => (
            <div key={achievement.id} role="listitem">
              <Badge
                label={achievement.label}
                tier={achievement.tier}
                icon={achievement.icon}
                earned={achievement.earned}
                description={achievement.description}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
