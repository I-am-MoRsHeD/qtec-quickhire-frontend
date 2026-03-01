import { Footer } from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import React from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className='min-h-dvh'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default PublicLayout;