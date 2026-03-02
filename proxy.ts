import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";


const ADMIN_PROTECTED_PATHS = [
    "/admin/jobs",
    "/admin/add-new-job",
];

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_ACCESS_SECRET!
);

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const isAdminRoute = ADMIN_PROTECTED_PATHS.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`)
    );

    if (!isAdminRoute) {
        return NextResponse.next();
    }

    const token = req.cookies.get("accessToken")?.value;


    if (!token) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }

    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);

        if (payload.role !== "ADMIN") {
            return NextResponse.redirect(new URL("/", req.url));
        }


        return NextResponse.next();
    } catch (error) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }
}

export const config = {
    matcher: [
        "/admin/jobs/:path*",
        "/admin/add-new-job/:path*",
    ],
};