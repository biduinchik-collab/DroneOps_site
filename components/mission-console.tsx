import type { Dictionary } from "@/lib/i18n/dictionaries";

type MissionConsoleProps = {
  visual: Dictionary["hero"]["visual"];
};

export function MissionConsole({ visual }: MissionConsoleProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-steel/20 bg-obsidian shadow-glow">
      <div className="technical-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 top-0 h-px bg-signal/40" />

      <div className="relative flex items-center justify-between border-b border-steel/20 px-4 py-3 sm:px-5">
        <div>
          <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-signal">
            {visual.status}
          </p>
          <h2 className="mt-1 font-display text-base font-bold uppercase tracking-[0.12em] text-cloud">
            {visual.title}
          </h2>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="h-2 w-2 rounded-full bg-signal" />
          <span className="font-display text-[0.68rem] uppercase tracking-[0.2em] text-mist">{visual.package}</span>
        </div>
      </div>

      <div className="relative grid gap-4 p-4 lg:grid-cols-[1fr_180px] lg:p-5">
        <div className="relative min-h-[360px] overflow-hidden rounded-md border border-steel/20 bg-void/70">
          <svg
            viewBox="0 0 620 420"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label={visual.route}
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="minor-grid" width="38" height="38" patternUnits="userSpaceOnUse">
                <path d="M 38 0 L 0 0 0 38" fill="none" stroke="rgba(74,122,155,0.18)" strokeWidth="1" />
              </pattern>
              <pattern id="major-grid" width="152" height="152" patternUnits="userSpaceOnUse">
                <path d="M 152 0 L 0 0 0 152" fill="none" stroke="rgba(26,143,209,0.16)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="620" height="420" fill="url(#minor-grid)" />
            <rect width="620" height="420" fill="url(#major-grid)" />
            <path d="M56 348 C134 264 192 278 260 210 C332 138 410 172 560 82" fill="none" stroke="rgba(26,143,209,0.85)" strokeWidth="3" />
            <path d="M56 348 C134 264 192 278 260 210 C332 138 410 172 560 82" fill="none" stroke="rgba(26,143,209,0.16)" strokeWidth="18" />
            <path d="M88 92 L224 54 L332 118 L500 72 L574 160 L458 306 L282 352 L118 296 Z" fill="rgba(26,143,209,0.055)" stroke="rgba(143,180,204,0.18)" strokeWidth="1" />
            <path d="M152 318 L244 260 L384 282 L510 218" fill="none" stroke="rgba(237,240,244,0.35)" strokeDasharray="7 9" strokeWidth="1.5" />
            {[
              [56, 348],
              [260, 210],
              [560, 82],
              [384, 282],
            ].map(([cx, cy], index) => (
              <g key={`${cx}-${cy}`}>
                <circle cx={cx} cy={cy} r="13" fill="rgba(6,8,16,0.92)" stroke="rgba(26,143,209,0.95)" strokeWidth="2" />
                <circle cx={cx} cy={cy} r="4" fill={index === 3 ? "#8FB4CC" : "#1A8FD1"} />
              </g>
            ))}
            <g transform="translate(390 126)">
              <rect width="142" height="54" rx="3" fill="rgba(10,13,18,0.88)" stroke="rgba(74,122,155,0.35)" />
              <text x="14" y="22" fill="#8FB4CC" fontSize="12" fontFamily="Arial" letterSpacing="1.5">
                NAV ESTIMATE
              </text>
              <text x="14" y="40" fill="#EDF0F4" fontSize="13" fontFamily="Arial">
                corridor hold
              </text>
            </g>
          </svg>

          <div className="absolute left-4 top-4 rounded-sm border border-steel/20 bg-void/80 px-3 py-2">
            <p className="font-display text-[0.68rem] uppercase tracking-[0.2em] text-steel">{visual.route}</p>
            <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.14em] text-cloud">
              {visual.estimate}
            </p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-3">
            {[visual.signal, visual.optical, visual.package].map((item, index) => (
              <div key={item} className="rounded-sm border border-steel/20 bg-void/80 px-3 py-2">
                <span className={index === 0 ? "text-steel" : "text-signal"}>●</span>
                <span className="ml-2 font-display text-[0.68rem] uppercase tracking-[0.18em] text-mist">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <ConsoleMetric label={visual.telemetry} value="LIVE" />
          <ConsoleMetric label={visual.altitude} value="420 M" />
          <ConsoleMetric label={visual.battery} value="78%" />
          <ConsoleMetric label={visual.link} value="MESH" />
        </div>
      </div>
    </div>
  );
}

function ConsoleMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-steel/20 bg-void/70 p-4">
      <p className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-steel">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.08em] text-cloud">{value}</p>
    </div>
  );
}
