import { z } from "zod";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import path from "path";

import { createTRPCRouter, memberProcedure } from "~/server/api/trpc";

// Create an S3 client configured for R2
const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_S3_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export const videoRouter = createTRPCRouter({
  // Upload procedure - only members and above can upload
  generateUploadUrl: memberProcedure
    .input(
      z.object({
        filename: z.string(),
        contentType: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { filename, contentType } = input;

      // Generate a unique filename
      const uniqueSuffix = Math.random().toString(36).substring(2, 6);
      const sanitizedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, "");
      const ext = path.extname(sanitizedFilename);
      const baseName = path.basename(sanitizedFilename, ext);
      const newFilename = `${baseName}-${uniqueSuffix}${ext}`;

      const command = new PutObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_R2_BUCKET_NAME!,
        Key: newFilename,
        ContentType: contentType,
      });

      const signedUrl = await getSignedUrl(s3Client, command, {
        expiresIn: 60 * 5, // URL expires in 5 minutes
      });

      return { signedUrl, newFilename };
    }),
});
