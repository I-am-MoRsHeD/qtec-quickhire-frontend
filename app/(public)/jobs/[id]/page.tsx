import JobDetails from "@/components/PublicPages/Jobs/JobDetails";
import { getJobDetails } from "@/services/job.service";


const JobDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const jobDetails = await getJobDetails(id);

    return (
        <div className="max-w-310 mx-auto px-4 py-8 lg:py-28">
            <JobDetails jobDetails={jobDetails?.data} />
        </div>
    );
};

export default JobDetailsPage;