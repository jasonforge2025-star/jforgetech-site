import SEO from "../components/seo/SEO";
import AboutMockupV1 from "../components/about/AboutMockupV1";

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "JForgeTech",

    url: "https://www.jforgetech.com",

    description:
      "JForgeTech is a technology company focused on software engineering, AI systems, automation, analytics, and digital transformation.",

    foundingLocation: {
      "@type": "Place",
      name: "Nigeria",
    },

    knowsAbout: [
      "Software Development",
      "Web Development",
      "AI Automation",
      "Data Analytics",
      "Digital Transformation",
      "Business Systems",
    ],
  };

  return (
    <>
      <SEO
        title="About JForgeTech | Technology & Digital Transformation"
        description="Learn about JForgeTech — a technology company building software systems, AI automation platforms, analytics infrastructure, and modern digital experiences."
        canonical="https://www.jforgetech.com/about"
        keywords="About JForgeTech, technology company Nigeria, software engineering, AI systems, analytics infrastructure"
        schema={schemaData}
        breadcrumbs={[
        {
          name: "Home",
          url: "https://www.jforgetech.com",
        },
        {
          name: "About",
          url: "https://www.jforgetech.com/about",
        },
      ]}
      />

      <AboutMockupV1 />
    </>
  );
}