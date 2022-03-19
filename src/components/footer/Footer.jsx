import React from "react";
import styled from "styled-components";
import logo from "../../images/Flame_logo_white.png";
import { Col, Container, FooterContainer, Heading, Row } from "../theme/Theme";
import HandleMediaQuery from "../handleMediaQuery/HandleMediaQuery";

const Footerli = styled.li`
  color: ${(props) => props.theme.colors.text};
  list-style: none;
`;


const Footer = () => {
  let mobileScreen = HandleMediaQuery();
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col>
            <img
              src={logo}
              width={50}
              height={"auto"}
              alt="Emberwind studios logo"
            ></img>
          </Col>
          <Col>
            <Heading>Navigation</Heading>
            <ul>
              <Footerli>Home</Footerli>
              <Footerli>About Us</Footerli>
              <Footerli>Services</Footerli>
              <Footerli>Contact Us</Footerli>
            </ul>
          </Col>
          <Col>
            <Heading>Navigation</Heading>
            <ul>
              <Footerli>hello</Footerli>
              <Footerli>hello</Footerli>
              <Footerli>hello</Footerli>
              <Footerli>hello</Footerli>
            </ul>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
