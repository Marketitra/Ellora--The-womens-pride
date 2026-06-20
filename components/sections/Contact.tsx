"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { EVENT_TYPES } from "@/lib/validations";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  message: string;
  honeypot: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INIT: FormData = {
  fullName: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  message: "",
  honeypot: "",
};

// ── WhatsApp helper — builds a properly encoded chat link with intro text ──────
function buildWhatsAppLink(message: string): string {
  const number = process.env.NEXT_PUBLIC_WA_NUMBER ?? "919876543210";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(INIT);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [apiErr, setApiErr] = useState("");

  const set =
    (k: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setErrors((v) => ({ ...v, [k]: undefined }));
      setApiErr("");
    };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (form.fullName.trim().length < 2) e.fullName = "Please enter your name";
    if (form.phone.trim().length < 7) e.phone = "Enter a valid phone number";
    if (!form.email.includes("@")) e.email = "Enter a valid email address";
    if (!form.eventType) e.eventType = "Please select an event type";
    if (!form.eventDate) e.eventDate = "Please select an event date";
    if (form.message.trim().length < 10)
      e.message = "Please enter at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (form.honeypot || !validate()) return;
    setLoading(true);
    setApiErr("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "website" }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setDone(true);
        setForm(INIT);
      } else if (res.status === 429) {
        setApiErr("Too many requests. Please try again in a few minutes.");
      } else if (data.errors) {
        const fieldErrors: FormErrors = {};
        Object.entries(data.errors).forEach(([k, v]) => {
          fieldErrors[k as keyof FormData] = (v as string[])[0];
        });
        setErrors(fieldErrors);
      } else {
        setApiErr(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setApiErr("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ background: "var(--cream-d)" }}
      className="section-pad"
    >
      <div className="container-ellora">
        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: "4rem" }}>
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(2.2rem,5vw,3.8rem)",
              color: "var(--ink)",
              lineHeight: 1.05,
            }}
          >
            Let&apos;s Plan Your{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--red)",
              }}
            >
              Next Event
            </em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            {done ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5rem 0",
                  textAlign: "center",
                  gap: "1.25rem",
                }}
              >
                <CheckCircle size={48} style={{ color: "var(--red)" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 700,
                    fontSize: "2rem",
                    color: "var(--ink)",
                  }}
                >
                  Thank You!
                </h3>
                <p
                  style={{
                    color: "var(--ink-soft)",
                    fontSize: "0.9rem",
                    maxWidth: 340,
                    lineHeight: 1.8,
                  }}
                >
                  We&apos;ve received your inquiry and will get back to you
                  within 24 hours. Check your email for a confirmation.
                </p>
                <button
                  onClick={() => setDone(false)}
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.72rem",
                    color: "var(--red)",
                    textDecoration: "underline",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.05em",
                  }}
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                }}
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={set("honeypot")}
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                {/* Full Name */}
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={set("fullName")}
                    className="input-field"
                  />
                  {errors.fullName && (
                    <p className="input-error">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone *</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={set("phone")}
                    className="input-field"
                  />
                  {errors.phone && (
                    <p className="input-error">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={set("email")}
                    className="input-field"
                  />
                  {errors.email && (
                    <p className="input-error">{errors.email}</p>
                  )}
                </div>

                {/* Event Type */}
                <div>
                  <label style={labelStyle}>Event Type *</label>
                  <select
                    value={form.eventType}
                    onChange={set("eventType")}
                    className="input-field"
                  >
                    <option value="">Select event type</option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="input-error">{errors.eventType}</p>
                  )}
                </div>

                {/* Event Date */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Event Date *</label>
                  <input
                    type="date"
                    value={form.eventDate}
                    onChange={set("eventDate")}
                    min={new Date().toISOString().split("T")[0]}
                    className="input-field"
                  />
                  {errors.eventDate && (
                    <p className="input-error">{errors.eventDate}</p>
                  )}
                </div>

                {/* Message */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Your Message *</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your event — guest count, venue preferences, vision..."
                    className="input-field"
                    style={{ resize: "none" }}
                  />
                  {errors.message && (
                    <p className="input-error">{errors.message}</p>
                  )}
                </div>

                {/* API Error */}
                {apiErr && (
                  <div style={{ gridColumn: "1 / -1" }}>
                    <p
                      style={{
                        color: "var(--red)",
                        fontSize: "0.85rem",
                        background: "var(--red-light)",
                        padding: "12px 16px",
                        border: "1px solid var(--red-muted)",
                      }}
                    >
                      {apiErr}
                    </p>
                  </div>
                )}

                {/* Submit */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <button
                    onClick={submit}
                    disabled={loading}
                    className="btn-red w-full justify-center"
                    style={{
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Inquiry →"
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div
            className="lg:col-span-2"
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  color: "var(--ink)",
                  marginBottom: "1.5rem",
                }}
              >
                Contact Details
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "ellorathewomenspride754@gmail.com",
                    href: "mailto:ellorathewomenspride754@gmail.com",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Nagpur , Maharashtra, India",
                    href: "#",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      textDecoration: "none",
                    }}
                    className="group"
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--red)";
                        el.style.background = "var(--red-light)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--border)";
                        el.style.background = "transparent";
                      }}
                    >
                      <Icon size={15} style={{ color: "var(--red)" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-lato)",
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--ink-m)",
                          marginBottom: 3,
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontStyle: "italic",
                          fontWeight: 500,
                          fontSize: "1rem",
                          color: "var(--ink)",
                          transition: "color 0.2s",
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp — pre-filled intro message */}
            <a
              href={buildWhatsAppLink(
                "Hi! I wanted to know about your event management services.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quote"
              style={{ justifyContent: "center" }}
            >
              <span className="btn-quote-fill" />
              <span className="btn-quote-shimmer" />
              <span className="btn-quote-text">Chat on WhatsApp</span>
              <span className="btn-quote-arrow">→</span>
            </a>

            {/* Social */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--ink-m)",
                  marginBottom: "1rem",
                }}
              >
                Follow Us
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Youtube, label: "YouTube", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: 40,
                      height: 40,
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--ink-m)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--red)";
                      el.style.color = "var(--red)";
                      el.style.background = "var(--red-light)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--ink-m)";
                      el.style.background = "transparent";
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-lato)",
  fontSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--ink-s)",
  marginBottom: "0.5rem",
};
