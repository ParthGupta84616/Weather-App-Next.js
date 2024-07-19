"use client"
import { useGlobalContext } from '@/context/globalContext';
import { SunsetIcon, WindIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Wind() {
  const { forcast } = useGlobalContext();
  const [data, setData] = useState({
    WindSpeed: '',
    Direction: ''
  })

  useEffect(() => {
    if (forcast) {
      setData((prevData) => ({
        ...prevData,
        WindSpeed: forcast?.data?.wind?.speed,
        Direction: forcast?.data?.wind?.deg}))
    }
  }, [forcast])
  return (
    <div className='h-full w-full flex-col rounded-lg shadow-sm border-2'>
      <div className="h-1/3 w-full flex items-center text-sm font-bold gap-2 ml-4">
      <WindIcon size={18} /> Wind
      </div>
      <div className="h-1/3 w-full flex text-lg items-end font-bold gap-2 ml-4">
      {data?.WindSpeed} m/s
      </div>
      <div className="h-1/3 w-full flex text-xs items-center font-bold gap-2 ml-4">
      Direction : {data?.Direction}&deg;
      </div>
    </div>
  )
}
