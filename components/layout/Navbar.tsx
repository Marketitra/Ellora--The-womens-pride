"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const obs = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, []);

  const go = useCallback((href: string) => {
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-500
        ${scrolled ? "navbar-light py-3" : "bg-transparent py-5"}
      `}
      >
        <div className="container-ellora flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => go("#hero")}
            className="flex items-center gap-3 focus:outline-none"
          >
            <div className="relative w-10 h-8">
              <Image
                src="/images/Logo_elora.jpeg"
                alt="Ellora"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-bold text-[1.1rem] tracking-[0.18em] transition-colors duration-300
                ${scrolled ? "text-ink" : "text-white"}`}
              >
                ELLORA
              </span>
              <span className="text-red text-[0.55rem] tracking-[0.28em] uppercase font-body font-bold">
                The Womens Pride
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => go(href)}
                className={`nav-link ${scrolled ? "" : "nav-link-light"} ${active === href.slice(1) ? "active" : ""}`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button onClick={() => go("#contact")} className="btn-quote">
              <span className="btn-quote-fill" />
              <span className="btn-quote-shimmer" />
              <span className="btn-quote-text">Get a Quote</span>
              <span className="btn-quote-arrow">→</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-1.5 transition-colors duration-200 ${scrolled ? "text-ink" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col lg:hidden transition-all duration-500
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "var(--cream)" }}
      >
        <div className="h-0.5 bg-red" />
        <div className="flex-1 flex flex-col justify-center px-10 gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red mb-8" />
          {NAV_LINKS.map(({ label, href }, i) => (
            <button
              key={href}
              onClick={() => go(href)}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "2.6rem",
                fontWeight: active === href.slice(1) ? 600 : 400,
                animationDelay: `${i * 45}ms`,
              }}
              className={`text-left py-2 border-b border-border transition-colors duration-200
                ${active === href.slice(1) ? "text-red" : "text-ink hover:text-red"}`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => go("#contact")}
            className="btn-red mt-8 w-full justify-center"
          >
            Get a Quote
          </button>
        </div>
        <div className="px-10 pb-10">
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              color: "var(--muted)",
              fontSize: "1rem",
            }}
          >
            Crafting Moments That Last a Lifetime
          </p>
        </div>
      </div>
    </>
  );
}
