import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/mains/Home.tsx";
import Projects from "./components/mains/Projects.tsx";
import Education from "./components/mains/Education.tsx";
import Experience from "./components/mains/Experience.tsx";
import Skills from "./components/mains/Skills.tsx";
import Achievements from "./components/mains/Achievements.tsx";
import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #088395
`;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

function Root() {
  return (
      <StyledWrapper>
        <Header/>
          <StyledContainer>
            <Nav/>
            <Routes>
                <Route
                  path={`/`}
                  element={<Home/>}
                />
                <Route
                    path={`projects.html`}
                    element={<Projects/>}
                />
                <Route
                    path={`education.html`}
                    element={<Education/>}
                />
                <Route
                    path={`experience.html`}
                    element={<Experience/>}
                />
                <Route
                    path={`skills.html`}
                    element={<Skills/>}
                />
                <Route
                    path={`achievements.html`}
                    element={<Achievements/>}
                />
            </Routes>
          </StyledContainer>
        <Footer/>
      </StyledWrapper>
  );
}

const router = createBrowserRouter([{path:"*", Component: Root}]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

