const serviceLinks = [
  "Residential Design", "Commercial Interiors", "Turnkey Furnishing",
  "Lighting & Décor", "Renovation", "3D Visualization",
];
const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Our Process", href: "#process" },
  { label: "Careers", href: "#contact" },
  { label: "Press & Media", href: "#contact" },
];
const socialLinks = [
  { icon: "📸", label: "Instagram", href: "#" },
  { icon: "📘", label: "Facebook",  href: "#" },
  { icon: "▶️", label: "YouTube",   href: "#" },
  { icon: "📌", label: "Pinterest", href: "#" },
  { icon: "💼", label: "LinkedIn",  href: "#" },
  { icon: "💬", label: "WhatsApp",  href: "https://wa.me/919876543210" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#080808", padding: "72px 60px 36px" }}>
      <div className="footer-top">
        {/* Brand */}
        <div>
          <a href="#home" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.8rem", fontWeight: 600, letterSpacing: ".04em",
            color: "var(--gold)", textDecoration: "none",
          }}>
            Devansh <span style={{ color: "var(--white)" }}>Group</span>
          </a>
          <p style={{
            fontSize: ".86rem", color: "var(--text-muted)", lineHeight: 1.8,
            marginTop: 16, maxWidth: 280,
          }}>
            Crafting extraordinary interiors across Lucknow and beyond since 2012.
            Where timeless elegance meets modern design.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {socialLinks.map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                title={label}
                className="social-btn"
                style={{
                  width: 40, height: 40,
                  border: "1px solid rgba(255,255,255,.14)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-muted)", textDecoration: "none", fontSize: ".9rem",
                  transition: "border-color .25s, color .25s",
                }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize: ".72rem", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            Services
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {serviceLinks.map(s => (
              <li key={s}>
                <a href="#services" style={{
                  fontSize: ".86rem", color: "var(--text-muted)", textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={e => e.target.style.color = "var(--gold)"}
                onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                >{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontSize: ".72rem", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            Company
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {companyLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} style={{
                  fontSize: ".86rem", color: "var(--text-muted)", textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={e => e.target.style.color = "var(--gold)"}
                onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: ".72rem", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            Contact
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { href: "tel:+919876543210", text: "+91 98765 43210" },
              { href: "mailto:hello@devanshgroup.in", text: "hello@devanshgroup.in" },
              { href: "#", text: "Gomti Nagar, Lucknow" },
              { href: "#", text: "Mon–Sat 10am–7pm" },
            ].map(({ href, text }) => (
              <li key={text}>
                <a href={href} style={{
                  fontSize: ".86rem", color: "var(--text-muted)", textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={e => e.target.style.color = "var(--gold)"}
                onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                >{text}</a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/919876543210"
            target="_blank" rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#25D366", color: "var(--white)",
              padding: "10px 18px", fontSize: ".74rem", letterSpacing: ".1em",
              textTransform: "uppercase", fontWeight: 500, textDecoration: "none",
              marginTop: 20, transition: "background .25s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#1ebe5a"}
            onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingTop: 28, fontSize: ".76rem", color: "rgba(255,255,255,.3)",
        borderTop: "1px solid rgba(255,255,255,.08)", marginTop: 56,
      }} className="footer-bottom">
        <span>© 2024 Devansh Group. All rights reserved.</span>
        <span>Designed with ♥ in Lucknow, UP</span>
        <span>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
          {" · "}
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
        </span>
      </div>

      <style>{`
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .social-btn:hover { border-color: var(--gold) !important; color: var(--gold) !important; }
        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr 1fr !important; }
          .footer-bottom { flex-direction: column; gap: 10px; text-align: center; }
          footer { padding: 60px 24px 28px !important; }
        }
      `}</style>
    </footer>
  );
}
