import { TCategory, TCompany } from "@/interface/jobs.type";
import { z } from "zod";

export const createJobValidation = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Title must be at least 3 characters long")
        .max(100, "Title cannot exceed 100 characters"),

    company: z
        .enum(Object.values(TCompany) as [string, ...string[]], {
            message: "Please select a valid job category"
        }),

    location: z
        .string()
        .trim()
        .min(2, "Location must be at least 2 characters long"),

    category: z
        .enum(Object.values(TCategory) as [string, ...string[]], {
            message: "Please select a valid job category"
        }),

    description: z
        .string()
        .trim()
        .min(10, "Description should be at least 10 characters to be helpful")
        .max(5000, "Description is too long (max 5000 characters)"),
});

export type TJobFormValues = z.infer<typeof createJobValidation>;