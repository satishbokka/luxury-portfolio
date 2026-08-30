import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-noir">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
        <span className="text-label block mb-6">Page Not Found</span>
        <h1 className="font-[family-name:var(--font-playfair)] text-[6rem] md:text-[10rem] lg:text-[14rem] text-white/[0.04] leading-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          404
        </h1>
        <h2 className="text-display-lg text-ivory relative z-10">
          This Page Doesn&apos;t Exist
        </h2>
        <p className="text-body-lg mt-4 max-w-md mx-auto relative z-10">
          The page you&apos;re looking for may have been moved or no longer exists.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10 relative z-10">
          <Button href="/" variant="primary" size="lg">
            Return Home
          </Button>
          <Button href="/portfolio" variant="secondary" size="lg">
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
