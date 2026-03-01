import Category from '@/components/PublicPages/Home/Category';
import { Companies } from '@/components/common/Companies';
import { FeaturedJobs } from '@/components/PublicPages/Home/FeaturedJobs';
import Hero from '@/components/PublicPages/Home/Hero';
import { StartPosting } from '@/components/PublicPages/Home/StartPosting';
import LatestJobs from '@/components/PublicPages/Home/LatestJobs';


const PublicHomePage = () => {
    return (
        <div>
            <Hero />
            <Companies />
            <Category />
            <StartPosting />
            <FeaturedJobs />
            <LatestJobs />
        </div>
    );
};

export default PublicHomePage;