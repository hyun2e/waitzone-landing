import React from "react";
import styled from "styled-components";
import f2_mo from "../assets/images/f2_mo.svg";
import f2_bg from "../assets/images/f2_background_graphic_pin.png";

// 폰트 스타일's 시작 --------------------------------------

const Title = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  line-height: 140%;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 130%;
  letter-spacing: -0.48px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 200;
  color: #ffffff;
  line-height: 140%;
  letter-spacing: -0.32px;
`;

const PopTextTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #3e3e3e;
  line-height: 150%;
  letter-spacing: -0.32px;
`;

const PopText = styled.p`
  font-size: 10px;
  font-weight: 200;
  color: #3e3e3e;
  line-height: 150%;
  letter-spacing: -0.32px;
`;

// 끝 --------------------------------------------------

// 배경 컨테이너 (전체 영역)
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

//  제목 스타일 컨테이너
const FeatureTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 54px;
  z-index: 1;
`;

// 모바일 UI Wrapper
const MoImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
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

// 말풍선_이미지 --------------------------------------
const OverlayItemLeft = styled.div`
  position: absolute;
  top: 337px;
  left: 116px;
  pointer-events: all;
  z-index: 3;
`;

const OverlayItemRight = styled.div`
  position: absolute;
  top: 426px;
  right: 141px;
  pointer-events: all;
  z-index: 3;
`;

// 말풍선_텍스트 --------------------------------------
const OverlayText = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* 말풍선 크기에 맞게 */
  height: 100%; /*  부모 요소 기준으로 높이 맞추기 */
  color: ${(props) => props.theme.mainColors.primary300}; /* 미리 지정된 컬러 */
  font-size: ${(props) =>
    props.theme.fontSizes.fontSizes.base}; /* 미리 지정된 폰트 크기 */
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

// 팝업_시작 --------------------------------------

const PopWrapper = styled.div`
  position: absolute;
  top: 199px;
  right: 72px;
  z-index: 4;
`;

const PopContent = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const PopTextWrapper = styled.div`
  width: max-content; /* 글씨가 한 줄로 나올 수 있도록 가로 크기 설정 */
  display: flex; /* 내부 요소들이 한 줄로 정렬되도록 설정 */
  flex-direction: column; /* 여러 줄이 필요할 경우 정렬 유지 */
  white-space: nowrap; /* 글자가 강제로 세로로 흐르는 것 방지 */
`;

// 리턴문 시작 --------------------------------------------------

const Features02 = () => {
  return (
    <FeatureContainer>
      {/*  섹션 제목 */}
      <FeatureTitleContainer>
        <Title>Features02</Title>
        <SubTitle>웨이팅 존으로 안전하게 웨이팅하기</SubTitle>
        <Description>
          웨이팅 시간 내 도보로 이동 가능한 존이에요.
          <br /> 잔여 대기 시간에 따라 반경이 실시간으로 줄어듭니다.
        </Description>
      </FeatureTitleContainer>

      {/*  배경 이미지 */}
      <BgImageWrapper>
        <img className="f2_bg" src={f2_bg} alt="웨이팅 존 배경" />
      </BgImageWrapper>

      {/*  모바일 UI */}
      <MoImageWrapper>
        <img className="f2_mo" src={f2_mo} alt="웨이팅 존 UI" />
      </MoImageWrapper>

      {/* -------------------------------------------------- */}

      {/*  팝업 넣기 말풍선 */}
      <PopWrapper>
        <PopContent>
          <img
            src={""}
            alt="아이콘"
            style={{ width: "30px", height: "30px" }}
          />
          <PopTextWrapper>
            <PopTextTitle>웨이팅 존에서 벗어났습니다.</PopTextTitle>
            <PopText>안전한 웨이팅을 위해 안으로 이동해주세요.</PopText>
          </PopTextWrapper>
        </PopContent>
      </PopWrapper>

      {/* -------------------------------------------------- */}

      {/*  왼쪽 말풍선 */}
      <OverlayItemLeft>
        <div style={{ position: "relative", display: "inline-block" }}>
          <img src={""} alt="배경" style={{ width: "100%" }} />
          <OverlayText>입장을 놓치면 어떡하지?</OverlayText>
        </div>
      </OverlayItemLeft>

      {/*  오른쪽 말풍선 */}
      <OverlayItemRight>
        <div style={{ position: "relative", display: "inline-block" }}>
          <img src={""} alt="배경" style={{ width: "100%" }} />
          <OverlayText>어디까지 가도 될까?</OverlayText>
        </div>
      </OverlayItemRight>
    </FeatureContainer>
  );
};

export default Features02;
