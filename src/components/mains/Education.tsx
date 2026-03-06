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
        padding-bottom: 1%;
    }
    
    h4 {
        font-size: calc(4px + 1.2vw);
        color: #088395;
        font-style: italic;
    }
    
    img {
        max-width: 40%;
        margin: 2% auto;
        display: block;
        padding: 2%;
    }
    
    p {
        font-size: calc(2px + 1.5vw);
        font-weight: bold;
        color: #09637E;
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledCourseList = styled.nav`
    width: 100%;
    background-color: #7AB2B2;
    border-radius: 6px;
    padding: 2%;
    
    ul {
        list-style: circle;
        padding-left: 25%;
        padding-right: 25%;
        text-align: center;
        margin: 0;
        
        @media screen and (max-width: 1000px) {
            padding-left: 5%;
            padding-right: 5%;
            flex-direction: column;
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

export default function Education() {
    return (
        <StyledMain>
            <h1>Education</h1>
            <h4>Bachelor of Arts from Boston University, Cumulative GPA of 3.57</h4>
            <img src="/BULogo.png" alt="BU Logo"/>
            <p>Relevant Coursework:</p>
            <StyledCourseList>
                <ul>
                    <li>Software Engineering (CS411)</li>
                    <li>Computer Systems (CS210)</li>
                    <li>Analysis of Algorithms (in progress) (CS330)</li>
                    <li>Introduction to Programming (CS111)</li>
                    <li>Data Structures and Algorithms (CS112)</li>
                    <li>Probability in Computing (CS237)</li>
                    <li>Linear Algebra (MA242)</li>
                    <li>Combinatorics (CS131)</li>
                    <li>Introduction to Databases (in progress) (CS460)</li>
                    <li>Web Application Development (in progress) (CS391)</li>
                </ul>
            </StyledCourseList>
        </StyledMain>
    );
}