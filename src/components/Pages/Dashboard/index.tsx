"use client";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useLoaderContext } from "@/contexts/LoaderContext";

export const DashboardPage = () => {
  const { user, isLoading } = useUser();
  const { dispatchLoader, hideLoader } = useLoaderContext();

  useEffect(() => {
    if (isLoading) {
      dispatchLoader();
    } else {
      hideLoader();
    }

    return () => hideLoader();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading || !user) return null;

  return (
    <div>
      <h1>Olá {user?.name.split(" ")[0]}!</h1>
    </div>
  );
};
