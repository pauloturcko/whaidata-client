import styled, { keyframes } from "styled-components";

const drawLoop = keyframes`
    0%   { stroke-dashoffset: 1; }
    50%  { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 1; }
`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoWrapper = styled.div`
    .loader-path {
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        animation: ${drawLoop} 2.4s ease-in-out infinite;
    }
`;
