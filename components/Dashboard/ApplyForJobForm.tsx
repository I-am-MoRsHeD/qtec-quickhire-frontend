/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { SendHorizontal } from "lucide-react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createApplicationValidation, TApplicationFormValues } from "@/validations/application.validation";
import { applyForJob } from "@/services/application.service";

export default function ApplyJobForm({ jobId }: { jobId: string }) {
    const form = useForm<TApplicationFormValues>({
        resolver: zodResolver(createApplicationValidation),
        defaultValues: {
            job_id: jobId,
            name: "",
            email: "",
            resume_link: "",
            cover_note: "",
        },
    });

    const onSubmit = async (values: TApplicationFormValues) => {
        const toastId = toast.loading("Submitting application...");
        try {
            const result = await applyForJob(values);

            if (result?.success) {
                toast.success("Application sent successfully!", { id: toastId });
                form.reset();
            } else {
                toast.error(result?.message || "Failed to submit", { id: toastId });
            }
        } catch (error: any) {
            toast.error("Something went wrong", { id: toastId });
        }
    };

    return (
        <div id="apply-form" className="bg-background rounded-3xl p-8 md:p-10 shadow-sm border border-border mt-10">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground">Apply for this position</h3>
                <p className="text-foreground/60 mt-1">Fill out the form below and the hiring team will contact you.</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" className="rounded-xl bg-background/80" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="john@example.com" className="rounded-xl bg-background/80" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="resume_link"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Resume Link (Google Drive/Dropbox)</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://drive.google.com/..." className="rounded-xl bg-background/80" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cover_note"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Short Cover Note</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Briefly explain why you are a good fit..."
                                        className="min-h-30 rounded-xl bg-background/80"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/80 text-background px-10 py-6 rounded-2xl flex gap-2 text-lg transition-all active:scale-95">
                        Submit Application
                        <SendHorizontal size={18} />
                    </Button>
                </form>
            </Form>
        </div>
    );
}