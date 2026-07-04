import { forwardRef, useId } from "react";
import {
  Mail,
  CheckCircle2,
  XCircle,
  Info,
  LucideIcon,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TextInputState = "default" | "focus" | "success" | "error";

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  /** Visual state of the input. Defaults to "default". */
  state?: TextInputState;
  /** Label text rendered above the input. */
  label: string;
  /** Icon displayed to the left inside the input. Defaults to Mail. */
  LeadingIcon?: LucideIcon;
  /** Helper text shown below the input (success / neutral). */
  helperText?: string;
  /** Error message shown below the input when state === "error". */
  errorMessage?: string;
  /** Optional explicit id. Falls back to a generated id. */
  id?: string;
}

// ─── Style maps ──────────────────────────────────────────────────────────────

const borderStyles: Record<TextInputState, string> = {
  default: "border-[#E2E8F0] focus-within:border-[#E2E8F0]",
  focus: "border-indigo-500",
  success: "border-[#E2E8F0]",
  error: "border-[#DC2626]",
};

const textStyles: Record<TextInputState, string> = {
  default: "text-[#0F172A] placeholder:text-[#94A3B8]",
  focus: "text-[#0F172A] placeholder:text-[#94A3B8]",
  success: "text-[#0F172A] placeholder:text-[#94A3B8]",
  error: "text-[#DC2626] placeholder:text-[#DC2626]",
};

// ─── Sub-component: trailing icon ────────────────────────────────────────────

function TrailingIcon({ state }: { state: TextInputState }) {
  if (state === "success" || state === "focus") {
    return (
      <CheckCircle2
        size={18}
        className="shrink-0 text-[#16A34A]"
        aria-hidden="true"
      />
    );
  }
  if (state === "error") {
    return (
      <XCircle
        size={18}
        className="shrink-0 text-[#DC2626]"
        aria-hidden="true"
      />
    );
  }
  return null;
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * TextInput — labelled text input with validation visuals.
 *
 * Purely presentational: state is driven by the `state` prop.
 * No internal validation or submission logic.
 *
 * @example
 * <TextInput label="Email" state="error" errorMessage="Email is not valid" />
 */
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      state = "default",
      label,
      LeadingIcon = Mail,
      helperText,
      errorMessage,
      id: externalId,
      className = "",
      ...inputProps
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = externalId ?? generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const isError = state === "error";
    const hasHelper = !isError && helperText;
    const describedBy = [isError ? errorId : null, hasHelper ? helperId : null]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="flex w-full flex-col gap-1.5">
        {/* Label */}
        <label
          htmlFor={inputId}
          className="flex items-center gap-1.5 text-[12px] font-medium leading-[130%] text-[#475569] select-none"
        >
          <LeadingIcon size={13} aria-hidden="true" className="shrink-0" />
          {label}
        </label>

        {/* Input wrapper */}
        <div
          className={[
            "flex items-center gap-2 rounded-lg border bg-white px-3 py-2.5 transition-colors duration-150",
            borderStyles[state],
            "focus-within:ring-2",
            isError
              ? "focus-within:ring-[#DC2626]/20"
              : "focus-within:ring-indigo-500/20",
          ].join(" ")}
        >
          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            className={[
              "min-w-0 flex-1 bg-transparent text-[16px] leading-[140%] font-normal outline-none",
              textStyles[state],
              className,
            ].join(" ")}
            aria-invalid={isError ? "true" : undefined}
            aria-describedby={describedBy || undefined}
            {...inputProps}
          />

          {/* Trailing status icon */}
          <TrailingIcon state={state} />

          {/* Info icon — only on error state, far right */}
          {isError && (
            <Info
              size={16}
              className="shrink-0 text-[#DC2626]"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Error message */}
        {isError && errorMessage && (
          <p
            id={errorId}
            role="alert"
            className="flex items-center gap-1 text-[12px] leading-[130%] text-[#DC2626]"
          >
            <XCircle size={12} aria-hidden="true" className="shrink-0" />
            {errorMessage}
          </p>
        )}

        {/* Helper text */}
        {hasHelper && (
          <p
            id={helperId}
            className="text-[12px] leading-[130%] text-[#475569]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
