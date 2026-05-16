import SEO from "../components/seo/SEO";
import CaseStudiesPageV1 from "../components/case-studies/CaseStudiesPageV1";

export default function CaseStudies() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name: "Case Studies | JForgeTech",

    description:
      "Explore JForgeTech case studies across web development, automation, AI solutions, analytics systems, and digital transformation.",

    url: "https://www.jforgetech.com/case-studies",

    publisher: {
      "@type": "Organization",
      name: "JForgeTech",
      url: "https://www.jforgetech.com",
    },

    mainEntity: [
      {
        "@type": "CreativeWork",
        name: "Enterprise Reporting & Executive Dashboards",
      },

      {
        "@type": "CreativeWork",
        name: "Location Discovery & Social Experience Platform",
      },

      {
        "@type": "CreativeWork",
        name: "Operational Workflow Simplification",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Case Studies | JForgeTech"
        description="Explore JForgeTech projects across software development, AI systems, automation workflows, analytics infrastructure, dashboards, and enterprise web platforms."
        canonical="https://www.jforgetech.com/case-studies"
        keywords="JForgeTech case studies, software projects Nigeria, AI automation, analytics dashboards, enterprise systems, web development"
        schema={schemaData}
        breadcrumbs={[
        {
            name: "Home",
            url: "https://www.jforgetech.com",
        },
        {
            name: "Case Studies",
            url: "https://www.jforgetech.com/case-studies",
        },
        ]}
      />

      <CaseStudiesPageV1 />
    </>
  );
}