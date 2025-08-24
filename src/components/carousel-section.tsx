import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import type { ReactNode } from "react";

interface CarouselSectionProps {
  title: string;
  children: ReactNode[];
  className?: string;
}

export function CarouselSection({
  title,
  children,
  className = "",
}: CarouselSectionProps) {
  return (
    <div className={className}>
      <h3 className="mb-6 text-center text-2xl font-semibold">{title}</h3>
      <div className="mx-10 max-w-6xl">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {children.map((child, index) => (
              <CarouselItem
                key={index}
                className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                {child}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
