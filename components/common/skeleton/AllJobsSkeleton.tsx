import { Skeleton } from "@/components/ui/skeleton";
import { JobCardSkeleton } from "./JobsCardSkeleton";

export default function AllJobsSkeleton() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center mb-10">
                <Skeleton className="h-12 w-48" />
                <div className="flex gap-4">
                    <Skeleton className="h-10 w-64" />
                    <Skeleton className="h-10 w-24" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                    <JobCardSkeleton key={i} />
                ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="mt-12 flex justify-between items-center">
                <Skeleton className="h-6 w-32" />
                <div className="flex gap-2">
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-8 w-8 rounded-md" />
                </div>
                <Skeleton className="h-10 w-28 rounded-md" />
            </div>
        </div>
    );
}