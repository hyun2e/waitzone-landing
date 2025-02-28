import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 📌 이미지 파일
import f4Mo from "/assets/images/f4_mo.svg";
import f4Card1 from "/assets/images/f4_card_1.svg";
import f4Card2 from "/assets/images/f4_card_2.svg";
import f4Card3 from "/assets/images/f4_card_3.svg";
import f4Card4 from "/assets/images/f4_card_4.svg";
import f4Line1 from "/assets/images/f4_line1.svg";
import f4Line2 from "/assets/images/f4_line_2.svg";
import f4Line3 from "/assets/images/f4_line3.svg";
import f4Line4 from "/assets/images/f4_line_4.svg";
import f4CardBig from "/assets/images/f4_card_big.svg";
import f4Graphic from "/assets/images/f4_graphic.png";

// ✅ 애니메이션 설정 (천천히 부드럽게 등장)
const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // 📌 천천히 등장
      ease: "easeOut",
    },
  },
};

// ✅ 텍스트 애니메이션 설정 (각각 딜레이 적용)
const textVariants = (delay) => ({
  hidden: { opacity: 0, y: 30 }, // 아래에서 시작
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay }, // 딜레이 적용
  },
});

const lineVariants2 = {
  hidden: { opacity: 0, y: 20 }, // 아래에서 시작
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.2, ease: "easeOut" },
  },
};

const lineVariants4 = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.4, ease: "easeOut" },
  },
};

const FeaturesContainer = styled.section`
  background-color: #6b5cfa;
  /* background-color: ${({ theme }) => theme.mainColors.primary300}; */
  color: ${({ theme }) => theme.grayColors.text};
  padding: 80px 20px;
  text-align: center;
  position: relative;
`;

