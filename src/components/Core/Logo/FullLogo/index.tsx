import {styled} from "styled-components";
import Image from "next/image";

export const FullLogo = () => {
    return(
        <Wrapper>
            <Image
                src="/logo.svg"
                alt="WhaiData logo"
                width={100}
                height={100}
            />
            <h1>Whai</h1>
            <h1 style={{color: "#3CDD7F"}}>Data</h1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
`