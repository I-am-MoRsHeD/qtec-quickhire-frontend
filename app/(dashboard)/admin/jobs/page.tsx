import AllJobs from '@/components/Dashboard/AllJobs';
import { queryStringFormatter } from '@/lib/formatter';
import { getAllJobs } from '@/services/job.service';


type IProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
};

const AdminJobListingPage = async ({ searchParams }: IProps) => {
    const params = await searchParams;
    const queryString = queryStringFormatter(params);
    const allJobs = await getAllJobs(queryString);

    return (
        <div>
            <AllJobs jobsData={allJobs} />
        </div>
    );
};

export default AdminJobListingPage;