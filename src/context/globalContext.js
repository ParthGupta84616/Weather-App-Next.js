"use client";
import React, { createContext, useState } from 'react';

// Create the global context
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
    // Define the state variables
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Define any actions or functions you need

    // Return the provider with the state and actions
    return (
        <GlobalContext.Provider
            value={{
                data,
                loading,
                error,
                setData,
                setLoading,
                setError,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};