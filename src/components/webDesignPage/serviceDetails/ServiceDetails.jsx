import React from "react";
import { Container, Row, Col } from "../../global/theme/Theme";
import siteImage from "../../../images/site-images/performing-center-stage.png";
import styled from "styled-components";
import "./serviceDetails.css";
import FadeInAnimation from "../../../assets/js/FadeInAnimation";

const MainTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.heading};
  font-weight: 600;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.heading};
  font-weight: 600;
  text-align: left;
  width: 100%;
`;

const MainUnderline = styled.hr`
  display: flex;
  border-bottom: 4px solid;
  color: ${(props) => props.theme.colors.primary};
  width: 150px;
  align-self: center;
  padding-top: 2%;
`;

const Underline = styled.hr`
  display: flex;
  border-bottom: 4px solid;
  color: ${(props) => props.theme.colors.primary};
  width: 50px;
  align-self: start;
  padding-top: 2%;
`;

const TitleText = styled.p`
  padding-top: 4%;
  line-height: 30px;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes[3] + "px"};
  color: #ffffff;
`;

const ServiceDetails = () => {
  return (
    <>
      <FadeInAnimation>
        <MainTitleContainer>
          <MainTitle>Features & Benefits</MainTitle>
          <MainUnderline></MainUnderline>
        </MainTitleContainer>
        <Container className="service-detail-container">
          <Row className="service-detail-row">
            <Col className="service-detail-column">
              <TitleContainer>
                <Title>Custom Website Designs</Title>
                <Underline></Underline>
                <TitleText>
                  Your website will feature a custom design, and unique features
                  to give your site a personal feel and look. We want to keep
                  customers engaged while giving them a great user experience!
                </TitleText>
              </TitleContainer>
            </Col>
            <Col className="service-detail-column">
              <img
                className="service-site-photo"
                src={siteImage}
                alt="Performing Center Stage"
              ></img>
            </Col>
          </Row>
        </Container>
      </FadeInAnimation>

      <FadeInAnimation>
        <Container className="service-detail-container">
          <Row className="service-detail-row">
            <Col className="service-detail-column">
              <img
                className="service-site-photo"
                src={siteImage}
                alt="Performing Center Stage"
              ></img>
            </Col>
            <Col className="service-detail-column">
              <TitleContainer>
                <Title>Custom Website Designs</Title>
                <Underline></Underline>
                <TitleText>
                  Your website will feature a custom design, and unique features
                  to give your site a personal feel and look. We want to keep
                  customers engaged while giving them a great user experience!
                </TitleText>
              </TitleContainer>
            </Col>
          </Row>
        </Container>
      </FadeInAnimation>

      <FadeInAnimation>
        <Container className="service-detail-container">
          <Row className="service-detail-row">
            <Col className="service-detail-column">
              <TitleContainer>
                <Title>Custom Website Designs</Title>
                <Underline></Underline>
                <TitleText>
                  Your website will feature a custom design, and unique features
                  to give your site a personal feel and look. We want to keep
                  customers engaged while giving them a great user experience!
                </TitleText>
              </TitleContainer>
            </Col>
            <Col className="service-detail-column">
              <img
                className="service-site-photo"
                src={siteImage}
                alt="Performing Center Stage"
              ></img>
            </Col>
          </Row>
        </Container>
      </FadeInAnimation>
    </>
  );
};

export default ServiceDetails;
