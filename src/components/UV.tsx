"use client";
import { useGlobalContext } from "@/context/globalContext";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Wind } from "lucide-react";

export default function UV() {
  const { UV } = useGlobalContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (UV) {
      const CurrentUV = UV.data
      setProgress(Math.round(CurrentUV*2.325));
    }
  }, [UV]);
  console.log(UV)

  return (
    <div className="h-full w-full flex-col rounded-lg shadow-sm border-2">
      <div className="h-1/3 w-full flex items-center text-sm font-bold gap-2 ml-4">
      <Wind />Air Pollution
      </div>
      <div className="h-1/3 w-full ">
        <div className="flex justify-center items-center h-full w-full">
          <Progress value={progress} className="w-[80%]" />
        </div>
      </div>
      <div className="h-1/3 w-full flex items-center text-sm font-bold gap-2 ml-4 ">
      UV Index is  
        {
            progress/10 < 3 ? ` Good ` : progress/10 < 6 ? ` Moderate` :  ` Bad`
        }

        ({UV?.data})

      </div>
    </div>
  );
}
