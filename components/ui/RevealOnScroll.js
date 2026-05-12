import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(".jf-reveal"));

    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target); // reveal once only
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px" // trigger slightly earlier
      }
    );

    targets.forEach((t) => io.observe(t));

    // Fallback: force-show anything already in view
    setTimeout(() => {
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("is-visible");
        }
      });
    }, 300);

    return () => io.disconnect();
  }, []);

  return null;
}
