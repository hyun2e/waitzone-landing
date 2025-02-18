export const theme = {
  mainColors: {
    background: "#f0f0f0", // 배경색
    primary300: "#6f47ff", // 주요 색상
    primary200: "#977aff",
    primary100: "#bfadff",
  },
  subColor: {
    secondary700: "#3e3e3e", // 서브 색상
  },
  grayColors: {
    gray900: "#171517",
    gray800: "#242424", // 그레이 색상 
    gray600: "#4d4d4d", 
    gray500: "#666666", 
    gray400: "#808080", 
    gray300: "#999999", 
    gray200: "#b3b3b3", 
    gray100: "#cccccc", 
    gray50: "#e6e6e6",

    text: "#ffffff", // 본문 텍스트 색상
    textpoint: "#aca7ff", // 텍스트 포인트 색상
    secondary: "#977aff", // 보조 색상 (리스트 아이템 등)
    // 필요한 다른 색상들...
  },
  fonts: {
    fonts: {
      primary: "'Pretendard', sans-serif", // 기본 폰트
      heading: "'Pretendard', sans-serif", // 제목 폰트도 동일
      fallback: "'Roboto', sans-serif", // Pretendard가 없을 때만 대체 폰트 적용
    },

    // 필요한 다른 폰트들...
  },
  fontSizes: {
    fontSizes: {
      xxs: "10px", // font-xxs
      xs: "12px", // font-xs
      sm: "14px", // font-sm
      base: "16px", // font-base (본문)
      lg: "18px", // font-lg
      xl: "20px", // font-xl (대제목)
      xxl: "24px", // 추가 (부제목 등)
      h1: "32px", // heading1
      h2: "28px", // heading2
      h3: "22px", // heading3
      h4: "16px", // heading4
    },
    // 필요한 다른 크기들...
  },
  // 모바일 기준: 화면 폭이 799px 이하이면 모바일로 간주
  breakpoints: {
    mobile: "799px",
  },
  // 추가적인 디자인 변수들...

  spacing: {
    defalt: "20px",
  },

  shadows: {
    sm: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0px 6px 12px rgba(0, 0, 0, 0.15)",
  },
};
