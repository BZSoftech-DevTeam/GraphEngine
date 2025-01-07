import React from 'react'

function Loader() {
    return (
        <div className="w-full mx-auto flex items-center justify-center h-screen bg-gradient-to-tl from-blue-600 to-violet-600 text-6xl">
            <l-quantum
                size="45"
                speed="1.75"
                color="white"
            ></l-quantum>
        </div>
    )
}

export default Loader