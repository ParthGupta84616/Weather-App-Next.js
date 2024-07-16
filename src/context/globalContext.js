"use client";
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the global context
export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
    const [forcast, setForcast] = useState({})
    
    const response = async () => {
        try {
            const data = await axios.get("/api/weather")
            console.log(data)
            setForcast(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        response()
    }, [])
    
    return (
        <GlobalContext.Provider value={{forcast}}>
            <GlobalUpdateContext.Provider value={{forcast}}>
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