import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #09637E;
    color: #1A1A1A;
    padding: 3%;
    text-align: left;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;


export default function footer() {
    return(
        <StyledFooter>
            <p>All rights reserved by Miguel Ocque <Link to="">Credits</Link> &copy;</p>
        </StyledFooter>
    );
}