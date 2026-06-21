"use client";

import Image from "next/image";
import { Palette, Clock, Award, Heart } from "lucide-react";

const ITEMS = [
  {
    icon: Palette,
    num: "01",
    title: "Premium Aesthetics",
    body: "Every visual element is curated with an artist's eye — from florals to lighting, we create spaces that look extraordinary and feel magical.",
  },
  {
    icon: Clock,
    num: "02",
    title: "On-Time Delivery",
    body: "Timelines are sacred to us. Meticulous planning ensures every event unfolds exactly as envisioned, without a single minute's delay.",
  },
  {
    icon: Award,
    num: "03",
    title: "Expert Team",
    body: "Our seasoned team brings years of hands-on experience across all event types, handling every complexity with calm professionalism.",
  },
  {
    icon: Heart,
    num: "04",
    title: "Client-Centric",
    body: "Your vision is our blueprint. We listen deeply, collaborate closely, and go above and beyond to bring your dream event to life.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "var(--section-light)",
        minHeight: "900px",
      }}
    >
      {/* Decorative Floral Frame */}
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <Image
          src="/images/why_us2.jpg"
          alt=""
          width={1600}
          height={1000}
          priority
          className="w-[92%] max-w-[1450px] h-auto"
          style={{
            opacity: 0.8,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <p className="eyebrow mb-4">WHY CHOOSE US</p>

          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(3rem,6vw,5.5rem)",
              color: "var(--ink)",
              lineHeight: 1.05,
            }}
          >
            What Sets Ellora{" "}
            <em
              style={{
                color: "var(--red)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Apart
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {ITEMS.map(({ icon: Icon, num, title, body }) => (
            <div
              key={title}
              className="group p-10 min-h-[360px] flex flex-col"
              style={{
                background: "rgba(255,255,255,0.78)",
                backdropFilter: "blur(10px)",
                animation: "fadeInUp 0.6s ease forwards",
                border: "1px solid var(--border)",
                transition: "all 0.35s ease",
              }}
            >
              {/* Top Row */}
              <div className="flex justify-between items-start mb-8">
                <div
                  className="w-14 h-14 flex items-center justify-center"
                  style={{
                    border: "1px solid var(--border)",
                  }}
                >
                  <Icon
                    size={20}
                    style={{
                      color: "var(--red)",
                    }}
                  />
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 700,
                    fontSize: "4rem",
                    lineHeight: 1,
                    color: "rgba(0,0,0,0.05)",
                  }}
                >
                  {num}
                </span>
              </div>

              {/* Title */}
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "var(--ink)",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h3>

              {/* Body */}
              <p
                style={{
                  color: "var(--ink-soft)",
                  lineHeight: 1.9,
                  fontSize: "1rem",
                }}
              >
                {body}
              </p>

              {/* Hover Line */}
              <div
                className="mt-auto h-px w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: "var(--red)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
