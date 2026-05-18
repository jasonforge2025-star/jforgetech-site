import { PortableText } from "next-sanity";
import SEO from "../../components/seo/SEO";
import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

import { sanityClient } from "../../lib/sanity";
import {
  articlesQuery,
  articleBySlugQuery,
} from "../../lib/queries";

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

  return {
    props: {
      article,
    },
    revalidate: 60,
  };
}

export default function ArticleDetailPage({ article }) {
  return (
    <>
      <SEO
        title={`${article.title} | JForgeTech`}
        description={article.excerpt}
        canonical={`https://www.jforgetech.com/articles/${article.slug}`}
      />

      <section className="py-20">
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="text-sm text-muted">
              {article.category} •{" "}
              {new Date(article.publishedAt).toLocaleDateString("en-US")}
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold text-text leading-tight">
              {article.title}
            </h1>

            <p className="mt-5 text-lg text-muted leading-8">
              {article.excerpt}
            </p>

            <div className="mt-10 rounded-3xl border border-border bg-white/10 backdrop-blur p-6 md:p-8 text-text">
              <PortableText value={article.content} />
            </div>

            <div className="mt-10">
              <Button href="/articles" variant="secondary">
                Back to Articles
              </Button>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}