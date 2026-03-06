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

    p {
        line-height: 160%;
        font-size: calc(2px + 1.5vw);
        padding: 0 4%;
        color: #1a1a1a;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 150vh;
    }
`;

const StyledAchievementList = styled.nav`
    width: 100%;
    background-color: #7AB2B2;
    border-radius: 6px;
    padding: 2%;

    ul {
        list-style: circle;
        padding-left: 35%;
        padding-right: 35%;
        text-align: left;
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
        color: #1a1a1a;
        border: none;

        @media screen and (max-width: 1000px) {
            text-align: center;
            width: 100%;
            margin: 2% 0;
        }
    }
`;

export default function Achievements() {
    return (
        <StyledMain>
            <h1>Achievements</h1>
            <p>I've been a successful student at Boston University, receiving multiple Dean's List awards for
                3 of my 5 semesters so far and maintaining a Cumulative GPA of 3.57</p>
            <StyledAchievementList>
                <ul>
                    <li>Dean's List: Spring 2024</li>
                    <li>Dean's List: Spring 2025</li>
                    <li>Dean's List: Fall 2025</li>

                </ul>
            </StyledAchievementList>
        </StyledMain>
    );
}