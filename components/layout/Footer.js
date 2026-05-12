// components/layout/Footer.tsx
import React from "react";
import Container from "./Container";
import Button from "../ui/Button";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-border bg-white/18 backdrop-blur">
      {/* top hairline glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-90" />

      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4 text-sm text-muted">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white/10 shadow-soft ring-1 ring-black/5">
                <img
                  src="/brand/logo.png"
                  alt="JForgeTech"
                  className="h-10 w-10 object-contain contrast-125"
                  draggable={false}
                />
              </span>

              <div>
                <div className="font-semibold text-text">JForgeTech</div>
                <div className="text-xs text-muted -mt-0.5">
                  Data • AI • Software
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-xs leading-relaxed">
              We help businesses turn data into decisions, automate intelligently,
              and build scalable digital systems.
            </p>

            <div className="mt-4 space-y-2">
              <div>
                📧{" "}
                <a
                  href="mailto:info@jforgetech.com"
                  className="hover:text-olive transition"
                >
                  info@jforgetech.com
                </a>
              </div>
              <div>
                📞{" "}
                <a
                  href="tel:+2348035081118"
                  className="hover:text-olive transition"
                >
                  +234 803 508 1118
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="font-semibold text-text mb-3">
              Office Address
            </div>
            <p className="leading-relaxed">
              No 2 Owen&apos;s Close, Off Ogbonna Okocha Street,
              <br />
              Opp. No 98 COE / Iwofe Road,
              <br />
              Rumuolumeni, Obio/Akpor,
              <br />
              Rivers State, Port Harcourt, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold text-text mb-3">Quick Links</div>
            <nav className="flex flex-col gap-2">
              <a href="/services" className="hover:text-olive transition">
                Services
              </a>
              <a href="/case-studies" className="hover:text-olive transition">
                Case Studies
              </a>
              <a href="/blog" className="hover:text-olive transition">
                Blog
              </a>
              <a href="/about" className="hover:text-olive transition">
                About
              </a>
              <a href="/contact" className="hover:text-olive transition">
                Contact
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <div className="font-semibold text-text mb-3">
              Stay Updated
            </div>
            <p className="mb-3">
              Get insights on data, AI, and digital transformation.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-xl border border-border bg-white/20 px-4 py-2 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              <Button variant="secondary" href="#">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted">

            {/* Left */}
            <div>
              © {year}{" "}
              <span className="font-medium text-text">JForgeTech</span>. All rights reserved.
            </div>

            {/* Center */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-2">
              <span>Powered by</span>
              <span className="font-semibold text-gold">Jason Forge Ltd</span>
            </div>

            {/* Right - Large glowing pill badge */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-white/20 px-5 py-3 text-sm font-semibold text-text transition-all duration-300 hover:border-gold hover:shadow-[0_0_26px_rgba(212,175,55,0.35)]"
              aria-label="Google Certified Badge"
            >
              <img
                src="/proffesional_badges/google badge.png"
                alt="Google Certified"
                className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
              <span>Google Certified</span>
            </a>

          </div>
        </div>
      </Container>
    </footer>
  );
}
