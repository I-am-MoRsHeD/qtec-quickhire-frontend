import JobDetails from "@/components/PublicPages/Jobs/JobDetailsPage";
import { getJobDetails } from "@/services/job.service";


const JobDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const jobDetails = await getJobDetails(id);

    return (
        <div>
            <JobDetails />
        </div>
    );
};

export default JobDetailsPage;