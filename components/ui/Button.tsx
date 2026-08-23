import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-[family-name:var(--font-inter)] text-[0.6875rem] font-medium tracking-[0.2em] uppercase transition-all duration-400 ease-out";

  const sizeStyles = {
    default: "px-8 py-3.5",
    lg: "px-10 py-4",
  };

  const variantStyles = {
    primary:
      "border border-champagne text-champagne hover:bg-champagne hover:text-noir",
    secondary:
      "border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory hover:text-noir",
    ghost:
      "text-champagne hover:text-ivory border-transparent",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? "opacity-40 pointer-events-none" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
