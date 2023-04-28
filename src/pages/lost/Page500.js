import React from 'react'
import { useNavigate } from "react-router-dom";


function Page500() {
  const navigate = useNavigate();
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-500 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-300">
              <span className="sr-only">Internal Server Error</span>500
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Got any problem?........ Contact Us</p>
            <p className="mt-4 mb-8 dark:text-gray-400">Error is not a fault of our knowledge, but a mistake of <br /> our judgment giving assent to that which is not true.</p>
            <a rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" onClick={()=>{
              navigate("/");
            }}>Back to homepage</a>
          </div>
        </div>
      </section>
    )
}

export default Page500