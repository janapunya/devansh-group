import { useState } from "react";

const contactInfo = [
  {
    icon: "📍", title: "Visit Our Studio",
    lines: ["45, Shaheed Path, Sector 6", "Gomti Nagar, Lucknow – 226010", "Uttar Pradesh, India"],
  },
  {
    icon: "📞", title: "Call Us",
    links: [
      { href: "tel:+919876543210", text: "+91 98765 43210", gold: true },
      { href: "tel:+910522123456", text: "0522 – 123 456", gold: false },
    ],
  },
  {
    icon: "✉️", title: "Email Us",
    links: [
      { href: "mailto:hello@devanshgroup.in", text: "hello@devanshgroup.in", gold: true },
      { href: "mailto:projects@devanshgroup.in", text: "projects@devanshgroup.in", gold: false },
    ],
  },
  {
    icon: "🕐", title: "Studio Hours",
    lines: ["Monday – Saturday: 10:00 AM – 7:00 PM", "Sunday: By Appointment Only"],
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", projectType: "", budget: "", message: "",
  });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", projectType: "", budget: "", message: "" });
  };

  return (
    <>
      <section id="contact" style={{ background: "var(--dark)", padding: "100px 60px" }}>
        <span className="sec-label">Get In Touch</span>
        <h2 className="sec-title">Start Your Dream<br />Project Today</h2>
        <div className="sec-line" />

        <div className="contact-grid">
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {contactInfo.map(({ icon, title, lines, links }) => (
              <div key={title} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{
                  width: 46, height: 46, border: "1px solid var(--gold)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: "1.1rem",
                }}>{icon}</div>
                <div>
                  <h4 style={{
                    fontSize: ".76rem", letterSpacing: ".15em", textTransform: "uppercase",
                    color: "var(--gold)", marginBottom: 6,
                  }}>{title}</h4>
                  {lines && lines.map(l => (
                    <p key={l} style={{ fontSize: ".9rem", color: "rgba(255,255,255,.7)", lineHeight: 1.6 }}>{l}</p>
                  ))}
                  {links && links.map(({ href, text, gold }) => (
                    <a key={href} href={href} style={{
                      fontSize: ".9rem", display: "block", lineHeight: 1.6, textDecoration: "none",
                      color: gold ? "var(--gold-light)" : "rgba(255,255,255,.6)",
                    }}>{text}</a>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/919876543210?text=Hello%20Devansh%20Group%2C%20I%27d%20like%20to%20discuss%20my%20interior%20design%20project."
              target="_blank" rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#25D366", color: "var(--white)",
                padding: "14px 32px", fontSize: ".82rem", letterSpacing: ".1em",
                textTransform: "uppercase", fontWeight: 500, textDecoration: "none",
                transition: "background .25s, transform .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1ebe5a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div className="form-row">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 00000 00000" },
              ].map(f => (
                <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{f.label}</label>
                  <input
                    type={f.type} name={f.name} placeholder={f.placeholder}
                    value={form[f.name]} onChange={handleChange}
                    className="form-input"
                  />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-muted)" }}>Email Address</label>
              <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} className="form-input" />
            </div>

            {[
              {
                name: "projectType", label: "Project Type",
                options: ["Select project type", "Residential – Apartment", "Residential – Villa / Bungalow", "Commercial – Office", "Commercial – Retail / Showroom", "Hospitality – Hotel / Restaurant", "Renovation / Remodelling", "Other"],
              },
              {
                name: "budget", label: "Budget Range",
                options: ["Select budget range", "₹5 – 15 Lakhs", "₹15 – 30 Lakhs", "₹30 – 60 Lakhs", "₹60 Lakhs – 1 Crore", "Above ₹1 Crore"],
              },
            ].map(({ name, label, options }) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</label>
                <select name={name} value={form[name]} onChange={handleChange} className="form-input">
                  {options.map(o => <option key={o} value={o === options[0] ? "" : o}>{o}</option>)}
                </select>
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-muted)" }}>Tell Us About Your Project</label>
              <textarea
                name="message" rows={5}
                placeholder="Describe your dream space, requirements, timeline…"
                value={form.message} onChange={handleChange}
                className="form-input" style={{ resize: "vertical" }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{
              width: "100%", fontSize: ".82rem", textAlign: "center",
              background: submitted ? "#2a9d5c" : undefined,
            }}>
              {submitted ? "✓ Enquiry Sent! We'll contact you soon." : "Send Enquiry →"}
            </button>
          </form>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-top: 60px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .form-input {
          background: var(--dark3);
          border: 1px solid rgba(255,255,255,.1);
          color: var(--white);
          padding: 14px 16px;
          font-family: 'Jost', sans-serif;
          font-size: .88rem;
          outline: none;
          transition: border-color .25s;
          width: 100%;
        }
        .form-input:focus { border-color: var(--gold); }
        .form-input option { background: var(--dark3); }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          #contact { padding: 70px 24px !important; }
        }
      `}</style>
    </>
  );
}
