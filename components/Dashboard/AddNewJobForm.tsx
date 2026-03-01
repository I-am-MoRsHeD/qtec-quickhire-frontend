/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createJobValidation, TJobFormValues } from "@/validations/job.validation";
import { filterOptions } from "@/consts/filters.consts";
import { createJob } from "@/services/job.service";
import { IJob } from "@/interface/jobs.type";

const AddNewJobForm = () => {
    const router = useRouter();

    const form = useForm<TJobFormValues>({
        resolver: zodResolver(createJobValidation),
        defaultValues: {
            title: "",
            location: "",
            description: "",
            category: "" as any,
            company: "" as any,
        },
    });

    const onSubmit = async (values: TJobFormValues) => {
        const toastId = toast.loading("Creating job...");
        try {
            const result = await createJob(values as IJob);
            console.log(result);
            if (result.success) {
                toast.success("Job posted successfully!", { id: toastId });
                router.push("/admin/jobs");
                router.refresh();
            } else {
                toast.error(result.message || "Failed to post job", { id: toastId });
            }
        } catch (error: any) {
            toast.error(error.message || "Something went wrong", { id: toastId });
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-background rounded-xl shadow-sm border ">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Post a New Job</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Job Title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Senior Software Engineer" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filterOptions.map((option) => (
                            <FormField
                                key={option.key}
                                control={form.control}
                                name={option.key as keyof TJobFormValues}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{option.label}</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                        >
                                            <FormControl className="w-full">
                                                <SelectTrigger>
                                                    <SelectValue placeholder={option.placeholder} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {/* Optional: Static disabled item if you want a visible "Select" option inside the list */}
                                                <SelectItem value="placeholder" disabled className="hidden">
                                                    {option.placeholder}
                                                </SelectItem>

                                                {option.items.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}

                    </div>
                    {/* Job Location */}
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Remote, NY, or London" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe the job responsibilities and requirements..."
                                        className="min-h-37.5"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/70 text-background py-6 text-lg">
                        Post Job
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default AddNewJobForm;