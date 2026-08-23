import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  children,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 md:mb-20 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-xl"
      }`}
    >
      {label && (
        <span className="text-label mb-4 block">{label}</span>
      )}
      <h2
        className={`text-display-md ${
          light ? "text-noir" : "text-ivory"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-body-lg mt-5 ${
            light ? "!text-noir/60" : ""
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
