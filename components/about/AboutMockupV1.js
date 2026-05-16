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
  return <span className="jf-ent-pill inline-flex shrink-0">{children}</span>;
}

/* ===========================
   Trust / Proof Strip
============================= */
function TrustedProofStrip() {
  const partners = [
    { name: "Appneen", logo: "/brand/appneen.png" },
    { name: "NYCN", logo: "/brand/nycn.jpg" },
    { name: "Afia Waziri", logo: "/brand/Afia-logo-1-1.png" },
    { name: "Barcopet", logo: "/brand/barcopet-logo.jpg" },
  ];

  return (
    <section className="relative py-10">
      <Container>
        <div className="rounded-3xl border border-border bg-white/12 backdrop-blur p-6 shadow-soft">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-xs text-muted">Selected work & trust signals</div>
              <h2 className="mt-2 text-2xl font-semibold text-text">
                Built around real projects, practical systems, and measurable delivery.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="flex h-20 items-center justify-center rounded-2xl border border-border bg-white/16 px-4 shadow-soft"
                  title={p.name}
                >
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   Core Technologies
============================= */
function CoreTechnologies() {
  const technologies = [
    "React",
    "Next.js",
    "Laravel",
    "Cloudflare",
    "Power BI",
    "Python",
    "SQL",
    "Node.js",
    "MySQL",
    "Automation",
  ];

  return (
    <section className="relative py-14">
      <Container>
        <div className="rounded-3xl border border-border bg-white/12 backdrop-blur p-7 shadow-soft">
          <div className="max-w-2xl">
            <div className="text-xs text-muted">Core Technologies</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-text">
              We use tools that support reliable delivery.
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-7 text-muted">
              Our stack supports dashboards, automation, business platforms, corporate websites,
              cloud deployment, and production-ready digital systems.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-white/18 px-4 py-2 text-sm text-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   Why Work With Us
============================= */
function WhyWorkWithUs() {
  const reasons = [
    {
      title: "Operational thinking",
      desc: "We design around how teams actually work, not just how interfaces look.",
    },
    {
      title: "Architecture-first delivery",
      desc: "Systems are planned for scale, maintainability, security, and handover.",
    },
    {
      title: "Clear communication",
      desc: "Scope, milestones, decisions, and trade-offs are kept visible throughout delivery.",
    },
    {
      title: "Practical technology",
      desc: "We focus on useful systems that reduce friction and improve decisions.",
    },
  ];

  return (
    <section className="relative py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-text">Why Organizations Work With Us</h2>
          <p className="mt-3 text-muted">
            Premium delivery is not only design. It is clarity, reliability, and execution.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-border bg-white/12 backdrop-blur p-6 shadow-soft"
            >
              <div className="text-sm font-semibold text-text">{reason.title}</div>
              <div className="mt-2 text-sm leading-6 text-muted">{reason.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===========================
   Capabilities
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
                <a href="/contact" className="text-xs font-medium text-olive hover:text-oliveHover transition">
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
    { name: "Public Sector", meta: "Digital infrastructure, dashboards, communication systems" },
    { name: "Education", meta: "School platforms, reporting, portals, automation" },
    { name: "Energy & Services", meta: "Operations, compliance, field reporting" },
    { name: "Hospitality", meta: "Booking systems, websites, customer workflows" },
    { name: "Startups & Products", meta: "MVPs, platforms, product architecture" },
    { name: "Retail & SMEs", meta: "Sales visibility, inventory reporting, automation" },
  ];

  return (
    <section className="relative py-16" id="industries">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-text">Industries Served</h2>
          <p className="mt-3 text-muted">
            We build for organizations with real workflows, reporting needs, and operational pressure.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div
              key={i.name}
              className="rounded-3xl border border-border bg-white/12 backdrop-blur p-7 shadow-soft"
            >
              <div className="text-sm font-semibold text-text">{i.name}</div>
              <div className="mt-2 text-sm text-muted">{i.meta}</div>
              <div className="mt-4 jf-ent-divider" />
              <div className="mt-4 text-xs text-muted">
                Typical outputs: dashboards, automation workflows, websites, portals,
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
    { stat: "Dashboards", label: "Executive-ready reporting and KPI visibility" },
    { stat: "Automation", label: "Reduced repetitive work and process bottlenecks" },
    { stat: "Platforms", label: "Production-grade systems for real users" },
    { stat: "Handover", label: "Documentation, support, and ownership clarity" },
  ];

  return (
    <section className="relative py-16" id="impact">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-text">Outcomes, Not Hype</h2>
          <p className="mt-3 text-muted">
            We focus on practical systems that improve visibility, speed, and operational control.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o) => (
            <div
              key={o.stat}
              className="rounded-3xl border border-border bg-white/12 backdrop-blur p-7 shadow-soft"
            >
              <div className="text-3xl font-semibold text-text leading-none">{o.stat}</div>
              <div className="mt-3 text-sm text-muted">{o.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SuccessStories() {
  const stories = useMemo(
    () => [
      {
        title: "Appneen Experience Platform",
        meta: "Web App • Location Discovery",
        stat: "Live",
        statLabel: "A discovery-focused platform for events, nightlife, locations, and user-generated engagement.",
        tools: ["Laravel", "MySQL", "Cloudflare", "Video Systems"],
        cta: { label: "View Portfolio", variant: "primary", href: "/case-studies" },
      },
      {
        title: "NYCN Digital Infrastructure",
        meta: "Corporate Site • Public Sector",
        stat: "Nationwide",
        statLabel: "Digital structure for communication, media visibility, and organizational coordination.",
        tools: ["Next.js", "Cloudflare", "Architecture", "UI/UX"],
        cta: { label: "Explore Work", variant: "secondary", href: "/case-studies" },
      },
    ],
    []
  );

  return (
    <section className="relative py-16" id="case-studies">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-text">Proof of Delivery</h2>
          <p className="mt-3 text-muted">Selected work that shows how we think, build, and deliver.</p>
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
                  Proof
                </span>
              </div>

              <div className="mt-6">
                <div className="text-4xl font-semibold text-text leading-none">{s.stat}</div>
                <div className="mt-2 text-sm text-muted max-w-xl">{s.statLabel}</div>
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

      <section className="relative pt-12 sm:pt-16 pb-10">
        <Container>
          <div className="grid gap-10 items-start lg:grid-cols-2">
            <div className="min-w-0">
              <div className="jf-ent-badge">About JForgeTech • Enterprise delivery • Outcomes</div>

              <h1 className="text-4xl sm:text-5xl font-semibold text-text leading-tight">
                We build systems leaders can trust.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-muted max-w-xl">
                JForgeTech helps organizations turn data complexity, manual workflows,
                and fragmented tools into reliable digital systems — through analytics,
                AI automation, corporate websites, web apps, and production-grade software.
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

            <div className="rounded-3xl border border-border bg-white/14 backdrop-blur p-6 sm:p-8 shadow-card">
              <div className="text-sm font-semibold text-text">How we work</div>
              <p className="mt-2 text-sm text-muted">
                A simple delivery loop that keeps scope crisp and execution predictable.
              </p>

              <div className="mt-6 grid gap-4">
                <MiniCard
                  title="1) Discovery"
                  desc="Clarify the business goal, map constraints, and define what success should look like."
                />
                <MiniCard
                  title="2) Architecture"
                  desc="Design the system with governance, performance, maintainability, and user adoption in mind."
                />
                <MiniCard
                  title="3) Implementation + Handover"
                  desc="Ship in milestones, document the system, and support adoption with clear ownership."
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

      <TrustedProofStrip />

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
                desc="Reliability, governance, performance, usability, and adoption — not just demos."
              />
              <MiniCard
                title="What you get"
                desc="Clear scope, milestones, documentation, deployment support, and executive-ready reporting."
              />
            </div>
          </div>
        </Container>
      </section>

      <WhyWorkWithUs />
      <EnterpriseCapabilities />
      <CoreTechnologies />
      <IndustriesServed />
      <SecurityCompliance />
      <OutcomesImpact />
      <SuccessStories />
      <TestimonialsGlobe />

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