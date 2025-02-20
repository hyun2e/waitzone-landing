// src/App.jsx
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Slider from "./components/Slider";
import HeroSection from "./sections/HeroSection";
import CoreValues from "./sections/CoreValues";
import Features01 from "./sections/Features01";
import Features02 from "./sections/Features02";
import Features03 from "./sections/Features03";
import Features04 from "./sections/Features04";
import Footer from "./sections/Footer";

// 예시 슬라이드 데이터: src 값으로 정적인 이미지 URL을 사용합니다.
const slidesHero = [
  { src: "src/assets/images/hero01.png", content: "Slide 1" },
  { src: "https://placehold.co/600x400/blue/yellow", content: "Slide 2" },
  { src: "https://placehold.co/600x400/green/black", content: "Slide 3" },
  { src: "https://placehold.co/600x400/red/white", content: "Slide 4" },
  { src: "https://placehold.co/600x400/red/white", content: "gh" },
  { src: "https://placehold.co/600x400/red/white", content: "nyg" },
  { src: "https://placehold.co/600x400/red/white", content: "cjh" },
  { src: "https://placehold.co/600x400/red/white", content: "ea" },
  { src: "https://placehold.co/600x400/red/white", content: "ljh" },
];

const ContentContainer = styled.div`
  /* max-width: 800px; */
  margin: auto;
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
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {/* <NavBar />
        <Section id="section-hero" $bgColor="#1E3A5F">
          <Slider slides={slidesHero} duration={1} />
        </Section>
        <Section id="section1" $bgColor="#dee2be">
          섹션 1
        </Section>
        <Section id="section2" $bgColor="#0F4C75">
          섹션 2
        </Section> */}
        <NavBar />
        <ContentContainer>
          <HeroSection />
          <CoreValues />
          <Features01 />
          <Features02 />
          <Features03 />
          <Features04 />
          <Footer />
        </ContentContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
