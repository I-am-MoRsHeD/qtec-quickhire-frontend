import Category from '@/components/PublicPages/Home/Category';
import { Companies } from '@/components/PublicPages/Home/Companies';
import { FeaturedJobs } from '@/components/PublicPages/Home/FeaturedJobs';
import Hero from '@/components/PublicPages/Home/Hero';
import { StartPosting } from '@/components/PublicPages/Home/StartPosting';
import React from 'react';

const PublicHomePage = () => {
    return (
        <div>
            <Hero />
            <Companies />
            <Category />
            <StartPosting />
            <FeaturedJobs />
        </div>
    );
};

export default PublicHomePage;