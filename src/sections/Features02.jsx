import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// 폰트 스타일's 시작 --------------------------------------
const Title = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  line-height: 140%;
  letter-spacing: 0.2px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 130%;
  letter-spacing: 0.1px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 200;
  color: #ffffff;
  line-height: 130%;
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

const GraphicWrapper = styled.div`
  width: 800px;
  position: relative;
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

const GifWrapper = styled.div`
  position: absolute;
  top: 385px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 167px;
  height: auto;
`;

const Gifimg = styled.img`
  width: 100%;
`;

// ======== (1) PopWrapper를 motion.div로 변경 (모션 주기)
const PopWrapper = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 225px;
  right: 85px;
  z-index: 4;
  width: 300px;
  background-image: url(f2_test);
  background-size: cover;
  background-position: center;
`;

// 팝업 내부용
const PopContentsWrapper = styled.div`
  gap: 9px;
  display: flex;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PopTextWrapper = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

const IconWrapper = styled.div`
  display: flex;
`;

// ======== (2) OverlayItemLeft -> motion.div
const OverlayItemLeft = styled(motion.div)`
  position: absolute;
  top: 337px;
  left: 116px;
  pointer-events: all;
  z-index: 3;
`;

// ======== (3) OverlayItemRight -> motion.div
const OverlayItemRight = styled(motion.div)`
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
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.mainColors.primary300};
  font-size: ${(props) => props.theme.fontSizes.fontSizes.base};
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ------------------------------------------

const Features02 = () => {
  return (
    <FeatureContainer>
      {/*  배경 이미지 */}
      <BgImageWrapper>
        <img
          className="f2_bg"
          src={"/assets/images/f2_background_graphic_pin.png"}
          alt="웨이팅 존 배경"
        />
      </BgImageWrapper>

      <GraphicWrapper>
        {/*  섹션 제목 */}
        <FeatureTitleContainer>
          <Title>Features 02</Title>
          <SubTitle>웨이팅 존으로 안전한 웨이팅하세요</SubTitle>
          <Description>
            웨이팅 시간 동안 도보로 이동 가능한 존이에요.
            <br /> 잔여 대기 시간에 따라 반경이 실시간으로 줄어듭니다.
          </Description>
        </FeatureTitleContainer>

        {/*  모바일 UI */}
        <MoImageWrapper>
          <img
            className="f2_mo"
            src={"/assets/images/f2_mo.svg"}
            alt="웨이팅 존 UI"
          />
        </MoImageWrapper>

        {/* ✅ GIF 추가 */}
        <GifWrapper>
          <Gifimg src={"/assets/images/f2_play.gif"} alt="GIF 애니메이션" />
        </GifWrapper>

        {/* 
          =====================
            (1) PopWrapper 모션
          =====================
          "스크롤로 화면에 들어오면" opacity:1/scale:1
          => PopWrapper가 제일 먼저 등장 
        */}
        <PopWrapper
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1.5,
            delay: 0, // 등장 순서: 가장 먼저
            ease: [0, 0.51, 0.2, 1.1],
          }}
        >
          <div style={{ position: "relative", display: "flex" }}>
            <img
              src={"/assets/images/f2_test.svg"}
              alt="배경"
              style={{ width: "105%" }}
            />
          </div>
          <PopContentsWrapper>
            <IconWrapper>
              <div style={{ position: "relative" }}>
                <img
                  src={"/assets/images/f2_icon.svg"}
                  alt="아이콘"
                  style={{ width: "23px", height: "23px" }}
                />
              </div>
            </IconWrapper>
            <PopTextWrapper>
              <PopTextTitle>웨이팅 존에서 벗어났습니다.</PopTextTitle>
              <PopText>안전한 웨이팅을 위해 안으로 이동해주세요.</PopText>
            </PopTextWrapper>
          </PopContentsWrapper>
        </PopWrapper>

        {/* 
          =====================
            (2) OverlayItemLeft
          =====================
          => 두 번째로 등장
        */}
        <OverlayItemLeft
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.5, // PopWrapper 다음(0.5초 후) 등장
            ease: [0, 0.51, 0.2, 1.01],
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={"/assets/images/f2_a_left.svg"}
              alt="배경"
              style={{ width: "100%" }}
            />
            <OverlayText>입장을 놓치면 어떡하지?</OverlayText>
          </div>
        </OverlayItemLeft>

        {/* 
          =====================
            (3) OverlayItemRight
          =====================
          => 세 번째로 등장
        */}
        <OverlayItemRight
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.3, // PopWrapper→Left 다음(1초 후) 등장
            ease: [0, 0.51, 0.2, 1.01],
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={"/assets/images/f2_a_right.svg"}
              alt="배경"
              style={{ width: "100%" }}
            />
            <OverlayText>어디까지 가도 될까?</OverlayText>
          </div>
        </OverlayItemRight>
      </GraphicWrapper>
    </FeatureContainer>
  );
};

export default Features02;
