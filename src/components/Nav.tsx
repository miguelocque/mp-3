import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: #7AB2B2;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledList=styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    list-style: none;
    
    @media screen and (max-width: 1000px) {
        flex-direction: row;
    }
`;

const StyledListItem = styled.li`
    width: 80%;
    margin: 8% auto;
    padding: 1% 3%;
    border: #088395 5px solid;
    text-align: center;
    
    @media screen and (max-width: 1000px) {
        width: 15%;
        margin: 1%;
        padding: 1%;
    }
`;

const StyledLink = styled(Link)`
    font:normal small-caps bold calc(2px + 2vw) "Times New Roman", serif;
    color: black;
    text-decoration: none;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1vw);
    }
`;

export default function Nav() {
    return(
        <StyledNav>
            <StyledList>
                <StyledListItem>
                    <StyledLink to="/">Home</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/projects.html">Projects</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/education.html">Education</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/experience.html">Experience</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/skills.html">Technical Skills</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/achievements.html">Achievements</StyledLink>
                </StyledListItem>
            </StyledList>
        </StyledNav>
    );
}