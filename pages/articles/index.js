import Link from "next/link";
import SEO from "../../components/seo/SEO";
import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

import { sanityClient } from "../../lib/sanity";
import { articlesQuery } from "../../lib/queries";

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
  const featured =
    articles?.find((a) => a.featured) || articles?.[0];

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

          {/* Featured */}
          {featured && (
            <div className="mt-10 rounded-3xl border border-border bg-white/14 backdrop-blur p-7 md:p-10 shadow-card">
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

                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-text leading-tight">
                    {featured.title}
                  </h2>

                  <p className="mt-4 text-muted max-w-2xl">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex flex-col gap-3 shrink-0">
                  <Button
                    href={`/articles/${featured.slug}`}
                  >
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
          )}

          {/* Articles */}
          <div
            id="all-articles"
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {articles?.map((a) => (
              <article
                key={a._id}
                className="rounded-3xl border border-border bg-white/10 backdrop-blur p-6 shadow-soft transition hover:shadow-lg"
              >
                <div className="text-xs text-muted">
                  {a.category} •{" "}
                  {new Date(a.publishedAt).toLocaleDateString("en-US")}
                </div>

                <h3 className="mt-3 text-lg font-semibold text-text">
                  {a.title}
                </h3>

                <p className="mt-3 text-sm text-muted">
                  {a.excerpt}
                </p>

                <div className="mt-6">
                  <Link href={`/articles/${a.slug}`}>
                    <Button variant="secondary">
                      Read Article
                    </Button>
                  </Link>
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