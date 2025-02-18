import React from "react";
import styled from "styled-components";
import f2_mo from "../assets/images/f2_mo.svg";
import f2_bg from "../assets/images/f2_background_graphic_pin.png";
import f3_alert_left from "../assets/images/f3_alert_left.png";
import f3_alert_right_2 from "../assets/images/f3_alert_right_2.png";
import f3_Pushalert from "../assets/images/f3_Push_alert_closed.png";

// 🔵 배경 컨테이너 (전체 영역)
const FeatureContainer = styled.div`
  background-color: ${(props) => props.theme.mainColors.primary300};
  width: 100%;
  height: 673px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0px;
  z-index: 0;
`;

// 🔵 제목 스타일 컨테이너
const FeatureTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 54px;
  z-index: 1;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.fontSizes.heading2};
    font-family: ${(props) => props.theme.fonts.fonts.heading};
    font-weight: 600;
    line-height: 130%;
    margin-bottom: 5px;
    color: ${(props) => props.theme.grayColors.text};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.fontSizes.base};
    font-family: ${(props) => props.theme.fonts.fonts.base};
    font-weight: 600;
    margin-bottom: 5px;
    color: ${(props) => props.theme.grayColors.text};
    line-height: 140%;
  }

  h5 {
    font-size: ${(props) => props.theme.fontSizes.fontSizes.sm};
    font-family: ${(props) => props.theme.fonts.fonts.sm};
    font-weight: 600;
    margin-bottom: 5px;
    color: ${(props) => props.theme.grayColors.gray800};
    line-height: 150%;
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.fontSizes.base};
    color: ${(props) => props.theme.grayColors.text};
    font-weight: 300;
    max-width: 600px;
    line-height: 140%;
    text-align: center;
  }

  s {
    font-size: ${(props) => props.theme.fontSizes.fontSizes.xxs};
    color: ${(props) => props.theme.grayColors.text};
    font-weight: 300;
    max-width: 600px;
    line-height: 140%;
    text-align: center;
  }

  lg {
    font-size: ${(props) => props.theme.fontSizes.fontSizes.sm};
    color: ${(props) => props.theme.grayColors.text};
    font-weight: 300;
    max-width: 600px;
    line-height: 140%;
    text-align: center;
  }
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 5px;
  line-height: 140%;
  letter-spacing: -0.48px;
`;

// 🔵 모바일 UI Wrapper
const MoImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

// 배경 이미지
const BgImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 230px;
  z-index: 0;
`;

const OverlayItemLeft = styled.div`
  position: absolute;
  top: 337px; /* ✅ 위쪽으로 337px 떨어지게 */
  left: 116px; /* ✅ 오른쪽으로 116px 이동 */
  pointer-events: all;
`;

const OverlayItemRight = styled.div`
  position: absolute;
  top: 426px; /* ✅ 위쪽으로 426px 떨어지게 */
  right: 141px; /* ✅ 오른쪽으로 141px 이동 */
  pointer-events: all;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* 말풍선 크기에 맞게 */
  height: 100%; /* ✅ 부모 요소 기준으로 높이 맞추기 */
  color: ${(props) => props.theme.mainColors.primary300}; /* 미리 지정된 컬러 */
  font-size: ${(props) =>
    props.theme.fontSizes.fontSizes.base}; /* 미리 지정된 폰트 크기 */
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center; /* ✅ 가로 중앙 정렬 */
  align-items: center; /* ✅ 세로 중앙 정렬 */
`;

const PopWrapper = styled.div`
  position: absolute;
  top: 267px; /* ✅ 위쪽으로 426px 떨어지게 */
  left: 472px; /* ✅ 오른쪽으로 141px 이동 */
  z-index: 5;
  background-image: url(${f3_Pushalert});
  background-size: cover;
  height: 140px;
  width: 320px;
`;

const PopContent = styled.div`
  display: flex;
`;

const PopTextWrapper = styled.div`
  position: absolute;
  width: max-content; /* ✅ 글씨가 한 줄로 나올 수 있도록 가로 크기 설정 */
  display: flex; /* ✅ 내부 요소들이 한 줄로 정렬되도록 설정 */
  flex-direction: column; /* ✅ 여러 줄이 필요할 경우 정렬 유지 */
  white-space: nowrap; /* ✅ 글자가 강제로 세로로 흐르는 것 방지 */
`;

const Features02 = () => {
  return (
    <FeatureContainer>
      {/*  섹션 제목 */}
      <FeatureTitleContainer>
        <h4>Features02</h4>
        <SubTitle>웨이팅 존으로 안전하게 웨이팅하기</SubTitle>
        <p>
          웨이팅 시간 내 도보로 이동 가능한 존이에요.
          <br /> 잔여 대기 시간에 따라 반경이 실시간으로 줄어듭니다.
        </p>
      </FeatureTitleContainer>

      {/*  배경 이미지 */}
      <BgImageWrapper>
        <img className="f2_bg" src={f2_bg} alt="웨이팅 존 배경" />
      </BgImageWrapper>

      {/*  모바일 UI */}
      <MoImageWrapper>
        <img className="f2_mo" src={f2_mo} alt="웨이팅 존 UI" />
      </MoImageWrapper>

      {/*  팝업 넣기 말풍선 */}
      <PopWrapper>
        <PopContent>
          <img />
          <PopTextWrapper>
            <p>웨이팅 존에서 벗어났습니다.</p>
            <p>안전한 웨이팅을 위해 안으로 이동해주세요.</p>
          </PopTextWrapper>
        </PopContent>
      </PopWrapper>

      {/*  왼쪽 말풍선 */}
      <OverlayItemLeft>
        <div style={{ position: "relative", display: "inline-block" }}>
          <img src={f3_alert_left} alt="배경" style={{ width: "100%" }} />
          <OverlayText>입장을 놓치면 어떡하지?</OverlayText>
        </div>
      </OverlayItemLeft>

      {/*  오른쪽 말풍선 */}
      <OverlayItemRight>
        <div style={{ position: "relative", display: "inline-block" }}>
          <img src={f3_alert_right_2} alt="배경" style={{ width: "100%" }} />
          <OverlayText>어디까지 가도 될까?</OverlayText>
        </div>
      </OverlayItemRight>
    </FeatureContainer>
  );
};

export default Features02;
