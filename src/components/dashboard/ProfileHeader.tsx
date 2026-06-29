"use client";

import { Syne } from "next/font/google";
import { Edit3 } from "lucide-react";
import { cn } from "@/lib/utils";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });

interface ProfileHeaderProps {
  name: string;
  email: string;
  bio: string;
  joinDate: string;
  className?: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export function ProfileHeader({
  name,
  email,
  bio,
  joinDate,
  className,
}: ProfileHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-start gap-5 rounded-2xl border bg-card p-5 shadow-sm sm:p-6",
        className,
      )}
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground sm:h-20 sm:w-20 sm:text-2xl">
        {initials(name)}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1
              className={cn(
                "text-xl font-bold text-foreground sm:text-2xl",
                syne.className,
              )}
            >
              {name}
            </h1>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
          <button
            type="button"
            aria-label="Edit profile"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
          >
            <Edit3 className="h-4 w-4" aria-hidden="true" />
            Edit
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {bio}
        </p>

        <p className="mt-2 text-xs text-muted-foreground">
          Joined {joinDate}
        </p>
      </div>
    </div>
  );
}
