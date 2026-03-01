/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { setCookie } from "@/lib/cookies";
import { loginAdmin } from "@/services/auth.service";
import { loginValidation } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";


type LoginFormInputs = z.infer<typeof loginValidation>;

export default function LoginForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<LoginFormInputs>({
        resolver: zodResolver(loginValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        const toastId = toast.loading("Logging in...");

        try {
            const result = await loginAdmin(data);

            if (result?.success) {
                setCookie("accessToken", result.data.accessToken, 7);
                setCookie("refreshToken", result.data.refreshToken, 365);

                toast.success("Login successful!", { id: toastId });

                router.push('/admin/jobs');
            } else {
                toast.error(result?.message || "Login failed", { id: toastId });
            }

        } catch (error: any) {
            toast.error(error?.message || "An unexpected error occurred", {
                id: toastId,
            });
            console.error("Fetch error:", error);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-linear-to-tr from-primary/15 via-background to-primary/5 overflow-hidden">
            {/* Animated Blobs */}
            <div className="absolute w-72 h-72 rounded-full bg-primary/20 top-10 left-10 blur-3xl animate-pulse"></div>
            <div className="absolute w-64 h-64 rounded-full bg-primary/30 bottom-20 right-20 blur-3xl animate-pulse delay-700"></div>

            {/* Glassmorphic Card */}
            <div className="relative z-10 w-full max-w-md p-10 bg-background/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-background/20">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    Welcome Back
                </h1>

                <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                                            <Mail className="w-5 h-5 text-gray-400" />
                                        </span>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Email Address"
                                                className="pl-12 pr-4 py-6 text-base border-none bg-background/80 focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 rounded-xl shadow-sm"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage className="text-xs ml-2" />
                                </FormItem>
                            )}
                        />

                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                                            <Lock className="w-5 h-5 text-gray-400" />
                                        </span>
                                        <FormControl>
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                className="pl-12 pr-12 py-6 text-base border-none bg-background/80 focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 rounded-xl shadow-sm"
                                                {...field}
                                            />
                                        </FormControl>
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-primary transition-colors z-10"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    <FormMessage className="text-xs ml-2" />
                                </FormItem>
                            )}
                        />

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="w-full py-4 flex items-center justify-center gap-2 rounded-xl bg-primary text-background font-bold shadow-lg hover:shadow-primary/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 disabled:opacity-70"
                        >
                            {form.formState.isSubmitting ? "Processing..." : "Login"}
                            {!form.formState.isSubmitting && <Send className="w-4 h-4" />}
                        </button>
                    </form>
                </Form>
            </div>
        </div>
    );
}