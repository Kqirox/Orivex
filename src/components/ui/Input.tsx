
import { InputHTMLAttributes, ReactNode } from "react";
import { Mail, CheckCircle2, XCircle, Info } from "lucide-react";

export type InputState = "default" | "focus" | "success" | "error";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  id: string;
  label: string;
  leadingIcon?: ReactNode;
  state?: InputState;
  errorMessage?: string;
}

const borderClass: Record<InputState, string> = {
  default: "border-[#E2E8F0] focus:border-[#6366F1]",
  focus: "border-[#6366F1]",
  success: "border-[#E2E8F0]",
  error: "border-[#DC2626]",
};

const textClass: Record<InputState, string> = {
  default: "text-[#0F172A]",
  focus: "text-[#0F172A]",
  success: "text-[#0F172A]",
  error: "text-[#DC2626]",
};

function TrailingIcon({ state }: { state: InputState }) {
  if (state === "focus" || state === "success") {
    return <CheckCircle2 size={18} className="text-[#16A34A] shrink-0" aria-hidden="true" />;
  }
  if (state === "error") {
    return <XCircle size={18} className="text-[#DC2626] shrink-0" aria-hidden="true" />;
  }
  return null;
}

export function Input({
  id,
  label,
  leadingIcon,
  state = "default",
  errorMessage,
  className = "",
  ...props
}: InputProps) {
  const errorId = `${id}-error`;
  const showError = state === "error" && errorMessage;

  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-xs font-medium text-[#475569]"
      >
        {leadingIcon ?? <Mail size={14} aria-hidden="true" />}
        {label}
      </label>

      {/* Input row */}
      <div
        className={`flex items-center gap-2 rounded-lg border bg-white px-3 py-2.5 transition-colors ${borderClass[state]} ${className}`}
      >
        <input
          id={id}
          className={`min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#94A3B8] ${textClass[state]}`}
          aria-invalid={state === "error" ? "true" : undefined}
          aria-describedby={showError ? errorId : undefined}
          {...props}
        />
        <TrailingIcon state={state} />
        {state === "error" && (
          <Info size={16} className="text-[#475569] shrink-0" aria-hidden="true" />
        )}
      </div>

      {/* Error message */}
      {showError && (
        <p id={errorId} role="alert" className="text-xs text-[#DC2626]">

          {errorMessage}
        </p>
      )}
    </div>
  );
}
