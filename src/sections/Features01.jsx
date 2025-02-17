import React from "react";
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
    <div>
      <div>
        <h4 className="f1_section">Features 01</h4>
        <h2 className="f1_title">웨이팅 신청 존에서 빠르게 웨이팅</h2>
        <p className="f1_description">
          장소에 도착하지 않고 빠르게 웨이팅을 신청할 수 있어요.
        </p>
      </div>

      <div>
        <img className="f1_mo" src={f1_mo} />
      </div>

      <div>
        <img className="f1_gradient_r" src={f1_gradient_right} />
        <img className="f1_gradient_l" src={f1_gradient_left} />
      </div>

      <div>
        <img className="f1_icon_1" src={f1_icon_1} />
        <img className="f1_icon_2" src={f1_icon_2} />
        <img className="f1_icon_3" src={f1_icon_3} />
        <img className="f1_icon_4" src={f1_icon_4} />
        <img className="f1_icon_5" src={f1_icon_5} />
        <img className="f1_icon_6" src={f1_icon_6} />
      </div>
    </div>
  );
};

export default Features01;
