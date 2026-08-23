import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-noir border-t border-white/5">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-playfair)] text-2xl text-ivory tracking-wide"
            >
              {siteConfig.shortName}
            </Link>
            <p className="text-body mt-4 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-champagne transition-colors duration-300"
                aria-label="Follow on Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-silver hover:text-champagne transition-colors duration-300"
                aria-label="Send email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-silver hover:text-champagne transition-colors duration-300"
                aria-label="Call us"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-label mb-6">Navigate</h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm hover:text-ivory transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-label mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-body-sm hover:text-ivory transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail size={14} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-body-sm hover:text-ivory transition-colors duration-300 flex items-center gap-2"
                >
                  <Phone size={14} />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="text-body-sm flex items-center gap-2">
                  <MapPin size={14} />
                  {siteConfig.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-silver/60 text-center md:text-left">
            {siteConfig.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-body-sm text-silver/60 hover:text-silver transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-body-sm text-silver/60 hover:text-silver transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="border-t border-white/5 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-8">
          <p
            className="font-[family-name:var(--font-playfair)] text-[4rem] md:text-[6rem] lg:text-[8rem] text-white/[0.03] leading-none tracking-tight select-none"
            aria-hidden="true"
          >
            {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
