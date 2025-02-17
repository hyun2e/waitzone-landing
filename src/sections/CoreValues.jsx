import React from "react";
import arrow from "../assets/images/2_arrow.png";
import background from "../assets/images/2_background";
import line from "../assets/images/2_textbook_line";
import textbook from "../assets/images/textbox.png";
const CoreValues = () => {
  return (
    <div>
      {/* Core Values */}
      <div>
        <p>Core Values</p>
        <h2>"웨이팅 시간을 가치있고 즐거운 경험으로 만들기"</h2>
      </div>

      {/* 해결 방향 */}
      <div>
        <p>해결 방향</p>
        <h2>시간허비 · 활동 제약</h2>
        <p>다양성-사용자의 웨이팅 시간과 상황마다 다른 다양한 경험</p>
      </div>

      {/* Solution */}
      <div>
      <p>대기 시간을 반영해 Zone을 표시하고, 시간 내에 가능한 활동을 추천해 드려요.</p>
      </div>

      <img src={mock}/>
      <img src={background}/>
      <img src={line}/>
      <img src={textbook}/>
    </div>
  );
};

export default CoreValues;
