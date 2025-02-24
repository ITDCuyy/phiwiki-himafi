"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
  const session = api.authorization.currentSession.useQuery().data;
  return (
    <nav className="flex w-full items-center justify-between border-b-4 p-4 text-xl font-semibold">
      <div>TopNav</div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={() => router.refresh()}
      />
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="text-center text-2xl">
          {session && (
            <div className="flex flex-row items-center gap-4">
              <span>Logged in as {session.user?.name}</span>
              <img src={session.user?.image} className="h-12 rounded-full" />
            </div>
          )}
        </div>
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </nav>
  );
}
