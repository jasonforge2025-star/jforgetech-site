import SEO from "../components/seo/SEO";
import HomeMockupV1 from "../components/home/HomeMockupV1";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JForgeTech",
    url: "https://www.jforgetech.com",
    description:
      "JForgeTech provides web development, software development, AI automation, data analytics, and digital transformation solutions.",
    sameAs: [
      "https://www.jforgetech.com"
    ],
  };

  return (
    <>
      <SEO
        title="JForgeTech | AI, Software, Automation & Data Solutions"
        description="JForgeTech helps businesses build modern websites, software systems, automation workflows, AI solutions, and data analytics platforms."
        canonical="https://www.jforgetech.com"
        keywords="JForgeTech, software development Nigeria, web development Nigeria, AI automation, data analytics, digital transformation"
        schema={schemaData}
      />

      <HomeMockupV1 />
    </>
  );
}