import React from 'react'
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='flex items-center justify-start max-w-[80rem] mx-auto mt-12'>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout
