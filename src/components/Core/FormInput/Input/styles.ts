import {styled} from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 0.5rem;
    position: relative;
`;

export const Label = styled.label`
    font-size: 0.925rem;
`

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid ${({theme}) => theme.colors.border};
    border-radius: 0.5rem;
    font-size: 14px;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.colors.surface};
    
    &:focus {
        outline: none;
        border-color: ${({theme}) => theme.colors.primary};
    }
`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 72.5%;
    right: 12px;
    transform: translateY(-50%);

    border: none;
    background: transparent;
    cursor: pointer;
`