"use client";

import { Show, useClerk } from "@clerk/nextjs";
import SignOutButton from "../components/SignOutButton";

export default function Home() {
  const { openSignIn } = useClerk();

  return (
    <main className="p-8">
      <Show when="signed-in">
        <h1 className="mb-4 text-2xl font-bold">
          Welcome!
        </h1>
        <SignOutButton />
      </Show>

      <Show when="signed-out">
        <button
          type="button"
          onClick={() => openSignIn()}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Sign In
        </button>
      </Show>
    </main>
  );
}