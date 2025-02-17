import React from "react";

const Features02 = () => {
  return (
    /* 섹션 제목 및 설명 */
    <div>
      <div>
        <h4>Features03</h4>
        <h2>웨이팅 존으로 안전하게 웨이팅하기</h2>
        <p>
          웨이팅 시간 내 도보로 이동 가능한 존이에요. 잔여 대기 시간에 따라
          반경이 실시간으로 줄어듭니다.
        </p>
      </div>

      {/* 웨이팅 존 UI 화면 */}
      <div>
        <img src="/assets/images/f2_mo.svg" alt="웨이팅 존" />
      </div>

      {/* 웨이팅 존 배경 */}
      <div>
        <img
          src="/assets/images/f2_background_graphic_pin.png"
          alt="배경이미지"
        />
      </div>

      {/* 알림 UI */}
      <div>
        <img
          src="/assets/images/f3_alert_right_1.png"
          alt="웨이팅 존을 벗어났을 시 알림"
        />
        <p>웨이팅 존을 벗어났을 시 알림 제공</p>
        <p>웨이팅 존에서 벗어났습니다.</p>
        <p>안전한 웨이팅을 위해 안으로 이동해주세요.</p>
      </div>

      {/* 말풍선 1, 2 */}
      <div>
        <img
          src="/assets/images/f3_alert_left.png"
          alt="입장을 놓치면 어떡하지?"
        />
        <p>입장을 놓치면 어떡하지?</p>
      </div>

      <div>
        <img
          src="/assets/images/f3_alert_right_2.png"
          alt="어디까지 가도될까?"
        />
        <p>어디까지 가도 될까?</p>
      </div>
    </div>
  );
};

export default Features03;
