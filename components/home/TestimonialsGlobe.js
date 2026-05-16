import { useEffect, useMemo, useState } from "react";

const TESTIMONIALS = [
  {
    company: "Barcopet Ltd",
    logo: "/brand/barcopet-logo.jpg",
    person: "Charles Amoya",
    position: "CEO",
    rating: 5,
    quote:
      "JForgeTech simplified our reporting and gave us dashboards the team actually uses. Decisions are faster, and meetings are shorter.",
  },
  {
    company: "National Youth Council of Nigeria",
    logo: "/brand/nycn.jpg",
    person: "Amb. Sukubo Sara-igbe Sukubo",
    position: "President",
    rating: 5,
    quote:
      "Clear communication, fast turnaround, and systems that just work. Solid delivery from start to finish.",
  },
  {
    company: "Afia Waziri Energy Ltd",
    logo: "/brand/Afia-logo-1-1.png",
    person: "Cyril Orede",
    position: "GMD",
    rating: 5,
    quote:
      "Accurate numbers, clean visuals, and a clear story. Our reviews became sharper and far less time-consuming.",
  },
  {
    company: "Appneen",
    logo: "/brand/appneen.png",
    person: "Etonowaji Benson",
    position: "Founder",
    rating: 5,
    quote:
      "From messy spreadsheets to clean insights — practical work, delivered fast, and clearly communicated.",
  },
];

function Stars({ rating = 5 }) {
  return (
    <div className="flex justify-center lg:justify-start gap-1 text-gold text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsGlobe() {
  const items = useMemo(() => TESTIMONIALS, []);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((a) => (a + 1) % items.length);
    }, 4800);

    return () => clearInterval(timer);
  }, [paused, items.length]);

  const activeItem = items[active];

  const next = () => setActive((a) => (a + 1) % items.length);
  const prev = () => setActive((a) => (a - 1 + items.length) % items.length);

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hidden sm:block absolute left-1/2 top-14 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/10 blur-2xl" />
        <div className="hidden lg:block absolute bottom-20 right-8 h-56 w-56 rounded-full bg-olive/10 blur-2xl" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs text-muted shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gold" />
            Client proof
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.035em] text-text">
            What Clients Say
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-7 text-muted">
            Real feedback from teams we’ve helped turn data, automation, and software into clearer decisions.
          </p>
        </div>

        <div
          className="mt-8 sm:mt-10 lg:mt-12 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Desktop-only rotating logo cards */}
          <div className="relative mx-auto hidden h-[350px] w-full max-w-[420px] lg:block">
            {items.map((t, i) => {
              const offset = (i - active + items.length) % items.length;
              const isActive = offset === 0;
              const isNext = offset === 1;
              const isPrev = offset === items.length - 1;

              let style = "opacity-0 scale-90 translate-y-8 pointer-events-none";

              if (isActive) {
                style = "z-30 opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0";
              } else if (isNext) {
                style = "z-20 opacity-65 scale-[0.88] translate-x-16 -translate-y-4 rotate-3";
              } else if (isPrev) {
                style = "z-10 opacity-45 scale-[0.82] -translate-x-16 -translate-y-8 -rotate-3";
              }

              return (
                <button
                  key={t.company}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-[1.8rem] border border-white/10 bg-white/[0.09] p-5 shadow-lg transition-all duration-500 ease-out ${style}`}
                  aria-label={`Show testimonial from ${t.company}`}
                >
                  <div className="flex h-full items-center justify-center rounded-[1.3rem] border border-white/10 bg-white/[0.08] p-6">
                    <img
                      src={t.logo}
                      alt={`${t.company} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content card */}
          <div className="mx-auto w-full max-w-xl text-center lg:text-left">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 sm:p-8 shadow-lg">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              <div className="flex flex-col gap-4">
                <div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] p-2 lg:mx-0">
                    <img
                      src={activeItem.logo}
                      alt={`${activeItem.company} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-text">
                    {activeItem.company}
                  </h3>

                  <div className="mt-1 text-sm text-muted">
                    {activeItem.person} • {activeItem.position}
                  </div>
                </div>

                <Stars rating={activeItem.rating} />
              </div>

              <p className="mt-5 text-[15px] sm:text-lg leading-7 sm:leading-8 text-muted">
                “{activeItem.quote}”
              </p>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex justify-center gap-2 lg:justify-start">
                  {items.map((item, i) => (
                    <button
                      key={item.company}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Go to ${item.company} testimonial`}
                      className={`h-2.5 rounded-full transition-all ${
                        active === i
                          ? "w-8 bg-gold"
                          : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex justify-center gap-3 lg:justify-end">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-text transition hover:bg-gold hover:text-[#111]"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-text transition hover:bg-gold hover:text-[#111]"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center text-xs text-muted lg:text-left">
              Auto-rotates every few seconds. Hover to pause on desktop.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}