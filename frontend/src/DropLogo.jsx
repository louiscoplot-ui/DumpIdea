export default function DropLogo({ size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 74 74"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible", display: "block" }}
    >
      <defs>
        <linearGradient id="dropGrad" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#f97316"/>
          <stop offset="100%" stopColor="#fbbf24"/>
        </linearGradient>
        <style>{`
          /* ── Drop falls ── */
          .drop-body {
            animation: dropFall 4.2s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
            transform-box: fill-box;
            transform-origin: center bottom;
          }
          @keyframes dropFall {
            0%   { transform: translateY(-32px) scaleY(1.08); opacity: 0; }
            6%   { opacity: 1; }
            26%  { transform: translateY(0px)  scaleY(1);     opacity: 1; }
            30%  { transform: translateY(2px)  scaleX(1.28) scaleY(0.62); }
            35%  { transform: translateY(-1px) scaleX(0.92) scaleY(1.1);  }
            39%  { transform: translateY(0px)  scaleX(1)    scaleY(1);    }
            55%  { transform: translateY(0px); opacity: 1; }
            64%  { opacity: 0; transform: translateY(0px) scale(0.2); }
            100% { opacity: 0; transform: translateY(-32px) scaleY(1.08); }
          }

          /* ── Shine on drop ── */
          .drop-shine {
            animation: dropFall 4.2s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
            transform-box: fill-box;
            transform-origin: center bottom;
          }

          /* ── Bounce micro-drop ── */
          .bounce-drop {
            animation: bounceUp 4.2s ease-out infinite;
            transform-box: fill-box;
            transform-origin: center center;
          }
          @keyframes bounceUp {
            0%, 28% { transform: translateY(0px) scale(1);    opacity: 0; }
            31%     { transform: translateY(0px) scale(1);    opacity: 0.9; }
            43%     { transform: translateY(-20px) scale(0.8); opacity: 0.85; }
            48%     { transform: translateY(-20px) scale(1) scaleY(0.75); opacity: 0.6; }
            57%     { transform: translateY(0px) scale(0.5);  opacity: 0; }
            100%    { opacity: 0; }
          }

          /* ── Ripple rings ── */
          .ripple-1 { animation: ripple1 4.2s ease-out infinite; }
          .ripple-2 { animation: ripple2 4.2s ease-out infinite; }
          @keyframes ripple1 {
            0%, 27% { r: 1; opacity: 0; }
            30%     { r: 3; opacity: 0.75; }
            52%     { r: 20; opacity: 0; }
            100%    { r: 1; opacity: 0; }
          }
          @keyframes ripple2 {
            0%, 30% { r: 1; opacity: 0; }
            34%     { r: 3; opacity: 0.5; }
            58%     { r: 28; opacity: 0; }
            100%    { r: 1; opacity: 0; }
          }

          /* ── Category dots ── */
          .cat-dot {
            animation: catIn 4.2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite both;
          }
          @keyframes catIn {
            0%   { transform: translate(var(--dx), var(--dy)); opacity: 0; }
            62%  { transform: translate(var(--dx), var(--dy)); opacity: 0; }
            66%  { opacity: 1; }
            74%  { transform: translate(calc(var(--dx)*0.08), 2px); }
            78%  { transform: translate(0px, -3px); }
            82%  { transform: translate(0px, 0px); opacity: 1; }
            90%  { opacity: 1; }
            97%  { opacity: 0; }
            100% { transform: translate(var(--dx), var(--dy)); opacity: 0; }
          }

          /* ── Category lines ── */
          .cat-line {
            animation: lineIn 4.2s ease-out infinite both;
            transform-box: fill-box;
            transform-origin: left center;
          }
          @keyframes lineIn {
            0%   { transform: scaleX(0); opacity: 0; }
            82%  { transform: scaleX(0); opacity: 0; }
            90%  { transform: scaleX(1); opacity: 0.7; }
            94%  { opacity: 0.7; }
            98%  { opacity: 0; }
            100% { transform: scaleX(0); opacity: 0; }
          }
        `}</style>
      </defs>

      {/* ── Ripple rings (at impact point) ── */}
      <circle className="ripple-1" cx="37" cy="54" fill="none" stroke="#f97316" strokeWidth="1.4"/>
      <circle className="ripple-2" cx="37" cy="54" fill="none" stroke="#fbbf24" strokeWidth="0.9"/>

      {/* ── Water drop ── */}
      <path
        className="drop-body"
        d="M37 14 C37 14 20 35 20 49 C20 59.5 27.6 68 37 68 C46.4 68 54 59.5 54 49 C54 35 37 14 37 14 Z"
        fill="url(#dropGrad)"
        style={{ filter: "drop-shadow(0 3px 8px rgba(249,115,22,0.45))" }}
      />
      {/* inner shine */}
      <path
        className="drop-shine"
        d="M32 24 C29 31 27 39 27 47 C27 50 28 52 29 54"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.28"
      />

      {/* ── Bounce micro-drop ── */}
      <ellipse
        className="bounce-drop"
        cx="37" cy="53" rx="3.5" ry="4"
        fill="#fbbf24"
        opacity="0"
        style={{ filter: "drop-shadow(0 1px 4px rgba(251,191,36,0.6))" }}
      />

      {/* ── Category dots ── */}
      {[
        { cx: 13, cy: 30, color: "#3b82f6", dx:  10, dy: -28, delay: "0s"    },
        { cx: 13, cy: 46, color: "#a78bfa", dx:  -8, dy: -34, delay: "0.08s" },
        { cx: 13, cy: 62, color: "#34d399", dx:  16, dy: -30, delay: "0.04s" },
        { cx: 36, cy: 30, color: "#3b82f6", dx: -18, dy: -38, delay: "0.12s" },
        { cx: 36, cy: 46, color: "#a78bfa", dx:   8, dy: -32, delay: "0.06s" },
        { cx: 36, cy: 62, color: "#34d399", dx: -11, dy: -26, delay: "0.16s" },
      ].map((d, i) => (
        <circle
          key={i}
          className="cat-dot"
          cx={d.cx} cy={d.cy} r="4"
          fill={d.color}
          style={{
            "--dx": `${d.dx}px`,
            "--dy": `${d.dy}px`,
            animationDelay: d.delay,
            filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.35))",
          }}
        />
      ))}

      {/* ── Category lines ── */}
      {[
        { x1: 43, y1: 30, x2: 66, y2: 30, color: "#3b82f6" },
        { x1: 43, y1: 46, x2: 62, y2: 46, color: "#a78bfa" },
        { x1: 43, y1: 62, x2: 56, y2: 62, color: "#34d399" },
      ].map((l, i) => (
        <line
          key={i}
          className="cat-line"
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={l.color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
