"use client";

import { useSearchParams } from "next/navigation";
import { Clapperboard, AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function PlayPage() {
  const searchParams = useSearchParams();
  const videoFile = searchParams.get("video");

  const r2PublicUrl = `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${process.env.NEXT_PUBLIC_R2_BUCKET_NAME}`;
  //   const r2PublicUrl = `r2phiwiki.himafiitb.com/phiwiki-himafi`;
  const videoSrc =
    videoFile && r2PublicUrl ? `${r2PublicUrl}/${videoFile}` : "";

  // Type the function parameter and return value
  const getDisplayName = (filename: string | null): string => {
    if (!filename) return "";

    const lastDotIndex = filename.lastIndexOf(".");
    if (lastDotIndex === -1) return filename;

    const namePart = filename.substring(0, lastDotIndex);
    const extPart = filename.substring(lastDotIndex);

    if (namePart.length > 5 && namePart[namePart.length - 5] === "-") {
      return `${namePart.substring(0, namePart.length - 5)}${extPart}`;
    }

    return filename;
  };

  const displayName = getDisplayName(videoFile);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-4xl">
        {videoSrc ? (
          <CardContent className="p-4 sm:p-6">
            <video
              className="w-full rounded-lg shadow-2xl shadow-primary/20"
              controls
              autoPlay
              playsInline
              src={videoSrc}
              key={videoSrc}
            >
              Your browser does not support the video tag.
            </video>
            <div className="mt-4 text-center">
              <h1 className="flex items-center justify-center gap-2 text-2xl font-bold text-foreground">
                <Clapperboard className="h-7 w-7 text-primary" />
                Now Playing
              </h1>
              <p className="break-all text-muted-foreground">{displayName}</p>
            </div>
          </CardContent>
        ) : (
          <CardHeader className="items-center text-center">
            <AlertTriangle className="mb-4 h-12 w-12 text-destructive" />
            <CardTitle>Video Not Found</CardTitle>
            <CardDescription>
              The video link is invalid or missing. Please generate a new QR
              code.
            </CardDescription>
          </CardHeader>
        )}
      </Card>
    </main>
  );
}
