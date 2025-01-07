import React from 'react';
import { SignUp } from '@clerk/clerk-react';

function Register() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <SignUp signInUrl='/sign-in' forceRedirectUrl={"/dashboard"}></SignUp>
        </div>
    )
}

export default Register