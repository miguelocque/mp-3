import {Link} from "react-router";
import {useState} from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    width: 70%;
    text-align: center;
    font-size: calc(2px + 1.5vw);
    padding: 3%;
    background-color: #EBF4F6;
    height: auto;
    
    h1 {
        font-size: calc(8px + 2vw);
        color: #09637E;
        border-bottom: 3px solid #088395;
        padding-bottom: 1%;
    }
    
    h3 {
        font-size: calc(6px + 1.2vw);
        color: #09637E;
        margin-top: 4%;
    }
    
    h5 {
        font-size(2px + 0.8vw);
        margin-top: 1%;
    }
    
    p {
        font-size: calc(2px + 1.5vw);
        padding: 0 4%;
        color: #1A1A1A;
    }
    
    img {
        max-width: 75%;
        margin: 2% auto;
        display: block;
        padding: 2%;
        border: 4px solid #7AB2B2;
        border-radius: 8px;
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
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
        text-align: left;
        margin: 0;

        @media screen and (max-width: 1000px) {
            flex-direction: column;
            padding-left: 5%;
            padding-right: 5%;
        }
    }

    li {
        padding: 1.5% 0;
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


const StyledCalculator = styled.div`
    max-width: 40vw;
    margin: 2% auto;
    padding: 3%;
    background-color: #EBF4F6;
    border: 5px solid #088395;
    border-radius: 10px;

    @media screen and (max-width: 1000px) {
        max-width: 90vw;
        padding: 2%;
    }
`;

const StyledCalcInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;

    label {
        font-size: calc(4px + 1.2vw);
        font-weight: bold;
        color: #09637E;
        margin-bottom: 1%;
        margin-top: 1%;
    }

    input {
        padding: 2%;
        font-size: calc(4px + 1.2vw);
        border: 3px solid #7AB2B2;
        width: 100%;
        background-color: white;
        margin-bottom: 2%;
    }
`;

const StyledCalcButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3%;

    button {
        width: 30%;
        margin: 1%;
        padding: 4%;
        font-size: calc(4px + 1.5vw);
        background-color: #09637E;
        color: #EBF4F6;
        border: 3px solid #088395;
        font-weight: bold;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s;

        &:hover {
            background-color: #088395;
        }

        &:last-child {
            background-color: #7AB2B2;
            color: #1a1a1a;
            width: 96%;
        }

        @media screen and (max-width: 1000px) {
            width: 100%;
            margin: 2% 0;
            padding: 3%;
            font-size: calc(6px + 2vw);
        }
    }
`;

// the <{$negative : boolean}> allows us to change the color using a prop
const StyledCalcOutput = styled.div<{$negative : boolean}>`
    margin-top: 2%;

    h3 {
        text-align: center;
        padding: 3%;
        min-height: 8vh;
        font-size: calc(6px + 2vw);
        color: ${({ $negative}) => ($negative ? "red" : "#09637E")};
        margin: 0;
        border-top: 2px solid #7AB2B2;

        @media screen and (max-width: 1000px) {
            font-size: calc(8px + 2.5vw);
            min-height: 10vh;
        }
    }
`;

export default function Projects() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    function doAdd() {
        setOutput(Number(input1) + Number(input2));
    }

    function doSubtract() {
        setOutput(Number(input1) - Number(input2));
    }

    function doMultiply() {
        setOutput(Number(input1) * Number(input2));
    }

    function doDivide() {
        setOutput(Number(input1) / Number(input2));
    }

    function doPower() {
        setOutput(Number(input1) ** Number(input2));
    }

    function clear() {
        setOutput(0);
        setInput1("");
        setInput2("");
    }

    return (
        <StyledMain>
            <h1>Projects</h1>

            <h3>Password Manager</h3>
            <h5><Link to="https://github.com/miguelocque/Password-Manager">Github Link</Link></h5>
            <p>My Password Manager project was an ambitious project that I took upon myself with the idea
                that sometimes, people have more than one potential password for a given account. Thus, I
                created a CLI password manager with AES-128 encryption and SHA-256 authentication to learn a little
                more about security measures. It utilizes a custom hash table implementation with secure file
                storage and PIN protection. Here are some technical details:</p>
            <StyledBullets>
                <ul>
                    <li>Engineered a CLI password manager with AES-128 encryption and SHA-256 hashing for secure
                        authentication and credential storage, achieving zero plaintext exposure through 50+ simulated
                        test
                        entries.
                    </li>
                    <li>Applied modular, object-oriented design through 1,200+ lines of code to separate encryption,
                        authentication, and file management, supporting scalability and future feature integration.
                    </li>

                </ul>
            </StyledBullets>

            <h3>Unified Patient Manager</h3>
            <h5><Link to="https://github.com/rajanbilancooper/egesCS411Team">Github Link</Link></h5>
            <p>A group project that I aided in designing and managing, the Unified Patient Manager is
                a secure Electronic Health Records (EHR) system built with Spring Boot featuring
                patient management, prescription tracking with conflict detection, and two-factor authentication.
                Here are some technical details:</p>
            <StyledBullets>
                <ul>
                    <li>Designed and developed a full-stack healthcare management system serving 4 user workflows with
                        60+
                        REST endpoints, implementing two-factor authentication via OTP email verification and JWT-based
                        session management for secure patient data access.
                    </li>
                    <li>Implemented a prescription conflict detection system validating against patient allergies and
                        drug
                        interactions using rule-based logic, with medical override capabilities requiring justification,
                        applicable
                        to medication safety verification systems.
                    </li>
                    <li>Led Agile development as Project Manager coordinating a 4-person team through sprint planning,
                        code
                        reviews, and feature integration while implementing RESTful backend architecture with
                        controllers,
                        services, repositories, and DTOs.
                    </li>
                </ul>
            </StyledBullets>
            <img src="/UPMLogin.png" alt="Unified Patient Manager's Login page"/>
            <img src="/UPMRegistration.png" alt="Unified Patient Manager's Registration Page"/>
            <img src="/UPMDash.png" alt="Unified Patient Manager's Dashboard Page"/>


            <h3>PetTrackr</h3>
            <h5><Link to="https://github.com/miguelocque/PetTrackr">Github Link</Link></h5>
            <p>
                PetTrackr was an individual project that derived inspiration from the Patient Manager. I wanted
                to ensure I had all the understanding of what properly architectured systems were designed,
                and ensured to keep myself within scope to finish this project over winter break of 2025/2026.
                Formally, PetTrackr is a comprehensive full-stack pet management application that helps pet owners
                track their pets' health, medications, feeding schedules, and veterinary appointments.
                Built with Spring Boot and React to demonstrate modern web development practices with emphasis
                on file handling and QR code generation. Here are more technical details:
            </p>
            <StyledBullets>
                <ul>
                    <li>Engineered full-stack pet management application using Java Spring Boot and React, implementing
                        end-to-end customer workflows including profile management, QR-Code based lost pet recovery
                        system, and multipart file uploads with format/size validation.
                    </li>
                    <li>Developed RESTful API with 28 controller endpoints leveraging object-oriented design patterns
                        and
                        database queries with JPA for efficient data retrieval across 5 interconnected domain entities.
                    </li>
                    <li>Achieved 97% service layer test coverage through comprehensive JUnit and Mockito unit tests,
                        implementing validation logic for business rules and ensuring data integrity with cascade
                        operations.
                    </li>
                </ul>
            </StyledBullets>

            <img src="/LoginPage.png" alt="PetTrackr's Login Page"/>
            <img src="/PetDashboard.png" alt="PetTrackr's Dashboard Page"/>
            <img src="/QRCodeLostPet.png" alt="PetTrackr's QR Code Emergency Page"/>



            <h3>JavaScript Calculator</h3>
            <StyledCalculator>
                <StyledCalcInputs>

                    {/*input for the first number in JS calculator*/}
                    <label htmlFor="first-number">First Number: </label>
                    <input
                        id="first-number"
                        value={input1}
                        placeholder={`Enter a Number`}
                        onChange={(e) => setInput1(e.target.value)}
                    />

                    <label htmlFor="second-number">Second Number: </label>
                    <input
                        id="second-number"
                        value={input2}
                        placeholder={`Enter a Number`}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </StyledCalcInputs>

                <StyledCalcButtons>
                    <button onClick={doAdd}>+</button>
                    <button onClick={doSubtract}>-</button>
                    <button onClick={doMultiply}> *</button>
                    <button onClick={doDivide}>/</button>
                    <button onClick={doPower}>**</button>
                    <button onClick={clear}>CLEAR</button>
                </StyledCalcButtons>

                {/* using interpolation/props to denote the color of the output */}
                <StyledCalcOutput $negative={output < 0}>
                    <h3>{output}</h3>
                </StyledCalcOutput>
            </StyledCalculator>

        </StyledMain>
    );
}