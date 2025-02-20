import React, { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import HeroSection from "./sections/HeroSection";
import CoreValues from "./sections/CoreValues";
import Features01 from "./sections/Features01";
import Features02 from "./sections/Features02";
import Features03 from "./sections/Features03";
import Features04 from "./sections/Features04";
import Footer from "./sections/Footer";

const ContentContainer = styled.div`
  //max-width: 800px;
  //margin: auto;
`;
const Section = styled.section`
  height: 500px;
  background-color: ${({ $bgColor }) => $bgColor || "#1d94d9"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 32px;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  /* 반응형 스타일: 모바일 화면 (화면 폭 <= 768px)에서는 높이와 폰트 크기를 조정 */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
    font-size: 20px;
  }
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
          refs={{ heroRef, coreValuesRef, features01Ref, features02Ref, features03Ref, features04Ref, footerRef }}
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
