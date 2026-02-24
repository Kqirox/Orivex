"use client";

import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { isAuthenticated, isLoading, stellarPublicKey } = useAuth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Learnault</h1>
        <p className="text-lg opacity-70">Learn & Earn on Stellar</p>
      </div>

      <div className="border rounded-xl p-6 w-full max-w-sm space-y-3 text-sm">
        <h2 className="font-semibold text-base mb-4">Auth Context — Issue #103</h2>

        <div className="flex justify-between">
          <span className="opacity-60">isLoading</span>
          <span className="font-mono">{String(isLoading)}</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-60">isAuthenticated</span>
          <span className="font-mono">{String(isAuthenticated)}</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-60">stellarPublicKey</span>
          <span className="font-mono">{stellarPublicKey ?? "null"}</span>
        </div>
      </div>

      <p className="text-xs opacity-40">
        ✓ AuthProvider active &nbsp;·&nbsp; ✓ Tailwind v4 &nbsp;·&nbsp; ✓ Inter font
      </p>
    </main>
  );
}
