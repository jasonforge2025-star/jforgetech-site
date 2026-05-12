"use client";

export default function Button({
  variant = "primary",
  href,
  children,
  onClick,
  type = "button",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-medium transition focus:outline-none focus:ring-4";

  const styles = {
    primary:
      "bg-gold text-white shadow-soft hover:bg-goldHover focus:ring-[rgba(201,162,77,0.35)]",
    secondary:
      "border border-border bg-transparent text-text hover:bg-panel hover:text-olive focus:ring-[rgba(122,128,102,0.25)]",
  };

  // If href exists → render link (but don't "navigate" if onClick is provided)
  if (href) {
    return (
      <a
        className={`${base} ${styles[variant]} ${className}`}
        href={href}
        onClick={(e) => {
          if (onClick) e.preventDefault();
          onClick?.(e);
        }}
      >
        {children}
      </a>
    );
  }

  // Otherwise → real button
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
