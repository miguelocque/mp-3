import styled from "styled-components";

const StyledMain = styled.main`
    width: 70%;
    height: 200vh;
    text-align: center;
    font-size: calc(2px + 1.5vw);
    padding: 3%;
    background-color: #EBF4F6;
    
    h1 {
        font-size: calc(8px + 2vw);
        color: #09637E;
        border-bottom: 3px solid #088395;
        padding-bottom: 2%;
    }
    
    p {
        font-size: calc(2px + 1.5vw);
        padding: 0 4%;
        color: #1A1A1A;
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 150vh;
    }
`;

const StyledSkillList = styled.nav`
    width: 100%;
    background-color: #7AB2B2;
    border-radius: 6px;
    padding: 2%;
    
    ul {
        list-style: circle;
        padding-left: 35%;
        padding-right: 35%;
        text-align: center;
        margin: 0;
        
        @media screen and (max-width: 1000px) {
            flex-direction: column;
            padding-left: 5%;
            padding-right: 5%;
        }
    }
    
    li {
        padding: 1% 0;
        font-size: calc(2px + 1.3vw);
        color: #1A1A1A;
        border: none;
        
        @media screen and (max-width: 1000px) {
            text-align: center;
            width: 100%;
            margin: 2% 0;
        }
    }
`;


export default function Skills() {
    return(
        <StyledMain>
            <h1>Technical Skills</h1>
            <p>Over the course of my tenure as a student at Boston University, I have developed a multitude of skills that
                I'm ready to apply to new projects and problems:</p>
            <StyledSkillList>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C</li>
                    <li>Assembly (x86)</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>Spring Boot</li>
                    <li>REST APIs</li>
                    <li>Git/Github</li>
                    <li>JUnit/Maven/Mockito</li>
                    <li>Hibernate/H2/MySQL</li>
                    <li>Unix/Linux</li>
                    <li>Agile/Scrum</li>
                </ul>
            </StyledSkillList>
        </StyledMain>
    );
}