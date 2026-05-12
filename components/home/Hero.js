import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24">
      {/* Futuristic background layer */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft glows */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold opacity-15 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-[28rem] w-[28rem] rounded-full bg-olive opacity-12 blur-3xl" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(31,35,40,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,35,40,0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 backdrop-blur px-4 py-2 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-olive" />
              Nigeria-based • Global-ready delivery
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-semibold text-text leading-tight tracking-tight">
              Data, AI & Software
              <span className="block">Solutions That Drive Growth</span>
            </h1>

            <p className="mt-6 text-lg text-muted max-w-xl">
              We help Nigerian businesses turn data into decisions, automate intelligently,
              and build scalable digital systems.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Button href="/contact">Start a Conversation</Button>
              <Button variant="secondary" href="/case-studies">
                View Case Studies
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl">
              <div className="rounded-2xl border border-border bg-white/70 backdrop-blur p-5 shadow-soft">
                <div className="text-sm text-muted">Delivery</div>
                <div className="mt-1 text-lg font-semibold text-text">Execution-focused</div>
              </div>
              <div className="rounded-2xl border border-border bg-white/70 backdrop-blur p-5 shadow-soft">
                <div className="text-sm text-muted">Outcomes</div>
                <div className="mt-1 text-lg font-semibold text-text">Measurable impact</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* glow behind the panel for depth */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-panel opacity-70 blur-2xl" />

            <div className="rounded-3xl border border-border bg-white/60 backdrop-blur p-8 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wide text-olive">JForgeTech</div>
                  <div className="mt-1 text-lg font-semibold text-text">Solutions Overview</div>
                </div>
                <div className="rounded-full border border-border bg-white px-3 py-1 text-xs text-muted">
                  AI-ready
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-soft">📊 Analytics</div>
                <div className="bg-white rounded-xl p-6 shadow-soft">🤖 AI</div>
                <div className="bg-white rounded-xl p-6 shadow-soft">⚙️ Automation</div>
                <div className="bg-white rounded-xl p-6 shadow-soft">💻 Software</div>
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
