"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from "lucide-react";

type Cat =
  | "all"
  | "weddings"
  | "corporate"
  | "exhibitions"
  | "birthdays"
  | "social"
  | "stage";

const FILTERS: { label: string; value: Cat }[] = [
  { label: "All Works", value: "all" },
  { label: "Weddings", value: "weddings" },
  { label: "Corporate", value: "corporate" },
  { label: "Exhibitions", value: "exhibitions" },
  { label: "Birthdays", value: "birthdays" },
  { label: "Social", value: "social" },
  { label: "Stage & Decor", value: "stage" },
];

// span controls masonry sizing: "tall" = 2 rows, "wide" = 2 cols, "normal" = 1x1
const IMGS: {
  id: number;
  src: string;
  alt: string;
  cat: Exclude<Cat, "all">;
  span: "tall" | "wide" | "normal";
}[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85",
    alt: "Elegant wedding reception",
    cat: "weddings",
    span: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85",
    alt: "Corporate conference",
    cat: "corporate",
    span: "normal",
  },
  {
    id: 3,
    src: "/images/stagedecorImg 1.jpg",
    alt: "Stage & lighting decor",
    cat: "stage",
    span: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85",
    alt: "Wedding banquet hall",
    cat: "weddings",
    span: "wide",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=85",
    alt: "Gala dinner setup",
    cat: "corporate",
    span: "normal",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85",
    alt: "Birthday celebration",
    cat: "birthdays",
    span: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&q=85",
    alt: "Exhibition hall setup",
    cat: "exhibitions",
    span: "normal",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=85",
    alt: "Social gathering event",
    cat: "social",
    span: "normal",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&q=85",
    alt: "Floral stage arrangement",
    cat: "stage",
    span: "wide",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=900&q=85",
    alt: "Wedding ceremony aisle",
    cat: "weddings",
    span: "normal",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=85",
    alt: "Birthday party décor",
    cat: "birthdays",
    span: "normal",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=85",
    alt: "Social event crowd",
    cat: "social",
    span: "normal",
  },
];

