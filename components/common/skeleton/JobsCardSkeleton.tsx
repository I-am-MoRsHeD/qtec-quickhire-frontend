import { Skeleton } from "@/components/ui/skeleton";

export function JobCardSkeleton() {
    return (
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
                <Skeleton className="h-12 w-12 rounded-xl" />
                <Skeleton className="h-6 w-20 rounded-md" />
            </div>

            <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>

            <Skeleton className="h-4 w-full" />

            <div className="flex gap-2">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-16 rounded-full" />
            </div>

            <Skeleton className="h-10 w-full rounded-md" />
        </div>
    );
}