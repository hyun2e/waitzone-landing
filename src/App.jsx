import React, { useRef, useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./components/Navbar.jsx";
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
`;

const App = () => {
  // 섹션 ref 선언
  const heroRef = useRef(null);
  const coreValuesRef = useRef(null);
  const features01Ref = useRef(null);
  const features02Ref = useRef(null);
  const features03Ref = useRef(null);
  const features04Ref = useRef(null);
  const footerRef = useRef(null);

  // 현재 섹션 상태 관리 (초기값: hero)
  const [currentSection, setCurrentSection] = useState("hero");

  // 스크롤 이동 함수
  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Intersection Observer를 이용해 현재 보이는 섹션 감지
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5, // 섹션의 50% 이상이 보일 때
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute("data-section");
          if (section) {
            setCurrentSection(section);
          }
        }
      });
    }, options);

    const refs = [
      heroRef,
      coreValuesRef,
      features01Ref,
      features02Ref,
      features03Ref,
      features04Ref,
      footerRef,
    ];

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
          currentSection={currentSection}
        />
        <ContentContainer>
          <div ref={heroRef} data-section="hero">
            <HeroSection />
          </div>
          <div ref={coreValuesRef} data-section="coreValues">
            <CoreValues />
          </div>
          <div ref={features01Ref} data-section="features01">
            <Features01 />
          </div>
          <div ref={features02Ref} data-section="features02">
            <Features02 />
          </div>
          <div ref={features03Ref} data-section="features03">
            <Features03 />
          </div>
          <div ref={features04Ref} data-section="features04">
            <Features04 />
          </div>
          <div ref={footerRef} data-section="footer">
            <Footer />
          </div>
        </ContentContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
