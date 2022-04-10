import React from "react";
import { Container, Row, Col } from "../../global/theme/Theme";
import styled from "styled-components";
import "./services.css";
import HostLogoDark from "../../../images/dark-card-images/hosting-dark.png";
import WebDLogoDark from "../../../images/dark-card-images/web-development-dark.png";
import AppDLogoDark from "../../../images/dark-card-images/app-development-dark.png";
import EcLogoDark from "../../../images/dark-card-images/ecommerce-dark.png";
import GraphLogoDark from "../../../images/dark-card-images/graphic-design-dark.png";
import MaintLogoDark from "../../../images/dark-card-images/maintenance-dark.png";
import { Link } from "gatsby";

const Card = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.491) 0px 10px 15px;
  cursor: pointer;
  transition: 0.2s;
  background-color: #1a1834;

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
  color: #ffffff;
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
  color: #ffffff;
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
            <Link to="/web-design/" style={{textDecoration:'none', color:'#454040'}}>
            <Card>
              <img src={MaintLogoDark} className="card-image" alt="Web Design"></img>
              <SubContainer>
                <Heading>Web Design</Heading>
                <SubText>
                  All of our plans are tailored to meet your business goals and
                  ambitions.
                </SubText>
              </SubContainer>
            </Card>
            </Link>
          </Col>
          <Col className="services-col">
            <Card>
              <img src={AppDLogoDark} className="card-image" alt="App Development"></img>
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
              <img src={EcLogoDark} className="card-image" alt="Eccomerce"></img>
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

      <Container className="services-con2">
        <Row>
          <Col className="services-col">
            <Card>
              <img src={GraphLogoDark} className="card-image" alt="Graphic Design"></img>
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
              <img src={HostLogoDark} className="card-image" alt="Hosting"></img>
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
              <img src={WebDLogoDark} className="card-image" alt=" Site Maintenance"></img>
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
