// ── Inquiry / Contact form ────────────────────────────────────────────────────
export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  message: string;
}

export interface InquiryResponse {
  success: boolean;
  id?: string;
  errors?: Record<string, string[]>;
}

// ── Services ──────────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

// ── Gallery ───────────────────────────────────────────────────────────────────
export type GalleryCategory =
  | "all"
  | "weddings"
  | "corporate"
  | "exhibitions"
  | "birthdays"
  | "social"
  | "stage";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
}

// ── Testimonials ──────────────────────────────────────────────────────────────
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  eventType: string;
  rating: number; // 1–5
}

// ── Team ─────────────────────────────────────────────────────────────────────
export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

// ── Stats counter ─────────────────────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string; // e.g. "+" or "K+"
  label: string;
}

// ── Nav links ─────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ── API response utility ──────────────────────────────────────────────────────
export interface ApiResponse<T = null> {
  success: boolean;
  data?: T;
  error?: string;
}
