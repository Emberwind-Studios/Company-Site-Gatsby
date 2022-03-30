import React from "react";
import { Container, Row, Col } from "../theme/Theme";
import styled from "styled-components";
import "./services.css";
import HostLogo from "../../images/card-images/hosting-logo.png";
import WebDLogo from "../../images/card-images/web-development-logo.png";
import AppDLogo from "../../images/card-images/app-development-logo.png";
import EcLogo from "../../images/card-images/ecommerce-logo.png";
import GraphLogo from "../../images/card-images/graphic-design-logo.png";
import MaintLogo from "../../images/card-images/maintenance-logo.png";

const Card = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transition: 0.2s;
    transform: translateY(-15px);
  }
`;

const SubContainer = styled.div`
  margin-left: 10%;
  padding-top: 5%;
`;

const Heading = styled.h2`
  font-style: normal;
  font-weight: 100;
  line-height: 23px;
  text-align: left;
  color: ${(props) => props.theme.colors.heading};
  font-size: ${(props) => props.theme.fontSizes[4] + "px"};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[3] + "px"};
  text-align: left;
  font-style: normal;
  font-weight: 300;
  margin-top: 5%;
  letter-spacing: 0em;
`;

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
  text-align: center;
  padding-top: 200px;
  width: 100%;
`;

const Underline = styled.hr`
  display: flex;
  justify-content: center;
  border-bottom: 4px solid;
  color:${(props) => props.theme.colors.primary};
  width: 150px;
  padding-top: 2%;
`;

const TitleText = styled.p`
  padding-top:4%;
  font-family:${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes[3]+ "px"};
`;

const Services = () => {
  return (
    <>
      <TitleContainer>
        <Title>What We Offer</Title>
        <Underline></Underline>
        <TitleText>We provide the highest level of quality and performance for all of our software designs!</TitleText>
      </TitleContainer>
      <Container className="services-con">
        <Row>
          <Col className="services-col">
            <Card>
              <img src={MaintLogo} className="card-image" alt="Web Design"></img>
              <SubContainer>
                <Heading>Web Design</Heading>
                <SubText>
                  All of our plans are tailored to meet your business goals and
                  ambitions.
                </SubText>
              </SubContainer>
            </Card>
          </Col>
          <Col className="services-col">
            <Card>
              <img src={AppDLogo} className="card-image" alt="App Development"></img>
              <SubContainer>
                <Heading>App Development</Heading>
                <SubText>
                  All of our plans are tailored to meet your business goals and
                  ambitions.
                </SubText>
              </SubContainer>
            </Card>
          </Col>
          <Col className="services-col">
            <Card>
              <img src={EcLogo} className="card-image" alt="Eccomerce"></img>
              <SubContainer>
                <Heading>Eccomerce</Heading>
                <SubText>
                  All of our plans are tailored to meet your business goals and
                  ambitions.
                </SubText>
              </SubContainer>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="services-con">
        <Row>
          <Col className="services-col">
            <Card>
              <img src={GraphLogo} className="card-image" alt="Graphic Design"></img>
              <SubContainer>
                <Heading>Graphic Design</Heading>
                <SubText>
                  All of our plans are tailored to meet your business goals and
                  ambitions.
                </SubText>
              </SubContainer>
            </Card>
          </Col>
          <Col className="services-col">
            <Card>
              <img src={HostLogo} className="card-image" alt="Hosting"></img>
              <SubContainer>
                <Heading>Hosting</Heading>
                <SubText>
                  All of our plans are tailored to meet your business goals and
                  ambitions.
                </SubText>
              </SubContainer>
            </Card>
          </Col>
          <Col className="services-col">
            <Card>
              <img src={WebDLogo} className="card-image" alt=" Site Maintenance"></img>
              <SubContainer>
                <Heading>Site Maintenance</Heading>
                <SubText>
                  All of our plans are tailored to meet your business goals and
                  ambitions.
                </SubText>
              </SubContainer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
