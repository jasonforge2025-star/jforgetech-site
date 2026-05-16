"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./Container";
import Button from "../ui/Button";

export default function Navbar({ onContactClick = () => {} }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });

        ticking = true;
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const openContact = () => {
    setOpen(false);
    onContactClick();
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Articles", href: "/articles" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${
        scrolled ? "pt-2" : "pt-3"
      }`}
    >
      <Container>
        <div
          className={`relative overflow-hidden rounded-[1.75rem] border transition-all duration-200 will-change-transform ${
            scrolled
              ? "border-white/12 bg-[#0f1720]/82 backdrop-blur-md shadow-lg"
              : "border-white/8 bg-[#0f1720]/65 backdrop-blur-sm shadow-md"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-gold/[0.04]" />

          <div
            className={`relative flex items-center justify-between gap-3 px-3 sm:px-5 transition-all duration-200 ${
              scrolled ? "py-2.5" : "py-3.5 md:py-4"
            }`}
          >
            <a
              href="/"
              className="flex items-center gap-3 min-w-0"
              onClick={closeMenu}
            >
              <span
                className={`inline-flex flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] ring-1 ring-white/5 transition-all duration-200 ${
                  scrolled
                    ? "h-11 w-11 md:h-12 md:w-12"
                    : "h-12 w-12 md:h-14 md:w-14"
                }`}
              >
                <Image
                  src="/brand/logo.png"
                  alt="JForgeTech"
                  width={48}
                  height={48}
                  className={`object-contain contrast-125 transition-all duration-200 ${
                    scrolled
                      ? "h-9 w-9 md:h-10 md:w-10"
                      : "h-10 w-10 md:h-12 md:w-12"
                  }`}
                  draggable={false}
                />
              </span>

              <span className="leading-tight min-w-0">
                <span className="block text-base md:text-lg font-semibold text-white truncate">
                  JForgeTech
                </span>

                <span className="block text-[11px] md:text-xs text-white/55 -mt-0.5 truncate">
                  Data • AI • Software
                </span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-7 text-sm text-white/80">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-white/80 hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Button onClick={openContact}>Book a Call</Button>
              </div>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition-colors duration-200 hover:bg-white/[0.1]"
              >
                <span className="relative h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                      open ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />

                  <span
                    className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  <span
                    className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                      open ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-200 ${
              open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="border-t border-white/10 px-3 pb-3 pt-2 text-sm text-white/75">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-white/80 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-xs text-white/55">
                  Need a serious system built?
                </div>

                <div className="mt-3">
                  <Button onClick={openContact}>Book a Call</Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}