import React from 'react';
import { SignedIn, useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

function ClientProtectedRoute(props) {
    const { Component } = props;
    const { isSignedIn } = useUser();

    if (isSignedIn) {
        <Navigate to="/dashboard" />;
    } else {
        return <Navigate to="/" />;
    }

    return (
        <>
            <SignedIn>
                <Component />
            </SignedIn>
        </>
    );
}

export default ClientProtectedRoute;
