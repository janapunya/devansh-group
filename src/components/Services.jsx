import { useEffect, useRef } from "react";

const services = [
  {
    num: "01", icon: "🏡", title: "Residential Design",
    desc: "Transforming houses into dream homes with bespoke designs tailored to your lifestyle, personality, and aesthetic sensibilities.",
  },
  {
    num: "02", icon: "🏢", title: "Commercial Interiors",
    desc: "Creating impressive, functional workspaces and retail environments that enhance productivity and captivate customers.",
  },
  {
    num: "03", icon: "🛋️", title: "Turnkey Furnishing",
    desc: "End-to-end furniture sourcing, customization, and installation — delivering fully furnished spaces ready to move in.",
  },
  {
    num: "04", icon: "💡", title: "Lighting & Décor",
    desc: "Expert lighting design and curated décor that sets the right mood, highlights architecture, and elevates every corner.",
  },
  {
    num: "05", icon: "🏗️", title: "Renovation & Remodelling",
    desc: "Breathing new life into existing spaces with structural changes, material upgrades, and inspired redesigns.",
  },
  {
    num: "06", icon: "📐", title: "3D Visualization",
    desc: "Hyper-realistic 3D renders and virtual walkthroughs so you can experience your space before construction begins.",
  },
];

function ServiceCard({ num, icon, title, desc, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    el.style.opacity = 0;
    el.style.transform = "translateY(28px)";
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.transition = "opacity .65s ease, transform .65s ease";
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="service-card"
      style={{
        background: "var(--dark3)", padding: "44px 36px",
        position: "relative", overflow: "hidden", cursor: "default",
      }}
    >
      <span style={{
        position: "absolute", top: 20, right: 24,
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "3.5rem", fontWeight: 300, color: "rgba(255,255,255,.04)", lineHeight: 1,
      }}>{num}</span>
      <span style={{ fontSize: "2rem", marginBottom: 22, display: "block" }}>{icon}</span>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.4rem", fontWeight: 400, marginBottom: 14, color: "var(--white)",
      }}>{title}</h3>
      <p style={{ fontSize: ".86rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section id="services" style={{ background: "var(--dark2)", padding: "100px 60px" }}>
        <span className="sec-label">What We Offer</span>
        <h2 className="sec-title">Complete Interior<br />Design Solutions</h2>
        <div className="sec-line" />
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.num} {...s} delay={i * 80} />
          ))}
        </div>
      </section>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 60px;
        }
        .service-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: var(--gold);
          transition: width .4s ease;
        }
        .service-card:hover::before { width: 100%; }
        .service-card:hover { background: #242424; transition: background .3s; }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
          #services { padding: 70px 24px !important; }
        }
      `}</style>
    </>
  );
}
