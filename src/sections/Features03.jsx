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

      <Phone01 src={f3_mo_1}/>
        
      <Line01 src={f3_line_1}/>

      <Line02 src={f3_line_2}/>

      <Graphic src={f3_graphic_pin}/>

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
    </Feature03Container>
  );
};

export default Features03;


//Style
const Feature03Container = styled.div`
  background: url("src/assets/images/f3_background.png");
  width: 100%;
  
`;

// Text Section
const TextSection = styled.div`
  position: relative;
  text-align: center;
  color: white;
  weight: 100%;
  height: 1369px;
  overflow: hidden;
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

// 기타
const Phone01 = styled.img`

`;

const Line01 = styled.img`

`;

const Line02 = styled.img`

`;

const Graphic = styled.img`

`;

// Top Section
const TopSection = styled.div`

`;

// Top Contents 01
const TopContents01 = styled.div`

`;

const TopDescription01 = styled.p`

`;

const LineFlow = styled.img`

`;

// Top Contents 02
const TopContents02 = styled.div`

`;

const PhoneSmall01 = styled.img`

`;

const PhoneSmall02 = styled.img`

`;

// Top Contents 03
const TopContents03 = styled.div`

`;

const Line03 = styled.img`

`;

const TopDescription02 = styled.p`

`;

const TopDescription03 = styled.p`

`;

// Bottom Section
const BottomSection = styled.div`

`;

const Phone02= styled.img`

`;

// Bottom Contents 01
const BottomContents01 = styled.div`

`;

const BottomTitle01= styled.p`

`;

const BottomText01= styled.p`

`;

// Bottom Contents 02
const BottomContents02 = styled.div`

`;

const BottomTitle02= styled.p`

`;

const BottomText02= styled.p`

`;