export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  image: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: "wedding",
    title: "Wedding Photography",
    subtitle: "Your Story, Authentically Told",
    description:
      "Every wedding is a unique narrative. We immerse ourselves in your day — capturing the stolen glances, the tears of joy, the laughter that echoes through the venue. Our approach is unobtrusive yet intimate, ensuring every genuine moment is preserved with cinematic beauty.",
    includes: [
      "Full-day coverage",
      "Second photographer",
      "Engagement session",
      "Online gallery",
      "High-resolution edited images",
      "Premium photo album",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    slug: "wedding-photography",
  },
  {
    id: "prewedding",
    title: "Pre-Wedding Photography",
    subtitle: "The Chapter Before Forever",
    description:
      "Pre-wedding sessions are about connection — capturing the chemistry and intimacy between two people in love. We scout locations that complement your story and create cinematic imagery that sets the tone for the journey ahead.",
    includes: [
      "Location scouting",
      "2–3 hour session",
      "Multiple outfit changes",
      "Online gallery",
      "High-resolution edited images",
    ],
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
    slug: "pre-wedding-photography",
  },
  {
    id: "portrait",
    title: "Portrait Photography",
    subtitle: "See Yourself, Truly",
    description:
      "Whether personal or professional, our portrait sessions go beyond surface-level imagery. We work with natural light and authentic expression to reveal character, confidence, and vulnerability in every frame.",
    includes: [
      "1–2 hour session",
      "Studio or location",
      "Professional retouching",
      "Online gallery",
      "High-resolution edited images",
    ],
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    slug: "portrait-photography",
  },
  {
    id: "event",
    title: "Event Photography",
    subtitle: "Every Detail, Every Emotion",
    description:
      "From corporate galas to intimate celebrations, we document the energy, atmosphere, and human connections that make your event extraordinary. Our editorial approach ensures every photograph feels intentional and refined.",
    includes: [
      "Full event coverage",
      "Multiple photographers available",
      "Same-day preview images",
      "Online gallery",
      "High-resolution edited images",
    ],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    slug: "event-photography",
  },
  {
    id: "editorial",
    title: "Editorial Photography",
    subtitle: "Where Vision Meets Craft",
    description:
      "Editorial photography demands a unique blend of technical precision and creative vision. We collaborate with designers, stylists, and subjects to produce imagery that commands attention and tells a story through light, composition, and authentic expression.",
    includes: [
      "Creative direction",
      "Studio or on-location",
      "Professional retouching",
      "Commercial licensing",
      "High-resolution edited images",
    ],
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    slug: "editorial-photography",
  },
  {
    id: "custom",
    title: "Custom Sessions",
    subtitle: "Your Vision, Realized",
    description:
      "Have something specific in mind? We love collaborating on bespoke photography experiences — from conceptual art projects to family legacies, travel documentation to brand storytelling. Let's create something extraordinary together.",
    includes: [
      "Custom planning & consultation",
      "Flexible duration",
      "Location of your choice",
      "Online gallery",
      "High-resolution edited images",
    ],
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
    slug: "custom-sessions",
  },
];
