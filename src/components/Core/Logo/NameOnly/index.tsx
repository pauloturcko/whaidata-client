import {styled} from "styled-components";

export const NameOnly = () => {
    return (
        <Wrapper><h1>Whai</h1><h1 style={{color: "#3CDD7F"}}>Data</h1></Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
`