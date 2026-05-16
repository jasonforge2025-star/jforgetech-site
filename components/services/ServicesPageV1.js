import ServicesFAQ from "./ServicesFAQ";
import Container from "../layout/Container";
import Button from "../ui/Button";
import TestimonialsGlobe from "../home/TestimonialsGlobe";

const SERVICES = [
  {
    title: "AI & Automation",
    desc: "Workflow automation, AI assistants, smart routing, alerts, and process optimization.",
    points: [
      "n8n/Zapier workflows",
      "AI copilots",
      "Lead routing",
      "Monitoring",
    ],
    outcomes: [
      "Reduced repetitive manual tasks",
      "Faster operational response",
      "Improved process visibility",
    ],
    proof: "Used in workflow automation and operational systems.",
  },

  {
    title: "Data & Analytics",
    desc: "Dashboards, KPI systems, reporting pipelines, decision briefs, and business intelligence.",
    points: [
      "Executive dashboards",
      "SQL/Python analytics",
      "Data cleaning",
      "KPI governance",
    ],
    outcomes: [
      "Faster reporting cycles",
      "Centralized KPI visibility",
      "Better decision support",
    ],
    proof: "Applied in executive reporting and analytics workflows.",
  },

  {
    title: "Enterprise Software",
    desc: "Custom platforms, portals, business apps, APIs, and scalable frontend systems.",
    points: [
      "Web apps",
      "Client portals",
      "Secure APIs",
      "Role-based access",
    ],
    outcomes: [
      "Scalable business operations",
      "Centralized digital workflows",
      "Improved user management",
    ],
    proof: "Includes platforms like Appneen and enterprise portals.",
  },

  {
    title: "Cloud & Infrastructure",
    desc: "Deployment, hosting architecture, performance, reliability, and production handover.",
    points: [
      "Cloud deployment",
      "CI/CD",
      "Performance tuning",
      "Documentation",
    ],
    outcomes: [
      "Reliable deployments",
      "Better system performance",
      "Production-ready infrastructure",
    ],
    proof: "Cloudflare-focused deployment and optimization workflows.",
  },
];

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "Laravel",
  "Cloudflare",
  "Power BI",
  "Python",
  "SQL",
  "Node.js",
  "MySQL",
  "PostgreSQL",
];

const INDUSTRIES = [
  "Government",
  "Education",
  "Oil & Gas",
  "Hospitality",
  "Startups",
  "Media",
  "Corporate Organizations",
  "Events & Lifestyle",
];

export default function ServicesPageV1() {
  return (
    <div className="relative min-h-screen overflow-x-hidden jf-services-bg">
      <div className="jf-services-grid" aria-hidden="true" />

      {/* HERO */}
      <section className="relative pt-16 pb-14">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs text-muted backdrop-blur-xl">
              JForgeTech Services
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight text-text">
              AI, data, automation and software systems built for serious
              operations.
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-8 text-muted">
              We help teams move from scattered tools and manual processes to
              reliable digital systems that improve speed, visibility, and
              decision-making.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button href="/contact">Request Consultation</Button>

              <Button variant="secondary" href="#capabilities">
                View Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="capabilities" className="relative py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.12)]"
              >
                <h2 className="text-2xl font-semibold text-text">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {service.desc}
                </p>

                <div className="mt-6 grid gap-2">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-text">
                        ✓
                      </span>

                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="text-sm font-semibold text-text">
                    Business Outcomes
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-full border border-gold/10 bg-gold/[0.08] px-3 py-2 text-xs text-text"
                      >
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold">
                    Recent Applications
                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {service.proof}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DELIVERY */}
      <section className="relative py-14">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 sm:p-8 backdrop-blur-2xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-xs text-muted">Delivery Method</div>

                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-text">
                  A predictable process from idea to production.
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-7 text-muted">
                  We do not just build screens. We clarify the business outcome,
                  design the architecture, ship in milestones, document the
                  system, and support handover.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  "Discovery",
                  "Architecture",
                  "Implementation",
                  "Handover & Support",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <div className="text-sm font-semibold text-text">
                      {index + 1}. {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TECHNOLOGIES */}
      <section className="relative py-14">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 sm:p-8 backdrop-blur-2xl">
            <div className="max-w-2xl">
              <div className="text-xs text-muted">Technologies & Stack</div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-text">
                Modern technologies for scalable systems.
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-7 text-muted">
                We use reliable modern frameworks, analytics platforms, cloud
                infrastructure, and backend systems to deliver production-ready
                solutions.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {TECHNOLOGIES.map((tech) => (
                <div
                  key={tech}
                  className="rounded-full border border-gold/10 bg-gold/[0.08] px-4 py-2 text-sm text-text"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-14">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 sm:p-8 backdrop-blur-2xl">
            <div className="max-w-2xl">
              <div className="text-xs text-muted">Industries We Support</div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-text">
                Solutions designed for real operational environments.
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-7 text-muted">
                Our systems and workflows are adaptable across industries with
                different operational, reporting, and infrastructure needs.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {INDUSTRIES.map((industry) => (
                <div
                  key={industry}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-text"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <TestimonialsGlobe />

      <Container>
        <ServicesFAQ />
      </Container>

      {/* CTA */}
      <section className="relative py-16">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.09] p-8 text-center backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-text">
              Ready to build a system that works beyond the demo?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted max-w-2xl mx-auto">
              Let’s design something practical, scalable, and useful for your
              team.
            </p>

            <div className="mt-7">
              <Button href="/contact">Start a Project</Button>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        .jf-services-bg{
          background:
            radial-gradient(900px 600px at 15% 5%, rgba(201,162,77,0.16), transparent 60%),
            radial-gradient(900px 600px at 85% 10%, rgba(110,127,82,0.14), transparent 55%),
            linear-gradient(180deg, rgba(10,12,16,0.02), rgba(10,12,16,0.04));
        }

        .jf-services-grid{
          position:absolute;
          inset:0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size:52px 52px;
          mask-image: radial-gradient(circle at 50% 10%, black 0%, transparent 70%);
          opacity:0.22;
          pointer-events:none;
        }
      `}</style>
    </div>
  );
}