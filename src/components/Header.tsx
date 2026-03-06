import styled from "styled-components";

const StyledHeading = styled.header`
    background-color: #09637E;
    color: #1A1A1A;
    padding: 3%;
    text-align: left;
    
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`

export default function Header() {
    return(
        <StyledHeading>
            <h1>Miguel Ocque</h1>
            <p>My Online Resume</p>
        </StyledHeading>
    );
}