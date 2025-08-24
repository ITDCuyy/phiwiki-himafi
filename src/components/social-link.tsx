import Link from "next/link";
import type { SocialLinkData } from "~/types";

export function SocialLink({ href, icon: Icon, label }: SocialLinkData) {
  return (
    <Link
      href={href}
      className="text-muted-foreground transition-colors hover:text-primary"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
