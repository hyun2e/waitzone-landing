import React from 'react';
import f3_background from './assets/images/f3_background.png';
import f3_line_flow from './assets/images/f3_line_flow.png';
import f3_graphic_pin from './assets/images/f3_graphic_pin.png';
import f3_image_1 from './assets/images/f3_image_1.png';
import f3_line_1 from './assets/images/f3_line_1.png';
import f3_line_2 from './assets/images/f3_line_2.png';
import f3_line_3 from './assets/images/f3_line_3.png';
import f3_mo_1 from './assets/images/f3_mo_1.svg';
import f3_mo_2 from './assets/images/f3_mo_2.svg';
import f3_mo_s_1 from './assets/images/f3_mo_s_1.svg';
import f3_mo_s_2 from './assets/images/f3_mo_s_2.svg';
import f3_tag from './assets/images/f3_tag.png';

const Features03 = () => {
  return (
    <div>
         <div>
            <h4 classname="f3_section">Features 03</h4>
            <h2 classname="f3_title">반경 커스텀으로 폭 넓은 Zone의 추천 장소 제공</h2>
            <p classname="f3_description">자유롭게 존의 반경을 설정해 보세요.<br/>
            여유롭게 설정한 후, 주변을 즐기고 오세요!</p>
        </div>

        <div>
            <img classname="f3_mo" src={f3_mo_1}/>
            <img className="f3_line_1" src={f3_line_1}/>
            <img className="f3_line_2" src={f3_line_2}/>
            <img className="f3_tag" src={f3_tag}/>
        </div>

        <div>
            <p className="f3_custom_flow">커스텀 Flow</p>
            <img classname="f3_line_flow" src={f3_line_flow}/>
            <img className="f3_mo_s_1" src={f3_mo_s_1}/>
            <img className="f3_mo_s_2" src={f3_mo_s_2}/>
            <img className="f3_line_3" src={f3_line_3}/>
            <p className="f3_body_title_1">내 주변 세부 웨이팅 존</p>
            <p className="f3_body_text_1">내 위치 중심의 세부 장소 추천 영역</p>
        </div>

        <div>
            <img className="f3_mo_2" src={f3_mo_2}/>
            <p className="f3_body_title_2">대기현황 실시간 제공</p>
            <p className="f3_body_text_2">실시간 대기 현황 한눈에 보기</p>
            <p className="f3_body_title_3">길찾기 · 웨이팅 신청 제공</p>
            <p className="f3_body_text_3">실시간 대기 현황 한눈에 보기</p>
        </div>
    </div>
  )
}

export default Features03