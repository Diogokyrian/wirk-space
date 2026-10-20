
import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";

const SESSION_DURATION_MS = 5 * 24 * 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  // Validate the request origin.
  const origin = request.headers.get("origin");

  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json(
      {
        error: "Invalid request origin.",
        code: "INVALID_ORIGIN",
      },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const idToken = body?.idToken;

    if (typeof idToken !== "string" || !idToken.trim()) {
      return NextResponse.json(
        {
          error: "Missing ID token. Please sign in again.",
          code: "MISSING_ID_TOKEN",
        },
        { status: 400 }
      );
    }

    // Verify the client ID token. Do not check auth_time here,
    // so users are not rejected simply for signing in earlier.
    await adminAuth.verifyIdToken(idToken);

    // Create a five-day server-side session cookie.
    const sessionCookie = await adminAuth.createSessionCookie(
      idToken,
      { expiresIn: SESSION_DURATION_MS }
    );

    const response = NextResponse.json({ success: true });

    response.cookies.set("session", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: Math.floor(SESSION_DURATION_MS / 1000),
    });

    return response;
  } catch (error: unknown) {
    const code =
      typeof error === "object" &&
      error !== null &&
      "code" in error
        ? String(error.code)
        : "unknown";

    console.error("Session creation failed:", {
      code,
      message:
        error instanceof Error
          ? error.message
          : "Unknown error",
    });

    if (
      code === "auth/id-token-expired" ||
      code === "auth/invalid-id-token"
    ) {
      return NextResponse.json(
        {
          error:
            "Your login token has expired or is invalid. Please refresh it and try again.",
          code,
        },
        { status: 401 }
      );
    }

    if (
      code === "auth/argument-error" ||
      code === "auth/invalid-argument"
    ) {
      return NextResponse.json(
        {
          error: "The login token format is invalid. Please sign in again.",
          code,
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        error: "Could not create your session. Please try again.",
        code: "SESSION_CREATION_FAILED",
      },
      { status: 500 }
    );
  }
}
