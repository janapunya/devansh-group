import { useState, useEffect, useRef } from "react";

const allProjects = [
  {
    id: 1, span: 2,
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1000&q=80",
    title: "The Awadh Residence", category: "Luxury", location: "Luxury Residential · Gomti Nagar",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
    title: "Skyline Penthouse Kitchen", category: "Residential", location: "Residential · Hazratganj",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80",
    title: "TechVista Corporate Office", category: "Commercial", location: "Commercial · Vibhuti Khand",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80",
    title: "Heritage Suite Bedroom", category: "Luxury", location: "Luxury · Mahanagar",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=700&q=80",
    title: "Nawabi Dining Experience", category: "Residential", location: "Residential · Aliganj",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=700&q=80",
    title: "Boutique Hotel Lobby", category: "Commercial", location: "Hospitality · Hazratganj",
  },
];

const filters = ["All", "Residential", "Commercial", "Luxury"];

function PortfolioItem({ project, isFirst }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transition = "opacity .6s ease, transform .6s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative", overflow: "hidden",
        aspectRatio: isFirst ? undefined : "4/3",
        gridColumn: isFirst ? "span 2" : undefined,
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.img}
        alt={project.title}
        style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform .6s ease",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top,rgba(13,13,13,.88) 0%,transparent 55%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity .35s",
        display: "flex", alignItems: "flex-end", padding: 24,
      }}>
        <div>
          <h4 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.3rem", fontWeight: 400, color: "var(--white)",
          }}>{project.title}</h4>
          <span style={{ fontSize: ".75rem", color: "var(--gold)", letterSpacing: ".1em" }}>
            {project.location}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? allProjects
    : allProjects.filter(p => p.category === active);

  return (
    <>
      <section id="portfolio" style={{ background: "var(--dark)", padding: "100px 60px" }}>
        {/* Header */}
        <div className="portfolio-header">
          <div>
            <span className="sec-label">Our Projects</span>
            <h2 className="sec-title">Featured Works</h2>
            <div className="sec-line" />
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  border: `1px solid ${active === f ? "var(--gold)" : "rgba(255,255,255,.14)"}`,
                  color: active === f ? "var(--gold)" : "rgba(255,255,255,.55)",
                  padding: "8px 20px", fontSize: ".76rem", letterSpacing: ".1em",
                  textTransform: "uppercase", background: "transparent", cursor: "pointer",
                  transition: ".25s", fontFamily: "'Jost', sans-serif",
                }}
              >{f}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 3,
        }} className="portfolio-grid">
          {filtered.map((p, i) => (
            <PortfolioItem key={p.id} project={p} isFirst={i === 0 && active === "All"} />
          ))}
        </div>
      </section>

      <style>{`
        .portfolio-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
        }
        @media (max-width: 900px) {
          .portfolio-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .portfolio-grid { grid-template-columns: 1fr !important; }
          #portfolio { padding: 70px 24px !important; }
        }
      `}</style>
    </>
  );
}
