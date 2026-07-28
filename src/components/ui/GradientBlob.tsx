import { cn } from "../../lib/utils";

export function GradientBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-3xl animate-blob", className)}
    />
  );
}
