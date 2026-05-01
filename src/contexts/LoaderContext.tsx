"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type LoaderContextType = {
  isLoading: boolean;
  dispatchLoader: () => void;
  hideLoader: () => void;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatchLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <LoaderContext.Provider value={{ isLoading, dispatchLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export function useLoaderContext(): LoaderContextType {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader() precisa ser usado dentro de <LoaderProvider>");
  }

  return context;
}
