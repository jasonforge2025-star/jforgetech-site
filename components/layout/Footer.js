import Image from "next/image";
import React from "react";
import Container from "./Container";
import Button from "../ui/Button";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 overflow-hidden border-t border-white/10 bg-white/[0.08] backdrop-blur-2xl">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-90" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-olive/10 blur-3xl" />
      </div>

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 xl:grid-cols-5 text-sm text-muted">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white/10 shadow-soft ring-1 ring-black/5">
                <Image
                    src="/brand/logo.png"
                    alt="JForgeTech"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain contrast-125"
                    draggable={false}
                  />
              </span>

              <div>
                <div className="font-semibold text-text">
                  JForgeTech
                </div>

                <div className="text-xs text-muted -mt-0.5">
                  Data • AI • Software
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-xs leading-relaxed">
              We help businesses turn data into decisions, automate
              intelligently, and build scalable digital systems.
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
            <div className="font-semibold text-text mb-3">
              Quick Links
            </div>

            <nav className="flex flex-col gap-2">
              <a href="/" className="hover:text-olive transition">
                Home
              </a>

              <a href="/services" className="hover:text-olive transition">
                Services
              </a>

              <a
                href="/case-studies"
                className="hover:text-olive transition"
              >
                Case Studies
              </a>

              <a href="/articles" className="hover:text-olive transition">
                Articles & Insights
              </a>

              <a href="/about" className="hover:text-olive transition">
                About
              </a>

              <a href="/contact" className="hover:text-olive transition">
                Contact
              </a>
            </nav>
          </div>

          {/* Technologies */}
          <div>
            <div className="font-semibold text-text mb-3">
              Technologies
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "AI",
                "Automation",
                "Cloudflare",
                "Power BI",
                "SQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="font-semibold text-text mb-3">
              Stay Updated
            </div>

            <p className="mb-3">
              Get insights on data, AI, automation, and digital
              transformation.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-text placeholder:text-muted backdrop-blur-xl transition focus:outline-none focus:ring-2 focus:ring-gold/40"
              />

              <Button variant="secondary" href="#">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted">
            <div>
              © {year}{" "}
              <span className="font-medium text-text">
                JForgeTech
              </span>. All rights reserved.
            </div>

            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-2">
              <span>Powered by</span>

              <span className="font-semibold text-gold">
                Jason Forge Ltd
              </span>
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-text backdrop-blur-xl transition-all duration-300 hover:border-gold hover:bg-white/[0.12] hover:shadow-[0_0_26px_rgba(212,175,55,0.35)]"
              aria-label="Google Certified Badge"
            >
              <Image
                  src="/proffesional_badges/google badge.png"
                  alt="Google Certified"
                  width={120}
                  height={28}
                className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
      style={{ width: "auto", height: "auto" }} 
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