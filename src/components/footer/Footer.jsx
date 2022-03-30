import React from "react";
import styled from "styled-components";
import logo from "../../images/Flame_logo_white.png";
import { Col, Container, FooterContainer, Heading, Row } from "../theme/Theme";
import './footer.css';

const Footerli = styled.li`
  color: ${(props) => props.theme.colors.text};
  list-style: none;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col className="footer-col">
            <img
              src={logo}
              width={100}
              height={100}
              style={{objectFit:"contain"}}
              alt="Emberwind studios logo"
            ></img>
          </Col>
          <Col className="footer-col">
            <Heading>Navigation</Heading>
            <ul>
              <Footerli>Home</Footerli>
              <Footerli>About Us</Footerli>
              <Footerli>Services</Footerli>
              <Footerli>Contact Us</Footerli>
            </ul>
          </Col>
          <Col className="footer-col">
            <Heading>Navigation</Heading>
            <ul>
              <Footerli>hello</Footerli>
              <Footerli>hello</Footerli>
              <Footerli>hello</Footerli>
              <Footerli>hello</Footerli>
            </ul>
          </Col>
          <Col className="footer-col">
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
