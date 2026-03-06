import styled from "styled-components";

const StyledMain = styled.main`
    width: 70%;
    height: 200vh;
    text-align: center;
    font-size: calc(2px + 1.5vw);
    padding: 3%;
    background-color: #EBF4F6;
    
    img {
        max-width: 75%;
        margin: 2% auto;
        display: block;
        padding: 2%;
        border: 4px solid #7AB2B2;
        border-radius: 8px;
    }   
    
    h3 {
        font-size: calc(6px + 1.8vw);
        color: #09637E;
        border-bottom: 3px solid #088395;
        padding-bottom: 1%;
    }
    
    p {
        font-size: calc(2px + 1.5vw);
        padding: 0 4%;
        color: #1a1a1a;
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 150vh;
    }
`;

export default function Home() {
    return (
        <StyledMain>
            <h3>Home</h3>
            <img src="/IMG_0099.JPG" alt="A cover photo for Miguel Ocque"/>

            <p> My name is Miguel Ocque, and I'm a Junior at Boston University studying Computer Science, with an
                anticipated graduation date of May 2027. Currently, I'm in my second semester of my 3rd year as a
                Computer Science student, and I've taken many foundational courses such as Data Structures and Algorithms.
                Today, I am learning about the foundational languages for Front-End and Web Development, Database
                Management, and Analysis of Algorithms. </p>
        </StyledMain>
    );
}