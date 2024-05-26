import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ! Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

// ! APPLICATIONS OF MIDDLE WARE IN NEXTJS
// ? Authentication and Authorization: Ensure user identity and check session cookies before granting access to specific pages or API routes.

// ? Server-Side Redirects: Redirect users at the server level based on certain conditions (e.g., locale, user role).

// ? Path Rewriting: Support A/B testing, feature rollouts, or legacy paths by dynamically rewriting paths to API routes or pages based on request properties.

// ? Bot Detection: Protect your resources by detecting and blocking bot traffic.

// ? Logging and Analytics: Capture and analyze request data for insights before processing by the page or API.

// ? Feature Flagging: Enable or disable features dynamically for seamless feature rollouts or testing.

function middleware() {
    
}

export default middleware;
