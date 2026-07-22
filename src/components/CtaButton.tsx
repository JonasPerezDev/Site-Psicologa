import Link from "next/link";
import { MessageCircle, Instagram, type LucideIcon } from "lucide-react";

type Variant = "whatsapp" | "instagram" | "outline";

const icons: Record<Variant, LucideIcon | null> = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  outline: null,
};

const styles: Record<Variant, string> = {
  whatsapp:
    "bg-accent text-white shadow-card hover:bg-accent-dark focus-visible:outline-accent",
  instagram:
    "bg-primary text-white shadow-card hover:bg-primary-dark focus-visible:outline-primary",
  outline:
    "border border-primary/30 bg-transparent text-primary hover:bg-primary/5",
};

type Props = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  /** Para links externos abre em nova aba com rel seguro. */
  external?: boolean;
};

export default function CtaButton({
  href,
  variant = "whatsapp",
  children,
  className = "",
  external = true,
}: Props) {
  const Icon = icons[variant];
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      {...externalProps}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${styles[variant]} ${className}`}
    >
      {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
      {children}
    </Link>
  );
}