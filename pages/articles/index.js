import Link from "next/link";
import SEO from "../../components/seo/SEO";
import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";
import ReadingProgress from "../../components/blog/ReadingProgress";

import { sanityClient } from "../../lib/sanity";
import { articlesQuery } from "../../lib/queries";
import { urlFor } from "../../lib/image";

export async function getStaticProps() {
  const articles = await sanityClient.fetch(articlesQuery);

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}

export default function ArticlesPage({ articles }) {
  const featured = articles?.find((a) => a.featured) || articles?.[0];

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
      />

      <ReadingProgress />

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(111,124,88,0.18),transparent_40%)]" />

        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-border bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted backdrop-blur">
              JForgeTech Journal
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-text leading-tight tracking-tight">
              Articles & Insights
            </h1>

            <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl">
              Strategic thinking on data, AI, software, automation, and digital
              transformation — built for decision-makers and technical leaders.
            </p>
          </div>

          {featured && (
            <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-white/14 backdrop-blur shadow-card">
              {featured.coverImage && (
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={urlFor(featured.coverImage)
                      .width(1600)
                      .url()}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/50 to-transparent" />
                </div>
              )}

              <div className="p-7 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/10 px-3 py-1 text-xs text-muted">
                      <span className="font-medium text-text">
                        Featured Insight
                      </span>

                      <span>•</span>

                      <span>
                        {featured.category} •{" "}
                        {new Date(
                          featured.publishedAt
                        ).toLocaleDateString("en-US")}
                      </span>
                    </div>

                    <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-text leading-tight">
                      {featured.title}
                    </h2>

                    <p className="mt-5 text-muted max-w-2xl leading-relaxed">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 shrink-0">
                    <Button href={`/articles/${featured.slug}`}>
                      Read Featured
                    </Button>

                    <Button
                      variant="secondary"
                      href="#all-articles"
                    >
                      Browse all
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-white/10 p-6 backdrop-blur shadow-soft">
              <p className="text-3xl font-semibold text-text">AI</p>

              <p className="mt-2 text-sm text-muted">
                Practical thinking for smarter business systems.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white/10 p-6 backdrop-blur shadow-soft">
              <p className="text-3xl font-semibold text-text">
                Data
              </p>

              <p className="mt-2 text-sm text-muted">
                Analytics, reporting, dashboards, and decision
                intelligence.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white/10 p-6 backdrop-blur shadow-soft">
              <p className="text-3xl font-semibold text-text">
                Systems
              </p>

              <p className="mt-2 text-sm text-muted">
                Software, automation, infrastructure, and
                transformation.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

          <div
            id="all-articles"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {articles?.map((a) => (
              <article
                key={a._id}
                className="group overflow-hidden rounded-3xl border border-border bg-white/10 backdrop-blur shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-white/14 hover:shadow-card"
              >
                {a.coverImage && (
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={urlFor(a.coverImage)
                        .width(900)
                        .height(600)
                        .url()}
                      alt={a.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/90 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  <div className="text-xs text-muted">
                    {a.category} •{" "}
                    {new Date(a.publishedAt).toLocaleDateString(
                      "en-US"
                    )}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-text leading-snug group-hover:text-gold transition">
                    {a.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {a.excerpt}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={`/articles/${a.slug}`}
                      className="text-sm font-medium text-text hover:text-gold transition"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-border bg-white/14 backdrop-blur p-8 md:p-10 text-center shadow-card">
            <p className="text-sm uppercase tracking-[0.25em] text-muted">
              Build Smarter
            </p>

            <h4 className="mt-4 text-2xl md:text-3xl font-semibold text-text">
              Need expert guidance for your organization?
            </h4>

            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Let JForgeTech help you design better systems,
              automate workflows, and turn business data into
              practical decisions.
            </p>

            <div className="mt-7">
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