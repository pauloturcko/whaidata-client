import {styled} from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem
`

export const LoginModal = styled.div`
    background-color: ${({theme}) => theme.colors.surface};
    width: 30%;
    height: 25rem;
    border-radius: 0.5rem;
    border: 2px solid ${({theme}) => theme.colors.border};
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const LoginOrCreateContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    gap: 0.1rem;
    border-radius: 0.5rem;
    border-bottom: 2px solid ${({theme}) => theme.colors.border};
    
`


export const LoginOrCreate = styled.button<{$isActive: boolean}>`
    width: 50%;
    height: 3rem;
    background-color: ${({$isActive, theme}) => $isActive ? theme.colors.primary : theme.colors.surface};
    border: none;
    color: ${({theme}) => theme.colors.textPrimary};
    cursor: pointer;

    &:first-child {
        border-radius: 0.5rem 0 0 0;
    }

    &:last-child {
        border-radius: 0 0.5rem 0 0;
    }
`

