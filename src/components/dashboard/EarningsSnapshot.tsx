"use client";

import { TrendingUp, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface EarningsSnapshotProps {
  totalUsdc: string;
  weekUsdc: string;
  monthUsdc: string;
  totalXlm: string;
  walletConnected: boolean;
  className?: string;
}

export function EarningsSnapshot({
  totalUsdc,
  weekUsdc,
  monthUsdc,
  totalXlm,
  walletConnected,
  className,
}: EarningsSnapshotProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-5 shadow-sm sm:p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Earnings
        </p>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium",
            walletConnected
              ? "bg-green-50 text-green-700"
              : "bg-muted text-muted-foreground",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              walletConnected ? "bg-green-500" : "bg-muted-foreground",
            )}
          />
          {walletConnected ? "Wallet connected" : "No wallet"}
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-bold text-foreground">
            {totalUsdc}
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            USDC
          </span>
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">
          +{totalXlm} XLM earned
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-muted p-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
            This week
          </div>
          <p className="mt-1 text-sm font-semibold text-foreground">
            +{weekUsdc} USDC
          </p>
        </div>
        <div className="rounded-xl bg-muted p-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
            This month
          </div>
          <p className="mt-1 text-sm font-semibold text-foreground">
            +{monthUsdc} USDC
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent"
      >
        <Wallet className="h-4 w-4" aria-hidden="true" />
        View Wallet
      </button>
    </div>
  );
}
