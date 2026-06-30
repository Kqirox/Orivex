"use client";

import { useId, useState } from "react";
import { Pencil, AlertCircle } from "lucide-react";

const MAX = 200;

type TextareaState = "default" | "focus" | "filled" | "error";

interface TextareaProps {
  /** Controlled value */
  value?: string;
  /** onChange handler (controlled usage) */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Force a specific visual state; omit for automatic behaviour */
  state?: TextareaState;
  /** Label text shown above the textarea */
  label?: string;
  /** Maximum character count */
  maxLength?: number;
}

export function Textarea({
  value: valueProp,
  onChange,
  state: forcedState,
  label = "Description",
  maxLength = MAX,
}: TextareaProps) {
  const id = useId();
  const descId = `${id}-desc`;
  const errorId = `${id}-error`;

  const [internalValue, setInternalValue] = useState("");
  const [focused, setFocused] = useState(false);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internalValue;
  const count = value.length;
  const atLimit = count >= maxLength;

  // Derive visual state
  const state: TextareaState =
    forcedState ??
    (atLimit
      ? "error"
      : focused
      ? "focus"
      : value.length > 0
      ? "filled"
      : "default");

  const isError = state === "error";
  const isFilled = state === "filled";

  const borderClass = isError
    ? "border-[#DC2626] focus:outline-none"
    : state === "focus"
    ? "border-indigo-500 focus:outline-none"
    : "border-[#E2E8F0] focus:outline-none";

  const textClass = isError
    ? "text-[#DC2626]"
    : isFilled
    ? "text-[#6B7280]"
    : "text-[#0F172A]";

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  }

  return (
    <div className="flex flex-col gap-1 font-[Inter,system-ui,sans-serif]">
      {/* Label */}
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-[12px] font-medium text-[#475569]"
      >
        <Pencil size={12} aria-hidden="true" />
        {label}
      </label>

      {/* Textarea */}
      <textarea
        id={id}
        value={value}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        maxLength={maxLength}
        placeholder="Write description here..."
        rows={4}
        aria-describedby={isError ? errorId : descId}
        aria-invalid={isError}
        className={[
          "w-full resize-none rounded-lg border bg-white px-3 py-2 text-[16px] placeholder-[#94A3B8] transition-colors",
          borderClass,
          textClass,
        ].join(" ")}
      />

      {/* Helper / Error row */}
      {isError ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1 text-[12px] text-[#DC2626]"
        >
          <AlertCircle size={12} aria-hidden="true" />
          Reached the {maxLength} text limit
        </p>
      ) : (
        <p id={descId} className="text-[12px] text-[#475569]">
          {count}/{maxLength} — Max {maxLength} texts
        </p>
      )}
    </div>
  );
}
