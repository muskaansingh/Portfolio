import type { ReactNode } from "react";
import { profile } from "../../data/profile";

function Keyword({ children }: { children: ReactNode }) {
  return <span className="text-primary-soft">{children}</span>;
}

function Str({ children }: { children: ReactNode }) {
  return <span className="text-emerald-300">{children}</span>;
}

function Prop({ children }: { children: ReactNode }) {
  return <span className="text-accent">{children}</span>;
}

export function CodePanel() {
  return (
    <div className="card-surface relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-ink-faint">profile.ts</span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-ink-muted">
        <code>
          <span className="block">
            <Keyword>const</Keyword> <Prop>developer</Prop> = {"{"}
          </span>
          <span className="block pl-4">
            name: <Str>"{profile.name}"</Str>,
          </span>
          <span className="block pl-4">
            role: <Str>"{profile.title}"</Str>,
          </span>
          <span className="block pl-4">
            experience: <Str>"5+ years"</Str>,
          </span>
          <span className="block pl-4">
            stack: [<Str>"React"</Str>, <Str>"Next.js"</Str>, <Str>"TypeScript"</Str>],
          </span>
          <span className="block pl-4">
            currentlyAt: <Str>"{profile.currentCompany}"</Str>,
          </span>
          <span className="block pl-4">
            learning: <Str>"AI-powered development"</Str>,
          </span>
          <span className="block">{"}"};</span>
          <span className="mt-3 block text-ink-faint">// {profile.funFact}</span>
          <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-caret bg-primary-soft" aria-hidden="true" />
        </code>
      </pre>
    </div>
  );
}
