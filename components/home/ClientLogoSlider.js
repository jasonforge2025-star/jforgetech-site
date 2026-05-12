import Container from "../layout/Container";

export default function ClientLogoSlider() {
  const logos = [
    { name: "Afiawaziri", src: "/brand/Afia-logo-1-1.png" }, // ✅ YOUR REAL LOGO
    { name: "Appneen", src: "/brand/appneen.png" },
    { name: "NYCN", src: "/brand/nycn.jpg" },
    { name: "Barcopet", src: "/brand/barcopet-logo.jpg" },
    { name: "Energy", src: "/client-logos/energy.png" },
    { name: "SME → Enterprise", src: "/client-logos/sme-enterprise.png" },
    { name: "Healthcare", src: "/client-logos/healthcare.png" },
    { name: "Mobility", src: "/client-logos/mobility.png" },
  ];

  const lane = [...logos, ...logos];

  return (
    <section className="relative py-14" id="clients">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-text">Trusted by teams</h2>
          <p className="mt-3 text-muted">
            Client logos and partners (replace placeholders with real logos anytime).
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-white/10 backdrop-blur p-5 shadow-soft overflow-hidden">
          <div className="jf-client-viewport">
            <div className="jf-client-track">
              {lane.map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="jf-client-pill"
                  title={logo.name}
                >
                  <img
                    className="jf-client-img"
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextSibling;
                      if (fallback) fallback.style.display = "inline-flex";
                    }}
                  />
                  <span className="jf-client-fallback">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .jf-client-viewport{
          overflow:hidden;
          position:relative;
        }

        .jf-client-viewport:before,
        .jf-client-viewport:after{
          content:"";
          position:absolute;
          top:0; bottom:0;
          width:56px;
          z-index:2;
          pointer-events:none;
        }

        .jf-client-viewport:before{
          left:0;
          background: linear-gradient(to right, rgba(8,10,14,0.55), transparent);
        }

        .jf-client-viewport:after{
          right:0;
          background: linear-gradient(to left, rgba(8,10,14,0.55), transparent);
        }

        .jf-client-track{
          display:flex;
          align-items:center;
          gap: 12px;
          width: max-content;
          animation: jfClientMove 26s linear infinite;
          will-change: transform;
        }

        .jf-client-track:hover{ animation-play-state: paused; }

        @keyframes jfClientMove{
          0%{ transform: translateX(0); }
          100%{ transform: translateX(-50%); }
        }

        .jf-client-pill{
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.12);
          padding: 10px 14px;
          font-size: 12px;
          color: rgba(20,20,18,0.78);
          white-space: nowrap;
          box-shadow: 0 14px 34px rgba(0,0,0,0.10);

          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          min-height:44px;

          transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;
        }

        .jf-client-pill:hover{
          transform: translateY(-1px);
          background: rgba(255,255,255,0.16);
          box-shadow: 0 18px 44px rgba(0,0,0,0.14);
        }

        .jf-client-img{
          height:22px;
          width:auto;
          max-width:140px;
          object-fit:contain;
          display:block;
          filter:saturate(1.05);
        }

        .jf-client-fallback{
          display:none;
          align-items:center;
          justify-content:center;
        }

        @media (max-width: 480px){
          .jf-client-img{ max-width:110px; }
          .jf-client-pill{ padding:10px 12px; }
        }
      `}</style>
    </section>
  );
}
