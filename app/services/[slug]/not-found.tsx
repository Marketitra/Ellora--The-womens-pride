import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-lato)",
          fontWeight: 700,
          fontSize: "0.65rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--red)",
          marginBottom: "1rem",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-cormorant)",
          fontWeight: 700,
          fontSize: "clamp(2.5rem,5vw,4rem)",
          color: "var(--ink)",
          lineHeight: 1.1,
          marginBottom: "1rem",
        }}
      >
        Service Not Found
      </h1>
      <p
        style={{
          fontFamily: "var(--font-lato)",
          fontSize: "0.9rem",
          color: "var(--ink-soft)",
          lineHeight: 1.8,
          maxWidth: 420,
          marginBottom: "2.5rem",
        }}
      >
        The service you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        href="/#services"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: "1rem",
          background: "var(--red)",
          color: "#FAF7F2",
          padding: "13px 36px",
          textDecoration: "none",
          letterSpacing: "0.04em",
        }}
      >
        View All Services
      </Link>
    </div>
  );
}
