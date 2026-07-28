import { cn } from "../../lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none active:scale-[0.97]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_0_0_1px_rgba(139,92,246,0.4),0_8px_24px_-8px_rgba(139,92,246,0.6)] hover:shadow-[0_0_0_1px_rgba(139,92,246,0.6),0_12px_32px_-8px_rgba(139,92,246,0.8)] hover:-translate-y-0.5",
  secondary:
    "border border-line bg-surface-2 text-ink hover:border-primary-dim hover:bg-surface-3 hover:-translate-y-0.5",
  ghost: "text-ink-muted hover:text-ink hover:bg-surface-2",
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string): string {
  return cn(base, variants[variant], className);
}
