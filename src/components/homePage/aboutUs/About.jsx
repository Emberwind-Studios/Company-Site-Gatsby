import React from "react";
import { Container, Row, Col } from "../../global/theme/Theme";
import styled from "styled-components";
import "./about.css";
import justinpfp from "../../../images/pfp-images/justin-pfp.png";
import kalebpfp from "../../../images/pfp-images/kaleb-pfp.png";

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
  color: ${(props) => props.theme.colors.primary};
  width: 150px;
  padding-top: 2%;
`;

const TitleText = styled.p`
  padding-top: 4%;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes[3] + "px"};
  color: #000000;
`;

const PfpHover = styled.div`
  box-shadow: rgba(0, 0, 0, 0.491) 0px 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transition: 0.2s;
    transform: translateY(-15px);
  }
`;

const About = () => {
  return (
    <>
      <TitleContainer>
        <Title>About Us</Title>
        <Underline></Underline>
        <TitleText>
          We provide the highest level of quality and performance for all of our
          software designs!
        </TitleText>
      </TitleContainer>

      <Container>
        <Row className="about-row">
          <Col>
          <PfpHover>
            <img src={kalebpfp} className="pfp"></img>
            </PfpHover>
          </Col>
          <Col className="text-col">
            <TitleText>
              We start off with a basic idea of what you want your website to
              look like. Perhaps you’d like a more modern and simplistic design.
              We have a multitude of custom layouts and themes to choose from.
              Personalize your own style with custom photos.
            </TitleText>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="about-row">
          <Col>
          <PfpHover>
            <img src={justinpfp} className="pfp"></img>
            </PfpHover>
          </Col>
          <Col className="text-col">
            <TitleText>
              We start off with a basic idea of what you want your website to
              look like. Perhaps you’d like a more modern and simplistic design.
              We have a multitude of custom layouts and themes to choose from.
              Personalize your own style with custom photos.
            </TitleText>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
