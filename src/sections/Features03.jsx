import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // useInView import

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Features03 = () => {
  // useInView 사용 (스크롤 시 등장)
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false, // 한 번만 애니메이션 실행
    threshold: 0.1, // 화면에서 20% 보일 때 애니메이션 실행
  });

  return (
    <Feature03Container ref={sectionRef}>
      <Container>
        <Graphic
          as={motion.img}
          src={"/assets/images/f3_graphic_pin.png"}
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        />
        <TextSection>
          <Title
            as={motion.h4}
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            Features 03
          </Title>
          <SubTitle
            as={motion.h2}
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            반경 커스텀으로 폭 넓은 Zone의 추천 장소 제공
          </SubTitle>
          <Description
            as={motion.p}
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            자유롭게 존의 반경을 설정해 보세요.
            <br />
            여유롭게 설정한 후, 주변을 즐기고 오세요!
          </Description>
        </TextSection>
        <ContentsSection>
          <Line01
            as={motion.img}
            src={"/assets/images/f3_line_1.png"}
            custom={8}
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          />
          <Line02
            as={motion.img}
            src={"/assets/images/f3_line_2.png"}
            custom={10}
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          />
          <Phone01
            as={motion.img}
            src={"/assets/images/f3_mo_1.svg"}
            custom={4}
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          />
          <TopSection>
            <TopContents01
              as={motion.div}
              custom={5}
              variants={fadeInUp}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
            >
              <TopDescription01>커스텀 Flow</TopDescription01>
              <LineFlow
                src={"/assets/images/f3_line_flow.png"}
                alt="line-flow"
              />
            </TopContents01>
            <TopContents02
              as={motion.div}
              custom={6}
              variants={fadeInUp}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
            >
              <PhoneSmall01
                src={"/assets/images/f3_mo_s_1.png"}
                alt="phone-small-1"
              />
              <PhoneSmall02
                src={"/assets/images/f3_mo_s_2.png"}
                alt="phone-small-2"
              />
            </TopContents02>
            <TopContents03
              as={motion.div}
              custom={7}
              variants={fadeInUp}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
            >
              <Line03 src={"/assets/images/f3_line_3.png"} alt="line-3" />
              <TopDescription02>내 주변 세부 웨이팅 존</TopDescription02>
              <TopDescription03>
                내 위치 중심의 세부 장소 추천 영역
              </TopDescription03>
            </TopContents03>
          </TopSection>
          <BottomSection>
            <Phone02
              as={motion.img}
              src={"/assets/images/f3_mo_2.svg"}
              custom={9}
              variants={fadeInUp}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
            />
            <BottomContents01
              as={motion.div}
              custom={11}
              variants={fadeInUp}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
            >
              <BottomTitle01>대기현황 실시간 제공</BottomTitle01>
              <BottomText01>실시간 대기 현황 한눈에 보기</BottomText01>
            </BottomContents01>
            <BottomContents02
              as={motion.div}
              custom={12}
              variants={fadeInUp}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
            >
              <BottomTitle02>길찾기 · 웨이팅 신청 제공</BottomTitle02>
              <BottomText02>실시간 대기 현황 한눈에 보기</BottomText02>
            </BottomContents02>
          </BottomSection>
        </ContentsSection>
      </Container>
    </Feature03Container>
  );
};

export default Features03;

//Style
const Feature03Container = styled.div`
  background: url("/assets/images/f3_background.png");
  width: 100%;
  height: 1369px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  background-size: cover;
`;

const Container = styled.div`
  position: relative;
  width: 800px;
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
  width: 128px;
  height: 215px;
  position: absolute;
  top: 109px;
  right: 379px;
`;

const Line02 = styled.img`
  width: 245px;
  height: 93px;
  position: absolute;
  top: 538px;
  right: 260px;
`;

const Graphic = styled.img`
  position: absolute;
  top: 0px;
  right: 78px;
`;

// Right Section
const RightSection = styled.div`
  position: absolute;
  width: 360px;
  height: 1000px;
`;

// Top Section
const TopSection = styled.div`
  position: absolute;
  top: 70px;
  height: 450px;
  right: 45px;
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
  right: 162px;
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
  gap: 3px;
  position: absolute;
  right: 60px;
  top: 323px;
  align-items: center;
`;

const Line03 = styled.img`
  width: 175px;
  height: 13px;
  margin-bottom: 5px;
`;

const TopDescription02 = styled.p`
  color: #aca7ff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 138%;
  letter-spacing: -0.32px;
`;

const TopDescription03 = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: 200;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

// Bottom Section
const BottomSection = styled.div`
  position: absolute;
  bottom: 60px;
  height: 500px;
  width: 450px;
  right: 0px;
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
  top: 205px;
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
  font-size: 12px;
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
  top: 461px;
`;

const BottomTitle02 = styled.p`
  color: #aca7ff;
  text-align: right;
  font-size: 16px;
  font-weight: 500;
  line-height: 135%;
  letter-spacing: -0.32px;
`;

const BottomText02 = styled.p`
  color: #ffffff;
  text-align: right;
  font-size: 12px;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: -0.24px;
`;
