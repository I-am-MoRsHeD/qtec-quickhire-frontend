/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const getAdminInfo = async () => {
    try {
        const res = await serverFetch.get(`/auth/admin-info`);

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || "Failed to fetch admin info");
        }

        const result = await res.json();

        return result?.data;

    } catch (error: any) {
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error?.message ? error?.message : error?.response?.data?.message : 'Something went wrong in admin info fetching.'}`
        };
    }
};