/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const getAllJobs = async (queryString?: string) => {
    try {
        const res = await serverFetch.get(`/jobs${queryString ? `?${queryString}` : ""}`, {
            next: {
                tags: ["jobs"]
            }
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || "Failed to fetch jobs");
        }

        const result = await res.json();

        return result;

    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error?.message ? error?.message : error?.response?.data?.message : 'Something went wrong in jobs fetching.'}`
        };
    }
};

export const getJobDetails = async (id?: string) => {
    try {
        const res = await serverFetch.get(`/jobs/${id}`, {
            next: {
                tags: ["jobs"]
            }
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || "Failed to fetch job details");
        }

        const result = await res.json();

        return result;

    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error?.message ? error?.message : error?.response?.data?.message : 'Something went wrong in job details fetching.'}`
        };
    }
};

export const deleteJobs = async (id: string) => { };
