import SEO from "../components/seo/SEO";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

export default function ArticlesPage() {
  const featured = {
    title: "How Enterprise AI Actually Delivers ROI",
    excerpt:
      "Most AI initiatives fail because they focus on models instead of systems. Here’s what works in production: clear use cases, governance, data quality, and measurable outcomes.",
    tag: "AI Strategy",
    date: "Feb 2026",
    bullets: [
      "How to pick the right use case (and kill weak ones early)",
      "What “production-ready” really means for AI teams",
      "A simple ROI framework executives can sign off on",
    ],
    href: "#",
  };

  const articles = [
    {
      title: "How Enterprise AI Actually Delivers ROI",
      excerpt:
        "Most AI initiatives fail because they focus on models instead of systems. Here’s what works in production.",
      tag: "AI Strategy",
      date: "Feb 2026",
      href: "#",
    },
    {
      title: "Building Scalable Data Foundations",
      excerpt:
        "Dashboards don’t create insight. A reliable data architecture does.",
      tag: "Data Engineering",
      date: "Jan 2026",
      href: "#",
    },
    {
      title: "Automation That Saves Millions",
      excerpt:
        "Workflow automation isn’t about speed — it’s about removing human bottlenecks.",
      tag: "Automation",
      date: "Dec 2025",
      href: "#",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",

    name: "JForgeTech Articles & Insights",

    url: "https://www.jforgetech.com/articles",

    description:
      "Insights on AI, software engineering, analytics, automation, infrastructure, and digital transformation.",

    publisher: {
      "@type": "Organization",
      name: "JForgeTech",
      url: "https://www.jforgetech.com",
    },
  };

  return (
    <>
      <SEO
        title="Articles & Insights | JForgeTech"
        description="Insights on AI, automation, software engineering, analytics, cloud systems, and digital transformation from JForgeTech."
        canonical="https://www.jforgetech.com/articles"
        keywords="AI articles Nigeria, software engineering insights, automation systems, analytics infrastructure, enterprise AI"
        schema={schemaData}
        breadcrumbs={[
          {
            name: "Home",
            url: "https://www.jforgetech.com",
          },
          {
            name: "Articles",
            url: "https://www.jforgetech.com/articles",
          },
        ]}
        faq={[
          {
            question: "What topics does JForgeTech write about?",
            answer:
              "JForgeTech publishes insights on AI systems, automation, software engineering, analytics, cloud infrastructure, and digital transformation.",
          },
          {
            question: "Are the articles focused on business or technical audiences?",
            answer:
              "The articles are designed for both business decision-makers and technical professionals interested in scalable digital systems.",
          },
        ]}
      />

      <section className="py-20">
        <Container>
          {/* Header */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-text">
              Articles & Insights
            </h1>

            <p className="mt-4 text-muted">
              Strategic thinking on data, AI, software, and digital
              transformation — built for decision-makers and technical leaders.
            </p>
          </div>

          {/* Featured Article */}
          <div className="mt-10 rounded-3xl border border-border bg-white/14 backdrop-blur p-7 md:p-10 shadow-card">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/10 px-3 py-1 text-xs text-muted">
                  <span className="font-medium text-text">
                    Featured Insight
                  </span>

                  <span>•</span>

                  <span>
                    {featured.tag} • {featured.date}
                  </span>
                </div>

                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-text leading-tight">
                  {featured.title}
                </h2>

                <p className="mt-4 text-muted max-w-2xl">
                  {featured.excerpt}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-1 md:grid-cols-3 max-w-3xl">
                  {featured.bullets.map((b) => (
                    <div
                      key={b}
                      className="rounded-2xl border border-border bg-white/10 backdrop-blur px-4 py-4 text-sm text-muted"
                    >
                      <div className="flex items-start gap-2">
                        <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-white/20 text-text shrink-0">
                          ✓
                        </span>

                        <span className="min-w-0">{b}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <Button href={featured.href}>Read Featured</Button>

                <Button variant="secondary" href="#all-articles">
                  Browse all
                </Button>

                <div className="mt-2 text-xs text-muted max-w-[22rem]">
                  Want these insights applied to your org? We can scope,
                  design, and ship the system — not just the idea.
                </div>
              </div>
            </div>
          </div>

          {/* Article Grid */}
          <div
            id="all-articles"
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {articles.map((a, i) => (
              <article
                key={i}
                className="rounded-3xl border border-border bg-white/10 backdrop-blur p-6 shadow-soft transition hover:shadow-lg"
              >
                <div className="text-xs text-muted">
                  {a.tag} • {a.date}
                </div>

                <h3 className="mt-3 text-lg font-semibold text-text">
                  {a.title}
                </h3>

                <p className="mt-3 text-sm text-muted">
                  {a.excerpt}
                </p>

                <div className="mt-6">
                  <Button variant="secondary" href={a.href}>
                    Read Article
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h4 className="text-xl font-semibold text-text">
              Need expert guidance for your organization?
            </h4>

            <div className="mt-6">
              <Button href="/contact">
                Request Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}