import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminAuth } from "@/lib/firebase-admin";
import LogoutButton from "./logout-button";

export const dynamic = "force-dynamic";

export default async function WorkspacePage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) {
    redirect("/login");
  }

  try {
    const user = await adminAuth.verifySessionCookie(session, true);

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
            <p>
              <strong>Email:</strong> {user.email ?? "No email available"}
            </p>
            <p>
              <strong>User ID:</strong> {user.uid}
            </p>
            <p className="account-status">
              <span className="status-dot" />
              Authenticated
            </p>
          </div>
        </section>
      </main>
    );
  } catch {
    redirect("/login");
  }
}