import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// 스타일 컴포넌트
const CoreContainer = styled.div`
  background-image: url("/assets/images/c2_background2.png");
  background-size: cover;
  background-position: bottom;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 560px;
  z-index: 900;
`;

const GradImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* background-size: center; */
  background-color: rgba(173, 173, 173, 0.9);
`;

/* Top core value 덩어리 부분*/
const TopCorevalue = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

/* 해결방향, 시간허비, 활동제약 덩어리 부분*/
const MiddleCorevalue = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  max-width: 600px;
  position: relative;
  color: #7852ff;
  margin-top: 20px;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`;
/* Solution 텍스트 해결방향 텍스트 core value 텍스트*/
const StyledText1 = styled.p`
  color: #aca7ff;
  text-align: center;
  font-size: 16px;
`;
/* 다양성, 개인화, 가용성 움직이는 애니매이션 텍스트*/
const StyledText2 = styled.p`
  color: #ffffff;
  font-size: 16px;
  background-image: url("/assets/images/c2_textbox_line.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  flex-direction: column;
  text-align: center;
  width: 600px;
  height: 48px;
  line-height: 48px;
  min-height: 48px;
  z-index: 900;
`;

/* 시간허비, 활동제약 텍스트 */
const StyledText3 = styled.p`
  font-size: 20pt;
  font-weight: bold;
`;

/* 웨이팅 시간을 가치있고 즐거운 경험으로 만들기 */
const TopCoretext = styled.p`
  font-size: 20pt;
  font-weight: bold;
  margin-top: -20px;
`;

/* Solution 덩어리 부분*/
const Solution = styled.div`
  display: flex;
  max-width: 600px;
  position: relative;
  padding: 20px 20px;
  color: #ffffff;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  background-color: rgba(111, 71, 255, 0.5);
  border-radius: 20px;
`;

/* 대기 시간을 반영해 zone을 표시하고, 시간내에 가능한 활동을 추천해드려요 */
const Solutiontext = styled.p`
  font-size: 13pt;
  margin-top: -10px;
`;

const CoreValues = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "다양성 - 사용자의 웨이팅 시간과 상황마다 다른 다양한 경험",
    "개인화 - 각자의 취향, 스타일에 맞춘 특별한 경험",
    "가용성 - 웨이팅 반경 내에서 가능한 활동을 실시간으로 안내",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CoreContainer>
      <ContentWrapper>
        <TopCorevalue>
          <StyledText1>Core Values</StyledText1> <br />
          <TopCoretext>
            "웨이팅 시간을 가치있고 즐거운 경험으로 만들기"
          </TopCoretext>
        </TopCorevalue>
        <MiddleCorevalue>
          <StyledText1>
            해결 방향 <br />
          </StyledText1>
          <StyledText3> 시간허비 · 활동 제약 </StyledText3> <br />
          <motion.div
            key={textIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // ease 추가
            style={{ position: "relative" }} // absolute 제거
          >
            <StyledText2>{texts[textIndex]}</StyledText2>
          </motion.div>
        </MiddleCorevalue>
        <img
          src={"/assets/images/c2_arrow.png"}
          alt="arrow"
          style={{ marginTop: "30px" }}
        />{" "}
        {/* margin-top 추가 */}
        <Solution>
          <StyledText1>Solution</StyledText1>
          <br />
          <Solutiontext>
            대기 시간을 반영해 Zone을 표시하고, 시간 내에 가능한 활동을 추천해
            드려요.
          </Solutiontext>
        </Solution>
      </ContentWrapper>

      <GradImg src={"/assets/images/c2_background2.png"} alt="background" />
    </CoreContainer>
  );
};

export default CoreValues;
