import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LeftSection>
          <Logo src={"/assets/images/footer_logo.png"} />
        </LeftSection>

        <CenterSection>
          <Title>당신의 기다림을 즐겁고 가치있게</Title>
          <SurveyBox>
            <SurveyText>
              <SurveyTitle>WAIT ZONE 설문조사</SurveyTitle>
              <SurveyDescription>
                서비스 품질 향상을 위한 설문조사와 사용성 인터뷰를 진행
                중입니다.
              </SurveyDescription>
            </SurveyText>
            <SurveyButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSeIZJh5xgWYgiHQtU7GJxg_WpLLUOvXwwup98EbcISM8xR-DA/viewform?usp=header"
              target="_blank"
            >
              참여하기
            </SurveyButton>
          </SurveyBox>
        </CenterSection>

        <ConnectBox>
          <ConnectTitle>Connect TBWIN</ConnectTitle>
          <ContactList>
            <ContactItem>이지혜 [jhw_d@naver.com]</ContactItem>
            <ContactItem>남윤경 [yungyeong6596@daum.net]</ContactItem>
            <ContactItem>배은아 [honggsam@gmail.com]</ContactItem>
            <ContactItem>최주희 [keycys31@gmail.com]</ContactItem>
          </ContactList>
        </ConnectBox>
      </ContentWrapper>
    </FooterContainer>
  );
};

// Style
const FooterContainer = styled.footer`
  background-color: #242424;
  color: white;
  padding: 30px;

  /* width: 800px; */
`;

const ContentWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  height: 230px;
  margin: auto;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 78px;
  height: 17px;
  flex-shrink: 0;
  margin-top: 48px;
  margin-bottom: 150px;
`;

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 57.5px;
  margin-top: 60px;
  gap: 26.5px;
`;

const Title = styled.p`
  color: #e6e6e6;
  font-size: 18px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.36px;
  text-align: left;
`;

const SurveyBox = styled.div`
  display: inline-flex;
  background-color: #171517;
  padding: 10px 16px;
  border-radius: 6px;
  align-items: center;
  gap: 15px;
  width: 428px;
`;

const SurveyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const SurveyTitle = styled.p`
  color: #e6e6e6;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.32px;
  text-align: left;
  margin-bottom: 2px;
  margin-top: 10px;
`;

const SurveyDescription = styled.p`
  color: #cccccc;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%;
  letter-spacing: -0.24px;
  margin-bottom: 10px;
  text-align: left;
`;

const SurveyButton = styled.a`
  background-color: #6f47ff;
  color: white;
  height: 32px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
  width: 73px;
  text-decoration: none;
  text-align: center;
`;

const ConnectBox = styled.div`
  display: flex;
  width: 184px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 15px;
`;

const ConnectTitle = styled.p`
  color: #d9d9d9;
  font-size: 12px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
  text-align: left;
`;

const ContactList = styled.ul`
  color: #999999;
  font-size: 12px;
  font-weight: 300;
  line-height: 170%;
  letter-spacing: -0.24px;
  text-align: left;
`;

const ContactItem = styled.li`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  gap: 10px;
`;

export default Footer;
