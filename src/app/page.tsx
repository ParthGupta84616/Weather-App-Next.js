import Navbar from '@/components/Navbar'
import Temperature from '@/components/Temperature'
import React from 'react'
export default function page() {
  return (
    <div className='lg:mx-[8rem] lg:my-[2rem] m-4'>
      <main>
        <Navbar />
        <div className="flex flex-col md:flex-row sm:flex-row justify-between gap-4 mt-4">
          <div className="h-full lg:w-1/3 md:w-full  gap-2 flex flex-col justify-between">
            <div className="w-full">
            <Temperature />
            </div>
            <div className="w-full rounded-lg border-gray-900 border-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, unde!

            </div>
          </div>
          <div className="h-full w-full border-2 border-gray-900">
            
          </div>
        </div>
      </main>
    </div>
  )
}
