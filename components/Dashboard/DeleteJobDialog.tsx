/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { deleteJobs } from "@/services/job.service";

interface DeleteJobProps {
    jobId: number;
    jobTitle: string;
}

export function DeleteJobDialog({ jobId, jobTitle }: DeleteJobProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        const toastId = toast.loading(`Deleting ${jobTitle}...`);
        setIsDeleting(true);

        try {
            const result = await deleteJobs(jobId);

            if (result?.success) {
                toast.success("Job deleted successfully", { id: toastId });
            } else {
                toast.error(result?.message || "Could not delete job", { id: toastId });
            }
        } catch (error) {
            toast.error("An unexpected error occurred", { id: toastId });
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 flex items-center gap-2 px-3"
                >
                    <Trash2 size={18} />
                    <span className="font-medium">Delete Job</span>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-2xl">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete the position for <strong>{jobTitle}</strong>.
                        This action cannot be undone and will remove the listing from the public job board.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-2">
                    <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="bg-red-500 hover:bg-red-600 text-white rounded-xl"
                    >
                        {isDeleting ? "Deleting..." : "Delete Job"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}