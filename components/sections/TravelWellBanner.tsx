"use client";

import { ArrowRight, Plane, Hotel, Map } from "lucide-react";

const FEATURES = [
  { icon: Plane, label: "Flight Bookings" },
  { icon: Hotel, label: "Hotel Stays" },
  { icon: Map, label: "Tour Packages" },
];

export default function TravelWellBanner() {
  return (
    <section
      style={{
        background: "var(--cream-d)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "5rem clamp(1.5rem,6vw,5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large text watermark */}
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "clamp(6rem,14vw,14rem)",
          color: "rgba(28,25,23,0.025)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        TravelWell
      </p>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="max-md:!grid-cols-1"
      >
        {/* Left */}
        <div>
          {/* Partner badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid var(--border)",
              padding: "6px 14px",
              marginBottom: "1.5rem",
              background: "var(--white)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--red)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 700,
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--ink-m)",
              }}
            >
              Sister Platform
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(2rem,4vw,3.4rem)",
              color: "var(--ink)",
              lineHeight: 1.05,
              marginBottom: "0.5rem",
            }}
          >
            Planning Travel for
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(2rem,4vw,3.4rem)",
              color: "var(--red)",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            Your Event?
          </h2>

          <div
            style={{
              width: 40,
              height: 1,
              background: "var(--red)",
              marginBottom: "1.5rem",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.9rem",
              color: "var(--ink-soft)",
              lineHeight: 1.9,
              marginBottom: "1rem",
            }}
          >
            For destination events, outstation guests, or travel packages tied
            to your celebration — visit our sister platform{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 700 }}>
              TravelWell Delight
            </strong>
            .
          </p>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.9rem",
              color: "var(--ink-soft)",
              lineHeight: 1.9,
              marginBottom: "2.5rem",
            }}
          >
            Book flights, hotels, tour packages, and event travel for your
            guests — all in one place. Seamlessly integrated with your Ellora
            event planning.
          </p>

          {/* Feature chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            {FEATURES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  padding: "8px 16px",
                }}
              >
                <Icon size={13} style={{ color: "var(--red)" }} />
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "var(--ink)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://travelwelldelight.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
            style={{ display: "inline-flex", gap: 10, textDecoration: "none" }}
          >
            Visit TravelWell Delight
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Right — branded card */}
        <div
          style={{
            background: "var(--ink)",
            padding: "3rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Red top border */}
          <div
            style={{
              position: "absolute",
              top: 0,
              inset: "0 0 auto 0",
              height: 3,
              background: "var(--red)",
            }}
          />

          {/* Corner decoration */}
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 48,
              height: 48,
              border: "1px solid rgba(250,247,242,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Plane size={18} style={{ color: "rgba(232,25,60,0.7)" }} />
          </div>

          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(232,25,60,0.85)",
              marginBottom: "1rem",
            }}
          >
            TravelWell Delight
          </p>

          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              color: "#FAF7F2",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            Your Complete
          </h3>
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              color: "rgba(250,247,242,0.45)",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            Travel Companion
          </h3>

          <div
            style={{
              width: 32,
              height: 1,
              background: "var(--red)",
              marginBottom: "2rem",
            }}
          />

          {[
            "Flights for all your outstation guests",
            "Hotel blocks near your event venue",
            "Curated tour packages post-event",
            "Group travel coordination",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--red)",
                  marginTop: 7,
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.875rem",
                  color: "rgba(250,247,242,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {item}
              </p>
            </div>
          ))}

          <a
            href="https://travelwelldelight.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "1rem",
              color: "var(--red)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(232,25,60,0.3)",
              paddingBottom: 2,
              marginTop: "1.5rem",
              transition: "border-color 0.2s",
            }}
          >
            Explore TravelWell Delight
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
