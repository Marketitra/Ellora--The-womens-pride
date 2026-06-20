import { z } from "zod";

// ── Event type options ────────────────────────────────────────────────────────
// Single source of truth for the dropdown in Contact.tsx AND server-side validation.
// If you ever change this list, the form dropdown and the validator stay in sync.
export const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Stage & Decor",
  "Catering",
  "Exhibition",
  "Birthday Party",
  "Social Function",
  "Destination Event",
  "Other",
] as const;

export type EventType = (typeof EVENT_TYPES)[number];

// ── Inquiry / Contact form schema ─────────────────────────────────────────────
// This is the single validator used by app/api/contact/route.ts.
// It re-validates everything server-side even though Contact.tsx also
// validates client-side — never trust data that arrives from the browser,
// since requests can be sent directly to the API (Postman, curl, bots)
// bypassing your UI entirely.
export const InquirySchema = z.object({
  fullName: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .trim(),

  phone: z
    .string({ required_error: "Phone number is required" })
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s\-()\\.]+$/, "Enter a valid phone number")
    .trim(),

  email: z
    .string({ required_error: "Email is required" })
    .email("Enter a valid email address")
    .max(150, "Email is too long")
    .trim()
    .toLowerCase(),

  eventType: z.enum(EVENT_TYPES, {
    errorMap: () => ({ message: "Please select an event type" }),
  }),

  eventDate: z
    .string({ required_error: "Event date is required" })
    .min(1, "Please select an event date")
    .refine((val) => {
      const date = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !isNaN(date.getTime()) && date >= today;
    }, "Event date must be today or in the future"),

  message: z
    .string({ required_error: "Message is required" })
    .min(10, "Please enter at least 10 characters")
    .max(2000, "Message is too long")
    .trim(),

  // ── Optional metadata fields ──────────────────────────────────────────────
  // These are NOT shown in the form UI — they're passed silently by the
  // frontend code to give the inquiry extra context once it lands in the DB.

  // Which service detail page the visitor was on when they enquired
  // (e.g. "catering", "destination-events"). Lets you see which service
  // pages actually generate leads. Undefined when submitted from the
  // generic homepage contact form.
  serviceSlug: z.string().optional(),

  // Where the submission originated — "website" (default), or could be
  // extended later for "whatsapp-redirect", "instagram-bio-link", etc.
  // Useful once you run multiple marketing channels and want to know
  // which one is actually converting.
  source: z.string().optional(),

  // Honeypot anti-spam field. This input exists in the form but is
  // hidden via CSS/display:none — real visitors never see or fill it.
  // Bots that auto-fill every field on a page will populate it, and
  // .max(0) means ANY non-empty value fails validation, letting the
  // API route silently reject/ignore the submission as bot traffic
  // without showing the bot an error (so it doesn't know it was caught).
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type InquiryInput = z.infer<typeof InquirySchema>;
