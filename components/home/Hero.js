import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 sm:py-24">
      {/* Lightweight background layer */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-olive/10 blur-2xl" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(31,35,40,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,35,40,0.16) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="grid gap-12 items-center md:grid-cols-2">
          {/* Left */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-xs sm:text-sm text-muted shadow-sm">
              <span className="h-2 w-2 rounded-full bg-olive" />
              Nigeria-based • Global-ready delivery
            </div>

            <h1 className="mt-6 text-[2.65rem] sm:text-5xl md:text-6xl font-semibold text-text leading-[1.05] tracking-[-0.04em]">
              Data, AI & Software
              <span className="block">Solutions That Drive Growth</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] sm:text-lg leading-7 sm:leading-8 text-muted">
              We help Nigerian businesses turn data into decisions, automate intelligently,
              and build scalable digital systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/contact">Start a Conversation</Button>
              <Button variant="secondary" href="/case-studies">
                View Case Studies
              </Button>
            </div>

            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="rounded-2xl border border-border bg-white/75 p-5 shadow-sm">
                <div className="text-sm text-muted">Delivery</div>
                <div className="mt-1 text-lg font-semibold text-text">
                  Execution-focused
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white/75 p-5 shadow-sm">
                <div className="text-sm text-muted">Outcomes</div>
                <div className="mt-1 text-lg font-semibold text-text">
                  Measurable impact
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-panel/50 blur-xl" />

            <div className="rounded-3xl border border-border bg-white/75 p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wide text-olive">
                    JForgeTech
                  </div>
                  <div className="mt-1 text-lg font-semibold text-text">
                    Solutions Overview
                  </div>
                </div>

                <div className="rounded-full border border-border bg-white px-3 py-1 text-xs text-muted">
                  AI-ready
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5">
                {["📊 Analytics", "🤖 AI", "⚙️ Automation", "💻 Software"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-border bg-white p-5 text-sm sm:text-base shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-white px-5 py-4">
                <div className="text-sm text-muted">Typical engagement</div>
                <div className="mt-1 font-medium text-text">
                  Discovery → Build → Launch → Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}