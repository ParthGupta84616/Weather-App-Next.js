"use client";
import React, { createContext, useContext, useState } from 'react';

// Create the global context
export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
    // Define the state variables
    const [data, setData] = useState("Parth Gupta");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Define any actions or functions you need

    // Return the provider with the state and actions
    return (
        <GlobalContext.Provider value={{data}}>
            <GlobalUpdateContext.Provider>
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