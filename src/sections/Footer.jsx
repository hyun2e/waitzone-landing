import React from "react";
import footer_logo from "../assets/images/footer_logo.png";

const Footer = () => {
  return (
    <div>
      <div>
        <img classname="logo" src={footer_logo} />
      </div>

      <div>
        <p classname="title">당신의 기다림을 즐겁고 가치있게</p>
      </div>

      <div>
        <p classname="survey_title">WAIT ZONE 설문조사</p>
        <p className="survey_description">
          서비스 품질 향상을 위한 설문조사와 사용성 인터뷰를 진행 중입니다.
        </p>
        <button className="survey_button">참여하기</button>
      </div>

      <div className="survey_connect">
        <p>Connect TBWIN</p>
        <ul>
          <li>이지혜 [jhw_d@naver.com]</li>
          <li>남윤경 [yungyeong6596@daum.net]</li>
          <li>배은아 [honggsam@gmail.com]</li>
          <li>최주희 [keycys31@gmail.com]</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
