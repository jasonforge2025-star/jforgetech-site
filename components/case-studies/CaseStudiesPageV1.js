import Image from "next/image";
import { useMemo, useState } from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";

const FILTERS = [
  "All",
  "Client Work",
  "Web Apps",
  "Corporate Websites",
  "Analytics Projects",
  "AI/Automation",
];

const CASE_STUDIES = [
  {
    type: "Client Work",
    category: "Analytics Infrastructure",
    title: "Enterprise Reporting & Executive Dashboards",
    client: "Afia Waziri Energy Ltd",
    summary:
      "Built executive-level reporting workflows and analytics dashboards to improve operational visibility and decision-making.",
    impact: [
      "Reduced reporting friction",
      "Cleaner executive summaries",
      "Faster operational reviews",
    ],
    stack: ["Power BI", "SQL", "Analytics", "Automation"],
  },

  {
    type: "Corporate Websites",
    category: "Digital Infrastructure",
    title: "Multi-platform Digital Presence Upgrade",
    client: "National Youth Council of Nigeria",
    summary:
      "Structured scalable digital infrastructure concepts for nationwide communication, media visibility, and organizational coordination.",
    impact: [
      "Improved digital structure",
      "Scalable organizational direction",
      "Centralized communication planning",
    ],
    stack: ["Next.js", "Cloudflare", "Architecture", "UI/UX"],
  },

  {
    type: "Web Apps",
    category: "Product Engineering",
    title: "Location Discovery & Social Experience Platform",
    client: "Appneen",
    logo: "/brand/appneen.png",
    link: "https://www.appneen.com",
    summary:
      "Developing a discovery-driven social experience platform focused on events, nightlife, locations, and user-generated engagement.",
    impact: [
      "Modern social architecture",
      "Location intelligence",
      "User-generated content workflows",
    ],
    stack: ["Laravel", "MySQL", "Cloudflare", "Video Systems"],
  },

  {
    type: "AI/Automation",
    category: "Business Automation",
    title: "Operational Workflow Simplification",
    client: "Barcopet Ltd",
    summary:
      "Improved operational visibility and internal reporting systems to simplify business workflows and reporting cycles.",
    impact: [
      "Cleaner workflow structure",
      "Faster access to information",
      "Reduced operational bottlenecks",
    ],
    stack: ["Dashboards", "Reporting", "Automation", "Data Systems"],
  },

  {
    type: "Analytics Projects",
    category: "Capstone Analytics",
    title: "HR Analytics & Workforce Insights Dashboard",
    client: "Analytics Portfolio Project",
    summary:
      "Built an HR analytics dashboard focused on employee retention, departmental performance, hiring trends, and workforce insights.",
    impact: [
      "Interactive executive dashboard",
      "Attrition trend analysis",
      "KPI-driven HR reporting",
    ],
    stack: ["Power BI", "Excel", "SQL", "Data Visualization"],
  },

  {
    type: "Analytics Projects",
    category: "Business Intelligence",
    title: "Retail Sales Performance Dashboard",
    client: "Analytics Portfolio Project",
    summary:
      "Designed a retail analytics dashboard to track sales trends, customer behavior, and product performance across multiple regions.",
    impact: [
      "Regional sales visibility",
      "Executive KPI tracking",
      "Improved reporting clarity",
    ],
    stack: ["Power BI", "SQL", "Forecasting", "Business Intelligence"],
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return CASE_STUDIES;

    return CASE_STUDIES.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-olive/10 blur-3xl" />
      </div>

      <Container>
        <section className="relative pt-6 sm:pt-8 lg:pt-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div className="pt-2 lg:pt-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs text-muted backdrop-blur-sm shadow-sm">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                Execution & portfolio
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-text leading-tight">
                Case Studies &
                <span className="block text-gold">Project Portfolio</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-muted">
                A showcase of enterprise systems, analytics platforms,
                automation workflows, web applications, and digital
                infrastructure projects across multiple industries.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button>Discuss a Project</Button>

                <Button variant="secondary" href="#case-study-grid">
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="relative lg:justify-self-end w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1720]/80 p-5 lg:p-6 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-gold/[0.08]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Delivery Snapshot
                      </div>

                      <div className="mt-1 text-xs text-white/50">
                        Systems • Analytics • Automation
                      </div>
                    </div>

                    <div className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-gold">
                      Live portfolio
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {[
                      ["6+", "Highlighted projects"],
                      ["AI + Data", "Core solution focus"],
                      ["Cloud-ready", "Modern deployment stack"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                      >
                        <div className="text-2xl font-semibold text-white">
                          {value}
                        </div>

                        <div className="mt-1 text-sm text-white/55">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="text-sm font-semibold text-white">
                      What this page demonstrates
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      JForgeTech builds more than websites — we engineer
                      business systems, analytics infrastructure, automation
                      workflows, dashboards, enterprise software, and scalable
                      digital experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -z-10 h-32 w-32 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-gold/30 bg-gold/10 text-gold"
                    : "border-white/10 bg-white/[0.05] text-muted hover:bg-white/[0.08]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section
          id="case-study-grid"
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {filteredProjects.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition-all duration-300 hover:border-gold/20 hover:bg-white/[0.07]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
              </div>

              <div className="relative">
                {item.logo && (
                  <div className="mb-5 flex h-14 w-fit items-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                    <Image
                      src={item.logo}
                      alt={`${item.client} logo`}
                      width={120}
                      height={32}
                      className="h-8 w-auto object-contain"
                      draggable={false}
                    />
                  </div>
                )}

                <div className="mb-4">
                  <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold">
                    {item.type}
                  </div>
                </div>

                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  {item.category}
                </div>

                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-text">
                  {item.title}
                </h2>

                <div className="mt-3 text-sm text-white/60">
                  {item.client}
                </div>

                <p className="mt-6 text-sm sm:text-base leading-7 text-muted">
                  {item.summary}
                </p>

                <div className="mt-8">
                  <div className="text-sm font-semibold text-text">
                    Key Outcomes
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.impact.map((impact) => (
                      <div
                        key={impact}
                        className="rounded-full border border-gold/10 bg-gold/[0.08] px-3 py-2 text-xs text-text"
                      >
                        {impact}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="text-sm font-semibold text-text">
                    Technologies & Systems
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <div
                        key={tech}
                        className="rounded-full bg-gold/10 px-3 py-2 text-xs text-gold"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {item.link && (
                  <div className="mt-7">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-xs font-medium text-gold transition hover:bg-gold/15"
                    >
                      View live project →
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 sm:p-10 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
            </div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-text">
                Need a System Built Properly?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
                From analytics infrastructure to AI-assisted systems and
                enterprise platforms — we help organizations design and deploy
                technology that actually improves operations.
              </p>

              <div className="mt-8 flex justify-center">
                <Button>Start a Consultation</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}