"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream">
      <div className="container-ellora">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Images — collage like reference */}
          <div className="relative order-2 lg:order-1">
            {/* Corner accent */}
            <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 border-red z-10" />

            {/* Main image */}
            <div className="relative h-[420px] sm:h-[520px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85"
                alt="Ellora event setup"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating small image */}
            <div
              className="absolute -bottom-10 -right-5 lg:-right-10 w-44 h-44 overflow-hidden
                            border-4 border-cream shadow-lift hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80"
                alt="Wedding detail"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>

            {/* Years badge */}
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 pt-6 lg:pt-0">
            <p className="eyebrow mb-4">Our Story</p>

            <h2 className="display font-display font-bold text-ink mb-2">
              We Create Events That
            </h2>
            <h2
              className="display font-display text-red mb-6"
              style={{ fontStyle: "italic", fontWeight: 400 }}
            >
              Leave an Impression
            </h2>

            <p className="font-body text-muted text-[0.95rem] leading-[1.85] mb-4">
              Ellora Event Management was born from a passion for turning
              ordinary occasions into extraordinary memories. We combine
              meticulous planning with creative vision to deliver events that
              resonate long after the last guest has left.
            </p>
            <p className="font-body text-muted text-[0.95rem] leading-[1.85] mb-10">
              From intimate weddings to grand corporate gatherings, every event
              we handle is infused with our signature attention to detail,
              premium aesthetics, and flawless coordination — because you
              deserve nothing less.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 group"
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                }}
                className="text-ink group-hover:text-red transition-colors duration-200"
              >
                Explore Our Services
              </span>
              <ArrowRight
                size={15}
                className="text-red transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
