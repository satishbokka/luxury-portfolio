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

function renderContent(content: string) {
  const blocks = content.split("\n\n").filter(Boolean);

  return blocks.map((block, i) => {
    // Heading
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

    // Bold-only lines (e.g. **Light quality.**)
    if (block.startsWith("**") && block.endsWith("**")) {
      return (
        <p key={i} className="text-body font-medium text-ivory/80">
          {block.replace(/\*\*/g, "")}
        </p>
      );
    }

    // Parse inline bold and italic within regular paragraphs
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    const hasInlineBold = parts.length > 1;

    if (hasInlineBold) {
      return (
        <p key={i} className="text-body leading-relaxed">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={j} className="text-ivory/80 font-medium">
                  {part.replace(/\*\*/g, "")}
                </strong>
              );
            }
            return <span key={j}>{part}</span>;
          })}
        </p>
      );
    }

    return (
      <p key={i} className="text-body leading-relaxed">
        {block}
      </p>
    );
  });
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

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/blog/${slug}`,
            },
          }),
        }}
      />

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
            {/* Lead paragraph */}
            <p className="text-body-lg mb-8 border-l-2 border-champagne/30 pl-6">
              {post.excerpt}
            </p>

            <div className="prose-custom space-y-6">
              {renderContent(post.content)}
            </div>
          </ScrollReveal>

          {/* Share / Tags area */}
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60">
                Category
              </span>
              <span className="text-[0.7rem] tracking-[0.1em] uppercase text-champagne/70 border border-champagne/20 px-3 py-1">
                {post.category}
              </span>
            </div>
            <Link
              href="/blog"
              className="text-[0.6875rem] tracking-[0.15em] uppercase text-silver hover:text-champagne transition-colors duration-300"
            >
              All Articles
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-between py-12" aria-label="Blog post navigation">
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
