import styled from 'styled-components';

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
    
    h3 {
        font-size: calc(6px + 1.5vw);
        color: #088395;
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

const StyledBullets = styled.nav`
    width: 100%;
    background-color: #7AB2B2;
    border-radius: 6px;
    padding: 2%;
    
    ul {
        list-style: circle;
        padding: 0 5%;
        text-align: center;
        margin: 0;
        
        @media screen and (max-width: 1000px) {
            flex-direction:column;
        }
    }
    
    li {
        padding: 1.5% 0;
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

export default function Experience() {
    return(
        <StyledMain>
            <h1>Work Experience</h1>

            <h3>Kohl's Inc</h3>
            <p>I've worked at Kohl's Inc since my senior year of High School, and over the years I've become
                a Store Associate that can be trusted with difficult tasks and to get projects done in a timely
                and orderly fashion. Here are some specifics:</p>
            <StyledBullets>
                <ul>
                    <li>Fulfilled orders within a 90-minute timeframe and was ranked in top 5% for efficiency during peak
                        seasons.</li>
                    <li>Promoted to seasonal team lead to manage logistics and train 3+ associates, ensuring proper
                        understanding of technologies and tools necessary for the job.</li>
                    <li>Applied problem-solving and systems thinking to improve workflow, resolve issues quickly, and
                        maintain operational stability during peak demand.</li>
                </ul>
            </StyledBullets>
        </StyledMain>
    );
}