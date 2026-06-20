"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services-data";

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--cream)" }}>
      {/* ── Section header ─────────────────────────────────────────────── */}
      <div
        style={{
          textAlign: "center",
          padding: "7rem 1.5rem 5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <p className="eyebrow mb-4">What We Offer</p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.8rem,5vw,4.5rem)",
            color: "var(--ink)",
            lineHeight: 1.05,
            letterSpacing: "0.01em",
          }}
        >
          Our Services
        </h2>
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: "0.92rem",
            color: "var(--ink-soft)",
            lineHeight: 1.85,
            maxWidth: 520,
            margin: "1.25rem auto 0",
          }}
        >
          Whether it&apos;s an intimate gathering or a grand spectacle, we bring
          the same dedication and expertise to every event we touch.
        </p>
      </div>

      {/* ── Alternating service rows ───────────────────────────────────── */}
      {SERVICES_DATA.filter((s) => s.slug !== "destination-events").map(
        ({ slug, title, eyebrow, description, heroImage }, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={slug}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                minHeight: 480,
                borderBottom: "1px solid var(--border)",
              }}
              className="max-md:!grid-cols-1"
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  order: isEven ? 0 : 1,
                  minHeight: 360,
                }}
              >
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                {/* Hover overlay with View Service */}
                <Link
                  href={`/services/${slug}`}
                  className="group"
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(10,8,6,0)",
                    transition: "background 0.4s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(10,8,6,0.35)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(10,8,6,0)")
                  }
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#FAF7F2",
                      letterSpacing: "0.06em",
                      opacity: 0,
                      transform: "translateY(8px)",
                      transition: "all 0.35s ease",
                      border: "1px solid rgba(250,247,242,0.6)",
                      padding: "12px 32px",
                      pointerEvents: "none",
                    }}
                    className="group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    View Service →
                  </span>
                </Link>
              </div>

              {/* Text */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "4rem 5rem",
                  background:
                    i % 4 === 1 || i % 4 === 2
                      ? "var(--cream-d)"
                      : "var(--cream)",
                  order: isEven ? 1 : 0,
                }}
                className="max-md:!order-first max-md:!px-8 max-md:!py-12"
              >
                {/* Eyebrow */}
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {eyebrow}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 700,
                    fontSize: "clamp(2rem,3.5vw,3.2rem)",
                    color: "var(--ink)",
                    lineHeight: 1.05,
                    letterSpacing: "0.01em",
                    textTransform: "uppercase",
                    marginBottom: "1.5rem",
                  }}
                >
                  {title}
                </h3>

                {/* Divider */}
                <div
                  style={{
                    width: 40,
                    height: 1,
                    background: "var(--red)",
                    marginBottom: "1.5rem",
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.9rem",
                    color: "var(--ink-soft)",
                    lineHeight: 1.9,
                    marginBottom: "2.25rem",
                    maxWidth: 440,
                  }}
                >
                  {description}
                </p>

                {/* Learn More */}
                <Link
                  href={`/services/${slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0,
                    background: "none",
                    border: "1px solid var(--ink)",
                    color: "var(--ink)",
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    padding: "12px 28px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "var(--ink)";
                    el.style.color = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "none";
                    el.style.color = "var(--ink)";
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          );
        },
      )}
    </section>
  );
}
