
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";

export const dynamic = "force-dynamic";

export default async function WorkspacePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="workspace-page">
      <header className="workspace-header">
        <div className="workspace-brand">
          <span className="workspace-logo">W</span>
          <span>Work-space</span>
        </div>
        <LogoutButton />
      </header>

      <section className="workspace-content">
        <p className="eyebrow">YOUR PERSONAL SPACE</p>
        <h1>Welcome to your workspace!</h1>
        <p className="workspace-description">
          You are signed in and ready to get things done.
        </p>

        <div className="workspace-panel">
          <h2>Your account</h2>
          <p><strong>User ID:</strong> {userId}</p>
          <p className="account-status">
            <span className="status-dot" />
            Authenticated
          </p>
        </div>
      </section>
    </main>
  );
}