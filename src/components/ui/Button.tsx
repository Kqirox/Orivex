"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — reusable CTA built per docs/design/design_system.md.
 *
 * Families:
 *  - Solid:   primary (gold), secondary (light yellow), tertiary (beige/tan)
 *  - Outline: white bg + dark border
 *  - Link:    teal text + trailing arrow
 *
 * Every family has Default / Hover-Active / Disabled states and a
 * keyboard-visible focus ring. Colors are pulled from the design tokens.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-[#F5B841] text-[#0F172A] hover:bg-[#E0A82F] focus-visible:ring-[#F5B841] disabled:bg-[#E2E8F0] disabled:text-[#94A3B8] disabled:hover:bg-[#E2E8F0]",
        secondary:
          "rounded-full bg-[#FEF3C7] text-[#0F172A] hover:bg-[#FDE68A] focus-visible:ring-[#F5B841] disabled:bg-[#E2E8F0] disabled:text-[#94A3B8] disabled:hover:bg-[#E2E8F0]",
        tertiary:
          "rounded-full bg-[#EADBC0] text-[#0F172A] hover:bg-[#E0CEAC] focus-visible:ring-[#D6BE97] disabled:bg-[#E2E8F0] disabled:text-[#94A3B8] disabled:hover:bg-[#E2E8F0]",
        outline:
          "rounded-full border border-[#D1D5DB] bg-white text-[#0F172A] hover:bg-[#F1F5F9] focus-visible:ring-[#475569] disabled:border-[#E2E8F0] disabled:text-[#94A3B8] disabled:hover:bg-white",
        link: "rounded-sm text-[#14B8A6] hover:text-[#0F9387] focus-visible:ring-[#14B8A6] disabled:text-[#14B8A6]/50 disabled:hover:text-[#14B8A6]/50",
      },
      size: {
        lg: "px-7 py-3.5 text-[20px]",
        md: "px-6 py-3 text-[16px]",
        sm: "px-5 py-2.5 text-[14px]",
        xs: "px-4 py-2 text-[12px]",
      },
    },
    compoundVariants: [
      // Text/Link buttons carry no box padding regardless of size.
      { variant: "link", class: "px-0 py-0" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Shows a spinner and makes the button non-interactive. */
  loading?: boolean;
  /** Optional leading icon slot. */
  leftIcon?: React.ReactNode;
  /** Optional trailing icon slot (overrides the link arrow). */
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      className,
      type = "button",
      ...props
    },
    ref
  ) {
    const isDisabled = Boolean(disabled) || loading;

    // Link buttons get the design-system trailing arrow unless one is provided.
    const trailing =
      rightIcon ??
      (variant === "link" && !loading ? (
        <ArrowRight size={16} aria-hidden="true" />
      ) : null);

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {loading ? (
          <span
            role="status"
            aria-label="Loading"
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          />
        ) : (
          leftIcon
        )}
        {children}
        {trailing}
      </button>
    );
  }
);
