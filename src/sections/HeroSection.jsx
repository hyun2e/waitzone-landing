import React from "react";
//import Button from "../components/Button";//
import background from "../assets/images/1_background_all.png";
import mock from "../assets/images/1_background_phonemock.png";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 800px;
  position: relative;
  padding: 40px 20px;
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

//웨이팅,언제까지 기다리기만 할래?//
const Heromaintext = styled.div`
  max-width: 600px;
  position: relative;
  top: 20px;
`;

//보이는 웨이팅~..//
const Herodescript = styled.div`
  max-width: 600px;
  position: relative;
  top: 20px;
  color: rgba(255, 255, 255, 0.7); /* 70% 투명도 */
`;
//서비스 품질 향상을~..//
const Herotext = styled.div`
  max-width: 600px;
  position: relative;
  top: 16px;
  color: rgba(255, 255, 255, 0.4); /* 40% 투명도 */

`;

//버튼//
const Herobutton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 80px;

`;


const PrimaryButton = styled.a`
display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  background-color: #ffffff;
  color: #6F47FF;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;
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
  border: 1px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;
`;

const Heroimg = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 50px;
  left: 450px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <Heromaintext>
          <h1>웨이팅, <br />언제까지 기다리기만 할래?</h1>
          <Herodescript>
          <p>보이는 웨이팅 존에서 재미있는 장소를 추천해 드릴게요.</p>
          <p>웨이팅? 이제 새로운 플레이 타임이 됩니다!</p>
          </Herodescript>
        </Heromaintext>

    
        <Herobutton>
          <PrimaryButton href="https://www.naver.com">프로토타입 이동</PrimaryButton>
          <SecondaryButton href="https://www.naver.com">설문조사 참여하기</SecondaryButton>
        </Herobutton>
     
        <Herotext>
        <p>서비스 품질 향상을 위한 설문조사입니다.</p>
        <p>많은 참여 부탁드립니다</p>
        </Herotext>
      </HeroWrapper>

      <Heroimg>
        <img src={mock} alt="Phone mockup" />
      </Heroimg>
    </HeroContainer>
  );
};

export default HeroSection;
