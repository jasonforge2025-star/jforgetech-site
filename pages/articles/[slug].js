import Link from "next/link";
import { PortableText } from "next-sanity";
import SEO from "../../components/seo/SEO";
import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";
import ReadingProgress from "../../components/blog/ReadingProgress";

import { sanityClient } from "../../lib/sanity";
import {
  articlesQuery,
  articleBySlugQuery,
} from "../../lib/queries";
import { urlFor } from "../../lib/image";

export async function getStaticPaths() {
  const articles = await sanityClient.fetch(articlesQuery);

  return {
    paths:
      articles?.map((article) => ({
        params: { slug: article.slug },
      })) || [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const article = await sanityClient.fetch(articleBySlugQuery, {
    slug: params.slug,
  });

  if (!article) {
    return {
      notFound: true,
    };
  }

  const relatedArticles =
    (await sanityClient.fetch(
      `
        *[
          _type == "article" &&
          slug.current != $slug &&
          category == $category
        ] | order(publishedAt desc)[0...3] {
          _id,
          title,
          "slug": slug.current,
          excerpt,
          category,
          publishedAt,
          coverImage
        }
      `,
      {
        slug: params.slug,
        category: article.category,
      }
    )) || [];

  return {
    props: {
      article,
      relatedArticles,
    },
    revalidate: 60,
  };
}

export default function ArticleDetailPage({
  article,
  relatedArticles = [],
}) {
  return (
    <>
      <SEO
  title={`${article.title} | JForgeTech`}
  description={article.excerpt}
  canonical={`https://jforgetech.com/articles/${article.slug}`}
  image={
    article.coverImage
      ? urlFor(article.coverImage).width(1200).height(630).url()
      : "https://jforgetech.com/og-image.jpg"
  }
  type="article"
  publishedTime={article.publishedAt}
  modifiedTime={article.publishedAt}
  author="JForgeTech Editorial"
  schema={{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage
      ? urlFor(article.coverImage).width(1200).height(630).url()
      : "https://jforgetech.com/og-image.jpg",
    url: `https://jforgetech.com/articles/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "JForgeTech Editorial",
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
      "@id": `https://jforgetech.com/articles/${article.slug}`,
    },
  }}
/>

      <ReadingProgress />

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(111,124,88,0.18),transparent_40%)]" />

        <Container>
          <article className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/10 px-4 py-2 text-xs text-muted backdrop-blur">
              <span className="font-medium text-text">
                {article.category}
              </span>
              <span>•</span>
              <span>
                {new Date(article.publishedAt).toLocaleDateString("en-US")}
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-text leading-tight tracking-tight">
              {article.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted leading-8 max-w-3xl">
              {article.excerpt}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span>JForgeTech Editorial</span>
              <span>•</span>
              <span>Business Technology</span>
              <span>•</span>
              <span>6 min read</span>
            </div>

            {article.coverImage && (
              <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-white/10 shadow-card">
                <img
                  src={urlFor(article.coverImage).width(1600).url()}
                  alt={article.title}
                  className="h-full max-h-[520px] w-full object-cover"
                />
              </div>
            )}

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-14" />

            <div className="rounded-3xl border border-border bg-white/10 backdrop-blur p-6 md:p-10 shadow-card">
              <div className="article-content text-text text-[17px] md:text-[18px] leading-[1.9]">
                <PortableText value={article.content} />
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-14" />

            <div className="rounded-3xl border border-border bg-white/14 backdrop-blur p-8 md:p-10 shadow-card">
              <p className="text-sm uppercase tracking-[0.25em] text-muted">
                Need Expert Support?
              </p>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-text">
                Build stronger systems for your business.
              </h2>

              <p className="mt-4 text-muted max-w-2xl leading-relaxed">
                JForgeTech helps organizations design smarter workflows,
                automate operations, improve analytics, and modernize digital
                infrastructure.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact">Request Consultation</Button>

                <Button href="/articles" variant="secondary">
                  Back to Articles
                </Button>
              </div>
            </div>
          </article>

          {relatedArticles.length > 0 && (
            <section className="mx-auto mt-20 max-w-6xl">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-muted">
                    Continue Reading
                  </p>

                  <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-text">
                    Related Articles
                  </h2>
                </div>

                <Button href="/articles" variant="secondary">
                  View All Articles
                </Button>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {relatedArticles.map((item) => (
                  <article
                    key={item._id}
                    className="group overflow-hidden rounded-3xl border border-border bg-white/10 backdrop-blur shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-white/14 hover:shadow-card"
                  >
                    {item.coverImage && (
                      <div className="relative h-[210px] overflow-hidden">
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
                        {item.category} •{" "}
                        {new Date(item.publishedAt).toLocaleDateString(
                          "en-US"
                        )}
                      </div>

                      <h3 className="mt-4 text-xl font-semibold text-text leading-snug group-hover:text-gold transition">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm text-muted leading-relaxed">
                        {item.excerpt}
                      </p>

                      <div className="mt-6">
                        <Link
                          href={`/articles/${item.slug}`}
                          className="text-sm font-medium text-text hover:text-gold transition"
                        >
                          Read Article →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </Container>
      </section>
    </>
  );
}