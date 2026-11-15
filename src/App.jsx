
import React from "react";

const gold = "#d6b36a";

const services = [
  "Residential Interior Design",
  "Living Room Interior",
  "Bedroom Interior",
  "Kitchen Design",
  "Wardrobe Design",
  "False Ceiling Design",
  "TV Unit & Wall Paneling",
  "Office Interior",
  "Restaurant, Cafe & Showroom Decoration"
];

export default function App() {
  return (
    <main style={{ background: "#080808", color: "#f5f0e6", fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      <header style={{ textAlign: "center", padding: "35px 15px", borderBottom: "1px solid #765d32" }}>
        <h1 style={{ color: gold, fontFamily: "Georgia, serif", letterSpacing: 7 }}>AUREVIA</h1>
        <p style={{ letterSpacing: 6 }}>INTERIORS</p>
        <p style={{ color: gold }}>Design Beyond Imagination.</p>
      </header>

      <nav style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", padding: 22 }}>
        {["Home", "About", "Services", "Packages", "Contact"].map(x => (
          <a key={x} href={"#" + x.toLowerCase()} style={{ color: gold, textDecoration: "none" }}>{x}</a>
        ))}
      </nav>

      <section id="home" style={{ textAlign: "center", padding: "90px 7%", background: "linear-gradient(135deg,#251d10,#080808)" }}>
        <p style={{ color: gold, letterSpacing: 4 }}>LUXURY INTERIOR DESIGN STUDIO</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(38px,7vw,65px)", fontWeight: "normal" }}>
          Design Beyond<br /><span style={{ color: gold }}>Imagination.</span>
        </h2>
        <p style={{ color: "#ccc", lineHeight: 1.9 }}>We transform spaces into timeless experiences through thoughtful design, refined details and exceptional craftsmanship.</p>
        <a href="#contact" style={{ display: "inline-block", background: gold, color: "#080808", padding: "15px 25px", textDecoration: "none", marginTop: 20 }}>BOOK A CONSULTATION</a>
      </section>

      <section id="about" style={{ padding: "65px 7%", textAlign: "center" }}>
        <h2 style={{ color: gold, fontFamily: "Georgia, serif" }}>About AUREVIA</h2>
        <p style={{ color: "#ccc", lineHeight: 1.9 }}>AUREVIA INTERIORS creates elegant, functional and timeless spaces. We combine creativity, comfort and attention to detail to bring your vision to life.</p>
      </section>

      <section id="services" style={{ padding: "65px 7%", background: "#111", textAlign: "center" }}>
        <h2 style={{ color: gold, fontFamily: "Georgia, serif" }}>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 16 }}>
          {services.map(x => <div key={x} style={{ padding: 25, border: "1px solid #765d32", background: "#171717" }}>{x}</div>)}
        </div>
      </section>

      <section id="packages" style={{ padding: "65px 7%", textAlign: "center" }}>
        <h2 style={{ color: gold, fontFamily: "Georgia, serif" }}>Our Packages</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 15, flexWrap: "wrap" }}>
          {["Premium", "Signature", "Elite"].map(x => <div key={x} style={{ border: "1px solid #765d32", padding: 25, minWidth: 150, color: gold }}>{x}</div>)}
        </div>
      </section>

      <section id="contact" style={{ padding: "65px 7%", background: "#111", textAlign: "center" }}>
        <h2 style={{ color: gold, fontFamily: "Georgia, serif" }}>Let's Create Your Space</h2>
        <p>KAZI ABDULLAH IBRAHIM</p>
        <p>Call: 01986894752</p>
        <p>WhatsApp: 01789851118</p>
        <p>Email: Aureviainterior@gmail.com</p>
        <a href="https://wa.me/8801789851118" style={{ display: "inline-block", background: gold, color: "#080808", padding: 15, textDecoration: "none" }}>CHAT ON WHATSAPP</a>
      </section>

      <footer style={{ textAlign: "center", padding: 25, borderTop: "1px solid #765d32", color: "#b9a98c" }}>
        © 2026 AUREVIA INTERIORS. All Rights Reserved.
      </footer>
    </main>
  );
}
