import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

export function Button({
  variant = "primary",
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[16px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    primary: isDisabled
      ? "bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed"
      : "bg-[#F5B841] text-[#0F172A] hover:bg-[#e6a81f] focus-visible:ring-[#F5B841]",
    secondary: isDisabled
      ? "bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed"
      : "bg-[#FEF3C7] text-[#0F172A] hover:bg-[#fde68a] focus-visible:ring-[#F5B841]",
    outline: isDisabled
      ? "border border-[#E2E8F0] bg-white text-[#94A3B8] cursor-not-allowed"
      : "border border-[#D1D5DB] bg-white text-[#0F172A] hover:bg-[#F7F7F7] focus-visible:ring-[#475569]",
    link: isDisabled
      ? "text-[#14B8A6]/50 cursor-not-allowed"
      : "text-[#14B8A6] hover:text-[#0f9387] px-0 py-0 rounded-none",
  };

  return (
    <button
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={[base, variants[variant], className].join(" ")}
      {...props}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
      {variant === "link" && !loading && (
        <ArrowRight size={16} aria-hidden="true" />
      )}
    </button>
  );
}
