"use client";
import React, { use } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGlobalContext } from "@/context/globalContext";

export default function HourlyForecat() {
  const { dailyForecast , forcast } = useGlobalContext();
  console.log(dailyForecast?.data?.list);
  function timestampToDate(timestamp: number) {
    const date = new Date(timestamp * 1000 + dailyForecast?.data?.city?.timezone*1000 - 25200000);

    // Format the date as a string
    const formattedDate = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedDate;
  }
  return (
    <div className="flex items-center justify-center rounded-lg shadow-sm border-2">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-4/5 p-2.5 flexmax-w-sm"
      >
        <CarouselContent>
          {Array.from({ length: dailyForecast?.data?.list.length }).map(
            (data, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <span className="text-sm font-semibold">
                        {timestampToDate(dailyForecast?.data?.list[index].dt)}  
                        <div className="flex item-center justify-center">
                        <img
                          src={`http://openweathermap.org/img/wn/${dailyForecast?.data?.list[index]?.weather[0]?.icon}.png`}
                          alt="Weather icon"
                          className=""
                          />
                        </div>
                          <div className="flex item-center justify-center">
                          {Math.round(dailyForecast?.data?.list[index].main.temp - 273.15)}°C
                          </div>
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
