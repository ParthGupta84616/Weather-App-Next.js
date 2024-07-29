"use client"
import { useGlobalContext } from '@/context/globalContext';
import { SunsetIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Sunset() {
  const { forcast } = useGlobalContext();
  const [data, setData] = useState({
    sunset: '',
    sunrise: ''
  })

  useEffect(() => {
    if (forcast) {
      setData((prevData) => ({
        ...prevData,
        sunset: new Date((forcast?.data?.sys?.sunset + forcast?.data?.timezone - 19800) * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        sunrise: new Date((forcast?.data?.sys?.sunrise + forcast?.data?.timezone - 19800) * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
    }))
    }
  }, [forcast])
  return (
    <div className='h-full w-full flex-col rounded-lg shadow-sm border-2'>
      <div className="h-1/3 w-full flex items-center text-sm font-bold gap-2 ml-4">
      <SunsetIcon size={18} /> Sunset
      </div>
      <div className="h-1/3 w-full flex text-lg items-end font-bold gap-2 ml-4">
      {data?.sunset}
      </div>
      <div className="h-1/3 w-full flex text-xs items-center font-bold gap-2 ml-4">
      Sunrise : {data?.sunrise}
      </div>

    </div>
  )
}
