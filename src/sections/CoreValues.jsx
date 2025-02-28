import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

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
  min-height: 580px;
  z-index: 900;
`;

const TopCorevalue = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

const MiddleCorevalue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  position: relative;
  color: #7852ff;
  margin-top: 20px;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`;

const StyledText1 = styled.p`
  color: #aca7ff;
  text-align: center;
  font-size: 16px;
`;

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

const StyledText3 = styled.p`
  font-size: 20pt;
  font-weight: bold;
`;

const TopCoretext = styled.p`
  font-size: 20pt;
  font-weight: bold;
  margin-top: -20px;
`;

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

const Solutiontext = styled.p`
  font-size: 13pt;
  margin-top: -10px;
`;

const ArrowImage = styled.img`
  margin-top: 10px;
  margin-bottom: 15px;
  opacity: 0;
  transition: opacity 1s ease-out;
`;

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: custom * 0.2 },
  }),
};

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

  // useInView 적용
  const { ref: topRef, inView: topInView } = useInView({ threshold: 0.2 });
  const { ref: middleRef, inView: middleInView } = useInView({
    threshold: 0.2,
  });
  const { ref: solutionRef, inView: solutionInView } = useInView({
    threshold: 0.2,
  });
  const { ref: arrowRef, inView: arrowInView } = useInView({ threshold: 0.2 });

  return (
    <CoreContainer>
      <ContentWrapper>
        <motion.div
          ref={topRef}
          initial="hidden"
          animate={topInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          custom={1}
        >
          <TopCorevalue>
            <StyledText1>Core Values</StyledText1> <br />
            <TopCoretext>
              "웨이팅 시간을 가치있고 즐거운 경험으로 만들기"
            </TopCoretext>
          </TopCorevalue>
        </motion.div>

        <motion.div
          ref={middleRef}
          initial="hidden"
          animate={middleInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          custom={2}
        >
          <MiddleCorevalue>
            <StyledText1>해결 방향</StyledText1>
            <StyledText3>시간허비 · 활동 제약</StyledText3>
            <motion.div
              key={textIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ position: "relative" }}
            >
              <StyledText2>{texts[textIndex]}</StyledText2>
            </motion.div>
          </MiddleCorevalue>
        </motion.div>

        {/* 화살표 애니메이션 */}
        <motion.div
          ref={arrowRef}
          initial="hidden"
          animate={arrowInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          custom={3}
        >
          <ArrowImage
            src="/assets/images/c2_arrow.png"
            alt="Arrow"
            style={{ opacity: arrowInView ? 1 : 0 }}
          />
        </motion.div>

        <motion.div
          ref={solutionRef}
          initial="hidden"
          animate={solutionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          custom={4}
        >
          <Solution>
            <StyledText1>Solution</StyledText1>
            <br />
            <Solutiontext>
              대기 시간을 반영해 Zone을 표시하고, 시간 내에 가능한 활동을 추천해
              드려요.
            </Solutiontext>
          </Solution>
        </motion.div>
      </ContentWrapper>
    </CoreContainer>
  );
};

export default CoreValues;
