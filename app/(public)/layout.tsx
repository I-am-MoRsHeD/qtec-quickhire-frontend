import { Footer } from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { getAdminInfo } from '@/services/auth.service';
import React from 'react';

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
    const adminInfo = await getAdminInfo();

    return (
        <div>
            <Navbar adminInfo={adminInfo} />
            <div className='min-h-dvh'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default PublicLayout;