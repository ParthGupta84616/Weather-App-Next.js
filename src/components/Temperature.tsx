"use client";
import { useGlobalContext } from "@/context/globalContext";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { time } from "console";

export default function Temperature() {
  const { forcast } = useGlobalContext();
  const [data, setData] = useState({
    day: "",
    temperature: 0,
    country: "",
    weather: "",
    high: 0,
    low: 0,
    time : 0,
    weatherIcon: "",
    timezone: 0
  });
  useEffect(() => {
    if (forcast) {
      const timestamp = forcast?.data?.dt;
      const time = forcast?.data?.dt;
      const date = new Date(timestamp * 1000);
      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      const temperature = (forcast?.data?.main?.temp - 273.15) ?? 0;
      const country = forcast?.data?.sys?.country;
      const weather = forcast?.data?.weather[0].main;
      const high = (forcast?.data?.main?.temp_max - 273.15) ?? 0;
      const low = (forcast?.data?.main?.temp_min - 273.15) ?? 0;
      let weatherIcon = forcast?.data?.weather[0].icon;
      const timezone = forcast?.data?.timezone || 0;
      switch(weather){
        case "Clouds":
            weatherIcon = "☁️";
            break;
        case "Clear":
            weatherIcon = "☀️";
            break;
        case "Rain":
            weatherIcon = "🌧️";
            break;
        case "Snow":
            weatherIcon = "❄️";
            break;
        default:
            weatherIcon = "🌦️";
      }
      setData((prevData) => ({
        ...prevData,
        day: day,
        temperature: Math.round(temperature),
        country: country,
        weather: weather,
        high: Math.round(high),
        low: Math.round(low),
        weatherIcon: weatherIcon,
        time: time + timezone + new Date().getTimezoneOffset() * 60 ,
        timezone: timezone

      }));

    }
  }, [forcast]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        time: (prevData.time ?? 0) + 1 
      }));
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  if (!forcast.data) return <div>loading...</div>;
  if (forcast.data) {
    return (
      <div>
        <Card>
          <CardContent>
            <div className="w-full h-full flex justify-between">
              <p className="text-sm font-medium m-2">{data?.day}</p>
              <p className="text-sm font-semibold m-2"> {new Date(data?.time* 1000).toLocaleTimeString()}</p>
            </div>
            <p className="text-sm mx-2">{data.country}</p>
          </CardContent>
          <CardFooter className="flex justify-center items-start text-9xl mt-2">
            {data.temperature}&deg;
          </CardFooter>
          <CardContent className="">
            <p className="text-sm font-semibold">{data.weatherIcon}</p>
            <p className="text-sm font-semibold ">{data.weather}</p>
            <p className="text-sm font-normal">High: {data.high} &deg;  Low: {data.low} &deg;</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div>
        <Card>
          <CardContent>
           ...Loading
          </CardContent>
        </Card>
      </div>
);
}
