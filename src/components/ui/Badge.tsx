import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line-soft bg-surface-2 px-3 py-1 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}
