import {Link} from "react-router";
import {useState} from "react";




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
        <main id="projects-main">
            <h1>Projects</h1>

            <h3 id="passwordManager">Password Manager</h3>
            <h5><Link to="https://github.com/miguelocque/Password-Manager">Github Link</Link></h5>
            <p>My Password Manager project was an ambitious project that I took upon myself with the idea
                that sometimes, people have more than one potential password for a given account. Thus, I
                created a CLI password manager with AES-128 encryption and SHA-256 authentication to learn a little
                more about security measures. It utilizes a custom hash table implementation with secure file
                storage and PIN protection. Here are some technical details:</p>
            <nav id="nav-password-manager">
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
            </nav>

            <h3 id="patientManager">Unified Patient Manager</h3>
            <h5><Link to="https://github.com/rajanbilancooper/egesCS411Team">Github Link</Link></h5>
            <p>A group project that I aided in designing and managing, the Unified Patient Manager is
                a secure Electronic Health Records (EHR) system built with Spring Boot featuring
                patient management, prescription tracking with conflict detection, and two-factor authentication.
                Here are some technical details:</p>
            <nav id="nav-upm">
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
            </nav>
            <img src="../../../public/UPMLogin.png" alt="Unified Patient Manager's Login page"/>
            <img src="../../../public/UPMRegistration.png" alt="Unified Patient Manager's Registration Page"/>
            <img src="../../../public/UPMDash.png" alt="Unified Patient Manager's Dashboard Page"/>


            <h3 id="petTrackr">PetTrackr</h3>
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
            <nav id="nav-petTrackr">
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
            </nav>

            <img src="../../../public/LoginPage.png" alt="PetTrackr's Login Page"/>
            <img src="../../../public/PetDashboard.png" alt="PetTrackr's Dashboard Page"/>
            <img src="../../../public/QRCodeLostPet.png" alt="PetTrackr's QR Code Emergency Page"/>



            <h3>JavaScript Calculator</h3>
            <div className="calculator">
                <div id="calculator-inputs">

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
                </div>

                <div id="calculator-buttons">
                    <button onClick={doAdd}>+</button>
                    <button onClick={doSubtract}>-</button>
                    <button onClick={doMultiply}> *</button>
                    <button onClick={doDivide}>/</button>
                    <button onClick={doPower}>**</button>
                    <button onClick={clear}>CLEAR</button>
                </div>
                <div id="calculator-output">
                    <h3 id="output">{output}</h3>
                </div>
            </div>

        </main>
    );
}