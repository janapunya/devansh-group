const highlights = [
  "ISO Certified Design & Construction Firm",
  "Serving Lucknow, Kanpur, Agra & NCR",
  "In-house manufacturing & procurement",
  "Transparent pricing with no hidden costs",
  "5-year warranty on all installations",
];

export default function About() {
  return (
    <>
      <section id="about" style={{ background: "var(--dark2)", padding: "100px 60px" }}>
        <div className="about-grid">
          {/* Image */}
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
              alt="Devansh Group Studio"
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", bottom: -24, right: -24,
              background: "var(--gold)", padding: "28px 32px", textAlign: "center",
            }} className="about-badge">
              <strong style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.6rem", fontWeight: 600, color: "var(--dark)",
                display: "block", lineHeight: 1,
              }}>12+</strong>
              <span style={{
                fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase",
                color: "rgba(13,13,13,.75)",
              }}>Years of<br />Craftsmanship</span>
            </div>
          </div>

          {/* Content */}
          <div style={{ paddingLeft: 20 }}>
            <span className="sec-label">Who We Are</span>
            <h2 className="sec-title">Lucknow's Most<br />Trusted Design House</h2>
            <div className="sec-line" />
            <p className="sec-desc">
              Devansh Group was founded with a singular vision — to bring world-class interior
              design to the cultural heartland of Uttar Pradesh. Based in Lucknow, we draw
              inspiration from the city's rich Nawabi heritage while embracing contemporary
              global design trends.
            </p>
            <p className="sec-desc" style={{ marginTop: 16 }}>
              Our team of 40+ experienced designers, architects, and craftspeople collaborate to
              create interiors that are not just beautiful, but deeply personal and functionally superior.
            </p>

            <ul style={{ marginTop: 28, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {highlights.map(item => (
                <li key={item} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  fontSize: ".88rem", color: "rgba(255,255,255,.7)",
                }}>
                  <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary" style={{ marginTop: 36, display: "inline-block" }}>
              Know More About Us
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-top: 20px;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-badge { right: 0 !important; }
          #about { padding: 70px 24px !important; }
        }
      `}</style>
    </>
  );
}
