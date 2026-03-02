import { z } from "zod";

export const createApplicationValidation = z.object({
    job_id: z.string().min(1, "Job reference is required"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    resume_link: z.string().url("Please enter a valid URL for your resume (e.g., Google Drive)"),
    cover_note: z.string().min(20, "Please provide a short cover note (min 20 chars)"),
});

export type TApplicationFormValues = z.infer<typeof createApplicationValidation>;