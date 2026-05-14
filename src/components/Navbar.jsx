import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "Services",     href: "#services" },
  { label: "Portfolio",    href: "#portfolio" },
  { label: "About",        href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 999,
        padding: "22px 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(13,13,13,.97)" : "linear-gradient(to bottom,rgba(13,13,13,.92),transparent)",
        backdropFilter: "blur(6px)",
        transition: "background .4s",
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.6rem", fontWeight: 600, letterSpacing: ".04em",
          color: "var(--gold)", textDecoration: "none",
        }}>
          Devansh <span style={{ color: "var(--white)" }}>Group</span>
        </a>

        {/* Desktop Links */}
        <ul style={{
          display: "flex", gap: 36, listStyle: "none",
          "@media (max-width:900px)": { display: "none" },
        }} className="nav-desktop-links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} style={{
                fontSize: ".8rem", letterSpacing: ".14em", textTransform: "uppercase",
                color: "var(--white)", textDecoration: "none", opacity: .82,
                transition: "opacity .2s, color .2s",
              }}
              onMouseEnter={e => { e.target.style.opacity = 1; e.target.style.color = "var(--gold)"; }}
              onMouseLeave={e => { e.target.style.opacity = .82; e.target.style.color = "var(--white)"; }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              fontSize: ".8rem", letterSpacing: ".14em", textTransform: "uppercase",
              color: "var(--gold)", textDecoration: "none",
              border: "1px solid var(--gold)", padding: "8px 22px", borderRadius: 2,
              transition: "background .2s, color .2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--dark)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}>
              Get Quote
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: "none", flexDirection: "column", gap: 5, cursor: "pointer",
            background: "none", border: "none", padding: 0,
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ width: 26, height: 1.5, background: "var(--white)", display: "block" }} />
          ))}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(13,13,13,.98)",
          zIndex: 998, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 32,
        }}>
          {[...navLinks, { label: "Get Quote", href: "#contact" }].map(({ label, href }) => (
            <a key={label} href={href} onClick={closeMenu} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem", fontWeight: 300, color: "var(--white)",
              textDecoration: "none", letterSpacing: ".08em",
            }}>{label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
          nav { padding: 20px 24px !important; }
        }
      `}</style>
    </>
  );
}
