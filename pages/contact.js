import { useState } from "react";
import SEO from "../components/seo/SEO";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

const PROJECT_TYPES = [
  "AI & Automation",
  "Analytics & Dashboards",
  "Corporate Website",
  "Web Application",
  "Enterprise Platform",
  "Cloud & Infrastructure",
];

const CONTACT_METHODS = [
  {
    title: "Email",
    value: "jason.forge2025@gmail.com",
    href: "mailto:jason.forge2025@gmail.com",
  },
  {
    title: "Phone / WhatsApp",
    value: "08035081118",
    href: "https://wa.me/2348035081118",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact JForgeTech",
    url: "https://www.jforgetech.com/contact",
    description:
      "Contact JForgeTech for software development, AI automation, analytics dashboards, websites, and enterprise technology solutions.",
    mainEntity: {
      "@type": "Organization",
      name: "JForgeTech",
      url: "https://www.jforgetech.com",
      email: "jason.forge2025@gmail.com",
      telephone: "+2348035081118",
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to send message. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <SEO
        title="Contact JForgeTech | Start a Project"
        description="Contact JForgeTech for websites, software systems, AI automation, analytics dashboards, enterprise platforms, and digital transformation solutions."
        canonical="https://www.jforgetech.com/contact"
        keywords="Contact JForgeTech, software company Nigeria, AI automation consultation, web development contact"
        schema={schemaData}
        breadcrumbs={[
          {
            name: "Home",
            url: "https://www.jforgetech.com",
          },
          {
            name: "Contact",
            url: "https://www.jforgetech.com/contact",
          },
        ]}
      />

      <div className="relative overflow-hidden pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-olive/10 blur-3xl" />
        </div>

        <Container>
          <section className="relative pt-10 sm:pt-14 lg:pt-16">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs text-muted backdrop-blur-sm shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  Project consultation
                </div>

                <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-text leading-tight">
                  Let’s discuss the system
                  <span className="block text-gold">you actually need.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-muted">
                  Whether you need a corporate website, web app, dashboard,
                  automation workflow, or enterprise platform, we start by
                  understanding the real business outcome before recommending a
                  solution.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="https://wa.me/2348035081118">
                    Message on WhatsApp
                  </Button>

                  <Button
                    variant="secondary"
                    href="mailto:jason.forge2025@gmail.com"
                  >
                    Send Email
                  </Button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#0f1720]/80 p-6 shadow-lg">
                <div className="text-sm font-semibold text-white">
                  What happens next?
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    "We clarify your goal",
                    "We identify the right solution path",
                    "We define scope, timeline, and budget",
                    "We recommend the best technical approach",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <div className="text-sm font-semibold text-white">
                        {index + 1}. {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-text">
                What do you want to build?
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                Choose the closest category when you reach out. This helps us
                respond with the right questions and direction.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {PROJECT_TYPES.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-gold/10 bg-gold/[0.08] px-4 py-2 text-sm text-text"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-text">
                Contact channels
              </h2>

              <div className="mt-6 grid gap-4">
                {CONTACT_METHODS.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.08]"
                  >
                    <div className="text-sm font-semibold text-text">
                      {method.title}
                    </div>

                    <div className="mt-1 text-sm text-muted">
                      {method.value}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-14">
            <div className="rounded-[2rem] border border-white/10 bg-[#0f1720]/80 p-6 sm:p-8 shadow-lg">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold text-text">
                  Start your project discussion
                </h2>

                <p className="mt-3 text-muted leading-7">
                  Tell us what you want to build, improve, automate, or
                  redesign.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-text">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-text outline-none transition focus:border-gold"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-text">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-text outline-none transition focus:border-gold"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-text">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-text outline-none transition focus:border-gold"
                      placeholder="+234..."
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-text">
                      Project Type
                    </label>

                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-text outline-none transition focus:border-gold"
                    >
                      <option value="">Select project type</option>

                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-text">
                    Project Details
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-text outline-none transition focus:border-gold"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status && (
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border border-green-500/20 bg-green-500/10 text-green-300"
                        : "border border-red-500/20 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Project Enquiry"}
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 text-center backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-text">
                Bring the idea. We’ll help shape the system.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
                The best projects start with clarity. Tell us what you want to
                improve, automate, launch, or redesign — and we’ll help you
                define the practical next step.
              </p>

              <div className="mt-8">
                <Button href="https://wa.me/2348035081118">
                  Start Conversation
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}