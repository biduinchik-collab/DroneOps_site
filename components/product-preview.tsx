import type { Dictionary } from "@/lib/i18n/dictionaries";

type ProductPreviewProps = {
  preview: Dictionary["preview"];
};

export function ProductPreview({ preview }: ProductPreviewProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-steel/20 bg-obsidian shadow-glow">
      <div className="grid min-h-[520px] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative border-b border-steel/20 bg-void lg:border-b-0 lg:border-r">
          <div className="technical-grid absolute inset-0 opacity-80" />
          <div className="relative flex items-center justify-between border-b border-steel/20 px-5 py-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-cloud">{preview.mapTitle}</h3>
            <span className="rounded-xs border border-signal/40 px-2 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-signal">
              OPS UI
            </span>
          </div>

          <div className="relative h-[430px]">
            <svg
              viewBox="0 0 720 440"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label={preview.mapTitle}
              preserveAspectRatio="xMidYMid slice"
            >
              <path d="M0 120 C120 86 176 166 278 132 C390 94 462 20 720 72 L720 0 L0 0 Z" fill="rgba(26,143,209,0.055)" />
              <path d="M0 340 C110 284 184 334 302 286 C426 235 514 272 720 210 L720 440 L0 440 Z" fill="rgba(74,122,155,0.08)" />
              <path d="M92 354 C164 270 210 286 300 212 C382 144 470 156 624 74" fill="none" stroke="rgba(26,143,209,0.9)" strokeWidth="3" />
              <path d="M92 354 C164 270 210 286 300 212 C382 144 470 156 624 74" fill="none" stroke="rgba(26,143,209,0.16)" strokeWidth="24" />
              <path d="M118 112 L244 80 L366 132 L520 118 L638 214 L550 344 L326 372 L136 298 Z" fill="none" stroke="rgba(143,180,204,0.24)" strokeDasharray="8 10" strokeWidth="1.5" />
              <path d="M164 292 L282 240 L408 268 L548 196" fill="none" stroke="rgba(237,240,244,0.34)" strokeDasharray="6 9" strokeWidth="1.5" />
              {[
                [92, 354],
                [300, 212],
                [624, 74],
                [408, 268],
              ].map(([cx, cy]) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="15" fill="rgba(6,8,16,0.94)" stroke="rgba(26,143,209,0.96)" strokeWidth="2" />
                  <circle cx={cx} cy={cy} r="4" fill="#1A8FD1" />
                </g>
              ))}
            </svg>
          </div>
        </div>

        <div className="bg-panel/70 p-5 sm:p-7">
          <div className="grid gap-4">
            {preview.panels.map((panel) => (
              <div key={panel.label} className="rounded-md border border-steel/20 bg-void/60 p-4">
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-steel">
                  {panel.label}
                </p>
                <p className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.08em] text-cloud">
                  {panel.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-steel/20 pt-6">
            <h3 className="font-display text-base font-bold uppercase tracking-[0.16em] text-cloud">
              {preview.checklistTitle}
            </h3>
            <ul className="mt-4 grid gap-3">
              {preview.checklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-light leading-6 text-mist">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-signal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
