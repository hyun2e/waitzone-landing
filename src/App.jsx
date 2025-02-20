import React, { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar.jsx";
import GlobalStyle from "./styles/GlobalStyles.jsx";
import { theme } from "./styles/theme.js";
import HeroSection from "./sections/HeroSection.jsx";
import CoreValues from "./sections/CoreValues.jsx";
import Features01 from "./sections/Features01.jsx";
import Features02 from "./sections/Features02.jsx";
import Features03 from "./sections/Features03.jsx";
import Features04 from "./sections/Features04.jsx";
import Footer from "./sections/Footer";

const ContentContainer = styled.div`
  width: 100%;
  //max-width: 800px;
  //margin: auto;
`;

const App = () => {
  // 🔥 스크롤 이동을 위한 ref 설정
  const heroRef = useRef(null);
  const coreValuesRef = useRef(null);
  const features01Ref = useRef(null);
  const features02Ref = useRef(null);
  const features03Ref = useRef(null);
  const features04Ref = useRef(null);
  const footerRef = useRef(null);

  // 📌 스크롤 이동 함수
  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <NavBar
          scrollToSection={scrollToSection}
          refs={{
            heroRef,
            coreValuesRef,
            features01Ref,
            features02Ref,
            features03Ref,
            features04Ref,
            footerRef,
          }}
        />
        <ContentContainer>
          <div ref={heroRef}>
            <HeroSection />
          </div>
          <div ref={coreValuesRef}>
            <CoreValues />
          </div>
          <div ref={features01Ref}>
            <Features01 />
          </div>
          <div ref={features02Ref}>
            <Features02 />
          </div>
          <div ref={features03Ref}>
            <Features03 />
          </div>
          <div ref={features04Ref}>
            <Features04 />
          </div>
          <div ref={footerRef}>
            <Footer />
          </div>
        </ContentContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
