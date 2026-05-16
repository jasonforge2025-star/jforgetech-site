import SEO from "../components/seo/SEO";
import ServicesPageV1 from "../components/services/ServicesPageV1";

export default function ServicesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "JForgeTech Technology Services",
    provider: {
      "@type": "Organization",
      name: "JForgeTech",
      url: "https://www.jforgetech.com",
    },
    areaServed: "Nigeria",
    serviceType: [
      "Web Development",
      "Software Development",
      "AI Automation",
      "Data Analytics",
      "Business Automation",
      "Digital Transformation",
    ],
  };

  return (
    <>
      <SEO
        title="Services | JForgeTech"
        description="Explore JForgeTech services in web development, software development, AI automation, data analytics, business automation, and digital transformation."
        canonical="https://www.jforgetech.com/services"
        keywords="JForgeTech services, web development Nigeria, software development Nigeria, AI automation, data analytics, business automation"
        schema={schemaData}
        breadcrumbs={[
  {
    name: "Home",
    url: "https://www.jforgetech.com",
  },
  {
    name: "Services",
    url: "https://www.jforgetech.com/services",
  },
]}

faq={[
  {
    question: "What services does JForgeTech provide?",
    answer:
      "JForgeTech provides web development, software development, AI automation, data analytics, business automation, dashboards, and digital transformation solutions.",
  },
  {
    question: "Does JForgeTech build custom business software?",
    answer:
      "Yes. JForgeTech builds custom software systems for businesses that need workflows, dashboards, portals, automation, and scalable digital platforms.",
  },
  {
    question: "Can JForgeTech help with AI automation?",
    answer:
      "Yes. JForgeTech helps businesses apply AI and automation to reduce manual work, improve reporting, speed up operations, and support better decision-making.",
  },
  {
    question: "Does JForgeTech work with businesses in Nigeria?",
    answer:
      "Yes. JForgeTech works with businesses in Nigeria and can support corporate websites, enterprise systems, analytics dashboards, and digital transformation projects.",
  },
]}
      />

      <ServicesPageV1 />
    </>
  );
}