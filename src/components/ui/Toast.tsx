"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AlertCircle,
  Award,
  CheckCircle2,
  CircleDollarSign,
  Info,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type ToastVariant = "success" | "reward" | "warning" | "error" | "info";

export type ToastMessage = {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
  duration?: number;
};

type ToastInput = Omit<ToastMessage, "id" | "variant"> & {
  id?: string;
  variant?: ToastVariant;
};

type ToastContextValue = {
  toasts: ToastMessage[];
  notify: (toast: ToastInput) => string;
  dismiss: (id: string) => void;
  clear: () => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const DEFAULT_DURATION = 5000;

const variantStyles: Record<
  ToastVariant,
  {
    icon: typeof CheckCircle2;
    className: string;
    iconClassName: string;
  }
> = {
  success: {
    icon: CheckCircle2,
    className: "border-green-200 bg-green-50 text-green-950",
    iconClassName: "text-green-600",
  },
  reward: {
    icon: CircleDollarSign,
    className: "border-primary/40 bg-primary/15 text-foreground",
    iconClassName: "text-primary",
  },
  warning: {
    icon: AlertCircle,
    className: "border-amber-200 bg-amber-50 text-amber-950",
    iconClassName: "text-amber-600",
  },
  error: {
    icon: AlertCircle,
    className: "border-red-200 bg-red-50 text-red-950",
    iconClassName: "text-red-600",
  },
  info: {
    icon: Info,
    className: "border-teal-200 bg-teal-50 text-teal-950",
    iconClassName: "text-secondary",
  },
};

function createToastId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    const timer = timers.current.get(id);

    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }

    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const notify = useCallback(
    ({
      id = createToastId(),
      variant = "info",
      duration = DEFAULT_DURATION,
      ...toast
    }: ToastInput) => {
      const nextToast: ToastMessage = {
        ...toast,
        id,
        variant,
        duration,
      };

      setToasts((current) => [
        nextToast,
        ...current.filter((item) => item.id !== id),
      ]);

      const existingTimer = timers.current.get(id);
      if (existingTimer) {
        clearTimeout(existingTimer);
      }

      if (duration > 0) {
        timers.current.set(
          id,
          setTimeout(() => dismiss(id), duration),
        );
      }

      return id;
    },
    [dismiss],
  );

  const clear = useCallback(() => {
    timers.current.forEach((timer) => clearTimeout(timer));
    timers.current.clear();
    setToasts([]);
  }, []);

  const value = useMemo(
    () => ({ toasts, notify, dismiss, clear }),
    [clear, dismiss, notify, toasts],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

type ToastViewportProps = {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
};

export function ToastViewport({ toasts, onDismiss }: ToastViewportProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="false"
      className="pointer-events-none fixed right-4 top-4 z-50 flex w-[min(100%-2rem,24rem)] flex-col gap-3"
    >
      {toasts.map((toast) => (
        <ToastCard key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

type ToastCardProps = {
  toast: ToastMessage;
  onDismiss: (id: string) => void;
};

export function ToastCard({ toast, onDismiss }: ToastCardProps) {
  const styles = variantStyles[toast.variant];
  const Icon = toast.variant === "success" && toast.title === "Quiz Passed"
    ? Award
    : styles.icon;

  return (
    <div
      className={cn(
        "pointer-events-auto grid grid-cols-[auto_1fr_auto] gap-3 rounded-lg border p-4 shadow-lg motion-safe:animate-in motion-safe:slide-in-from-right-3 motion-safe:fade-in-0",
        styles.className,
      )}
      data-variant={toast.variant}
    >
      <Icon
        aria-hidden="true"
        className={cn("mt-0.5 h-5 w-5 shrink-0", styles.iconClassName)}
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-5">{toast.title}</p>
        {toast.description ? (
          <p className="mt-1 text-sm leading-5 opacity-80">
            {toast.description}
          </p>
        ) : null}
      </div>
      <button
        type="button"
        aria-label={`Dismiss ${toast.title}`}
        onClick={() => onDismiss(toast.id)}
        className="rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>
  );
}
