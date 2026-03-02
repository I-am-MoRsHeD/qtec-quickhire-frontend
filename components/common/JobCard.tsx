"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";
import { DeleteJobDialog } from '../Dashboard/DeleteJobDialog';

interface JobCardProps {
    job: {
        id: string | number;
        logo?: string;
        company?: string;
        title?: string;
        location?: string;
        type?: string;
        tags?: string[];
        description?: string;
    };
}

const JobCard = ({ job }: JobCardProps) => {
    const pathname = usePathname();
    const isJobsPage = pathname === "/jobs";
    const isAdminJobPage = pathname === '/admin/jobs';

    if (!job) return null;

    return (
        <div className="bg-background border border-border p-6 hover:shadow-lg transition-all h-full flex flex-col group">
            {/* Top Row: Logo and Job Type */}
            <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 relative flex items-center justify-center bg-background/80 border border-background/90">
                    {job.logo ? (
                        <Image src={job.logo} alt={job.company || "Company"} fill className="object-contain p-1" />
                    ) : (
                        <Image src="/logo.png" alt={job.company || "Company"} fill className="object-contain p-1" />
                    )}
                </div>
                {job.type && (
                    <span className="text-primary border border-primary px-3 py-1 text-sm font-semibold whitespace-nowrap">
                        {job.type}
                    </span>
                )}
            </div>

            {/* Middle Content */}
            <div className="flex-1">
                {job.title && (
                    <h3 className="font-clash text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {job.title}
                    </h3>
                )}

                <div className="flex flex-wrap items-center text-[#7C8493] font-epilogue text-sm mb-4 gap-x-2">
                    {job.company && <span>{job.company}</span>}
                    {job.company && job.location && <span>•</span>}
                    {job.location && (
                        <span className="flex items-center gap-1">
                            <MapPin size={14} /> {job.location}
                        </span>
                    )}
                </div>

                {job.description && (
                    <p className="text-muted-foreground/70 font-epilogue text-sm line-clamp-2 mb-4">
                        {job.description}
                    </p>
                )}
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {job.tags && job.tags.map((tag) => (
                    <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-bold 
                            ${tag === 'Marketing' ? 'bg-[#FFB836]/10 text-[#FFB836]' : 'bg-[#56CDAD]/10 text-[#56CDAD]'}`}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* only show when /jobs is the pathname */}
            {isJobsPage && job.id && (
                <div className="mt-6 pt-6 border-t border-border">
                    <Link
                        href={`/jobs/${job.id}`}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-background py-3 font-epilogue font-bold hover:bg-opacity-90 transition-all"
                    >
                        Show details
                        <ArrowRight size={18} />
                    </Link>
                </div>
            )}

            {/* only show when /admin/jobs is the pathname */}
            {isAdminJobPage && job.id && (
                <div className="mt-6 pt-6 border-t border-border w-full flex items-center justify-center">
                    <DeleteJobDialog jobId={job.id as number} jobTitle={job.title as string} />
                </div>
            )}
        </div>
    );
};

export default JobCard;