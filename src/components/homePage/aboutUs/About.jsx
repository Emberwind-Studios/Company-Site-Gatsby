import React from "react";
import { Container, Row, Col } from "../../global/theme/Theme";
import styled from "styled-components";
import "./about.css";
import justinpfp from "../../../images/pfp-images/justin-pfp.png";
import kalebpfp from "../../../images/pfp-images/kaleb-pfp.png";

const TitleText = styled.p`
  padding-top: 4%;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes[3] + "px"};
`;

const About = () => {
  return (
    <>
      <Container>
        <Row className="about-row">
          <Col>
            <img src={kalebpfp} className="pfp"></img>
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
            <img src={justinpfp} className="pfp"></img>
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
