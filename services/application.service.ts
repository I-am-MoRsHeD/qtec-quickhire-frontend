'use server';

import { IApplication } from "@/interface/application.type";
import { serverFetch } from "@/lib/serverFetch";


export const applyForJob = async (data: Partial<IApplication>) => {
    const res = await serverFetch.post("/applications", {
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to apply for job");
    }

    const result = await res.json();

    return result;
};
