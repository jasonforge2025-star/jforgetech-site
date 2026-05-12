"use client";

import { useState } from "react";
import Container from "./Container";
import Button from "../ui/Button";

export default function Navbar({ onContactClick = () => {} }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-border bg-white/18 backdrop-blur">
      <Container className="py-4 md:py-5">
        {/* TOP ROW */}
        <div className="flex items-center justify-between gap-3">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3 min-w-0">
            <span className="inline-flex h-12 w-12 md:h-16 md:w-16 flex-none items-center justify-center rounded-2xl border border-border bg-white/10 backdrop-blur shadow-soft ring-1 ring-black/5">
              <img
                src="/brand/logo.png"
                alt="JForgeTech"
                className="h-10 w-10 md:h-14 md:w-14 object-contain contrast-125"
                draggable={false}
              />
            </span>
            <span className="leading-tight min-w-0">
              <span className="block text-base md:text-lg font-semibold text-text truncate">
                JForgeTech
              </span>
              <span className="block text-[11px] md:text-xs text-muted -mt-0.5 truncate">
                Data • AI • Software
              </span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a className="hover:text-olive transition" href="/">
              Home
            </a>
            <a className="hover:text-olive transition" href="/about">
              About
            </a>
            <a className="hover:text-olive transition" href="/services">
              Services
            </a>
            <a className="hover:text-olive transition" href="/case-studies">
              Case Studies
            </a>
            <a className="hover:text-olive transition" href="/articles">
              Articles & Insights
            </a>
            <a className="hover:text-olive transition" href="/pricing">
              Pricing
            </a>

            {/* CONTACT → DOCK */}
            <button onClick={onContactClick} className="hover:text-olive transition">
              Contact
            </button>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <div className="hidden sm:block">
              <Button onClick={onContactClick}>Book a Call</Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-border bg-white/10 px-3 py-2 text-sm text-text hover:bg-white/15 transition"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-border bg-white/10 backdrop-blur">
            <nav className="flex flex-col p-3 text-sm text-muted">
              <a
                className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-olive transition"
                href="/"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
              <a
                className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-olive transition"
                href="/about"
                onClick={() => setOpen(false)}
              >
                About
              </a>
              <a
                className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-olive transition"
                href="/services"
                onClick={() => setOpen(false)}
              >
                Services
              </a>
              <a
                className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-olive transition"
                href="/case-studies"
                onClick={() => setOpen(false)}
              >
                Case Studies
              </a>
              <a
                className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-olive transition"
                href="/articles"
                onClick={() => setOpen(false)}
              >
                Articles
              </a>
              <a
                className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-olive transition"
                href="/pricing"
                onClick={() => setOpen(false)}
              >
                Pricing
              </a>

              {/* CONTACT → DOCK */}
              <button
                onClick={() => {
                  setOpen(false);
                  onContactClick();
                }}
                className="text-left rounded-xl px-3 py-2 hover:bg-white/10 hover:text-olive transition"
              >
                Contact
              </button>

              <div className="mt-2 px-1">
                <Button
                  onClick={() => {
                    setOpen(false);
                    onContactClick();
                  }}
                >
                  Book a Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
