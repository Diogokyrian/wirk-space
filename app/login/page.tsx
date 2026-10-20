"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, authReady } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function createSession(idToken: string) {
    return fetch("/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim();

    // Custom validation
    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (mode === "signup" && password.length < 6) {
      setError("Choose a stronger password (at least 6 characters).");
      return;
    }

    setLoading(true);

    try {
      // Wait for Firebase authentication persistence setup.
      await authReady;

      // Sign in or create an account.
      const credential =
        mode === "signup"
          ? await createUserWithEmailAndPassword(
              auth,
              trimmedEmail,
              password
            )
          : await signInWithEmailAndPassword(
              auth,
              trimmedEmail,
              password
            );

      // Force Firebase to issue a fresh ID token.
      let idToken = await credential.user.getIdToken(true);

      // Send the token to the server to create the session cookie.
      let response = await createSession(idToken);

      // Retry only if the server specifically reports an expired token.
      if (response.status === 401) {
        const result = await response.clone().json().catch(() => null);

        if (result?.code === "auth/id-token-expired") {
          idToken = await credential.user.getIdToken(true);
          response = await createSession(idToken);
        }
      }

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const sessionError = new Error(
          data?.error || "Session creation failed"
        );

        // Preserve the API error code for custom error handling.
        Object.assign(sessionError, {
          code: data?.code || "SESSION_CREATION_FAILED",
        });

        throw sessionError;
      }

      // The server session cookie is now set.
      // Clear client-side Firebase authentication as intended.
      await signOut(auth);

      router.replace("/workspace");
      router.refresh();
    } catch (err: unknown) {
      const code =
        typeof err === "object" &&
        err !== null &&
        "code" in err
          ? String(err.code)
          : "";

      const message =
        err instanceof Error ? err.message : "";

      const messages: Record<string, string> = {
        // Firebase authentication errors
        "auth/email-already-in-use":
          "This email is already registered.",

        "auth/invalid-email":
          "Enter a valid email address.",

        "auth/weak-password":
          "Choose a stronger password (at least 6 characters).",

        "auth/invalid-credential":
          "Email or password is incorrect.",

        "auth/user-not-found":
          "Email or password is incorrect.",

        "auth/wrong-password":
          "Email or password is incorrect.",

        "auth/too-many-requests":
          "Too many attempts. Please try again later.",

        "auth/network-request-failed":
          "Network error. Check your internet connection.",

        "auth/operation-not-allowed":
          "This sign-in method is currently unavailable.",

        "auth/user-disabled":
          "This account has been disabled. Contact support.",

        "auth/internal-error":
          "An unexpected authentication error occurred.",

        "auth/email-already-exists":
          "This email is already registered.",

        "auth/invalid-password":
          "Email or password is incorrect.",

        "auth/id-token-expired":
          "Your login token expired. Please log in again.",

        "auth/invalid-id-token":
          "Your login token is invalid. Please log in again.",

        INVALID_ORIGIN:
          "The security check failed. Refresh the page and try again.",

        MISSING_ID_TOKEN:
          "Your login token is missing. Please try again.",

        SESSION_CREATION_FAILED:
          "We couldn't create your session. Please try again.",
      };

      setError(
        messages[code] ??
          messages[message] ??
          message ??
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function switchMode(nextMode: "login" | "signup") {
    setMode(nextMode);
    setError("");
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="brand-mark">W</div>

        <p className="eyebrow">YOUR WORKSPACE</p>

        <h1>
          {mode === "signup"
            ? "Create your account"
            : "Welcome back"}
        </h1>

        <p className="auth-subtitle">
          {mode === "signup"
            ? "Get started by creating your account."
            : "Log in to continue to your workspace."}
        </p>

        <div className="auth-tabs">
          <button
            type="button"
            className={mode === "signup" ? "active" : ""}
            onClick={() => switchMode("signup")}
            disabled={loading}
          >
            Sign up
          </button>

          <button
            type="button"
            className={mode === "login" ? "active" : ""}
            onClick={() => switchMode("login")}
            disabled={loading}
          >
            Log in
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="auth-form"
          noValidate
        >
          <label htmlFor="email">Email address</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "auth-error" : undefined}
            disabled={loading}
            required
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder={
              mode === "signup"
                ? "At least 6 characters"
                : "Enter your password"
            }
            autoComplete={
              mode === "signup"
                ? "new-password"
                : "current-password"
            }
            minLength={mode === "signup" ? 6 : undefined}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError("");
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "auth-error" : undefined}
            disabled={loading}
            required
          />

          {error && (
            <p
              id="auth-error"
              className="auth-error"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </p>
          )}

          <button
            className="auth-submit"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : mode === "signup"
                ? "Create account"
                : "Log in"}
          </button>
        </form>

        <p className="auth-footer">
          {mode === "signup"
            ? "Already have an account?"
            : "New to the workspace?"}{" "}

          <button
            type="button"
            className="text-button"
            onClick={() =>
              switchMode(mode === "signup" ? "login" : "signup")
            }
            disabled={loading}
          >
            {mode === "signup" ? "Log in" : "Create account"}
          </button>
        </p>
      </section>
    </main>
  );
}
