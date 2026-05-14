export default function Hero() {
  return (
    <>
      <section id="home" style={{
        height: "100vh", position: "relative",
        display: "flex", alignItems: "flex-end",
        overflow: "hidden",
      }}>
        {/* Background Image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=80')",
          backgroundSize: "cover", backgroundPosition: "center",
          animation: "kenBurns 14s ease-in-out infinite alternate",
        }} />

        {/* Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top,rgba(13,13,13,.95) 0%,rgba(13,13,13,.45) 55%,transparent 100%)",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          padding: "0 60px 80px",
          maxWidth: 820,
        }} className="hero-content">
          <span style={{
            fontSize: ".72rem", letterSpacing: ".22em", textTransform: "uppercase",
            color: "var(--gold)", marginBottom: 18, display: "block",
            animation: "fadeUp .9s .15s ease both",
          }}>
            Lucknow's Premier Interior Design Studio
          </span>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem,7vw,6.2rem)",
            fontWeight: 300, lineHeight: 1.08, marginBottom: 24,
            animation: "fadeUp .9s .25s ease both",
          }}>
            We Design <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Spaces</em><br />
            That Inspire Lives
          </h1>

          <p style={{
            fontSize: ".92rem", fontWeight: 300, color: "rgba(255,255,255,.72)",
            lineHeight: 1.7, maxWidth: 520, marginBottom: 40,
            animation: "fadeUp .9s .35s ease both",
          }}>
            From opulent residences to bespoke commercial interiors, Devansh Group crafts
            environments that blend timeless elegance with contemporary functionality.
          </p>

          <div style={{
            display: "flex", gap: 16, flexWrap: "wrap",
            animation: "fadeUp .9s .45s ease both",
          }}>
            <a href="#portfolio" className="btn-primary">View Our Work</a>
            <a href="#contact" className="btn-outline">Book Consultation</a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: "absolute", right: 60, bottom: 80, zIndex: 2,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          fontSize: ".66rem", letterSpacing: ".2em", textTransform: "uppercase",
          color: "var(--text-muted)",
          animation: "fadeUp .9s .6s ease both",
        }} className="hero-scroll-indicator">
          Scroll
          <span style={{
            width: 1, height: 56, display: "block",
            background: "linear-gradient(var(--gold),transparent)",
          }} />
        </div>
      </section>

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1.05) translateX(0); }
          to   { transform: scale(1.12) translateX(-2%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .hero-content { padding: 0 24px 60px !important; }
          .hero-scroll-indicator { display: none !important; }
        }
      `}</style>
    </>
  );
}
