import React from "react";
import arrow from "../assets/images/c2_arrow.png";
import background from "../assets/images/c2_background.png";
import line from "../assets/images/c2_textbox_line.png";
import textbox from "../assets/images/c2_textbox.png";
import styled from "styled-components";

const CoreContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 560px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ContentWrapper = styled.div`
  display: flex;            /* flexbox 사용 */
  flex-direction: column;   /* 세로 정렬 */
  justify-content: center;  /* 가로 중앙 정렬 */
  align-items: center;      /* 세로 중앙 정렬 */
  position: relative;
  width: 100%;
  min-height: 560px;
  z-index: 1000;
`;


const GradImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-size: cover;
  min-height: 560px;
  bottom: 0;
`;

 /* CoreValue ~ 웨이팅 시간을 가지고 부분 */
const TopCorevalue = styled.div`
 color: #FFFFFF;
 font-size: 18px;
 font-weight: bold;
`;


 /* 해결방향, 시간허비 활동제약 부분 */
const MiddleCorevalue = styled.div`

  display: flex;
  max-width: 600px;
  position: relative;
  color: #7852FF;
  margin-top: 30px;
  flex-direction: column; /* 세로 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  margin-bottom: 30px;
  

`;

 /* 해결방향 텍스트 , Solution 텍스트 */
const StyledText1 = styled.p`
color: #ACA7FF;
text-align: center;
font-size: small;
`;

 /* 다양성-사용자의 웨이팅 시간과~ 텍스트 */
const StyledText2 = styled.p`
color: #ffffff;
font-size: small;
background-repeat: no-repeat;
background-image: url(${line});
  background-repeat: no-repeat;
  background-size: contain; /* 배경이 요소 크기에 맞게 들어감 */
  background-position: center; /* 배경을 중앙 정렬 */
  flex-direction: column; /* 세로 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  width: 600px; /* 부모 요소에 맞게 설정 */
  height: 48px;
  line-height: 48px;
  min-height: 48px; /* 이미지가 보이도록 최소 높이 지정 */
  z-index: 1000;
`;

const StyledText3 = styled.p`
font-size: 16pt;
font-weight: bold;
`;

 /* 솔루션 부분 */
const Solution = styled.div`
  display: flex;
  max-width: 600px;
  position: relative;
  padding: 20px 20px;
  color: #FFFFFF;

 /* 솔루션 박스부분 */
  background-size: contain;
  background-repeat: no repeat;
  background-position: center;
  flex-direction: column; /* 세로 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  background-color: rgba(111, 71, 255, 0.5); 
  border-radius: 20px; 
`;

const CoreValues = () => {
  return (
    <CoreContainer>
      {/* Core Values */}
      <ContentWrapper>
        <TopCorevalue>
          <StyledText1>Core Values</StyledText1> <br />
          <h2>"웨이팅 시간을 가치있고 즐거운 경험으로 만들기"</h2>
        </TopCorevalue>

        {/* 해결 방향 */}
        <MiddleCorevalue>
        <StyledText1>해결 방향 <br /></StyledText1>
          <StyledText3> 시간허비 · 활동 제약 </StyledText3> <br />
          <StyledText2>다양성-사용자의 웨이팅 시간과 상황마다 다른 다양한 경험</StyledText2>
        </MiddleCorevalue>

        <img src={arrow} />

        {/* Solution */}
        <Solution>
        <StyledText1>Solution</StyledText1>
        <br />
         <h2>대기 시간을 반영해 Zone을 표시하고, 시간 내에 가능한 활동을 추천해
            드려요. </h2>
        </Solution>
      </ContentWrapper>

      <GradImg src={background} alt="background" />

     {/*<img src={line} />//
      <img src={textbox} /> */}
    </CoreContainer>
  );
};

export default CoreValues;
