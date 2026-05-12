export default function FloatingIcons() {
  const items = [
    { id: "laptop",   left: "6%",  top: "18%", size: 56, cls: "text-gold opacity-75 jf-float-a jf-spin-a" },
    { id: "keyboard", left: "14%", top: "70%", size: 58, cls: "text-olive opacity-60 jf-float-b" },
    { id: "chart",    left: "82%", top: "20%", size: 62, cls: "text-gold opacity-55 jf-float-c jf-spin-b" },
    { id: "book",     left: "78%", top: "72%", size: 54, cls: "text-olive opacity-50 jf-float-d" },
    { id: "pen",      left: "52%", top: "8%",  size: 44, cls: "text-gold opacity-55 jf-float-e jf-spin-c" },
    { id: "ai",       left: "52%", top: "84%", size: 54, cls: "text-olive opacity-40 jf-float-f" },
    { id: "graph2",   left: "34%", top: "36%", size: 46, cls: "text-gold opacity-40 jf-float-g" },
    { id: "spark",    left: "64%", top: "44%", size: 40, cls: "text-olive opacity-35 jf-float-h" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((it) => (
        <div
          key={it.id}
          className={`absolute ${it.cls} drop-shadow-[0_10px_30px_rgba(31,35,40,0.08)]`}
          style={{ left: it.left, top: it.top }}
          aria-hidden="true"
        >
          <Icon name={it.id} size={it.size} />
        </div>
      ))}
    </div>
  );
}

function Icon({ name, size = 56 }) {
  const common = {
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "laptop":
      return (
        <svg {...common}>
          <path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8V15H4V6.8Z" />
          <path d="M2.5 18.5h19" />
          <path d="M8 18.5h8" />
        </svg>
      );
    case "keyboard":
      return (
        <svg {...common}>
          <rect x="3" y="8" width="18" height="8" rx="2" />
          <path d="M7 11h0.01M10 11h0.01M13 11h0.01M16 11h0.01" />
          <path d="M7 14h0.01M10 14h0.01M13 14h0.01M16 14h0.01" />
          <path d="M8 16.5h8" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M7 15l3-3 3 2 5-6" />
          <path d="M18 8h0.01" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 0-2 2V4Z" />
          <path d="M6 20V6a2 2 0 0 1 2-2" />
          <path d="M10 7h6" />
          <path d="M10 10h6" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M4 20l4-1 10-10-3-3L5 16l-1 4Z" />
          <path d="M13 6l3 3" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3" />
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M10 10h4M10 14h4" />
        </svg>
      );
    case "graph2":
      return (
        <svg {...common}>
          <path d="M4 19h16" />
          <path d="M7 17V11" />
          <path d="M12 17V7" />
          <path d="M17 17V13" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2l1.2 4.2L17 7.5l-3.8 1.3L12 13l-1.2-4.2L7 7.5l3.8-1.3L12 2Z" />
          <path d="M19 12l.7 2.4L22 15l-2.3.6L19 18l-.7-2.4L16 15l2.3-.6L19 12Z" />
        </svg>
      );
    default:
      return null;
  }
}
