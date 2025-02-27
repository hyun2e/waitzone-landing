import React from "react";
import styled from "styled-components";

// 섹션별 배경색과 글자색 설정
const sectionStyles = {
  hero: { bg: "rgba(62, 62, 62, 0.21)", text: "#ffffff" },
  coreValues: { bg: "#123456", text: "#ffffff" },
  features01: { bg: "#ff0000", text: "#000000" },
  features02: { bg: "#00ff00", text: "#000000" },
  features03: { bg: "#0000ff", text: "#ffffff" },
  features04: { bg: "#f0f0f0", text: "#000000" },
  footer: { bg: "#000000", text: "#ffffff" },
};

// 섹션별 로고 이미지 경로 설정 (예시)
const sectionLogos = {
  hero: "/assets/images/logo-hero.svg",
  coreValues: "/assets/images/logo-coreValues.svg",
  features01: "/assets/images/logo-features01.svg",
  features02: "/assets/images/logo-features02.svg",
  features03: "/assets/images/logo-features03.svg",
  features04: "/assets/images/logo-features04.svg",
  footer: "/assets/images/logo-footer.svg",
};

// ✅ NavBar 스타일 정의
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 66px;
  background-color: ${({ currentSection }) =>
    sectionStyles[currentSection]
      ? sectionStyles[currentSection].bg
      : "rgba(62, 62, 62, 0.21)"};
  color: ${({ currentSection }) =>
    sectionStyles[currentSection]
      ? sectionStyles[currentSection].text
      : "#ffffff"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  z-index: 1000;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

// ✅ 로고 스타일
const Logo = styled.img`
  height: 20px;
  cursor: pointer;
  transition: opacity 0.3s ease;
`;

// ✅ 네비게이션 버튼 컨테이너
const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

// ✅ 네비게이션 링크 스타일
const NavLink = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  width: 105px;
  height: 40px;
  border-radius: 8px;

  &:hover {
    color: #c5b8f4;
    background-color: #6f47ff;
  }

  &:focus {
    outline: none;
  }
`;

// ✅ 버튼 스타일 (105x40px 고정)
const AppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 40px;
  background-color: #171517;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #c5b8f4;
    color: black;
  }
`;

// ✅ NavBar 컴포넌트
const NavBar = ({ scrollToSection, refs, currentSection }) => {
  // 현재 섹션에 따른 로고 선택 (없으면 기본 로고 사용)
  const logoSrc =
    (currentSection && sectionLogos[currentSection]) ||
    "/assets/images/logo.svg";

  return (
    <Nav currentSection={currentSection}>
      <a href="/">
        <Logo src={logoSrc} alt="WAITZONE 로고" />
      </a>
      <NavButtons>
        <NavLink onClick={() => scrollToSection(refs.heroRef)}>Intro</NavLink>
        <NavLink onClick={() => scrollToSection(refs.features01Ref)}>
          Features01
        </NavLink>
        <NavLink onClick={() => scrollToSection(refs.features02Ref)}>
          Features02
        </NavLink>
        <NavLink onClick={() => scrollToSection(refs.features03Ref)}>
          Features03
        </NavLink>
        <NavLink onClick={() => scrollToSection(refs.features04Ref)}>
          Features04
        </NavLink>
        <AppButton
          href="https://www.figma.com/proto/ds0Lh5X8LrFvX6g2ab4o1u/2%EC%A1%B0?node-id=3538-39212&t=Jo6B6Je3jo4cl34y-1"
          target="_blank"
        >
          앱 체험하기
        </AppButton>
      </NavButtons>
    </Nav>
  );
};

export default NavBar;
