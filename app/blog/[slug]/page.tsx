import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    notFound();
  }

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost =
    postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  // Parse content into paragraphs and headings
  const contentBlocks = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Cover Image */}
      <section className="relative pt-20 md:pt-24">
        <div className="relative aspect-[21/9] md:aspect-[3/1] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />
        </div>
      </section>

      {/* Article */}
      <article className="bg-noir">
        <div className="mx-auto max-w-3xl px-6 md:px-10 -mt-20 md:-mt-28 relative z-10">
          <ScrollReveal>
            <header className="mb-12">
              <span className="text-label block mb-4">{post.category}</span>
              <h1 className="text-display-md text-ivory">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-5 mt-6 text-[0.75rem] text-silver">
                <span className="flex items-center gap-1.5">
                  <User size={12} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="prose-custom space-y-6">
              {contentBlocks.map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="font-[family-name:var(--font-playfair)] text-2xl text-ivory mt-12 mb-4"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("**") && block.endsWith("**")) {
                  return (
                    <p key={i} className="text-body font-medium text-ivory/80">
                      {block.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-body leading-relaxed">
                    {block}
                  </p>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="border-t border-white/10 mt-16 pt-12" />

          {/* Navigation */}
          <nav className="flex items-center justify-between pb-24" aria-label="Blog post navigation">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-3 text-silver hover:text-ivory transition-colors duration-300"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <div>
                  <span className="text-[0.6rem] tracking-[0.15em] uppercase text-champagne/60 block mb-1">
                    Previous
                  </span>
                  <span className="text-sm font-[family-name:var(--font-playfair)]">
                    {prevPost.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-3 text-right text-silver hover:text-ivory transition-colors duration-300"
              >
                <div>
                  <span className="text-[0.6rem] tracking-[0.15em] uppercase text-champagne/60 block mb-1">
                    Next
                  </span>
                  <span className="text-sm font-[family-name:var(--font-playfair)]">
                    {nextPost.title}
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </article>
    </>
  );
}
