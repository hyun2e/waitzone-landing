import React from "react";
import arrow from "../assets/images/c2_arrow.png";
import background from "../assets/images/c2_background.png";
import line from "../assets/images/c2_textbox_line.png";
import textbook from "../assets/images/c2_textbox.png";
import styled from "styled-components";

const CoreContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 600px;
  position: relative;
  padding: 40px 20px;
`;

const TopCorevalue = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  position: relative;
  padding: 40px 20px;
  color: skyblue;
`;

const MiddleCorevalue = styled.div`
  display: flex;
  max-width: 600px;
  height: 400px;
  position: relative;
  padding: 40px 20px;
  color: yellow;
`;

const Solution = styled.div`
  display: flex;
  max-width: 600px;
  height: 200px;
  position: relative;
  padding: 40px 20px;
  color: pink;
`;

const CoreValues = () => {
  return (
    <CoreContainer>
      {/* Core Values */}
      <TopCorevalue>
        <p>Core Values</p>
        <h2>"웨이팅 시간을 가치있고 즐거운 경험으로 만들기"</h2>
      </TopCorevalue>

      {/* 해결 방향 */}
      <MiddleCorevalue>
        <p>해결 방향</p>
        <h2>시간허비 · 활동 제약</h2>
        <p>다양성-사용자의 웨이팅 시간과 상황마다 다른 다양한 경험</p>
      </MiddleCorevalue>

      {/* Solution */}
      <Solution>
        <p>
          대기 시간을 반영해 Zone을 표시하고, 시간 내에 가능한 활동을 추천해
          드려요.
        </p>
      </Solution>

      <img src={arrow} />
      <img src={background} alt="background" />
      <img src={line} />
      <img src={textbook} />
    </CoreContainer>
  );
};

export default CoreValues;
