import React from "react";
import styled from "styled-components";
import f4Mo from "../assets/images/f4_mo.svg";
import f4Card1 from "../assets/images/f4_card_1.png";
import f4Card2 from "../assets/images/f4_card_2.png";
import f4Card3 from "../assets/images/f4_card_3.png";
import f4Card4 from "../assets/images/f4_card_4.png";
import f4Line1 from "../assets/images/f4_line_1.png";
import f4Line3 from "../assets/images/f4_line_3.png";
import f4CardBig from "../assets/images/f4_card_big.png";
import f4Graphic from "../assets/images/f4_graphic.png";
import f4Line2 from "../assets/images/f4_line_2.png";

const FeaturesContainer = styled.section`
  background-color: ${({ theme }) => theme.mainColors.primary300};
  color: ${({ theme }) => theme.grayColors.text};
  padding: 80px 20px;
  text-align: center;
  position: relative;
`;

const Header = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.heading1};
    margin-bottom: 16px;
  }
  p {
    color: ${({ theme }) => theme.grayColors.textpoint};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const FeatureCard = styled.img`
  width: 150px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const FloatingCardLeft = styled.div`
  position: absolute;
  left: -40px;
  top: 25%;
`;

const FloatingCardRight = styled.div`
  position: absolute;
  right: -40px;
  top: 25%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LineImage = styled.img`
  position: absolute;
  width: 80%;
`;

const DescriptionWrapper = styled.div`
  max-width: 800px;
  margin: 80px auto;
  text-align: left;
`;

const CardBigWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Features04 = () => {
  return (
    <FeaturesContainer>
      <Header>
        <h2>Features 04</h2>
        <h1>내 취향 테스트를 통한 맞춤 큐레이션 컨텐츠 제공</h1>
        <p>사용자의 성향과 취향에 기반한 장소와 활동을 추천해줘요.</p>
      </Header>

      <ContentWrapper>
        <LineImage src={f4Line2} alt="Design Line2" style={{ top: "150px" }} />
        <ImageWrapper>
          <img src={f4Mo} alt="Mobile UI" className="max-w-sm" />
        </ImageWrapper>

        <FloatingCardLeft>
          <FeatureCard src={f4Card1} alt="Feature Card 1" />
        </FloatingCardLeft>

        <FloatingCardRight>
          {[f4Card2, f4Card3, f4Card4].map((card, index) => (
            <FeatureCard key={index} src={card} alt={`Feature Card ${index + 2}`} />
          ))}
        </FloatingCardRight>

        <LineImage src={f4Line1} alt="Design Line1" style={{ top: "400px" }} />
        <LineImage src={f4Line3} alt="Design Line3" style={{ top: "600px" }} />
      </ContentWrapper>

      <img src={f4Graphic} alt="Graphic Illustration" className="max-w-lg mt-8" />

      <DescriptionWrapper>
        <h3>📌 사용자의 니즈 & 취향 저격 큐레이션 제공</h3>
        <p>웨이팅 중에도 더 가치 있는 시간을 보낼 수 있도록, 당신의 상황과 취향에 맞춘 장소와 활동을 추천합니다.</p>

        <h3>📍 사용자의 현 위치기반 큐레이션 제공</h3>
        <p>사용자의 현 위치를 고려한 큐레이션을 제공하고, 웨이팅 시간에 맞춘 다양한 장소를 추천합니다.</p>
      </DescriptionWrapper>

      <CardBigWrapper>
        <img src={f4CardBig} alt="추천 카드" className="max-w-md rounded-lg shadow-lg" />
      </CardBigWrapper>

      <DescriptionWrapper>
        <h3>✨ 당신만을 위한 맞춤 추천이 완성됐어요!</h3>
        <p>간단한 스타일 선택 (원하는 장소, 분위기, 목적) 후 사용자에게 맞는 장소와 활동을 추천합니다!</p>
      </DescriptionWrapper>
    </FeaturesContainer>
  );
};

export default Features04;