
"use client";

import { useClerk } from "@clerk/nextjs";

export default function LogoutButton() {
  const { signOut } = useClerk();

  return (
    <button
      onClick={() => signOut({ redirectUrl: "/" })}
      className="rounded-xl bg-[#D3AB5E] px-5 py-2.5 font-semibold text-black transition hover:bg-[#c49a48]"
    >
      Log out
    </button>
  );
}
