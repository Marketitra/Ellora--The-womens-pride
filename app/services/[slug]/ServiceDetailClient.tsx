"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Users,
  Clipboard,
  Target,
  Mic2,
  UtensilsCrossed,
  BarChart2,
  FlowerIcon,
  Lightbulb,
  Palette,
  Hammer,
  ChefHat,
  Leaf,
  Building2,
  MapPin,
  Monitor,
  Cake,
  Music,
  Gift,
  Camera,
  Heart,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/services-data";
import { SERVICES_DATA } from "@/lib/services-data";

// ── Icon map: services-data icon string → Lucide component ──────────────────
import type { LucideIcon } from "lucide-react";

const LUCIDE_MAP: Record<string, LucideIcon> = {
  "🌸": FlowerIcon,
  "💐": FlowerIcon,
  "🌹": FlowerIcon,
  "🌺": Sparkles,
  "🎵": Music,
  "🎭": Music,
  "🎤": Mic2,
  "🎨": Palette,
  "📋": Clipboard,
  "👥": Users,
  "👨‍🍳": ChefHat,
  "🍽️": UtensilsCrossed,
  "✨": Sparkles,
  "🌱": Leaf,
  "🎯": Target,
  "📊": BarChart2,
  "💡": Lightbulb,
  "🔆": Lightbulb,
  "🏗️": Hammer,
  "🏛️": Building2,
  "📍": MapPin,
  "🎂": Cake,
  "🎁": Gift,
  "📸": Camera,
  "🙏": Heart,
  "🍛": UtensilsCrossed,

  "📡": Monitor,
};

