'use server';

import { IJob } from "@/interface/jobs.type";
import { serverFetch } from "@/lib/serverFetch";
import { revalidatePath, revalidateTag } from "next/cache";

export const createJob = async (data: Partial<IJob>) => {
    const res = await serverFetch.post("/jobs", {
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to create jobs");
    }

    const result = await res.json();

    if (result.success) {
        revalidatePath("/");
        revalidatePath("/jobs");
        revalidatePath("/admin/jobs");

        revalidateTag("jobs", {});
    }

    return result;
};