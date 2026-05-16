const FAQS = [
  {
    question: "What services does JForgeTech provide?",
    answer:
      "JForgeTech provides web development, software development, AI automation, data analytics, dashboards, business automation, and digital transformation solutions for modern businesses.",
  },
  {
    question: "Can JForgeTech build custom software for my business?",
    answer:
      "Yes. We design and build custom systems such as portals, dashboards, workflow tools, booking systems, reporting platforms, and internal business applications.",
  },
  {
    question: "Do you build websites or full business systems?",
    answer:
      "Both. We build corporate websites, landing pages, web applications, enterprise platforms, and backend systems depending on the client’s business goal.",
  },
  {
    question: "Can you help automate manual business processes?",
    answer:
      "Yes. We help businesses reduce repetitive manual work using automation workflows, dashboards, AI-assisted tools, and better data systems.",
  },
];

export default function ServicesFAQ() {
  return (
    <section className="mt-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur-sm">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            FAQs
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-text">
            Frequently asked questions
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            Clear answers for businesses considering websites, software,
            automation, analytics, or AI-powered digital systems.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {FAQS.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-base font-semibold text-text">
                {item.question}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}