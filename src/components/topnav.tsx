"use client";

import Link from "next/link";
import { api } from "~/trpc/react";
import type { RouterOutputs } from "~/trpc/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

export function TopNav({
  initialSession,
}: {
  initialSession: RouterOutputs["authorization"]["currentSession"];
}) {
  const session = api.authorization.currentSession.useQuery(undefined, {
    initialData: initialSession,
  });
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-center self-center bg-background/70 px-20 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="flex-initial">
              <div className="flex h-16 w-16 items-center justify-center">
                <img
                  src="/himafi.jpeg"
                  alt="Logo MK"
                  width={128}
                  height={128}
                />
              </div>
            </div>
          </Link>
          <nav className="items-center space-x-6 text-sm font-medium md:flex">
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/news">News</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-8 md:w-[150px] lg:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-4">
            {session.data ? (
              <div className="flex items-center gap-4">
                <span className="hidden text-sm font-medium md:block">
                  {session.data.user.name}
                </span>
                <img
                  src={session.data.user.image ?? ""}
                  alt="User avatar"
                  className="h-8 w-8 rounded-full"
                />
                <Link href="/api/auth/signout">
                  <Button variant="outline">Sign Out</Button>
                </Link>
              </div>
            ) : (
              <Link href="/api/auth/signin">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