const Header = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center; /* ✅ 중앙 정렬 */
  gap: 18px; /* ✅ 요소 간 간격 추가 (h2, h1, p 사이) */
  position: relative;
  z-index: 2; /* ✅ 오버레이보다 위에 배치 */

  h2 {
    color: var(--2, #eee9ff);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    margin-bottom: 6px; /* ✅ h2 아래 간격 */
  }

  h1 {
    color: var(--White-50, var(--Color, #fff));
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 31.2px */
    letter-spacing: -0.72px;
    margin-bottom: 6px; /* ✅ h2 아래 간격 */
  }

  p {
    color: var(--White-50, var(--Color, #fff));
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 100;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 950px; /* ✅ 목업이 포함될 수 있도록 적절한 높이 설정 */
  width: 800px;
  overflow: hidden; /* ✅ 영역 밖으로 넘치는 요소 숨김 */
`;

// ✅ 아이폰 목업 (motion 적용)
const MotionImageWrapper = motion(styled.div`
  position: absolute;
  left: 19%; /* 기존 50% → 왼쪽으로 이동 */
  transform: translateX(-50%); /* 중앙 정렬을 기본으로 하되, left 조정 */
  top: 214px; /* 상단과의 거리 유지 */
  object-fit: contain; /* 이미지 비율 유지 */
  display: flex;
  justify-content: center;
  z-index: 3; /* ✅ 가장 앞에 오도록 z-index 설정 */
`);

// ✅ 카드 그룹
const CardsWrapper = styled.div`
  position: absolute; /* ✅ 위치 절대값으로 설정 */
  width: 100%; /* ✅ 카드 2.5개 정도 보이도록 설정 (값 조정 가능) */
  display: flex;
  justify-content: flex-start; /* ✅ 카드 왼쪽부터 채우도록 수정 */
  left: 388px;
  overflow: hidden; /* ✅ 초과되는 카드 숨김 */
  margin-top: 224px;
`;

const FeatureCard = styled.img`
  /* 개별카드크기,둥근모서리,그림자등을적용 */
  width: 140px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const FloatingCardLeft = styled.div`
  position: absolute;
  left: 18px; /* 기존 -40px → 더 왼쪽으로 이동 */
  top: 390px; /* 기존 25% → 픽셀 단위로 조정 */
  transform: translateY(-50%); /* 이미지가 중앙 기준으로 정렬되도록 조정 */
`;

const FloatingCardRight = styled.div`
  display: flex; /* ✅ flex 적용 */
  flex-direction: row; /* ✅ 세로 → 가로 정렬 */
  gap: 8px; /* ✅ 카드 사이 간격 */
  left: 38px;
  //right: 0px; /* ✅ 기존 -30px → -50px로 변경 */
  //top: 420px;
  align-items: center; /* ✅ 카드들이 중앙에 정렬되도록 조정 */
`;

// ✅ Line 1 (작은 라인, 개별 적용)
const LineImage1 = styled.img`
  position: absolute;
  width: 96px;
  height: 15px;
  flex-shrink: 0;
  left: 90px;
  top: 500px; /* 기존 480px에서 조정 */
  object-fit: contain; /* 이미지 비율 유지 */
  z-index: 2; /* ✅ 오버레이보다 위에 배치 */
`;

// ✅ Line 3 (큰 라인, 개별 적용)
const LineImage3 = styled.img`
  position: absolute;
  width: 361px;
  height: 16px;
  flex-shrink: 0;
  left: 380px;
  top: 500px; /* 추천 카드 위에 배치 */
  z-index: 2; /* ✅ 오버레이보다 위에 배치 */
`;

// ✅ Line 2 (목업 위)
const MotionLineImage2 = motion(styled.img`
  position: absolute;
  width: 77px;
  height: 99px;
  flex-shrink: 0;
  left: 348px;
  transform: translateX(-50%);
  top: 230px; /* 모바일 목업 위 */
  object-fit: contain; /* 이미지 비율 유지 */
  z-index: 4; /* ✅ 오버레이보다 위에 배치 */
`);

// ✅ Line 4 (목업 위)
const MotionLineImage4 = motion(styled.img`
  position: absolute;
  width: 133px;
  height: 81px;
  flex-shrink: 0;
  left: 290px;
  transform: translateX(-50%);
  top: 462px; /* 모바일 목업 위 */
  object-fit: contain; /* 이미지 비율 유지 */
  z-index: 4; /* ✅ 오버레이보다 위에 배치 */
`);

// ✅ 배경 그래픽 요소
const StyledGraphicImage = styled.img`
  position: absolute;
  width: 362px;
  //height: 144.52px;
  flex-shrink: 0;
  left: 69%; /* 중앙 정렬 */
  transform: translateX(-50%); /* 중앙 기준 */
  top: 690px; /* 현재 레이아웃 기준으로 위치 조정 */
  object-fit: contain; /* 이미지 비율 유지 */
  z-index: 2; /* ✅ 오버레이보다 위에 배치 */
`;

// ✅ 설명 텍스트 블록1 (motion 적용)
const MotionDescriptionBlock1 = motion(styled.div`
  position: absolute;
  left: 433px;
  top: 220px;
  max-width: 380px;
  text-align: left;
  z-index: 2; /* ✅ 오버레이보다 위에 배치 */

  .icon {
    margin-right: 2px; /* ✅ 아이콘과 텍스트 간격 조정 */
    display: inline-flex;
  }

  h3 {
    color: white;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
    margin-bottom: 6px; /* ✅ 아래 간격 */
  }

  p {
    color: rgba(255, 255, 255, 0.68);
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 300;
    line-height: 16.8px;
    word-wrap: break-word;
    padding-left: 18px; /* ✅ 텍스트를 18px 오른쪽으로 이동 */
  }
`);

// ✅ 설명 텍스트 블록2 (motion 적용)
const MotionDescriptionBlock2 = motion(styled.div`
  position: absolute;
  left: 433px;
  top: 534px;
  max-width: 380px;
  text-align: left;
  z-index: 2; /* ✅ 오버레이보다 위에 배치 */

  .icon {
    margin-right: 2px; /* ✅ 아이콘과 텍스트 간격 조정 */
    display: inline-flex;
  }

  h3 {
    color: white;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
    margin-bottom: 6px; /* ✅ 아래 간격 */
  }

  p {
    color: rgba(255, 255, 255, 0.68);
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 300;
    line-height: 16.8px;
    word-wrap: break-word;
    padding-left: 18px; /* ✅ 텍스트를 18px 오른쪽으로 이동 */
  }
`);

// ✅ 설명 텍스트 블록3 (motion 적용)
const MotionDescriptionBlock3 = motion(styled.div`
  position: absolute;
  left: 433px;
  top: 880px;
  max-width: 380px;
  text-align: left;
  z-index: 2; /* ✅ 오버레이보다 위에 배치 */

  h3 {
    color: white;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
    display: flex; /* ✅ 아이콘과 텍스트 정렬 */
    align-items: center; /* ✅ 아이콘과 텍스트 높이 맞춤 */
    margin-bottom: 6px; /* ✅ 아래 간격 */
  }

  .icon {
    margin-right: 2px; /* ✅ 아이콘과 텍스트 간격 조정 */
    display: inline-flex;
  }

  p {
    color: rgba(255, 255, 255, 0.68);
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 300;
    line-height: 16.8px;
    word-wrap: break-word;
    padding-left: 18px; /* ✅ 텍스트를 18px 오른쪽으로 이동 */
  }
`);

// ✅ 큰 카드(테스트 결과)
const MotionCardBigWrapper = motion(styled.div`
  position: absolute;
  width: 362px;
  //height: 144.52px;
  flex-shrink: 0;
  left: 45%; /* 중앙 정렬 */
  transform: translateX(-50%); /* 중앙 기준 */
  top: 640px; /* 현재 레이아웃 기준으로 위치 조정 */
  object-fit: contain; /* 이미지 비율 유지 */
  z-index: 3; /* ✅ 오버레이보다 위에 배치 */
`);

const GraphicWrapper = styled.div`
  width: 800px;
  position: relative;
  margin: auto;
`;

const Features04 = () => {
  // ✅ `useInView` 사용하여 스크롤 감지
  const { ref: moRef, inView: moInView } = useInView({
    triggerOnce: false, // 📌 스크롤로 다시 해당 영역이 보이면 반복 동작
    threshold: 0.2, // 📌 20% 이상 화면에 보여야 트리거
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: false, // 📌 스크롤 시 반복 동작
    threshold: 0.2,
  });
  // ✅ 3개의 블록 각각 useInView 적용
  const { ref: textRef1, inView: textInView1 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: textRef2, inView: textInView2 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: textRef3, inView: textInView3 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <FeaturesContainer ref={moRef}>
      <GraphicWrapper>
        <Header>
          <h2>Features 04</h2>
          <h1>내 취향 테스트를 통한 맞춤 큐레이션 컨텐츠 제공</h1>
          <p>사용자의 성향과 취향에 기반한 장소와 활동을 추천해줘요.</p>
        </Header>

        <ContentWrapper>
          <MotionLineImage2
            src={"/assets/images/f4_line_2.svg"}
            alt="Design Line2"
            initial="hidden"
            whileInView="visible"
            variants={lineVariants2}
            viewport={{ once: false, amount: 0.2 }}
          />

          <MotionLineImage4
            src={"/assets/images/f4_line_4.svg"}
            alt="Design Line4"
            initial="hidden"
            whileInView="visible"
            variants={lineVariants4}
            viewport={{ once: false, amount: 0.2 }}
          />

          {/* ✅ f4Mo 애니메이션 적용 */}
          <MotionImageWrapper
            initial="hidden"
            animate={moInView ? "visible" : "hidden"} // ✅ inView 값으로 애니메이션 트리거
            variants={imageVariants}
          >
            <img
              src={"/assets/images/f4_mo.svg"}
              alt="Mobile UI"
              className="max-w-sm"
            />
          </MotionImageWrapper>

          <FloatingCardLeft>
            <FeatureCard
              src={"/assets/images/f4_card_1.svg"}
              alt="Feature Card 1"
            />
          </FloatingCardLeft>

          <CardsWrapper>
            <FloatingCardRight>
              {[
                "/assets/images/f4_card_2.svg",
                "/assets/images/f4_card_3.svg",
                "/assets/images/f4_card_4.svg",
              ].map((card, index) => (
                <FeatureCard
                  key={index}
                  src={card}
                  alt={`Feature Card ${index + 2}`}
                />
              ))}
            </FloatingCardRight>
          </CardsWrapper>

          {/* ✅ Line 1 (작은 라인, 카드 밑) */}
          <LineImage1 src={"/assets/images/f4_line1.svg"} alt="Design Line1" />

          {/* ✅ Line 3 (큰 라인, 추천 카드 위) */}
          <LineImage3 src={"/assets/images/f4_line3.svg"} alt="Design Line3" />
        </ContentWrapper>

        {/* 배경 그래픽 요소 */}
        <StyledGraphicImage
          src={"/assets/images/f4_graphic.png"}
          alt="Graphic Illustration"
        />

        <MotionDescriptionBlock1
          ref={textRef1}
          initial="hidden"
          animate={textInView1 ? "visible" : "hidden"}
          variants={textVariants(0.2)} // 첫 번째 블록
          style={{ top: "220px" }}
        >
          <h3>
            <span className="icon">📌</span> 사용자의 니즈 & 취향 저격 큐레이션
            제공
          </h3>
          <p>
            웨이팅 중에도 더 가치 있는 시간을 보낼 수 있도록,
            <br />
            당신의 상황과 취향에 맞춘 장소와 활동을 추천합니다.
          </p>
        </MotionDescriptionBlock1>

        <MotionDescriptionBlock2
          ref={textRef2}
          initial="hidden"
          animate={textInView2 ? "visible" : "hidden"}
          variants={textVariants(0.4)} // 두 번째 블록 (0.4초 딜레이)
          style={{ top: "534px" }}
        >
          <h3>
            <span className="icon">📍</span> 사용자의 현 위치기반 큐레이션 제공
          </h3>
          <p>
            사용자의 현 위치를 고려한 큐레이션을 제공하고,
            <br />
            웨이팅 시간에 맞춘 다양한 장소를 추천합니다.
          </p>
        </MotionDescriptionBlock2>

        {/* ✅ f4CardBig 애니메이션 적용 */}
        <MotionCardBigWrapper
          ref={cardRef} // ✅ useInView의 ref 사용
          initial="hidden"
          animate={cardInView ? "visible" : "hidden"} // ✅ inView 값으로 애니메이션 트리거
          variants={imageVariants}
        >
          <img
            src={"/assets/images/f4_card_big.svg"}
            alt="추천 카드"
            className="max-w-md rounded-lg shadow-lg"
          />
        </MotionCardBigWrapper>

        <MotionDescriptionBlock3
          ref={textRef3}
          initial="hidden"
          animate={textInView3 ? "visible" : "hidden"}
          variants={textVariants(0.6)} // 세 번째 블록 (0.6초 딜레이)
          style={{ top: "880px" }}
        >
          <h3>
            <span className="icon">✨</span> 당신만을 위한 맞춤 추천이
            완성됐어요!
          </h3>
          <p>
            간단한 스타일 선택 (원하는 장소, 분위기, 목적) 후<br />
            사용자에게 맞는 장소와 활동을 추천합니다!
          </p>
        </MotionDescriptionBlock3>
      </GraphicWrapper>
    </FeaturesContainer>
  );
};

export default Features04;
