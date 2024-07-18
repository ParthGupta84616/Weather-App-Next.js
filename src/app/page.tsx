import Navbar from "@/components/Navbar";
import Temperature from "@/components/Temperature";
import React from "react";
export default function page() {
  return (
    <div className="lg:mx-[8rem] lg:my-[2rem] m-4">
      <main>
        <Navbar />
        <div className="flex flex-col md:flex-row sm:flex-row justify-between gap-4 mt-4 h-[20rem]">
          <div className="h-full lg:w-1/3 md:w-full flex flex-col border-white border-2">
            <Temperature />
          </div>
          <div className="h-full lg:w-1/3 md:w-full  gap-2 flex flex-col justify-between">
            <div className="h-1/2 w-full  border-2 border-white"></div>
            <div className="h-1/2 w-full  border-2 border-white"></div>
          </div>
          <div className="h-full lg:w-1/3 md:w-full flex flex-col justify-between gap-2">
            <div className="h-1/2 w-full flex  gap-2">
              <div className="w-1/2 h-full  border-white border-2"></div>
              <div className="w-1/2 h-full border-white border-2"></div>
            </div>
            <div className="h-1/2 w-full border-2 flex gap-2">
              <div className="w-1/2 h-full  border-white border-2"></div>
              <div className="w-1/2 h-full border-white border-2"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
