export default function SocialIcons() {
  const items = [
    { label: "LinkedIn", href: "#", icon: LinkedinIcon },
    { label: "X", href: "#", icon: XIcon },
    { label: "GitHub", href: "#", icon: GithubIcon },
    { label: "Facebook", href: "#", icon: FacebookIcon },
    { label: "Instagram", href: "#", icon: InstagramIcon },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="
            jf-hover group inline-flex h-10 w-10 items-center justify-center
            rounded-2xl border border-border bg-white/20 backdrop-blur
            shadow-soft transition
            hover:bg-white/30 hover:border-border
            dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10
          "
        >
          <Icon className="h-5 w-5 text-muted group-hover:text-olive transition dark:text-zinc-300" />
        </a>
      ))}
    </div>
  );
}

/* ===== Icons (inline SVG) ===== */
function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M6.5 9.2V19.5M6.5 6.5h.01M10.2 9.2v10.3M10.2 13.6c0-2.4 1.3-4.6 4-4.6 2.8 0 3.6 2 3.6 4.8v5.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.8 3.8h14.4a1 1 0 0 1 1 1v14.4a1 1 0 0 1-1 1H4.8a1 1 0 0 1-1-1V4.8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
      />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M7 17L17 7M9 7h5.2c1.5 0 2.3 1.7 1.4 2.9L9.8 17H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.8 3.8h14.4a1 1 0 0 1 1 1v14.4a1 1 0 0 1-1 1H4.8a1 1 0 0 1-1-1V4.8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
      />
    </svg>
  );
}

function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M9 19c-4 1.2-4-2-5-2m10 4v-3c0-.9.3-1.6.9-2-3 .3-6-.7-6-5a4 4 0 0 1 1.1-2.8 3.7 3.7 0 0 1 .1-2.8s.9-.3 2.8 1.1a9.5 9.5 0 0 1 5 0C19.9 5.3 20.8 5.6 20.8 5.6c.4.9.4 1.9.1 2.8A4 4 0 0 1 22 11.2c0 4.3-3 5.3-6 5 .6.4.9 1.2.9 2.1v2.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.8 3.8h14.4a1 1 0 0 1 1 1v14.4a1 1 0 0 1-1 1H4.8a1 1 0 0 1-1-1V4.8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
      />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M14 9h2V6.7c0-1.3-1.1-2.2-2.4-2.2H11c-1.7 0-3 1.4-3 3.1V9H6.5v3H8V19.5h3.2V12h2.5L14 9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.8 3.8h14.4a1 1 0 0 1 1 1v14.4a1 1 0 0 1-1 1H4.8a1 1 0 0 1-1-1V4.8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
      />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M8.2 8.2h7.6a2.6 2.6 0 0 1 2.6 2.6v7.6a2.6 2.6 0 0 1-2.6 2.6H8.2a2.6 2.6 0 0 1-2.6-2.6v-7.6a2.6 2.6 0 0 1 2.6-2.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.3a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16.7 7.3h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M4.8 3.8h14.4a1 1 0 0 1 1 1v14.4a1 1 0 0 1-1 1H4.8a1 1 0 0 1-1-1V4.8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
      />
    </svg>
  );
}
