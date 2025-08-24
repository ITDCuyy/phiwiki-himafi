import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import type { VideoData } from "~/types";

export function VideoCard({
  title,
  description,
  thumbnail,
  videoUrl,
}: VideoData) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32 w-full md:h-48">
        <img
          src={thumbnail}
          alt={`${title} Video Thumbnail`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="rounded-full bg-white/90 p-3">
            <Link href={videoUrl}>
              <svg
                className="h-6 w-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <Button variant="link" className="mt-2 p-0" asChild>
          <Link href={videoUrl}>Tonton Video</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
