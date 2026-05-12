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

function Stars({ rating }) {
  return (
    <div className="flex gap-1 text-gold text-sm mt-2">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i}>★</span>
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
    }, 5000);

    return () => clearInterval(timer);
  }, [paused, items.length]);

  const activeItem = items[active];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-semibold tracking-tight">
          What Clients Say
        </h2>

        <p className="text-muted mt-4 max-w-xl mx-auto">
          Real feedback from teams we’ve helped turn data into decisions.
        </p>
      </div>

      <div
        className="grid md:grid-cols-2 gap-20 items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* Circular image layout */}
        <div className="relative h-[340px] flex items-center justify-center perspective">

          {items.map((t, i) => {
            const offset = (i - active + items.length) % items.length;

            let style = "";

            if (offset === 0)
              style =
                "scale-100 z-30 translate-x-0 opacity-100";

            else if (offset === 1)
              style =
                "scale-90 translate-x-40 -translate-y-6 opacity-70 blur-[1px]";

            else if (offset === items.length - 1)
              style =
                "scale-90 -translate-x-40 -translate-y-6 opacity-70 blur-[1px]";

            else style = "opacity-0 pointer-events-none";

            return (
              <img
                key={i}
                src={t.logo}
                alt={t.company}
                className={`absolute w-56 h-56 object-contain rounded-2xl shadow-xl transition-all duration-700 ${style}`}
              />
            );
          })}
        </div>

        {/* Testimonial content */}
        <div>

          <h3 className="text-xl font-semibold">
            {activeItem.company}
          </h3>

          <div className="text-sm text-muted mt-1">
            {activeItem.person} • {activeItem.position}
          </div>

          <Stars rating={activeItem.rating} />

          <p className="mt-6 leading-relaxed text-lg text-muted">
            “{activeItem.quote}”
          </p>

          {/* Controls */}
          <div className="flex gap-4 mt-8">

            <button
              onClick={() =>
                setActive((a) => (a - 1 + items.length) % items.length)
              }
              className="w-10 h-10 rounded-full border hover:bg-black hover:text-white transition"
            >
              ←
            </button>

            <button
              onClick={() =>
                setActive((a) => (a + 1) % items.length)
              }
              className="w-10 h-10 rounded-full border hover:bg-black hover:text-white transition"
            >
              →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
