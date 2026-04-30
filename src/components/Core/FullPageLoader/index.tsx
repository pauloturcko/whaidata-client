"use client";

import { useLoaderContext } from "@/contexts/LoaderContext";
import { Overlay, LogoWrapper } from "./styles";

export const FullPageLoader = () => {
  const { isLoading } = useLoaderContext();

  if (!isLoading) return null;

  return (
    <Overlay>
      <LogoWrapper>
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="loaderGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="hsl(152, 45%, 25%)"
              />
              <stop
                offset="50%"
                stopColor="hsl(155, 60%, 45%)"
              />
              <stop
                offset="100%"
                stopColor="hsl(145, 70%, 55%)"
              />
            </linearGradient>
          </defs>
          <path
            pathLength="1"
            d="M50 85 C50 85 25 75 25 50 C25 30 40 20 50 20 C65 20 75 35 75 50 C75 60 68 68 58 68 C50 68 45 62 45 55 C45 50 48 47 52 47 C55 47 57 49 57 52"
            stroke="url(#loaderGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            className="loader-path"
          />
        </svg>
      </LogoWrapper>
    </Overlay>
  );
};
