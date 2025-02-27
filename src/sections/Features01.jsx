import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const scrollingAnimation = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "linear",
    },
  },
};

const Features01 = () => {
  return (
    <Feature01Container>

      <Icons
        as={motion.img}
        {...scrollingAnimation}
        src={"/assets/images/f1_icon_all.png"}
      />

      <Content>
        <Title
          as={motion.h4}
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Features 01
        </Title>
        <SubTitle
          as={motion.h2}
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          웨이팅 신청 존에서 빠르게 웨이팅
        </SubTitle>
        <Description
          as={motion.p}
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          장소에 도착하지 않고 빠르게 웨이팅을 신청할 수 있어요.
        </Description>
        <Phone
          as={motion.img}
          src={"/assets/images/f1_mo.svg"}
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        />
      </Content>
    </Feature01Container>
  );
};

export default Features01;

// Style
const Feature01Container = styled.div`
  position: relative;
  width: 100%;
  height: 670px;
  background: #171517;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  color: white;
  max-width: 800px;
  z-index: 2;
  margin: auto;
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
  font-weight: 300;
  margin-top: 3px;
  line-height: 140%;
  letter-spacing: -0.32px;
`;

const Phone = styled.img`
  width: 283px;
  height: 460px;
  flex-shrink: 0;
  margin-top: 54px;
  z-index: 2;
`;

const Icons = styled.div`
  position: absolute;
  bottom: 7%;
  left: 50%;
  z-index: 1;
  display: flex;
  width: 905px;
  height: 500px;
  overflow: hidden;
`;
