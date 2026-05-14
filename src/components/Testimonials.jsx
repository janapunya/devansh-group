import { useEffect, useRef } from "react";

const testimonials = [
  {
    initials: "AK",
    name: "Anand Kumar Srivastava",
    role: "Homeowner · Gomti Nagar, Lucknow",
    text: "Devansh Group transformed our 4BHK apartment into an absolute masterpiece. Every corner reflects our personality. The team's attention to detail and professionalism was exceptional throughout.",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "CEO · TechVista Solutions, Lucknow",
    text: "Our office renovation was completed ahead of schedule and under budget. The workspace is now modern, vibrant, and our employees love it. Highly recommend Devansh Group for commercial projects.",
  },
  {
    initials: "RM",
    name: "Rajiv Malhotra",
    role: "Villa Owner · Shaheed Path, Lucknow",
    text: "From the first meeting to the final handover, the experience was seamless. They understood exactly what we wanted for our villa and delivered beyond expectations. Simply outstanding!",
  },
];

function TestimonialCard({ initials, name, role, text, delay }) {
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
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="t-card" style={{
      background: "var(--dark2)", padding: "42px 36px",
      borderTop: "2px solid transparent",
      transition: "border-color .3s",
    }}>
      <div style={{ color: "var(--gold)", letterSpacing: 2, fontSize: ".9rem", marginBottom: 20 }}>
        ★★★★★
      </div>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.15rem", fontStyle: "italic", fontWeight: 300,
        lineHeight: 1.65, marginBottom: 28, color: "rgba(255,255,255,.85)",
      }}>
        "{text}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 600, color: "var(--dark)", fontSize: "1rem", flexShrink: 0,
        }}>{initials}</div>
        <div>
          <div style={{ fontWeight: 500, fontSize: ".9rem" }}>{name}</div>
          <div style={{ fontSize: ".76rem", color: "var(--text-muted)", marginTop: 2 }}>{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <section id="testimonials" style={{ background: "var(--dark3)", padding: "100px 60px" }}>
        <div style={{ textAlign: "center" }}>
          <span className="sec-label">Client Stories</span>
          <h2 className="sec-title">What Our Clients Say</h2>
          <div className="sec-line" style={{ margin: "20px auto" }} />
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 120} />
          ))}
        </div>
      </section>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 60px;
        }
        .t-card:hover { border-top-color: var(--gold) !important; }
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
          #testimonials { padding: 70px 24px !important; }
        }
      `}</style>
    </>
  );
}
