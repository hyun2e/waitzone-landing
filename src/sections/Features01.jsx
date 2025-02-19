import React from "react";
import styled from "styled-components";
import f1_mo from "../assets/images/f1_mo.svg";
import f1_gradient_right from "../assets/images/f1_gradient_right.png";
import f1_gradient_left from "../assets/images/f1_gradient_left.png";
import f1_icon_1 from "../assets/images/f1_icon_1.png";
import f1_icon_2 from "../assets/images/f1_icon_2.png";
import f1_icon_3 from "../assets/images/f1_icon_3.png";
import f1_icon_4 from "../assets/images/f1_icon_4.png";
import f1_icon_5 from "../assets/images/f1_icon_5.png";
import f1_icon_6 from "../assets/images/f1_icon_6.png";

const Features01 = () => {
  return (
    <Feature01Container>
      <GradientRight src={f1_gradient_right} />
      <GradientLeft src={f1_gradient_left} />

      <Icons>
        <Icon src={f1_icon_1} />
        <Icon src={f1_icon_2} />
        <Icon src={f1_icon_3} />
        <Icon src={f1_icon_4} />
        <Icon src={f1_icon_5} />
        <Icon src={f1_icon_6} />
      </Icons>

      <Content>
        <Title>Features 01</Title>
        <SubTitle>웨이팅 신청 존에서 빠르게 웨이팅</SubTitle>
        <Description>
          장소에 도착하지 않고 빠르게 웨이팅을 신청할 수 있어요.
        </Description>
        <Phone src={f1_mo} />
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

const GradientRight = styled.img`
  position: absolute;
  width: 150px;
  height: 670px;
  margin-right: 650px;
`;

const GradientLeft = styled.img`
  position: absolute;
  width: 150px;
  height: 670px;
  margin-left: 650px;
`;

const Icons = styled.div`
  position: absolute;
  display: flex;
  gap: 55px;
  bottom: 40%;
  left: 50%;
  transform: translateX(-59%);
  z-index: 1;
`;

const Icon = styled.img`
  width: 130px;
  height: 130px;
`;
