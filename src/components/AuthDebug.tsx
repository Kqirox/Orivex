"use client";

import { useAuth } from "@/contexts/auth-context";
import { useState, useEffect } from "react";
import { X, Shield, LogIn, UserPlus, LogOut, Loader2, Key } from "lucide-react";

export function AuthDebug() {
  const { user, login, signup, logout, isLoading, error } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password123");
  const [name, setName] = useState("New User");

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-950 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 group"
      >
        <Shield size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="font-semibold text-sm">Auth Debug</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-white p-6 text-slate-900 relative border-b border-slate-100">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-100 rounded-xl">
              <Key size={24} className="text-slate-900" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Auth Debug</h2>
          </div>
          <p className="text-slate-500 text-sm">Developer Testing Tool</p>
        </div>

        {/* Content */}
        <div className="p-10! space-y-8">
          {/* Status Section */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Current State</p>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${user ? 'bg-black animate-pulse' : 'bg-slate-300'}`} />
                <p className="font-semibold text-slate-900">
                  {user ? user.name : "Unauthenticated"}
                </p>
              </div>
            </div>
            {isLoading && <Loader2 className="animate-spin text-slate-900" size={20} />}
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              <p className="text-xs text-red-600 font-medium">{error}</p>
            </div>
          )}

          {!user ? (
            <div className="space-y-4">
              <div className="grid gap-3">
                <div className="relative group">
                  <input
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-black transition-all outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                  />
                </div>
                <div className="relative group">
                  <input
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-black transition-all outline-none"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <div className="relative group">
                  <input
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-black transition-all outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Display Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  onClick={() => login(email, password)}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-4 rounded-xl font-bold text-sm hover:bg-slate-200 active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  <LogIn size={16} />
                  Login
                </button>
                <button
                  onClick={() => signup(name, email, password, "student")}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-black/10 hover:bg-slate-800 active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  <UserPlus size={16} />
                  Signup
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-4">
                Default: test@example.com / password123
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-2 py-4">
                <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-3xl font-bold mb-2">
                  {user.name.charAt(0)}
                </div>
                <p className="text-sm text-slate-500">{user.email}</p>
                <span className="px-3 py-1 bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full">
                  {user.role}
                </span>
              </div>
              <button
                onClick={() => logout()}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-4 rounded-xl font-bold text-sm hover:bg-red-100 active:scale-[0.98] transition-all"
              >
                <LogOut size={18} />
                Terminate Session
              </button>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

