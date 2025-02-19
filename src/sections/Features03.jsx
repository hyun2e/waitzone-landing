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
import f3_mo_s_1 from "../assets/images/f3_mo_s_1.png";
import f3_mo_s_2 from "../assets/images/f3_mo_s_2.png";

const Features03 = () => {
  return (
    <Feature03Container>
      <Graphic src={f3_graphic_pin} />
      <TextSection>
        <Title>Features 03</Title>
        <SubTitle>반경 커스텀으로 폭 넓은 Zone의 추천 장소 제공</SubTitle>
        <Description>
          자유롭게 존의 반경을 설정해 보세요.
          <br />
          여유롭게 설정한 후, 주변을 즐기고 오세요!
        </Description>
      </TextSection>

      <ContentsSection>
        <Line01 src={f3_line_1} />
        <Line02 src={f3_line_2} />
        <LeftSection>
          <Phone01 src={f3_mo_1} />
        </LeftSection>

        <RightSection>
          <TopSection>
            <TopContents01>
              <TopDescription01>커스텀 Flow</TopDescription01>
              <LineFlow src={f3_line_flow} />
            </TopContents01>

            <TopContents02>
              <PhoneSmall01 src={f3_mo_s_1} />
              <PhoneSmall02 src={f3_mo_s_2} />
            </TopContents02>

            <TopContents03>
              <Line03 src={f3_line_3} />
              <TopDescription02>내 주변 세부 웨이팅 존</TopDescription02>
              <TopDescription03>
                내 위치 중심의 세부 장소 추천 영역
              </TopDescription03>
            </TopContents03>
          </TopSection>

          <BottomSection>
            <Phone02 src={f3_mo_2} />

            <BottomContents01>
              <BottomTitle01>
                대기현황
                <br />
                실시간 제공
              </BottomTitle01>
              <BottomText01>
                실시간 대기 현황
                <br />
                한눈에 보기
              </BottomText01>
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
  position: relative;
`;

// Text Section
const TextSection = styled.div`
  position: relative;
  text-align: center;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 800;
  color: #aca7ff;
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
  font-weight: 200;
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
  width: 800px;
  margin-top: 5px;
  position: relative;
`;

// Left Section
const LeftSection = styled.div``;

const Phone01 = styled.img`
  width: 285px;
  height: 1074px;
  margin-left: 20px;
`;

const Line01 = styled.img`
  width: 132px;
  height: 220px;
  position: absolute;
  top: 108px;
  right: 371px;
`;

const Line02 = styled.img`
  width: 232.5px;
  height: 93px;
  position: absolute;
  top: 544px;
  right: 271px;
`;

const Graphic = styled.img`
  position: absolute;
  top: 0px;
  right: 79px;
`;

// Right Section
const RightSection = styled.div`
  position: absolute;
  width: 360px;
  height: 1000px;
  right: 10px;
`;

// Top Section
const TopSection = styled.div`
  position: absolute;
  top: 10px;
  height: 450px;
`;

// Top Contents 01
const TopContents01 = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  margin-top: -35px;
  margin-bottom: 15px;
`;

const TopDescription01 = styled.p`
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: -0.39px;
`;

const LineFlow = styled.img``;

// Top Contents 02
const TopContents02 = styled.div``;

const PhoneSmall01 = styled.img`
  width: 170px;
  height: 327px;
  position: absolute;
`;

const PhoneSmall02 = styled.img`
  width: 151px;
  height: 327px;
  position: absolute;
  right: 0px;
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
  position: absolute;
  right: 75px;
  top: 323px;
`;

const TopDescription02 = styled.p`
  color: #aca7ff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 138%;
  letter-spacing: -0.32px;
  position: absolute;
  right: 95px;
  top: 343px;
`;

const TopDescription03 = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: 200;
  line-height: 140%;
  letter-spacing: -0.24px;
  position: absolute;
  right: 82px;
  top: 367px;
`;

// Bottom Section
const BottomSection = styled.div`
  position: absolute;
  bottom: 10px;
  height: 500px;
  width: 360px;

`;

const Phone02 = styled.img`
  position: absolute;
  width: 241px;
  height: 623px;
  bottom: -50px;
  right: 40px;
`;

// Bottom Contents 01
const BottomContents01 = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 0;
  gap: 5px;
  right: 290px;
  top: 200px;
`;

const BottomTitle01 = styled.p`
  color: #aca7ff;
  text-align: right;
  font-size: 16px;
  font-weight: 500;
  line-height: 135%;
  letter-spacing: -0.32px;
`;

const BottomText01 = styled.p`
  color: #ffffff;
  text-align: right;
  font-size: 16px;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: -0.24px;
`;

// Bottom Contents 02
const BottomContents02 = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  position: absolute;
  right: 290px;
  top: 450px;
`;

const BottomTitle02 = styled.p`
  color: #aca7ff;
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  line-height: 135%;
  letter-spacing: -0.32px;
`;

const BottomText02 = styled.p`
  color: #ffffff;
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.24px;
`;