function FeatureIcon({ name }: { name: string }) {
  const Icon = LUCIDE_MAP[name] ?? Sparkles;
  return (
    <div
      style={{
        width: 44,
        height: 44,
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon size={18} color="var(--red)" />
    </div>
  );
}

export default function ServiceDetailClient({
  service,
}: {
  service: ServiceDetail;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Adjacent services for navigation
  const currentIndex = SERVICES_DATA.findIndex((s) => s.slug === service.slug);
  const prevService = SERVICES_DATA[currentIndex - 1] ?? null;
  const nextService = SERVICES_DATA[currentIndex + 1] ?? null;

  const go = () =>
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* ── Top nav bar ───────────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          inset: 0,
          height: 64,
          background: "rgba(250,247,242,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          zIndex: 50,
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/#services"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "0.95rem",
            color: "var(--ink)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          <ArrowLeft size={15} style={{ color: "var(--red)" }} />
          Back to Services
        </Link>

        <div
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 700,
            fontSize: "1.05rem",
            letterSpacing: "0.15em",
            color: "var(--ink)",
            textTransform: "uppercase",
          }}
        >
          ELLORA
        </div>

        <button
          onClick={go}
          style={{
            fontFamily: "var(--font-lato)",
            fontWeight: 700,
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--cream)",
            background: "var(--red)",
            border: "none",
            padding: "10px 22px",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Enquire Now
        </button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          height: "92vh",
          minHeight: 560,
          marginTop: 64,
        }}
      >
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,8,6,0.25) 0%, rgba(10,8,6,0.55) 55%, rgba(10,8,6,0.82) 100%)",
          }}
        />
        {/* Text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 clamp(1.5rem,6vw,6rem) 5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(232,25,60,0.9)",
              marginBottom: "1rem",
            }}
          >
            {service.eyebrow}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(3rem,7vw,6.5rem)",
              color: "#FAF7F2",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            {service.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "1rem",
              color: "rgba(250,247,242,0.75)",
              lineHeight: 1.75,
              maxWidth: 560,
              marginBottom: "2.5rem",
            }}
          >
            {service.description}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={go}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "1.05rem",
                background: "var(--red)",
                color: "#FAF7F2",
                border: "none",
                padding: "14px 40px",
                cursor: "pointer",
                letterSpacing: "0.04em",
                transition: "background 0.2s",
              }}
            >
              Book This Service
            </button>
            <Link
              href="/#gallery"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "1.05rem",
                background: "transparent",
                color: "#FAF7F2",
                border: "1.5px solid rgba(250,247,242,0.55)",
                padding: "14px 40px",
                letterSpacing: "0.04em",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* ── Long description ──────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          padding: "7rem clamp(1.5rem,6vw,6rem)",
          borderBottom: "1px solid var(--border)",
          background: "var(--cream)",
        }}
        className="max-md:grid-cols-1"
      >
        <div>
          <p className="eyebrow mb-5">About This Service</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(2rem,3.5vw,3rem)",
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            {service.tagline}
          </h2>
          <div
            style={{
              width: 40,
              height: 1,
              background: "var(--red)",
              marginBottom: "2rem",
            }}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          {service.longDesc.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "0.92rem",
                color: "var(--ink-soft)",
                lineHeight: 1.9,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* ── Features ──────────────────────────────────────────────────── */}
      <div
        style={{
          padding: "7rem clamp(1.5rem,6vw,6rem)",
          background: "var(--cream-d)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="eyebrow mb-4">What&apos;s Included</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(2rem,3.5vw,3rem)",
              color: "var(--ink)",
              lineHeight: 1.1,
            }}
          >
            Everything You Need,{" "}
            <em
              style={{
                fontWeight: 300,
                color: "var(--red)",
                fontStyle: "italic",
              }}
            >
              Nothing Left to Chance
            </em>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {service.features.map(({ icon, title, body }) => (
            <div
              key={title}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                padding: "2.25rem",
                transition: "all 0.35s ease",
              }}
              className="group editorial-card"
            >
              <div style={{ marginBottom: "1rem" }}>
                <FeatureIcon name={icon} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "var(--ink)",
                  marginBottom: "0.75rem",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.875rem",
                  color: "var(--ink-soft)",
                  lineHeight: 1.8,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Gallery ───────────────────────────────────────────────────── */}
      <div
        style={{
          padding: "7rem clamp(1.5rem,6vw,6rem)",
          background: "var(--cream)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="eyebrow mb-4">Our Work</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(2rem,3.5vw,3rem)",
              color: "var(--ink)",
              lineHeight: 1.1,
            }}
          >
            <em
              style={{
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--red)",
              }}
            >
              {service.title}
            </em>{" "}
            Portfolio
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "240px",
            gap: 6,
          }}
          className="max-sm:grid-cols-2"
        >
          {service.gallery.map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                overflow: "hidden",
                gridRow: i === 0 || i === 3 ? "span 2" : "span 1",
              }}
            >
              <Image
                src={src}
                alt={`${service.title} ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width:640px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Process ───────────────────────────────────────────────────── */}
      <div
        style={{
          padding: "7rem clamp(1.5rem,6vw,6rem)",
          background: "var(--cream-m)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="eyebrow mb-4">How It Works</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(2rem,3.5vw,3rem)",
              color: "var(--ink)",
              lineHeight: 1.1,
            }}
          >
            Our Process
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {service.process.map(({ step, title, body }, i) => (
            <div key={step} style={{ position: "relative" }}>
              {/* Connector line */}
              {i < service.process.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: "calc(100% - 1rem)",
                    width: "2rem",
                    height: 1,
                    background: "var(--border)",
                    display: "none",
                  }}
                  className="lg:block"
                />
              )}
              <div
                style={{
                  width: 40,
                  height: 40,
                  border: "1.5px solid var(--red)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "var(--red)",
                  }}
                >
                  {step}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "var(--ink)",
                  marginBottom: "0.65rem",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.875rem",
                  color: "var(--ink-soft)",
                  lineHeight: 1.8,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <div
        style={{
          padding: "7rem clamp(1.5rem,6vw,6rem)",
          background: "var(--cream)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="eyebrow mb-4">Common Questions</p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 700,
                fontSize: "clamp(2rem,3.5vw,3rem)",
                color: "var(--ink)",
                lineHeight: 1.1,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {service.faqs.map(({ q, a }, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--border)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.5rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 600,
                      fontSize: "1.15rem",
                      color: "var(--ink)",
                      lineHeight: 1.3,
                    }}
                  >
                    {q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp
                      size={18}
                      style={{ color: "var(--red)", flexShrink: 0 }}
                    />
                  ) : (
                    <ChevronDown
                      size={18}
                      style={{ color: "var(--ink-m)", flexShrink: 0 }}
                    />
                  )}
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: "1.5rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.9rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.85,
                      }}
                    >
                      {a}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </div>
      </div>

      {/* ── Enquiry CTA ───────────────────────────────────────────────── */}
      <div
        id="contact-form"
        style={{
          padding: "7rem clamp(1.5rem,6vw,6rem)",
          background: "var(--ink)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontWeight: 700,
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(232,25,60,0.85)",
            marginBottom: "1.25rem",
          }}
        >
          Ready to Begin
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 700,
            fontSize: "clamp(2.2rem,4vw,3.5rem)",
            color: "#FAF7F2",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
          }}
        >
          Let&apos;s Plan Your{" "}
          <em
            style={{
              fontWeight: 300,
              color: "rgba(250,247,242,0.5)",
              fontStyle: "italic",
            }}
          >
            {service.title}
          </em>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: "0.92rem",
            color: "rgba(250,247,242,0.6)",
            lineHeight: 1.85,
            maxWidth: 480,
            margin: "0 auto 2.5rem",
          }}
        >
          Get in touch with our team and let&apos;s start crafting something
          extraordinary together.
        </p>
        <Link
          href="/#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "1.05rem",
            background: "var(--red)",
            color: "#FAF7F2",
            padding: "15px 44px",
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "background 0.2s",
          }}
        >
          Send an Enquiry
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* ── Service navigation ────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: "1px solid var(--border)",
        }}
      >
        {prevService ? (
          <Link
            href={`/services/${prevService.slug}`}
            style={{
              padding: "2.5rem 3rem",
              textDecoration: "none",
              borderRight: "1px solid var(--border)",
              background: "var(--cream)",
              transition: "background 0.2s",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 700,
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--ink-m)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <ArrowLeft size={12} style={{ color: "var(--red)" }} /> Previous
            </span>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 700,
                fontSize: "1.35rem",
                color: "var(--ink)",
              }}
            >
              {prevService.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextService ? (
          <Link
            href={`/services/${nextService.slug}`}
            style={{
              padding: "2.5rem 3rem",
              textDecoration: "none",
              background: "var(--cream-d)",
              transition: "background 0.2s",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "flex-end",
              textAlign: "right",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 700,
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--ink-m)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Next <ArrowRight size={12} style={{ color: "var(--red)" }} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 700,
                fontSize: "1.35rem",
                color: "var(--ink)",
              }}
            >
              {nextService.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
