import Link from "next/link";
import { PortableText } from "next-sanity";
import SEO from "../../components/seo/SEO";
import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

import { sanityClient } from "../../lib/sanity";
import {
  caseStudiesQuery,
  caseStudyBySlugQuery,
} from "../../lib/queries";
import { urlFor } from "../../lib/image";

export async function getStaticPaths() {
  const caseStudies = await sanityClient.fetch(caseStudiesQuery);

  return {
    paths:
      caseStudies?.map((item) => ({
        params: { slug: item.slug },
      })) || [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const caseStudy = await sanityClient.fetch(caseStudyBySlugQuery, {
    slug: params.slug,
  });

  if (!caseStudy) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      caseStudy,
    },
    revalidate: 60,
  };
}

export default function CaseStudyDetailPage({ caseStudy }) {
  const caseStudyUrl = `https://jforgetech.com/case-studies/${caseStudy.slug}`;

  const caseStudyImage = caseStudy.coverImage
    ? urlFor(caseStudy.coverImage).width(1200).height(630).url()
    : "https://jforgetech.com/og-image.jpg";

  return (
    <>
      <SEO
        title={`${caseStudy.title} | JForgeTech Case Study`}
        description={caseStudy.excerpt}
        canonical={caseStudyUrl}
        image={caseStudyImage}
        type="article"
        publishedTime={caseStudy.publishedAt}
        modifiedTime={caseStudy.publishedAt}
        author="JForgeTech"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: caseStudy.title,
          description: caseStudy.excerpt,
          image: caseStudyImage,
          url: caseStudyUrl,
          datePublished: caseStudy.publishedAt,
          dateModified: caseStudy.publishedAt,
          author: {
            "@type": "Organization",
            name: "JForgeTech",
          },
          publisher: {
            "@type": "Organization",
            name: "JForgeTech",
            logo: {
              "@type": "ImageObject",
              url: "https://jforgetech.com/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": caseStudyUrl,
          },
        }}
      />

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(111,124,88,0.18),transparent_40%)]" />

        <Container>
          <article className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/10 px-4 py-2 text-xs text-muted backdrop-blur">
              <span className="font-medium text-text">
                {caseStudy.serviceType}
              </span>
              {caseStudy.industry && (
                <>
                  <span>•</span>
                  <span>{caseStudy.industry}</span>
                </>
              )}
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-text leading-tight tracking-tight">
              {caseStudy.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted leading-8 max-w-3xl">
              {caseStudy.excerpt}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted">
              {caseStudy.clientName && <span>{caseStudy.clientName}</span>}
              {caseStudy.publishedAt && (
                <>
                  <span>•</span>
                  <span>
                    {new Date(caseStudy.publishedAt).toLocaleDateString(
                      "en-US"
                    )}
                  </span>
                </>
              )}
            </div>

            {caseStudy.coverImage && (
              <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-white/10 shadow-card">
                <img
                  src={urlFor(caseStudy.coverImage).width(1600).url()}
                  alt={caseStudy.title}
                  className="h-full max-h-[520px] w-full object-cover"
                />
              </div>
            )}

            {(caseStudy.metrics?.length > 0 ||
              caseStudy.technologies?.length > 0) && (
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {caseStudy.metrics?.length > 0 && (
                  <div className="rounded-3xl border border-border bg-white/10 p-6 backdrop-blur shadow-soft">
                    <h2 className="text-xl font-semibold text-text">
                      Key Metrics
                    </h2>

                    <div className="mt-5 space-y-3">
                      {caseStudy.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-2xl border border-border bg-white/10 px-4 py-3 text-sm text-muted"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {caseStudy.technologies?.length > 0 && (
                  <div className="rounded-3xl border border-border bg-white/10 p-6 backdrop-blur shadow-soft">
                    <h2 className="text-xl font-semibold text-text">
                      Technologies
                    </h2>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-white/10 px-4 py-2 text-sm text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-14" />

            <div className="grid gap-6">
              {caseStudy.challenge && (
                <section className="rounded-3xl border border-border bg-white/10 p-6 md:p-8 backdrop-blur shadow-soft">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted">
                    Challenge
                  </p>

                  <p className="mt-4 text-lg leading-8 text-text/85">
                    {caseStudy.challenge}
                  </p>
                </section>
              )}

              {caseStudy.solution && (
                <section className="rounded-3xl border border-border bg-white/10 p-6 md:p-8 backdrop-blur shadow-soft">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted">
                    Solution
                  </p>

                  <p className="mt-4 text-lg leading-8 text-text/85">
                    {caseStudy.solution}
                  </p>
                </section>
              )}

              {caseStudy.outcome && (
                <section className="rounded-3xl border border-border bg-white/10 p-6 md:p-8 backdrop-blur shadow-soft">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted">
                    Outcome
                  </p>

                  <p className="mt-4 text-lg leading-8 text-text/85">
                    {caseStudy.outcome}
                  </p>
                </section>
              )}
            </div>

            {caseStudy.content && (
              <>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-14" />

                <div className="rounded-3xl border border-border bg-white/10 backdrop-blur p-6 md:p-10 shadow-card">
                  <div className="article-content text-text text-[17px] md:text-[18px] leading-[1.9]">
                    <PortableText value={caseStudy.content} />
                  </div>
                </div>
              </>
            )}

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-14" />

            <div className="rounded-3xl border border-border bg-white/14 backdrop-blur p-8 md:p-10 shadow-card">
              <p className="text-sm uppercase tracking-[0.25em] text-muted">
                Build Your Own Success Story
              </p>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-text">
                Let’s modernize your business systems.
              </h2>

              <p className="mt-4 text-muted max-w-2xl leading-relaxed">
                JForgeTech helps businesses design, automate, and improve the
                systems that power their operations.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact">Start a Project</Button>

                <Button href="/case-studies" variant="secondary">
                  Back to Case Studies
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/case-studies"
                className="text-sm font-medium text-text hover:text-gold transition"
              >
                ← Back to all case studies
              </Link>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}