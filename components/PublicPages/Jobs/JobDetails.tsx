import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    Briefcase,
    Calendar,
    Building2,
    Share2,
    Bookmark,
    Clock,
    CheckCircle2
} from "lucide-react";
import { IJob } from "@/interface/jobs.type";
import ApplyJobForm from "@/components/Dashboard/ApplyForJobForm";

interface JobDetailsProps {
    jobDetails: IJob;
}

const JobDetails = ({ jobDetails }: JobDetailsProps) => {

    return (
        <div className="min-h-screen bg-background/70 py-16 lg:py-12">
            {/* Hero Section */}
            <div className="bg-background rounded-3xl p-8 shadow-sm border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl" />

                <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-border rounded-2xl">
                                <Building2 className="text-foreground/70" size={28} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-foreground/90">{jobDetails.company}</h2>
                                <div className="flex items-center gap-1 text-sm text-foreground/70">
                                    <Clock size={14} />
                                    <span>Posted {new Date(jobDetails.createdAt!).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                            {jobDetails.title}
                        </h1>

                        <div className="flex flex-wrap gap-3 mt-2">
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                {jobDetails.type}
                            </Badge>
                            <div className="flex items-center gap-1.5 text-foreground/70 text-sm bg-border px-4 py-1.5 rounded-full font-medium">
                                <MapPin size={14} />
                                {jobDetails.location}
                            </div>
                            <div className="flex items-center gap-1.5 text-foreground/70 text-sm bg-border px-4 py-1.5 rounded-full font-medium">
                                <Briefcase size={14} />
                                {jobDetails.category}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <Button variant="outline" size="icon" className="rounded-2xl h-14 w-14 border-border hover:text-primary hover:bg-primary/5 transition-all">
                            <Share2 size={20} />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-2xl h-14 w-14 border-border hover:text-primary hover:bg-primary/5 transition-all">
                            <Bookmark size={20} />
                        </Button>
                        <Button asChild className="flex-1 md:flex-none bg-primary hover:bg-primary/80 text-background lg:px-10 h-14 rounded-2xl shadow-lg shadow-primary/20 text-lg font-bold">
                            <a href="#apply-form">Apply Now</a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

                <div className="lg:col-span-2 space-y-10">
                    <div className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border">
                        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                            <span className="w-1.5 h-8 bg-primary rounded-full inline-block"></span>
                            Job Description
                        </h3>
                        <div className="prose prose-pink max-w-none text-foreground/70 leading-relaxed whitespace-pre-wrap text-lg">
                            {jobDetails.description}
                        </div>
                    </div>

                    {/* Application Form Section */}
                    <div id="apply-form">
                        <ApplyJobForm jobId={jobDetails._id as string} />
                    </div>
                </div>

                <aside className="flex flex-col gap-8">
                    <div className="bg-background rounded-3xl p-8 shadow-sm border border-border sticky top-8">
                        <h3 className="text-xl font-bold text-foreground mb-8">Job Summary</h3>

                        <div className="space-y-8">
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-border flex items-center justify-center text-foreground/70 border border-border">
                                    <Calendar size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/70 uppercase font-bold tracking-widest mb-0.5">Posted On</p>
                                    <p className="text-base font-bold text-gray-800">
                                        {new Date(jobDetails.createdAt!).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-border flex items-center justify-center text-foreground/70 border border-border">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/70 uppercase font-bold tracking-widest mb-0.5">Location</p>
                                    <p className="text-base font-bold text-gray-800">{jobDetails.location}</p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-border flex items-center justify-center text-foreground/70 border border-border">
                                    <Briefcase size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/70 uppercase font-bold tracking-widest mb-0.5">Category</p>
                                    <p className="text-base font-bold text-gray-800 capitalize">{jobDetails.category.toLowerCase()}</p>
                                </div>
                            </div>
                        </div>

                        <hr className="my-8 border-border" />

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-sm text-foreground/70">
                                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                                <span>Verified posting from {jobDetails.company}</span>
                            </div>
                            <Button asChild className="w-full bg-foreground hover:bg-foreground text-background h-12 rounded-xl transition-all font-semibold">
                                <a href="#apply-form">Submit Application</a>
                            </Button>
                        </div>
                    </div>

                    {/* Floating Tip Card */}
                    <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10">
                        <p className="text-xs font-bold text-primary mb-2 uppercase tracking-tighter">Application Tip</p>
                        <p className="text-sm text-foreground/70 leading-snug">
                            Mention specific projects related to <strong>{jobDetails.category}</strong> in your cover note to stand out!
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default JobDetails;