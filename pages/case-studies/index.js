import Link from "next/link";
import SEO from "../../components/seo/SEO";
import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

import { sanityClient } from "../../lib/sanity";
import { caseStudiesQuery } from "../../lib/queries";
import { urlFor } from "../../lib/image";

export async function getStaticProps() {
  const caseStudies = await sanityClient.fetch(caseStudiesQuery);

  return {
    props: {
      caseStudies,
    },
    revalidate: 60,
  };
}

export default function CaseStudiesPage({ caseStudies = [] }) {
  const featured =
    caseStudies?.find((item) => item.featured) || caseStudies?.[0];

  return (
    <>
      <SEO
        title="Case Studies | JForgeTech"
        description="Explore JForgeTech case studies across software development, AI, automation, data analytics, and business technology."
        canonical="https://jforgetech.com/case-studies"
        keywords="JForgeTech case studies, software projects Nigeria, AI automation case studies, data analytics projects"
      />

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(111,124,88,0.18),transparent_40%)]" />

        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-border bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted backdrop-blur">
              Proof of Work
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-text leading-tight tracking-tight">
              Case Studies
            </h1>

            <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl">
              A growing library of business technology projects, showing how
              strategy, software, automation, and data come together to solve
              real operational problems.
            </p>
          </div>

          {featured && (
            <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-white/14 backdrop-blur shadow-card">
              {featured.coverImage && (
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={urlFor(featured.coverImage).width(1600).url()}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/50 to-transparent" />
                </div>
              )}

              <div className="p-7 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/10 px-3 py-1 text-xs text-muted">
                      <span className="font-medium text-text">
                        Featured Case Study
                      </span>
                      <span>•</span>
                      <span>{featured.serviceType}</span>
                    </div>

                    <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-text leading-tight">
                      {featured.title}
                    </h2>

                    <p className="mt-5 text-muted max-w-2xl leading-relaxed">
                      {featured.excerpt}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
                      {featured.clientName && <span>{featured.clientName}</span>}
                      {featured.industry && <span>• {featured.industry}</span>}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Button href={`/case-studies/${featured.slug}`}>
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

          {caseStudies.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((item) => (
                <article
                  key={item._id}
                  className="group overflow-hidden rounded-3xl border border-border bg-white/10 backdrop-blur shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-white/14 hover:shadow-card"
                >
                  {item.coverImage && (
                    <div className="relative h-[220px] overflow-hidden">
                      <img
                        src={urlFor(item.coverImage)
                          .width(900)
                          .height(600)
                          .url()}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/90 via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="text-xs text-muted">
                      {item.serviceType} {item.industry ? `• ${item.industry}` : ""}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-text leading-snug group-hover:text-gold transition">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="mt-6">
                      <Link
                        href={`/case-studies/${item.slug}`}
                        className="text-sm font-medium text-text hover:text-gold transition"
                      >
                        View Case Study →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-16 rounded-3xl border border-border bg-white/10 p-10 text-center backdrop-blur">
              <h2 className="text-2xl font-semibold text-text">
                Case studies coming soon
              </h2>

              <p className="mt-3 text-muted">
                Add case studies from Sanity Studio and they will appear here
                automatically.
              </p>
            </div>
          )}

          <div className="mt-20 rounded-3xl border border-border bg-white/14 backdrop-blur p-8 md:p-10 text-center shadow-card">
            <p className="text-sm uppercase tracking-[0.25em] text-muted">
              Ready to Build?
            </p>

            <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-text">
              Let’s create your next success story.
            </h3>

            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Work with JForgeTech to design, automate, and modernize the
              systems behind your business.
            </p>

            <div className="mt-7">
              <Button href="/contact">Start a Project</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}