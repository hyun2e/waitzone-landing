import React from "react";
import styled from "styled-components";
import f3_background from "../assets/images/f3_background.png";
import f3_line_flow from "../assets/images/f3_line_flow.png";
import f3_graphic_pin from "../assets/images/f3_graphic_pin.png";
import f3_line_1 from "../assets/images/f3_line_1.png";
import f3_line_2 from "../assets/images/f3_line_2.png";
import f3_line_3 from "../assets/images/f3_line_3.png";
import f3_mo_1 from "../assets/images/f3_mo_1.svg";
import f3_mo_2 from "../assets/images/f3_mo_2.svg";
import f3_mo_s_1 from "../assets/images/f3_mo_s_1.svg";
import f3_mo_s_2 from "../assets/images/f3_mo_s_2.svg";

const Features03 = () => {
  return (
    <Feature03Container>
      <TextSection>
        <Title>Features 03</Title>
        <SubTitle>반경 커스텀으로 폭 넓은 Zone의 추천 장소 제공</SubTitle>
        <Description>자유롭게 존의 반경을 설정해 보세요.
          <br />여유롭게 설정한 후, 주변을 즐기고 오세요!
        </Description>
      </TextSection>

      <ContentsSection>
        <LeftSection>
          <Phone01 src={f3_mo_1}/>
          
          <Line01 src={f3_line_1}/>

          <Line02 src={f3_line_2}/>

          <Graphic src={f3_graphic_pin}/>
        </LeftSection>

        <RightSection>
          <TopSection>
            <TopContents01>
              <TopDescription01>커스텀 Flow</TopDescription01>
              <LineFlow src={f3_line_flow}/>
            </TopContents01>

            <TopContents02>
              <PhoneSmall01 src={f3_mo_s_1}/>
              <PhoneSmall02 src={f3_mo_s_2}/>
            </TopContents02>

            <TopContents03>
              <Line03 src={f3_line_3}/>
              <TopDescription02>내 주변 세부 웨이팅 존</TopDescription02>
              <TopDescription03>내 위치 중심의 세부 장소 추천 영역</TopDescription03>
            </TopContents03>
          </TopSection>

          <BottomSection>
            <Phone02 src={f3_mo_2}/>

            <BottomContents01>
              <BottomTitle01>대기현황 실시간 제공</BottomTitle01>
              <BottomText01>실시간 대기 현황 한눈에 보기</BottomText01>
            </BottomContents01>

            <BottomContents02>
              <BottomTitle02>길찾기 · 웨이팅 신청 제공</BottomTitle02>
              <BottomText02>실시간 대기 현황 한눈에 보기</BottomText02>
            </BottomContents02>
          </BottomSection>
        </RightSection>
      </ContentsSection>
    </Feature03Container>
  );
};

export default Features03;


//Style
const Feature03Container = styled.div`
  background: url("src/assets/images/f3_background.png");
  width: 100%;
  height: 1369px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;  
`;

// Text Section
const TextSection = styled.div`
  position: relative;
  text-align: center;
  color : #ffffff;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 800;
  color: #ACA7FF;
  line-height: 140%;
  letter-spacing: -0.32px;
  margin-top: 70px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 5px;
  line-height: 140%;
  letter-spacing: -0.48px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-top: 3px;
  line-height: 140%;
  letter-spacing: -0.32px;
`;

// Contents Section
const ContentsSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Left Section
const LeftSection = styled.div`
  
`;

const Phone01 = styled.img`
  width: 285px;
  height: 1073.873px;
  flex-shrink: 0;

`;

const Line01 = styled.img`

`;

const Line02 = styled.img`

`;

const Graphic = styled.img`

`;

// Right Section
const RightSection = styled.div`

`;

// Top Section
const TopSection = styled.div`

`;

// Top Contents 01
const TopContents01 = styled.div`

`;

const TopDescription01 = styled.p`
  color: #B3B3B3;
  font-size: 13px;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: -0.39px;
`;

const LineFlow = styled.img`

`;

// Top Contents 02
const TopContents02 = styled.div`

`;

const PhoneSmall01 = styled.img`
  width: 164px;
  height: 320.857px;
  flex-shrink: 0;
`;

const PhoneSmall02 = styled.img`
  width: 153.295px;
  height: 319.777px;
  flex-shrink: 0;
`;

// Top Contents 03
const TopContents03 = styled.div`
  display: flex;
  width: 186px;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

const Line03 = styled.img`
  width: 175px;
  height: 13px;
  flex-shrink: 0;
`;

const TopDescription02 = styled.p`
  color: #ACA7FF;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 138%;
  letter-spacing: -0.32px;
`;

const TopDescription03 = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

// Bottom Section
const BottomSection = styled.div`

`;

const Phone02= styled.img`
  width: 241px;
  height: 622.729px;
  flex-shrink: 0;
`;

// Bottom Contents 01
const BottomContents01 = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const BottomTitle01= styled.p`
  color: #ACA7FF;
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  line-height: 135%;
  letter-spacing: -0.32px;
`;

const BottomText01= styled.p`
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.24px;
`;

// Bottom Contents 02
const BottomContents02 = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const BottomTitle02= styled.p`
  color: #ACA7FF;
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  line-height: 135%;
  letter-spacing: -0.32px;
`;

const BottomText02= styled.p`
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.24px;
`;