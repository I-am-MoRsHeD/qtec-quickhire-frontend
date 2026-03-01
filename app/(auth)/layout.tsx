import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className='min-h-dvh'>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;