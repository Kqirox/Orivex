"use client";

import { ArrowDownToLine, ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";

const balances = [
  { label: "USDC balance", amount: "$24.50", change: "+$3.20 today" },
  { label: "XLM balance", amount: "1,840 XLM", change: "+120 earned" },
];

const transactions = [
  {
    id: 1,
    title: "Quiz reward • Digital Wallet Basics",
    amount: "+$0.25 USDC",
    time: "2 hours ago",
    type: "reward",
  },
  {
    id: 2,
    title: "Badge unlocked • Online Safety",
    amount: "+1 badge",
    time: "Yesterday",
    type: "badge",
  },
  {
    id: 3,
    title: "Withdraw preview • Mobile money",
    amount: "Pending",
    time: "2 days ago",
    type: "withdraw",
  },
];

const shareableCredentials = [
  {
    id: 1,
    title: "Financial Literacy Starter",
    subtitle: "Verified module streak",
  },
  {
    id: 2,
    title: "Digital Skills Badge",
    subtitle: "Remote work readiness",
  },
];

const WalletDashboard = () => {
  return (
    <section className="bg-[#F8F9FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#F4B42A]/40 bg-[#FFF8E8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#C98A00]">
              Skill wallet
            </span>
            <h1 className="mt-4 text-[30px] leading-tight font-bold text-[#080B13] sm:text-[40px] lg:text-[48px]">
              Your rewards, badges, and next payout
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#506078] sm:text-lg">
              Track mock earnings, share portable credentials, and prepare your next mobile-money withdrawal - all without leaving the Orivex app.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#E5EAF0] bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-[#12161F]">This week</p>
            <p className="mt-2 text-2xl font-bold text-[#080B13]">+$8.40 earned</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[#E5EAF0] bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#506078]">Balance overview</p>
                <p className="mt-1 text-3xl font-bold text-[#080B13]">$24.50 USDC</p>
              </div>
              <div className="rounded-full bg-[#FFF8E8] p-3 text-[#C98A00]">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {balances.map((balance) => (
                <div key={balance.label} className="rounded-2xl bg-[#F8F9FB] p-4">
                  <p className="text-sm text-[#506078]">{balance.label}</p>
                  <p className="mt-2 text-xl font-semibold text-[#12161F]">{balance.amount}</p>
                  <p className="mt-1 text-sm text-[#C98A00]">{balance.change}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B42A] px-4 py-3 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#e6a81f]"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Withdraw to mobile money
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-[#E5EAF0] bg-white px-4 py-3 text-sm font-semibold text-[#506078] transition hover:bg-[#F8F9FB]"
              >
                Share credentials
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#E5EAF0] bg-[#12161F] p-5 text-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-6">
            <p className="text-sm font-semibold text-[#F4B42A]">Earnings overview</p>
            <p className="mt-3 text-3xl font-bold">$48.60</p>
            <p className="mt-2 text-sm text-[#CBD5E1]">Total mock rewards collected from completed lessons and quizzes.</p>

            <div className="mt-6 space-y-3 rounded-2xl bg-white/10 p-4">
              <div className="flex items-center justify-between text-sm">
                <span>Completed modules</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Badges earned</span>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Next payout target</span>
                <span className="font-semibold">$10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[#E5EAF0] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#12161F]">Recent activity</h2>
                <p className="mt-1 text-sm text-[#506078]">Mock reward and transaction history</p>
              </div>
              <span className="rounded-full bg-[#F8F9FB] px-3 py-1 text-sm font-semibold text-[#64748B]">
                Live mock feed
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between rounded-2xl border border-[#E5EAF0] bg-[#FCFCFD] px-4 py-4">
                  <div>
                    <p className="font-semibold text-[#12161F]">{transaction.title}</p>
                    <p className="mt-1 text-sm text-[#506078]">{transaction.time}</p>
                  </div>
                  <span className="rounded-full bg-[#F8F9FB] px-3 py-1 text-sm font-semibold text-[#506078]">
                    {transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#E5EAF0] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#12161F]">Shareable credentials</h2>
                <p className="mt-1 text-sm text-[#506078]">Portable proof of your next milestone</p>
              </div>
              <span className="rounded-full bg-[#FFF8E8] px-3 py-1 text-sm font-semibold text-[#C98A00]">
                Preview only
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {shareableCredentials.map((credential) => (
                <div key={credential.id} className="rounded-2xl border border-[#E5EAF0] bg-[#FCFCFD] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#12161F]">{credential.title}</p>
                      <p className="mt-1 text-sm text-[#506078]">{credential.subtitle}</p>
                    </div>
                    <div className="rounded-full bg-[#F4B42A]/15 p-2 text-[#C98A00]">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E5EAF0] bg-white px-3 py-2 text-sm font-semibold text-[#506078]"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Share card
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletDashboard;
