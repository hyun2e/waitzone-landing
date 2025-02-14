// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PretendardWoff2 from "../assets/fonts/PretendardVariable.woff2";

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* Pretendard Variables 폰트 정의 */
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardWoff2}) format('woff2');
    font-weight: 1 999; /* 변수 폰트 */
    font-style: normal;
    font-display: swap;
  }

  /* 콘텐츠, 패딩, 보더를 모두 포함하여 컨텐츠 크기를 잡기 위해 모든 요소에 box-sizing: border-box 적용 */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    /* 섹션 이동시 스크롤 될 때 부드러운 애니메이션을 추가해주는 속성이에요 */
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
    background-color: ${({ theme }) => theme.grayColors.gray50};
    color: ${({ theme }) => theme.grayColors.gray800};
  }

  h1, h2, h3, h4, h5, h6 {  /* 기본 타이포그래피 설정 */
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: bold;
    line-height: 1.3;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.4;
  }

  input, textarea { 
  /* 입력 폼 기본 스타일 */
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes.base};
    border: 1px solid ${({ theme }) => theme.grayColors.gray300};
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borders.radiusSmall};
    transition: ${({ theme }) => theme.transitions.fast};
  }
  input:focus, textarea:focus {
    border-color: ${({ theme }) => theme.mainColors.primary300};
    outline: none;
  }

`;

export default GlobalStyle;
