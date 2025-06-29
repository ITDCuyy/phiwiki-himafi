"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import type { RouterOutputs } from "~/trpc/react";
// import {api} from '~/trpc/server';
import { UploadButton } from "~/utils/uploadthing";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function TopNav({
  initialSession,
}: {
  initialSession: RouterOutputs["authorization"]["currentSession"];
}) {
  const router = useRouter();
  const session = api.authorization.currentSession.useQuery(undefined, {
    initialData: initialSession,
  });
  const { setTheme } = useTheme();
  return (
    <nav className="flex w-full items-center justify-between border-b-4 p-4 text-xl font-semibold">
      <div>TopNav</div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={() => router.refresh()}
      />
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="text-center text-2xl">
          {session.data && (
            <div className="flex flex-row items-center gap-4">
              <span>Logged in as {session.data?.user?.name}</span>
              <img
                src={session.data.user.image}
                alt=""
                className="h-12 rounded-full"
              />
            </div>
          )}
        </div>
        <Link
          href={session.data ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
        >
          {session.data ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </nav>
  );
}
