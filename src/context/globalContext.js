"use client";
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the global context
export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
    const [forcast, setForcast] = useState({})
    const [airPollution, setAirPollution] = useState({})
    const [dailyForecast, setDailyForecast] = useState({})
    const [UV, setUV] = useState({})
    
    const response = async () => {
        try {
            const data = await axios.get("/api/weather")
            setForcast(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const AirPollution = async()=>{
        try {
            const data = await axios.get("/api/AirPollution")
            setAirPollution(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const ThreeHourForecast = async()=>{
        try {
            const data = await axios.get("/api/daily")
            setDailyForecast(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const CurrentUV = async()=>{
        try {
            const data = await axios.get("/api/UV")
            setUV(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        response()
        ThreeHourForecast()
        AirPollution()
        CurrentUV()
    }, [])
    
    return (
        <GlobalContext.Provider value={{forcast ,airPollution , dailyForecast , UV}}>
            <GlobalUpdateContext.Provider value={{forcast , airPollution ,dailyForecast , UV}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
export const useGlobalUpdateContext = () => {
    return useContext(GlobalUpdateContext);
}