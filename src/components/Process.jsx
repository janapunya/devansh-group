const steps = [
  {
    num: "01", title: "Consultation",
    desc: "We understand your vision, lifestyle, budget, and requirements through detailed discovery sessions.",
  },
  {
    num: "02", title: "Concept & Design",
    desc: "Our designers present mood boards, 3D renders, and material palettes for your approval.",
  },
  {
    num: "03", title: "Execution",
    desc: "Expert craftspeople bring the design to life with precision, quality materials, and minimal disruption.",
  },
  {
    num: "04", title: "Handover",
    desc: "We do a final walk-through, ensure your complete satisfaction, and hand over your dream space.",
  },
];

export default function Process() {
  return (
    <>
      <section id="process" style={{ background: "var(--cream)", padding: "100px 60px" }}>
        <div style={{ textAlign: "center" }}>
          <span style={{
            fontSize: ".7rem", letterSpacing: ".22em", textTransform: "uppercase",
            color: "#8B6F3E", marginBottom: 14, display: "block",
          }}>
            How We Work
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem,4vw,3.4rem)", fontWeight: 300, lineHeight: 1.18,
            marginBottom: 20, color: "var(--dark)",
          }}>
            Our Design Process
          </h2>
          <div style={{
            width: 48, height: 1, background: "#8B6F3E", margin: "20px auto 0",
          }} />
        </div>

        <div className="process-steps">
          {steps.map(({ num, title, desc }) => (
            <div key={num} style={{ textAlign: "center", padding: "0 20px" }}>
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "var(--white)", border: "2px solid var(--gold)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600,
                color: "var(--dark)", margin: "0 auto 24px", position: "relative", zIndex: 1,
              }}>
                {num}
              </div>
              <h3 style={{ color: "var(--dark)", fontSize: "1rem", fontWeight: 500, marginBottom: 10 }}>
                {title}
              </h3>
              <p style={{ fontSize: ".82rem", color: "#666", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 60px;
          position: relative;
        }
        .process-steps::before {
          content: '';
          position: absolute;
          top: 30px; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(to right, var(--gold), transparent, var(--gold));
        }
        @media (max-width: 900px) {
          .process-steps { grid-template-columns: repeat(2,1fr) !important; gap: 36px !important; }
          .process-steps::before { display: none; }
          #process { padding: 70px 24px !important; }
        }
      `}</style>
    </>
  );
}
