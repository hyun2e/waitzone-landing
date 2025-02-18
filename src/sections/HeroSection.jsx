import React from "react";
import Button from "../components/Button";
import background from "../assets/images/1_background_all.png";
import mock from "../assets/images/1_background_phonemock.png";
import styled from "styled-components";
import { style } from "framer-motion/client";

const HeroContainer = styled.div`
  background-image: url("src/assets/images/1_background_all.png");
  width: 100%;

`;



// 네비게이션 버튼 컨테이너
const HeroButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;




const HeroWrapper = styled.div``;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <h1>웨이팅, 언제까지 기다리기만 할래?</h1>
        <p>보이는 웨이팅 존에서 재미있는 장소를 추천해 드릴게요.</p> <br />
        <p> 웨이팅? 이제 새로 운 플레이 타임이 됩니다!</p>
        <div>

        {/* 여기에 섹션 3으로 이동하는 NavLink를 추가해봅시다 */}
        <HeroButton type="full-btn" bgcolor="#ffffff" href="https://www.naver.com">
          프로토타입 이동
        </HeroButton>
        {/* 여기에 섹션 3으로 이동하는 NavLink를 추가해봅시다 */}
                <HeroButton2 type="full-btn" border-radius="#ffffff" href="https://www.naver.com">
          설문조사 참여하기
        </HeroButton2>
    
        </div>
        <p>서비스 품질 향상을 위한 설문조사입니다. </p>
        <br />
        <p>많은 참여 부탁드립니다</p>
      </HeroWrapper>

      <img src={mock} />
    </HeroContainer>
  );
};

export default HeroSection;
