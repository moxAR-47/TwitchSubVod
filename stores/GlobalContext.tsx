import React, { useState, useContext, createContext } from 'react';

const GlobalContext = createContext({} as any);

export function GlobalProvider({ children }: any) {
  const [videoQuality, setVideoQuality] = useState('chunked');
  const [error, setError] = useState('');

  const value = {
    videoQuality,
    setVideoQuality,
    error,
    setError,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  return useContext(GlobalContext);
};
