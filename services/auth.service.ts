'use server';
import { serverFetch } from "@/lib/serverFetch";


export const loginAdmin = async (data: { email: string; password: string }) => {
    const res = (await serverFetch.post("/auth/login", {
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    }));

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to logged in admin");
    }

    const result = await res.json();

    return result;
};