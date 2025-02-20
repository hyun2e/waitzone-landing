import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 📌 이미지 파일
import background from "../assets/images/1_background_all.png";
import mock from "../assets/images/1_background_phonemock.png";

// ✅ 애니메이션 설정 (제목, 설명, 버튼, 안내문 순차적 등장)
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const descVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  },
};

const textInfoVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.7 },
  },
};

// ✅ Phone Mockup 애니메이션 (오른쪽 → 왼쪽 슬라이드)
const slideVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

// ✅ Styled Components
const HeroContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 800px;
  position: relative;
  padding: 40px 20px;
  margin: auto;
  display: flex;
  margin-top: 0;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 160px;
  left: 50px;
  color: white;
`;
const GroupContainer = styled.div`
  width: 800px;
  margin: auto;
  left: -50px;
  top: -150px;
  position: relative;
`;

const MotionHeromaintext = motion(styled.div`
  max-width: 600px;
  position: relative;
  top: 20px;
`);

const MotionHerodescript = motion(styled.div`
  max-width: 600px;
  position: relative;
  top: 20px;
  color: rgba(255, 255, 255, 0.7);
`);

const MotionHerotext = motion(styled.div`
  max-width: 500px;
  position: relative;
  top: 16px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px; /* 기본 크기 */

  @media (max-width: 768px) {
    font-size: 14px; /* 모바일 화면에서는 작게 */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* 더 작은 화면에서는 더 작게 */
  }
`);

const MotionHerobutton = motion(styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 70px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 3px;
    margin-top: 40px;
  }
`);

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  background-color: #ffffff;
  color: #6f47ff;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #c89dff;
    color: #301690;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  background-color: transparent;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  border: 0.5px solid #ffffff95;
  border-radius: 8px;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 100;

  &:hover {
    background-color: #4c2dbd;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`;

// ✅ Phone Mockup Motion 적용
const MotionHeroimg = motion(styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 270px;
  bottom: 20px;
  left: 210px;
`);

const HeroSection = () => {
  // ✅ useInView 적용 (스크롤 시 등장)
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <HeroContainer>
      <GroupContainer>
        <HeroWrapper>
          {/* ✅ 제목 애니메이션 적용 */}
          <MotionHeromaintext
            ref={textRef}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <h1>
              웨이팅, <br />
              언제까지 기다리기만 할래?
            </h1>

            {/* ✅ 설명 애니메이션 적용 */}
            <MotionHerodescript
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={descVariants}
            >
              <p>보이는 웨이팅 존에서 재미있는 장소를 추천해 드릴게요.</p>
              <p>웨이팅? 이제 새로운 플레이 타임이 됩니다!</p>
            </MotionHerodescript>
          </MotionHeromaintext>

          {/* ✅ 버튼 애니메이션 적용 */}
          <MotionHerobutton
            ref={buttonRef}
            initial="hidden"
            animate={buttonInView ? "visible" : "hidden"}
            variants={buttonVariants}
          >
            <PrimaryButton
              href="https://www.figma.com/proto/ds0Lh5X8LrFvX6g2ab4o1u/2%EC%A1%B0?node-id=3538-39212&t=Jo6B6Je3jo4cl34y-1"
              target="_blank"
            >
              프로토타입 이동
            </PrimaryButton>
            <SecondaryButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSeIZJh5xgWYgiHQtU7GJxg_WpLLUOvXwwup98EbcISM8xR-DA/viewform?usp=header"
              target="_blank"
            >
              설문조사 참여하기
            </SecondaryButton>
          </MotionHerobutton>

          {/* ✅ 안내문 텍스트 애니메이션 적용 */}
          <MotionHerotext
            initial="hidden"
            animate={buttonInView ? "visible" : "hidden"}
            variants={textInfoVariants}
          >
            <p>서비스 품질 향상을 위한 설문조사입니다.</p>
            <p>많은 참여 부탁드립니다</p>
          </MotionHerotext>
        </HeroWrapper>

        {/* ✅ 이미지 모션 적용 (오른쪽 → 왼쪽 슬라이드) */}
        <MotionHeroimg
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={slideVariants}
        >
          <img src={mock} alt="Phone mockup" />
        </MotionHeroimg>
      </GroupContainer>
    </HeroContainer>
  );
};

export default HeroSection;
