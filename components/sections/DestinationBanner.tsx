"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, MapPin } from "lucide-react";

interface Destination {
  name: string;
  img: string;
}

const DESTINATIONS: Destination[] = [
  {
    name: "Goa",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80",
  },

  {
    name: "Kerala",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80",
  },
  {
    name: "Udaipur",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80",
  },
  {
    name: "Shimla",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80",
  },
];

export default function DestinationBanner() {
  return (
    <section
      id="destination-events"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 620,
        }}
        className="max-md:!grid-cols-1"
      >
        {/* Left — text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5rem clamp(2rem,6vw,5rem)",
            background: "var(--ink)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: "1.5rem",
            }}
          >
            <Globe size={14} style={{ color: "var(--red)" }} />
            <p
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 700,
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--red)",
              }}
            >
              Destination Events
            </p>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(2.2rem,4vw,3.5rem)",
              color: "#FAF7F2",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            We Plan Events{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(250,247,242,0.45)",
              }}
            >
              Across India
            </em>{" "}
            & Beyond
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
              color: "rgba(250,247,242,0.65)",
              lineHeight: 1.9,
              marginBottom: "1rem",
            }}
          >
            Dream of a wedding on the backwaters of Kerala? A corporate retreat
            in the palaces of Rajasthan? A milestone celebration in the hills of
            Shimla?
          </p>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.9rem",
              color: "rgba(250,247,242,0.65)",
              lineHeight: 1.9,
              marginBottom: "2.5rem",
            }}
          >
            Ellora specialises in full destination event management handling
            venue scouting, travel logistics, guest coordination, local vendor
            management, and on-ground execution at any location across India.
          </p>

          {/* Destinations list */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            {DESTINATIONS.map(({ name }) => (
              <span
                key={name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  color: "rgba(250,247,242,0.6)",
                  border: "1px solid rgba(250,247,242,0.12)",
                  padding: "5px 14px",
                }}
              >
                <MapPin size={11} style={{ color: "var(--red)" }} />
                {name}
              </span>
            ))}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "rgba(250,247,242,0.4)",
                border: "1px solid rgba(250,247,242,0.08)",
                padding: "5px 14px",
              }}
            >
              + Many More
            </span>
          </div>

          {/* CTAs — explore detail page + jump to contact */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/destination-events"
              className="btn-red"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              Explore Destination Events
              <ArrowRight size={15} />
            </Link>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1.5px solid rgba(250,247,242,0.55)",
                color: "rgba(250,247,242,0.9)",
                background: "transparent",
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "13px 32px",
                cursor: "pointer",
                width: "fit-content",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(250,247,242,0.1)";
                el.style.borderColor = "#FAF7F2";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(250,247,242,0.55)";
              }}
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right — photo collage */}
        <div style={{ position: "relative", minHeight: 400 }}>
          {/* 2x2 grid + 1 tall */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              height: "100%",
              gap: 3,
            }}
          >
            {/* Large photo top-left spanning 2 rows */}
            <Link
              href="/services/destination-events"
              style={{
                gridRow: "1 / 3",
                position: "relative",
                overflow: "hidden",
                display: "block",
              }}
            >
              <Image
                src={DESTINATIONS[0].img}
                alt={DESTINATIONS[0].name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="25vw"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  background: "rgba(10,8,6,0.65)",
                  backdropFilter: "blur(4px)",
                  padding: "5px 12px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "0.85rem",
                    color: "#FAF7F2",
                  }}
                >
                  {DESTINATIONS[0].name}
                </p>
              </div>
            </Link>
            {/* Top right */}
            <Link
              href="/services/destination-events"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "block",
              }}
            >
              <Image
                src={DESTINATIONS[1].img}
                alt={DESTINATIONS[1].name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="25vw"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  background: "rgba(10,8,6,0.65)",
                  backdropFilter: "blur(4px)",
                  padding: "4px 10px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "0.82rem",
                    color: "#FAF7F2",
                  }}
                >
                  {DESTINATIONS[1].name}
                </p>
              </div>
            </Link>
            {/* Bottom right */}
            <Link
              href="/services/destination-events"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "block",
              }}
            >
              <Image
                src={DESTINATIONS[2].img}
                alt={DESTINATIONS[2].name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="25vw"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  background: "rgba(10,8,6,0.65)",
                  backdropFilter: "blur(4px)",
                  padding: "4px 10px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "0.82rem",
                    color: "#FAF7F2",
                  }}
                >
                  {DESTINATIONS[2].name}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
