import Category from '@/components/PublicPages/Home/Category';
import { Companies } from '@/components/PublicPages/Home/Companies';
import Hero from '@/components/PublicPages/Home/Hero';
import React from 'react';

const PublicHomePage = () => {
    return (
        <div>
            <Hero />
            <Companies />
            <Category />
        </div>
    );
};

export default PublicHomePage;