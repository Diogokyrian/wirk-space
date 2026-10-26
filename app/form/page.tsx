
"use client";

import { Show, useClerk } from "@clerk/nextjs";

export default function Home() {
  const { openSignIn } = useClerk();

  return (
    <main className="p-8">
      <Show when="signed-in">
        <p>You're signed in! Go to your dashboard.</p>
        <a
          href="/dashboard"
          className="text-blue-600 underline"
        >
          Open Dashboard
        </a>
      </Show>

      <Show when="signed-out">
        <button
          type="button"
          onClick={() =>
            openSignIn({
              forceRedirectUrl: "/dashboard",
              signUpForceRedirectUrl: "/dashboard",
            })
          }
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Sign In
        </button>
      </Show>
    </main>
  );
}
