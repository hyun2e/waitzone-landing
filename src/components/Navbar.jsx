import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/images/logo.svg";

// ✅ NavBar 스타일 정의
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 66px;
  background-color: rgba(62, 62, 62, 0.21);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  z-index: 1000;
`;

// ✅ 로고 스타일
const Logo = styled.img`
  height: 20px;
  cursor: pointer;
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
  color: #ffffff;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  width: 105px;
  height: 40px;
  border-radius: 8px;

  /* intro- features 버튼 호버효과 */
  &:hover {
    color: #c5b8f4;
    background-color: #6F47FF;
   
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
const NavBar = ({ scrollToSection, refs }) => {
  return (
    <Nav>
      {/* ✅ 로고 */}
      <a href="/">
        <Logo src={LogoImg} alt="WAITZONE 로고" />
      </a>

      {/* ✅ 네비게이션 버튼 */}
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
