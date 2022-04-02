import React from "react";
import { Container, Row, Col } from "../../global/theme/Theme";
import bubbles from "../../../images/site-images/performing-center-stage.png";
import styled from "styled-components";
import "./serviceDetails.css";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes[3] + "px"};
`;

const ServiceDetails = () => {
  return (
    <>
      <Container className="service-detail-container">
        <Row className="service-detail-row">
          <Col className="service-detail-column">
            <img
              className="service-site-photo"
              src={bubbles}
              width={"100%"}
              height={"auto"}
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

      <Container className="service-detail-container">
        <Row className="service-detail-row">
          <Col className="service-detail-column">
            <TitleContainer>
              <Title>Great Speed and Performance</Title>
              <Underline></Underline>
              <TitleText>
                Your site will be optimized to perform great and be able to
                handle a large amount of traffic. We also provide security, and
                backups for your store to give you peace of mind.
              </TitleText>
            </TitleContainer>
          </Col>
          <Col className="service-detail-column">
            <img
              className="service-site-photo"
              src={bubbles}
              width={"100%"}
              height={"auto"}
              alt="Performing Center Stage"
            ></img>
          </Col>
        </Row>
      </Container>

      <Container className="service-detail-container">
        <Row className="service-detail-row">
          <Col className="service-detail-column">
            <img
              className="service-site-photo"
              src={bubbles}
              width={"100%"}
              height={"auto"}
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
    </>
  );
};

export default ServiceDetails;
