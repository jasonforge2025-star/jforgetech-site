import Head from "next/head";

export default function SEO({
  title = "JForgeTech | AI, Software, Automation & Data Solutions",
  description = "JForgeTech helps businesses build modern websites, software systems, automation workflows, AI solutions, and data analytics platforms.",
  canonical = "https://www.jforgetech.com",
  keywords = "JForgeTech, software development Nigeria, web development Port Harcourt, AI automation, data analytics, business automation",
  image = "https://www.jforgetech.com/og-image.jpg",
  type = "website",
  schema,
  breadcrumbs = [],
  faq = [],
}) {
  const breadcrumbSchema =
    breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }
      : null;

      const faqSchema =
  faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="JForgeTech" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}

      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}

            {faqSchema && (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
            }}
        />
        )}
    </Head>
  );
}