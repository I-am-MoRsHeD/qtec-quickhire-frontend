import Navbar from '@/components/common/Navbar';
import React from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className='min-h-dvh'>
                {children}
            </div>
            <h3>footer</h3>
        </div>
    );
};

export default PublicLayout;