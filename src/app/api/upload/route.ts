// Description: This API route generates a unique filename, now using TypeScript.

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse, type NextRequest } from "next/server";
import path from "path";

// Create an S3 client configured for R2
// We assert the environment variables as strings because they are essential for the app to run.
const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_S3_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Type the expected request body
    const { filename, contentType }: { filename: string; contentType: string } =
      await request.json();

    if (!filename || !contentType) {
      return NextResponse.json(
        { error: "Filename and content type are required." },
        { status: 400 },
      );
    }

    // --- Generate a unique filename ---
    const uniqueSuffix = Math.random().toString(36).substring(2, 6);
    const sanitizedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, "");
    const ext = path.extname(sanitizedFilename);
    const baseName = path.basename(sanitizedFilename, ext);
    const newFilename = `${baseName}-${uniqueSuffix}${ext}`;
    // --- End of new logic ---

    const command = new PutObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_R2_BUCKET_NAME!,
      Key: newFilename,
      ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 60 * 5, // URL expires in 5 minutes
    });

    return NextResponse.json({ signedUrl, newFilename });
  } catch (error) {
    console.error("Error generating signed URL:", error);
    return NextResponse.json(
      { error: "Failed to generate upload URL." },
      { status: 500 },
    );
  }
}
