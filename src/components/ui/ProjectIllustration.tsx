import type { ProjectIllustrationVariant } from "../../types";

function EdtechArt() {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden="true">
      <rect x="36" y="40" width="180" height="120" rx="12" className="fill-surface-3/70 stroke-line" strokeWidth="1.5" />
      <circle cx="126" cy="100" r="26" className="fill-primary/15 stroke-primary/50" strokeWidth="1.5" />
      <path d="M118 88 L142 100 L118 112 Z" className="fill-primary-soft" />
      <rect x="52" y="150" width="148" height="6" rx="3" className="fill-surface-2" />
      <rect x="52" y="150" width="92" height="6" rx="3" className="fill-primary" />

      <rect x="240" y="40" width="124" height="14" rx="7" className="fill-surface-3/70" />
      <rect x="240" y="66" width="96" height="10" rx="5" className="fill-surface-2" />
      <rect x="240" y="86" width="124" height="10" rx="5" className="fill-surface-2" />
      <rect x="240" y="106" width="108" height="10" rx="5" className="fill-surface-2" />
      <circle cx="352" cy="66" r="7" className="fill-none stroke-primary-soft" strokeWidth="1.5" />
      <path d="M348.5 66 l2.5 2.5 l5 -5" className="fill-none stroke-primary-soft" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="240" y="126" width="72" height="10" rx="5" className="fill-surface-2" />
      <circle cx="352" cy="131" r="4" className="fill-line-soft" />
    </svg>
  );
}

function AnalyticsArt() {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden="true">
      <rect x="36" y="120" width="28" height="60" rx="4" className="fill-primary/30" />
      <rect x="76" y="90" width="28" height="90" rx="4" className="fill-primary/50" />
      <rect x="116" y="60" width="28" height="120" rx="4" className="fill-primary" />
      <rect x="156" y="100" width="28" height="80" rx="4" className="fill-primary/40" />
      <path
        d="M36 70 L76 55 L116 40 L156 48 L196 30"
        className="fill-none stroke-accent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="300" cy="90" r="46" className="fill-none stroke-surface-2" strokeWidth="14" />
      <circle
        cx="300"
        cy="90"
        r="46"
        className="fill-none stroke-primary"
        strokeWidth="14"
        strokeDasharray="180 300"
        strokeLinecap="round"
        transform="rotate(-90 300 90)"
      />
      <circle
        cx="300"
        cy="90"
        r="46"
        className="fill-none stroke-accent"
        strokeWidth="14"
        strokeDasharray="70 300"
        strokeDashoffset="-180"
        strokeLinecap="round"
        transform="rotate(-90 300 90)"
      />
      <rect x="240" y="150" width="60" height="18" rx="9" className="fill-surface-3/70" />
      <rect x="308" y="150" width="52" height="18" rx="9" className="fill-surface-2" />
    </svg>
  );
}

function ToolingArt() {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden="true">
      <rect x="36" y="42" width="328" height="24" rx="8" className="fill-surface-3/70 stroke-line" strokeWidth="1.5" />
      <circle cx="52" cy="54" r="4" className="fill-primary-soft" />
      <rect x="66" y="50" width="80" height="8" rx="4" className="fill-surface-2" />
      <rect x="300" y="47" width="50" height="14" rx="7" className="fill-primary/20" />

      {[0, 1, 2, 3].map((row) => (
        <g key={row} transform={`translate(0 ${88 + row * 26})`}>
          <rect x="36" y="0" width="328" height="20" rx="6" className={row % 2 === 0 ? "fill-surface-3/50" : "fill-transparent"} />
          <rect x="48" y="6" width="10" height="8" rx="2" className="fill-none stroke-primary-soft" strokeWidth="1.5" />
          <rect x="72" y="6" width="80" height="8" rx="4" className="fill-surface-2" />
          <rect x="168" y="6" width="60" height="8" rx="4" className="fill-surface-2" />
          <rect x="300" y="5" width="46" height="10" rx="5" className="fill-primary/15" />
        </g>
      ))}
    </svg>
  );
}

function CrmArt() {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden="true">
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(0 ${48 + row * 44})`}>
          <rect x="36" y="0" width="230" height="34" rx="10" className="fill-surface-3/60 stroke-line" strokeWidth="1.5" />
          <circle cx="56" cy="17" r="12" className="fill-primary/20 stroke-primary/40" strokeWidth="1.5" />
          <rect x="80" y="9" width="90" height="7" rx="3.5" className="fill-surface-2" />
          <rect x="80" y="20" width="60" height="6" rx="3" className="fill-line-soft" />
        </g>
      ))}

      <circle cx="330" cy="70" r="30" className="fill-primary/15 stroke-primary/40" strokeWidth="1.5" />
      <path
        d="M320 62c0-3 2-5 5-5h2c1 0 2 1 2 2l1 4c0 1 0 2-1 3l-2 2c2 4 4 6 8 8l2-2c1-1 2-1 3-1l4 1c1 0 2 1 2 2v2c0 3-2 5-5 5-12 0-21-9-21-21z"
        className="fill-primary-soft"
      />

      <g transform="translate(280 130)">
        {[6, 14, 9, 18, 11, 16, 7].map((h, i) => (
          <rect key={i} x={i * 12} y={20 - h / 2} width="6" height={h} rx="3" className={i % 2 === 0 ? "fill-accent/60" : "fill-primary/50"} />
        ))}
      </g>
    </svg>
  );
}

function EcommerceArt() {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden="true">
      {[
        [36, 40],
        [206, 40],
        [36, 128],
        [206, 128],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect width="158" height="70" rx="10" className="fill-surface-3/60 stroke-line" strokeWidth="1.5" />
          <rect x="12" y="12" width="46" height="46" rx="8" className="fill-primary/15" />
          <circle cx="35" cy="35" r="14" className="fill-none stroke-primary-soft" strokeWidth="1.5" />
          <rect x="70" y="16" width="76" height="8" rx="4" className="fill-surface-2" />
          <rect x="70" y="30" width="50" height="7" rx="3.5" className="fill-line-soft" />
          <rect x="70" y="46" width="34" height="12" rx="6" className="fill-primary/20" />
        </g>
      ))}
      <circle cx="352" cy="30" r="18" className="fill-primary shadow-lg" />
      <path
        d="M345 26h3l2 10h9l3-8h-14"
        className="fill-none stroke-white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="349" cy="39" r="1.6" className="fill-white" />
      <circle cx="358" cy="39" r="1.6" className="fill-white" />
    </svg>
  );
}

const artByVariant: Record<ProjectIllustrationVariant, typeof EdtechArt> = {
  edtech: EdtechArt,
  analytics: AnalyticsArt,
  tooling: ToolingArt,
  crm: CrmArt,
  ecommerce: EcommerceArt,
};

export function ProjectIllustration({ variant }: { variant: ProjectIllustrationVariant }) {
  const Art = artByVariant[variant];
  return <Art />;
}
