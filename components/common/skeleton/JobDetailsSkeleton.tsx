import { Skeleton } from "@/components/ui/skeleton";

export default function JobDetailsSkeleton() {
    return (
        <div className="min-h-screen bg-border pb-20 animate-pulse">
            <div className="max-w-5xl mx-auto px-6 py-8">
                <Skeleton className="h-5 w-32 mb-8" />


                <div className="bg-background rounded-3xl p-8 shadow-sm border border-background/70">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-14 w-14 rounded-2xl" />
                                <div className="space-y-2">
                                    <Skeleton className="h-5 w-24" />
                                    <Skeleton className="h-4 w-32" />
                                </div>
                            </div>
                            <Skeleton className="h-12 w-3/4 md:w-1/2 mt-2" />
                            <div className="flex gap-3 mt-2">
                                <Skeleton className="h-7 w-20 rounded-full" />
                                <Skeleton className="h-7 w-24 rounded-full" />
                                <Skeleton className="h-7 w-28 rounded-full" />
                            </div>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto self-end md:self-start">
                            <Skeleton className="h-14 w-14 rounded-2xl" />
                            <Skeleton className="h-14 w-14 rounded-2xl" />
                            <Skeleton className="h-14 w-40 rounded-2xl" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

                    <div className="lg:col-span-2 space-y-10">
                        <div className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-background/70 space-y-6">
                            <Skeleton className="h-8 w-48" />
                            <div className="space-y-3">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-4/6" />
                            </div>
                        </div>

                        <div className="bg-background rounded-3xl p-8 md:p-10 shadow-sm border border-background/70 space-y-8">
                            <div className="space-y-2">
                                <Skeleton className="h-7 w-64" />
                                <Skeleton className="h-4 w-80" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2"><Skeleton className="h-4 w-20" /><Skeleton className="h-12 w-full rounded-xl" /></div>
                                <div className="space-y-2"><Skeleton className="h-4 w-20" /><Skeleton className="h-12 w-full rounded-xl" /></div>
                            </div>
                            <div className="space-y-2"><Skeleton className="h-4 w-40" /><Skeleton className="h-12 w-full rounded-xl" /></div>
                            <div className="space-y-2"><Skeleton className="h-4 w-32" /><Skeleton className="h-32 w-full rounded-xl" /></div>
                            <Skeleton className="h-14 w-48 rounded-2xl" />
                        </div>
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-background rounded-3xl p-8 shadow-sm border border-background/70 space-y-8">
                            <Skeleton className="h-7 w-32" />
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-4">
                                        <Skeleton className="h-12 w-12 rounded-2xl" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-3 w-16" />
                                            <Skeleton className="h-5 w-24" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr className="border-background/70" />
                            <div className="space-y-4">
                                <Skeleton className="h-4 w-full mx-auto" />
                                <Skeleton className="h-12 w-full rounded-xl" />
                            </div>
                        </div>

                        <Skeleton className="h-32 w-full rounded-3xl" />
                    </aside>
                </div>
            </div>
        </div>
    );
}