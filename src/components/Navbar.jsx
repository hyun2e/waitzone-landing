import React from "react";
import styled from "styled-components";
import LogoImg from "/Users/macbook/Desktop/waitzone-landing/src/assets/images/logo.svg";

// ✅ NavBar 컨테이너 스타일 적용
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 66px;
  background-color: rgba(62, 62, 62, 0.21); /* ✅ 21% 투명도 적용 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  z-index: 1000;
`;

// ✅ 로고 이미지 스타일
const Logo = styled.img`
  height: 20px; /* ✅ 로고 크기 조정 */
  cursor: pointer;
`;

// ✅ 네비게이션 버튼 컨테이너
const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

// ✅ 스크롤 링크 스타일
const NavLink = styled.a`
  color: #ffffff;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #d1c4ff;
  }

  &:focus {
    outline: none;
  }
`;

// ✅ 버튼 스타일 (105x40px 고정)
const AppButton = styled.a`
  display: flex;
  align-items: center; /* ✅ 세로 중앙 정렬 */
  justify-content: center; /* ✅ 가로 중앙 정렬 */
  width: 105px; /* ✅ 고정 너비 */
  height: 40px; /* ✅ 고정 높이 */
  background-color: #171517;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  text-align: center; /* ✅ 텍스트 가운데 정렬 */
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #2c2c2c;
  }
`;
const NavBar = () => {
  return (
    <Nav>
      {/* ✅ 로고 이미지 적용 */}
      <a href="/">
        <Logo src={LogoImg} alt="WAITZONE 로고" />
      </a>

      {/* ✅ 메뉴 & 버튼 */}
      <NavButtons>
        <NavLink href="#intro">Intro</NavLink>
        <NavLink href="#core-values">Core Values</NavLink>
        <NavLink href="#features">Features</NavLink>
        <AppButton href="https://www.naver.com">앱 체험하기</AppButton>
      </NavButtons>
    </Nav>
  );
};

export default NavBar;
