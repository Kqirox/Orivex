"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

// Frontend/design only — no real authentication. Validation below is purely
// visual; the commented-out auth-context mock is intentionally out of scope.
const PIN_LENGTH = 6;

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [touched, setTouched] = useState({ email: false, pin: false });

  const emailValid = isValidEmail(email);
  const pinValid = pin.length === PIN_LENGTH;

  const emailError = touched.email && !emailValid;
  const pinError = touched.pin && !pinValid;
  const canSubmit = emailValid && pinValid;

  function handlePinChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPin(e.target.value.replace(/\D/g, "").slice(0, PIN_LENGTH));
  }

  function handleSubmit(e: React.FormEvent) {
    // No authentication here — visual flow only.
    e.preventDefault();
    setTouched({ email: true, pin: true });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-4 py-10 font-body">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-6 flex items-center justify-center gap-2 sm:justify-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-icon.svg" alt="Learnault" className="h-7 w-7" />
          <span className="font-heading text-[18px] font-bold text-[#0F172A]">
            Learnault
          </span>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h1 className="font-heading text-[28px] font-bold text-[#0F172A]">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-[#475569]">
              Sign in to keep learning and earning.
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <Input
              variant="email"
              label="Email address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              state={
                emailError
                  ? "error"
                  : email && emailValid
                    ? "filled"
                    : "default"
              }
              errorMessage="Please enter a valid email address"
            />

            <div className="flex flex-col gap-1">
              <Input
                variant="pin"
                label="PIN"
                placeholder="Enter your 6-digit PIN"
                value={pin}
                onChange={handlePinChange}
                onBlur={() => setTouched((t) => ({ ...t, pin: true }))}
                state={pinError ? "error" : "default"}
                errorMessage="Your PIN must be 6 digits"
              />
              <div className="flex justify-end">
                <Button variant="link" size="sm">
                  Forgot PIN?
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={!canSubmit}
              className="mt-2 w-full"
            >
              Sign in
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#475569]">
            New to Learnault?{" "}
            <a
              href="/signup"
              className="font-medium text-[#14B8A6] hover:underline"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
