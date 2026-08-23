import { Hero } from "@/components/Hero";
import { FeaturedGallery } from "@/components/FeaturedGallery";
import { AboutPreview } from "@/components/AboutPreview";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Testimonials } from "@/components/Testimonials";
import { HomeCTA } from "@/components/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedGallery />
      <AboutPreview />
      <ServicesPreview />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
