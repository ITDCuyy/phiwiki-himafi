import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import type { ProductData } from "~/types";

export function ProductCard({
  title,
  description,
  price,
  originalPrice,
  image,
  link,
  badge,
}: ProductData) {
  const getBadgeClasses = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-primary text-primary-foreground";
      case "secondary":
        return "bg-secondary text-secondary-foreground";
      case "accent":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  const getCardBorderClass = (variant?: string) => {
    switch (variant) {
      case "primary":
        return "border-2 border-primary";
      case "secondary":
        return "border-2 border-secondary";
      case "accent":
        return "border-2 border-accent";
      default:
        return "";
    }
  };

  return (
    <Card
      className={`overflow-hidden ${badge ? getCardBorderClass(badge.variant) : ""}`}
    >
      <div className="relative h-full w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {badge && (
          <div
            className={`absolute right-2 top-2 rounded px-2 py-1 text-xs font-semibold ${getBadgeClasses(badge.variant)}`}
          >
            {badge.text}
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
            <div
              className={`text-lg font-bold text-primary ${originalPrice ? "ml-2" : ""}`}
            >
              {price}
            </div>
          </div>
          <Button size="sm" asChild>
            <Link href={link}>Lihat Detail</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
