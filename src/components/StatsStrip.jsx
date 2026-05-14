import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 12,  suffix: "+", label: "Years of Excellence" },
  { num: 850, suffix: "+", label: "Projects Completed" },
  { num: 98,  suffix: "%", label: "Client Satisfaction" },
  { num: 40,  suffix: "+", label: "Design Experts" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ num, suffix, label, animate }) {
  const count = useCountUp(num, 1600, animate);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2.8rem", fontWeight: 600, color: "var(--dark)", lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontSize: ".75rem", letterSpacing: ".12em", textTransform: "uppercase",
        color: "rgba(13,13,13,.72)", marginTop: 6,
      }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background: "var(--gold)",
      padding: "36px 60px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20,
    }} className="stats-strip">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} animate={visible} />
      ))}
      <style>{`
        @media (max-width: 900px) {
          .stats-strip { grid-template-columns: repeat(2,1fr) !important; padding: 36px 24px !important; }
        }
      `}</style>
    </div>
  );
}
