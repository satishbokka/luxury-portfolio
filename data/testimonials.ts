export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
}

// Note: These are placeholder testimonials for layout purposes.
// Replace with real client testimonials when available.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The photographs captured not just how our wedding looked, but how it felt. Every time we open our album, we're transported back to that day.",
    name: "Sarah & James",
    role: "Wedding, Tuscany",
  },
  {
    id: "t2",
    quote:
      "Working with Aurèle was unlike any other photography experience. There was an ease and intentionality that translated directly into the final images.",
    name: "Elena V.",
    role: "Portrait Session",
  },
  {
    id: "t3",
    quote:
      "The editorial quality of the work exceeded our expectations. Every photograph felt like it belonged in a magazine.",
    name: "Marcus & Co.",
    role: "Fashion Campaign",
  },
];
