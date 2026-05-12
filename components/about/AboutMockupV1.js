import { useMemo } from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import RevealOnScroll from "../ui/RevealOnScroll";
import TestimonialsGlobe from "../home/TestimonialsGlobe";

/* ===========================
   Small helpers
============================= */
function MiniCard({ title, desc }) {
  return (
    <div className="rounded-3xl border border-border bg-white/12 backdrop-blur p-6 shadow-soft">
      <div className="text-sm font-semibold text-text">{title}</div>
      <div className="mt-2 text-sm text-muted">{desc}</div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="jf-ent-pill inline-flex shrink-0">{children}</span>
  );
}

/* ===========================
   Sections moved from Home
============================= */
function EnterpriseCapabilities() {
  const caps = [
    {
      title: "Data Foundations",
      desc: "Warehouses, pipelines, governance, and single-source-of-truth reporting.",
      bullets: ["Data modeling", "ETL/ELT pipelines", "Analytics governance"],
    },
    {
      title: "AI Systems",
      desc: "Practical AI that ships: copilots, classifiers, forecasts, and decision intelligence.",
      bullets: ["Use-case framing", "Model + evaluation", "Production deployment"],
    },
    {
      title: "Automation Architecture",
      desc: "Process automation that reduces cycle time and eliminates operational noise.",
      bullets: ["Workflow design", "n8n/Zapier", "Monitoring + alerting"],
    },
    {
      title: "Enterprise Software",
      desc: "Reliable apps and platforms built for uptime, performance, and maintainability.",
      bullets: ["Secure APIs", "Role-based access", "Scalable frontend"],
    },
  ];

  return (
    <section className="relative py-16" id="capabilities">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-text">What We Deliver</h2>
          <p className="mt-3 text-muted">
            Capability-led delivery for teams that care about reliability, governance, and outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caps.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-border bg-white/14 backdrop-blur p-6 sm:p-8 shadow-card"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-text">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted max-w-xl">{c.desc}</p>
                </div>
                <Pill>Capability</Pill>
              </div>

              <div className="mt-6 space-y-2">
                {c.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-white/25 text-text shrink-0">
                      ✓
                    </span>
                    <span className="min-w-0">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-xs text-muted">Architecture-first. Delivery-focused.</span>
                <a
                  href="/contact"
                  className="text-xs font-medium text-olive hover:text-oliveHover transition"
                >
                  Talk to a solutions architect →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustriesServed() {
  const industries = [
    { name: "Finance & Fintech", meta: "Risk, reporting, operational analytics" },
    { name: "Logistics & Mobility", meta: "Routing, SLA performance, automation" },
    { name: "Retail & FMCG", meta: "Demand, inventory, customer intelligence" },
    { name: "Public Sector", meta: "Dashboards, transparency, data systems" },
    { name: "Energy & Services", meta: "Operations, compliance, field reporting" },
    { name: "Healthcare", meta: "Process optimization, reporting, visibility" },
  ];

  return (
    <section className="relative py-16" id="industries">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-text">Industries Served</h2>
          <p className="mt-3 text-muted">
            Deep work across complex operations and fast decision cycles.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div
              key={i.name}
              className="rounded-3xl border border-border bg-white/12 backdrop-blur p-7 shadow-soft"
            >
              <div className="text-sm font-semibold text-text">{i.name}</div>
              <div className="mt-2 text-sm text-muted">{i.meta}</div>
              <div className="mt-4 jf-ent-divider" />
              <div className="mt-4 text-xs text-muted">
                Typical outputs: KPI frameworks, dashboards, automation workflows,
                production-ready systems.
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SecurityCompliance() {
  const items = [
    { title: "Least-privilege access", desc: "Role-based access controls and clear permission boundaries." },
    { title: "Audit-ready delivery", desc: "Documentation, change logs, and predictable deployment routines." },
    { title: "Data governance signals", desc: "Source-of-truth definitions and KPI lineage mapping." },
    { title: "Operational resilience", desc: "Monitoring, alerts, and failure-safe workflows." },
  ];

  return (
    <section className="relative py-16" id="security">
      <Container>
        <div className="rounded-3xl border border-border bg-white/14 backdrop-blur p-6 sm:p-8 shadow-card">
          <div className="grid gap-10 items-start lg:grid-cols-2">
            <div className="min-w-0">
              <div className="jf-ent-kicker">Security & Compliance</div>
              <h2 className="mt-2 text-4xl font-semibold text-text">Enterprise signals built-in.</h2>
              <p className="mt-4 text-muted max-w-xl">
                We design systems the way enterprises expect: clear ownership,
                controlled access, predictable change, and reporting leadership can trust.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["RBAC", "Monitoring", "Documentation", "Governance"].map((t) => (
                  <span key={t} className="jf-ent-chip">{t}</span>
                ))}
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Button href="/contact">Request Enterprise Consultation</Button>
                <Button variant="secondary" href="/services">Explore Capabilities</Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <div key={it.title} className="jf-ent-miniCard">
                  <div className="text-sm font-semibold text-text">{it.title}</div>
                  <div className="mt-2 text-sm text-muted">{it.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function OutcomesImpact() {
  const outcomes = [
    { stat: "30–60%", label: "reduction in reporting cycle time (typical)" },
    { stat: "2–6x", label: "faster operational decision cadence" },
    { stat: "Weeks", label: "to a usable dashboard + KPI governance" },
    { stat: "Production", label: "deployments with monitoring + handover" },
  ];

  return (
    <section className="relative py-16" id="impact">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-text">Outcomes, Not Hype</h2>
          <p className="mt-3 text-muted">
            We focus on measurable impact — the kind leadership teams actually feel in operations.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o) => (
            <div
              key={o.stat}
              className="rounded-3xl border border-border bg-white/12 backdrop-blur p-7 shadow-soft"
            >
              <div className="text-4xl font-semibold text-text leading-none">{o.stat}</div>
              <div className="mt-3 text-sm text-muted">{o.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-white/10 backdrop-blur p-7 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="min-w-0">
              <div className="text-sm font-semibold text-text">Executive-friendly delivery</div>
              <div className="mt-2 text-sm text-muted max-w-2xl">
                Clear scope, delivery milestones, documented handover, and reporting that stays consistent
                even as the business grows.
              </div>
            </div>
            <a href="/contact" className="jf-ent-ctaLink">Speak to us →</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SuccessStories() {
  const stories = useMemo(() => ([
    {
      title: "Finance Dashboard Overhaul",
      meta: "Finance • Data Analytics",
      stat: "60%",
      statLabel: "Reporting time reduced in 3 months",
      tools: ["Python", "SQL", "AWS"],
      cta: { label: "Start a Conversation", variant: "primary", href: "/contact" },
    },
    {
      title: "AI-Powered Customer Support",
      meta: "Logistics • AI Automation",
      stat: "24/7",
      statLabel: "Automated support system over 3 months",
      tools: ["Python", "Node.js"],
      cta: { label: "Talk to Us", variant: "secondary", href: "/contact" },
    },
  ]), []);

  return (
    <section className="relative py-16" id="case-studies">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-text">Proof of Delivery</h2>
          <p className="mt-3 text-muted">A few examples of what “done well” looks like.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-border bg-white/20 backdrop-blur p-6 sm:p-8 shadow-card"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-text">{s.title}</h3>
                  <div className="mt-1 text-sm text-muted">{s.meta}</div>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-white/25 px-3 py-1 text-xs text-muted">
                  Case
                </span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <div>
                  <div className="text-4xl font-semibold text-text leading-none">{s.stat}</div>
                  <div className="mt-2 text-sm text-muted max-w-xs">{s.statLabel}</div>
                </div>
                <div className="h-20 w-full sm:w-32 rounded-2xl border border-border bg-white/25" />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-border bg-white/25 px-3 py-1 text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Button href={s.cta.href} variant={s.cta.variant}>
                  {s.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   Premium About Page Layout
============================= */
export default function AboutMockupV1() {
  return (
    <div className="relative min-h-screen jf-about-bg overflow-x-hidden">
      <RevealOnScroll />
      <div className="jf-grid-layer" aria-hidden="true" />

      {/* ABOUT HERO */}
      <section className="relative pt-12 sm:pt-16 pb-10">
        <Container>
          <div className="grid gap-10 items-start lg:grid-cols-2">
            <div className="min-w-0">
              <div className="jf-ent-badge">About JForgeTech • Enterprise delivery • Outcomes</div>

              <h1 className="text-4xl sm:text-5xl font-semibold text-text leading-tight">
                We build systems leaders can trust.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-muted max-w-xl">
                JForgeTech helps organizations turn data complexity into operational clarity —
                through data foundations, dashboards, AI automation, and production-grade software.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Button href="/contact">Talk to a Solutions Architect</Button>
                <Button variant="secondary" href="#capabilities">
                  What we deliver
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Architecture-first", "Documentation", "Monitoring", "Handover-ready"].map((t) => (
                  <span key={t} className="jf-ent-chip">{t}</span>
                ))}
              </div>
            </div>

            {/* Right side: premium story panel */}
            <div className="rounded-3xl border border-border bg-white/14 backdrop-blur p-6 sm:p-8 shadow-card">
              <div className="text-sm font-semibold text-text">How we work</div>
              <p className="mt-2 text-sm text-muted">
                A simple delivery loop that keeps scope crisp and execution predictable.
              </p>

              <div className="mt-6 grid gap-4">
                <MiniCard
                  title="1) Discovery"
                  desc="Clarify the real outcome, map constraints, and define success metrics."
                />
                <MiniCard
                  title="2) Architecture"
                  desc="Design the system with governance, performance, and maintainability in mind."
                />
                <MiniCard
                  title="3) Implementation + Handover"
                  desc="Ship in milestones, document everything, and hand over with confidence."
                />
              </div>

              <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs text-muted">Discovery → Architecture → Implementation → Support</span>
                <a href="/contact" className="text-xs font-medium text-olive hover:text-oliveHover transition">
                  Start a project →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Narrative strip */}
      <section className="relative pb-6">
        <Container>
          <div className="rounded-3xl border border-border bg-white/10 backdrop-blur p-7 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-3">
              <MiniCard
                title="What we believe"
                desc="Good systems reduce noise. Great systems create decision clarity."
              />
              <MiniCard
                title="What we optimize"
                desc="Reliability, governance, performance, and adoption — not demos."
              />
              <MiniCard
                title="What you get"
                desc="Clear scope, milestones, documentation, and executive-ready reporting."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Moved sections (premium order) */}
      <EnterpriseCapabilities />
      <IndustriesServed />
      <SecurityCompliance />
      <OutcomesImpact />
      <SuccessStories />
      <TestimonialsGlobe />

      {/* Local CSS (About page needs these styles too) */}
      <style>{`
        html, body { max-width: 100%; overflow-x: hidden; }
        * { box-sizing: border-box; }

        .jf-about-bg{
          background:
            radial-gradient(1200px 700px at 15% 10%, rgba(201,162,77,0.18), transparent 60%),
            radial-gradient(900px 600px at 90% 0%, rgba(90,120,60,0.14), transparent 55%),
            radial-gradient(900px 700px at 50% 90%, rgba(255,255,255,0.08), transparent 55%),
            linear-gradient(180deg, rgba(10,12,16,0.03) 0%, rgba(10,12,16,0.02) 50%, rgba(10,12,16,0.03) 100%);
        }

        .jf-grid-layer{
          position:absolute; inset:0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(circle at 50% 20%, black 0%, transparent 70%);
          opacity: 0.28;
          pointer-events:none;
          z-index: 0;
        }

        .jf-ent-badge{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding: 10px 14px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          box-shadow: 0 18px 46px rgba(0,0,0,0.10), 0 0 0 2px rgba(201,162,77,0.08);
          font-size: 12px;
          color: rgba(20,20,18,0.78);
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .jf-ent-chip{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.12);
          padding: 7px 10px;
          font-size: 11px;
          color: rgba(20,20,18,0.72);
        }

        .jf-ent-divider{
          height: 1px;
          background: linear-gradient(to right, rgba(201,162,77,0.30), transparent);
          opacity: 0.9;
        }

        .jf-ent-kicker{
          display:inline-flex;
          border-radius: 9999px;
          border: 1px solid rgba(201,162,77,0.20);
          background: rgba(201,162,77,0.10);
          padding: 8px 12px;
          font-size: 12px;
          color: rgba(20,20,18,0.78);
        }

        .jf-ent-miniCard{
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.10);
          padding: 16px 16px;
          box-shadow: 0 16px 36px rgba(0,0,0,0.10);
        }

        .jf-ent-pill{
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.12);
          padding: 8px 12px;
          font-size: 12px;
          color: rgba(20,20,18,0.72);
          white-space: nowrap;
        }

        .jf-ent-ctaLink{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.14);
          padding: 10px 14px;
          font-size: 12px;
          color: rgba(20,20,18,0.78);
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .jf-ent-ctaLink:hover{
          transform: translateY(-1px);
          background: rgba(255,255,255,0.18);
          box-shadow: 0 14px 36px rgba(0,0,0,0.12), 0 0 0 2px rgba(201,162,77,0.12);
        }
      `}</style>
    </div>
  );
}