export default function Gallery() {
  const [cat, setCat] = useState<Cat>("all");
  const [lb, setLb] = useState<number | null>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [_prevCat, setPrevCat] = useState<Cat>("all");
  const [animating, setAnimating] = useState(false);
  const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const imgs = cat === "all" ? IMGS : IMGS.filter((i) => i.cat === cat);
  const lbImg = lb !== null ? (imgs.find((i) => i.id === lb) ?? null) : null;
  const lbIdx = lb !== null ? imgs.findIndex((i) => i.id === lb) : -1;

  // Intersection observer for scroll-in animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = Number((e.target as HTMLElement).dataset.id);
            setVisible((v) => new Set([...v, id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    itemRefs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [cat]);

  // Filter change animation
  const handleFilter = (val: Cat) => {
    if (val === cat) return;
    setAnimating(true);
    setPrevCat(cat);
    setTimeout(() => {
      setCat(val);
      setVisible(new Set());
      setAnimating(false);
    }, 280);
  };

  // Keyboard nav in lightbox
  useEffect(() => {
    if (lb === null) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && lbIdx > 0) setLb(imgs[lbIdx - 1].id);
      if (e.key === "ArrowRight" && lbIdx < imgs.length - 1)
        setLb(imgs[lbIdx + 1].id);
      if (e.key === "Escape") setLb(null);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [lb, lbIdx, imgs]);

  // Lock body scroll on lightbox
  useEffect(() => {
    document.body.style.overflow = lb !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lb]);

  return (
    <section
      id="gallery"
      className="section-pad"
      style={{ background: "var(--cream)" }}
    >
      <div className="container-ellora">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-3">Our Portfolio</p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 700,
                fontSize: "clamp(2.4rem,5vw,4rem)",
                lineHeight: 1.05,
                color: "var(--ink)",
              }}
            >
              Events We&apos;ve{" "}
              <em style={{ fontWeight: 300, color: "var(--red)" }}>
                Brought to Life
              </em>
            </h2>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hidden md:inline-flex items-center gap-2 group shrink-0"
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--ink)",
              }}
              className="group-hover:text-red transition-colors duration-200"
            >
              Commission an Event
            </span>
            <ArrowRight
              size={14}
              className="text-red transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* ── Filter tabs ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => handleFilter(value)}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                fontWeight: cat === value ? 600 : 400,
                letterSpacing: "0.02em",
                padding: "7px 20px",
                border: `1.5px solid ${cat === value ? "var(--red)" : "var(--border)"}`,
                color: cat === value ? "#fff" : "var(--ink-s)",
                background: cat === value ? "var(--red)" : "transparent",
                transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Masonry grid ────────────────────────────────────────────────── */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "200px",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(12px)" : "translateY(0)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
          }}
        >
          {imgs.map((img, i) => {
            const isVisible = visible.has(img.id);
            const gridStyle: React.CSSProperties = {
              gridRow: img.span === "tall" ? "span 2" : "span 1",
              gridColumn: img.span === "wide" ? "span 2" : "span 1",
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0) scale(1)"
                : "translateY(24px) scale(0.97)",
              transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 55}ms,
                           transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 55}ms`,
            };

            return (
              <div
                key={img.id}
                ref={(el) => {
                  if (el) itemRefs.current.set(img.id, el);
                  else itemRefs.current.delete(img.id);
                }}
                data-id={img.id}
                onClick={() => setLb(img.id)}
                className="group relative overflow-hidden cursor-pointer"
                style={gridStyle}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width:768px) 50vw, 25vw"
                />

                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{ background: "rgba(26,23,20,0)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(26,23,20,0.42)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(26,23,20,0)")
                  }
                />

                {/* Zoom icon — center */}
                <div
                  className="absolute inset-0 flex items-center justify-center
                                opacity-0 group-hover:opacity-100 transition-all duration-400
                                scale-90 group-hover:scale-100"
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      border: "1.5px solid rgba(255,255,255,0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <ZoomIn size={18} color="white" />
                  </div>
                </div>

                {/* Caption — slide up */}
                <div
                  className="absolute inset-x-0 bottom-0 p-4 translate-y-full
                             group-hover:translate-y-0 transition-transform duration-400"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,23,20,0.82), transparent)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      color: "rgba(250,247,242,0.9)",
                    }}
                  >
                    {img.alt}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(200,16,46,0.85)",
                      marginTop: 3,
                    }}
                  >
                    {img.cat}
                  </p>
                </div>

                {/* Number label */}
                <div
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        {/* Item count */}
        <p
          className="mt-6 text-right"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: "var(--muted)",
          }}
        >
          Showing {imgs.length} of {IMGS.length} events
        </p>
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      {lbImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "rgba(10,8,6,0.97)",
            backdropFilter: "blur(12px)",
          }}
          onClick={() => setLb(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLb(null)}
            className="absolute top-5 right-6 z-10 transition-all duration-200
                       hover:rotate-90"
            style={{ color: "rgba(250,247,242,0.55)" }}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <div
            className="absolute top-5 left-1/2 -translate-x-1/2 z-10"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "0.85rem",
              color: "rgba(250,247,242,0.35)",
            }}
          >
            {lbIdx + 1} &nbsp;/&nbsp; {imgs.length}
          </div>

          {/* Prev */}
          {lbIdx > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLb(imgs[lbIdx - 1].id);
              }}
              className="absolute left-4 sm:left-8 z-10 transition-all duration-200
                         hover:scale-110"
              style={{
                width: 44,
                height: 44,
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.55)",
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Next */}
          {lbIdx < imgs.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLb(imgs[lbIdx + 1].id);
              }}
              className="absolute right-4 sm:right-8 z-10 transition-all duration-200
                         hover:scale-110"
              style={{
                width: 44,
                height: 44,
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.55)",
              }}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-6"
            style={{ maxHeight: "82vh", aspectRatio: "16/10" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lbImg.src.replace("w=900", "w=1600")}
              alt={lbImg.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption bar */}
          <div
            className="absolute bottom-0 inset-x-0 px-8 py-6 flex items-end justify-between"
            style={{
              background:
                "linear-gradient(to top, rgba(10,8,6,0.75), transparent)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "1.2rem",
                  color: "rgba(250,247,242,0.85)",
                }}
              >
                {lbImg.alt}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(200,16,46,0.8)",
                  marginTop: 4,
                }}
              >
                {lbImg.cat}
              </p>
            </div>

            {/* Thumbnail strip */}
            <div className="hidden sm:flex gap-2">
              {imgs.slice(Math.max(0, lbIdx - 2), lbIdx + 3).map((thumb) => (
                <div
                  key={thumb.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLb(thumb.id);
                  }}
                  className="relative cursor-pointer transition-all duration-200"
                  style={{
                    width: 52,
                    height: 36,
                    border: `1.5px solid ${thumb.id === lbImg.id ? "var(--red)" : "rgba(255,255,255,0.15)"}`,
                    opacity: thumb.id === lbImg.id ? 1 : 0.5,
                    transform:
                      thumb.id === lbImg.id ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <Image
                    src={thumb.src.replace("w=900", "w=200")}
                    alt={thumb.alt}
                    fill
                    className="object-cover"
                    sizes="52px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
