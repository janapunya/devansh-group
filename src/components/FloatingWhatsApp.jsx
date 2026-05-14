export default function FloatingWhatsApp() {
  return (
    <>
      <a
        href="https://wa.me/919876543210?text=Hello%20Devansh%20Group%2C%20I%27m%20interested%20in%20your%20interior%20design%20services."
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: "fixed", bottom: 32, right: 32, zIndex: 888,
          width: 56, height: 56, borderRadius: "50%",
          background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none", fontSize: "1.5rem",
          boxShadow: "0 4px 20px rgba(37,211,102,.45)",
          animation: "pulse 2.5s infinite",
          transition: "transform .2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        💬
      </a>
      <style>{`
        @keyframes pulse {
          0%,100% { box-shadow: 0 4px 20px rgba(37,211,102,.45); }
          50%      { box-shadow: 0 4px 36px rgba(37,211,102,.7); }
        }
      `}</style>
    </>
  );
}
