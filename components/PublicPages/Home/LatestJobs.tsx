import JobsOpenCard from "@/components/common/JobsOpenCard";
import ShowJobsButton from "@/components/common/ShowJobsButton";
import { LATEST_JOBS } from "@/consts/jobsOpen.consts";



const LatestJobs = () => {
    return (
        <section className="relative w-full min-h-187.5 bg-primary/5 overflow-hidden py-20">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1000 100L1300 250V550L1000 400V100Z" stroke="#4640DE" strokeOpacity="0.5" />
                    <path d="M1100 50L1450 225V525L1100 350V50Z" stroke="#4640DE" strokeOpacity="0.5" />
                    <path d="M900 200L1200 350V650L900 500V200Z" stroke="#4640DE" strokeOpacity="0.5" />
                </svg>
            </div>
            <div
                className="absolute -top-1 left-0 w-32 h-32 bg-background z-10"
                style={{ clipPath: 'polygon(0 0, -50% 100%, 100% 0)' }}
            />

            <div className="max-w-310 mx-auto px-4 lg:px-0 relative z-30">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="font-clash text-4xl md:text-5xl font-bold text-foreground">
                        Latest <span className="text-chart-3">jobs open</span>
                    </h2>
                    <div className='hidden md:flex'>
                        <ShowJobsButton />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {LATEST_JOBS.map((job) => (
                        <JobsOpenCard key={job.id} job={job} />
                    ))}
                </div>
                <div className='md:hidden'>
                    <ShowJobsButton />
                </div>
            </div>
        </section>
    );
};

export default LatestJobs;