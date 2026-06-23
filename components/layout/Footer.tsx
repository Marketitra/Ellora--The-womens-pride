"use client";

import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";

const NAV = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];
const SERVICES = [
  "Weddings",
  "Corporate Events",
  "Exhibitions",
  "Birthday Parties",
  "Social Functions",
  "Stage & Decor",
];

export default function Footer() {
  const go = (href: string) =>
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  const yr = new Date().getFullYear();

  return (
    <footer id="footer" style={{ background: "var(--ink)" }}>
      {/* Red top line */}
      <div style={{ height: 2, background: "var(--red)" }} />

      <div
        className="container-ellora"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-8">
                <Image
                  src="/images/Logo_elora.jpeg"
                  alt="Ellora"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    letterSpacing: "0.18em",
                    color: "#FAF7F2",
                  }}
                >
                  ELLORA
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontWeight: 700,
                    fontSize: "0.55rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                  }}
                >
                  The Womens Pride
                </p>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "rgba(250,247,242,0.55)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Crafting moments that last a lifetime — with creativity, precision
              and passion.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(250,247,242,0.15)",
                    color: "rgba(250,247,242,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--red)";
                    el.style.color = "var(--red)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(250,247,242,0.15)";
                    el.style.color = "rgba(250,247,242,0.45)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(250,247,242,0.45)",
                marginBottom: "1.5rem",
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => go(href)}
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      color: "rgba(250,247,242,0.6)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--red)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(250,247,242,0.6)")
                    }
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(250,247,242,0.45)",
                marginBottom: "1.5rem",
              }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      color: "rgba(250,247,242,0.6)",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(250,247,242,0.45)",
                marginBottom: "1.5rem",
              }}
            >
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { l: "Email", v: "ellorathewomenspride754@gmail.com" },
                { l: "Location", v: "Nagpur, Maharashtra, India" },
              ].map(({ l, v }) => (
                <div key={l}>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(250,247,242,0.28)",
                      marginBottom: 3,
                    }}
                  >
                    {l}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontSize: "0.95rem",
                      color: "rgba(250,247,242,0.65)",
                    }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(250,247,242,0.07)" }}>
        <div
          className="container-ellora flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.72rem",
              color: "rgba(250,247,242,0.22)",
            }}
          >
            © {yr} Ellora Event Management. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "rgba(250,247,242,0.18)",
            }}
          >
            Crafting Moments That Last a Lifetime
          </p>
        </div>
      </div>
    </footer>
  );
}
