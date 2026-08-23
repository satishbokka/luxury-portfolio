import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Stories, insights, and behind-the-scenes from ${siteConfig.name}. Exploring the art and craft of photography.`,
};

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal>
            <SectionHeading
              label="Journal"
              title="Stories & Insights"
              description="Thoughts on the craft, behind-the-scenes stories, and insights from our work in photography."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 md:pb-32 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <article className="group">
                  <Link href={`/blog/${post.slug}`} className="block" data-cursor="Open">
                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-all duration-500" />
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[0.6rem] tracking-[0.15em] uppercase text-champagne">
                        {post.category}
                      </span>
                      <span className="text-[0.65rem] text-silver/50 flex items-center gap-1">
                        <Calendar size={10} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="font-[family-name:var(--font-playfair)] text-xl text-ivory group-hover:text-champagne transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-body-sm mt-3 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <Clock size={12} className="text-silver/50" />
                      <span className="text-[0.7rem] text-silver/50">
                        {post.readTime}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-2 text-champagne text-[0.6875rem] tracking-[0.15em] uppercase mt-5 group-hover:gap-3 transition-all duration-300">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
