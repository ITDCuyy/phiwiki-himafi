// Description: The home page with the uploader, now fully typed with TypeScript.

"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import {
  QrCode,
  Video,
  UploadCloud,
  FileVideo,
  X,
  Download,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";

export default function HomePage() {
  // Add type annotations to state variables
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [qrUrl, setQrUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [error, setError] = useState<string>("");

  // Type the ref for the file input element
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Type the event for the file input change handler
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setQrUrl("");
      setError("");
      setUploadProgress(0);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file first.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setError("");

    try {
      const apiResponse = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: selectedFile.name,
          contentType: selectedFile.type,
        }),
      });

      if (!apiResponse.ok) {
        throw new Error("Failed to get upload URL from server.");
      }

      // Type the expected API response
      const {
        signedUrl,
        newFilename,
      }: { signedUrl: string; newFilename: string } = await apiResponse.json();

      const xhr = new XMLHttpRequest();
      xhr.open("PUT", signedUrl, true);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round(
            (event.loaded / event.total) * 100,
          );
          setUploadProgress(percentComplete);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const playerUrl = `https://phiwiki.himafiitb.com/play?video=${encodeURIComponent(newFilename)}`;
          setQrUrl(playerUrl);
        } else {
          throw new Error(`Upload failed with status: ${xhr.status}`);
        }
        setIsUploading(false);
      };

      xhr.onerror = () => {
        throw new Error("An error occurred during the file upload.");
      };

      xhr.send(selectedFile);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unknown error occurred.");
      setIsUploading(false);
    }
  };

  const handleDownload = () => {
    const canvas = document.getElementById(
      "qr-code-canvas",
    ) as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream"); //
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;

      // Create a more descriptive filename from the video name
      let filename = "qr-code.png";
      try {
        const urlParams = new URLSearchParams(new URL(qrUrl).search);
        const videoName = urlParams.get("video");
        if (videoName) {
          filename = `${videoName.split(".")[0]}-qr.png`;
        }
      } catch (e) {
        console.error("Could not parse URL to create filename:", e);
      }

      downloadLink.download = filename;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Video className="h-8 w-8 text-primary" />
          </div>
          <CardTitle>QR Video Uploader</CardTitle>
          <CardDescription>
            Upload a video to create a playable QR code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            className="relative cursor-pointer rounded-lg border-2 border-dashed border-border p-6 text-center transition-colors hover:border-primary"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="video/*"
              disabled={isUploading}
            />
            <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-semibold text-primary">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">Any video format</p>
          </div>

          <CardDescription>
            <span className="font-bold text-destructive">
              Tolong sizenya di compress agar: <br />{" "}
            </span>
            <div className="pl-4 text-muted-foreground">
              1. yg nonton di mobile tidak kehabisan kuota <br />
              2. phiwiki gk perlu bayar banyak storage ke cloudflare <br />
              3. yg wifi kosannya jelek bisa nonton
            </div>
          </CardDescription>

          {selectedFile && !isUploading && (
            <div className="animate-fade-in flex items-center justify-between rounded-lg bg-muted p-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <FileVideo className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="truncate text-sm text-foreground">
                  {selectedFile.name}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedFile(null)}
                className="h-8 w-8 flex-shrink-0"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          )}

          {isUploading && (
            <div className="space-y-2">
              <Progress value={uploadProgress} />
              <p className="text-center text-xs text-muted-foreground">
                {uploadProgress}%
              </p>
            </div>
          )}

          <Button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="w-full"
          >
            <QrCode className="mr-2 h-5 w-5" />
            {isUploading ? "Uploading..." : "Upload & Generate QR"}
          </Button>

          {error && (
            <p className="animate-fade-in text-center text-sm text-destructive">
              {error}
            </p>
          )}

          {qrUrl && (
            <div className="animate-fade-in mt-8 flex flex-col items-center rounded-xl bg-muted p-6 text-center">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Upload Complete
              </h2>
              <div className="rounded-lg bg-white p-4">
                <QRCodeCanvas
                  id="qr-code-canvas"
                  value={qrUrl}
                  size={160}
                  //   level={"H"}
                />
              </div>
              <Button
                onClick={handleDownload}
                className="mt-4 w-full max-w-[200px]"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PNG
              </Button>
              <a
                href={qrUrl}
                className="mt-4 break-all font-mono text-xs text-muted-foreground hover:underline"
              >
                {qrUrl}
              </a>
            </div>
          )}
        </CardContent>
      </Card>
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>Files hosted on Cloudflare R2</p>
      </footer>
    </main>
  );
}
