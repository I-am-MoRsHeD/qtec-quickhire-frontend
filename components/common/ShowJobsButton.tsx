import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ShowJobsButton = () => {
    return (
        <Link href="/jobs" className="text-primary font-bold font-epilogue flex items-center gap-2 group my-5">
            Show all jobs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
    );
};

export default ShowJobsButton;