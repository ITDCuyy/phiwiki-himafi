import { api, HydrateClient } from "~/trpc/server";

import { Gallery } from "./_components/gallery";

export default async function HomePage() {
  const session = await api.authorization.currentSession();
  return (
    <HydrateClient>
      <main className="mx-auto px-20 py-8 text-black">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Welcome to the Image Gallery
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            {session && <Gallery />}
            {!session && (
              <div className="text-center">
                <p className="text-2xl">Please sign in to view the gallery</p>
              </div>
            )}
          </div>
          <div>
            <div className="rounded-lg bg-gray-100 p-4">
              <h2 className="mb-4 text-2xl font-semibold">Session Info</h2>
              <pre className="overflow-x-auto rounded-md bg-gray-200 p-2">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
