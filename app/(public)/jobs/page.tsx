import FindJobs from "@/components/PublicPages/Jobs/FindJobs";
import { queryStringFormatter } from "@/lib/formatter";
import { getAllJobs } from "@/services/job.service";

type IProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
};

const FindJobsPage = async ({ searchParams }: IProps) => {
    const params = await searchParams;
    const queryString = queryStringFormatter(params);
    const allJobs = await getAllJobs(queryString);

    return (
        <div className='max-w-310 mx-auto px-4 py-28'>
            <FindJobs jobsData={allJobs} />
        </div>
    );
};

export default FindJobsPage;