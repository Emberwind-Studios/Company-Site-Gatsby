import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Nav, Ul, Row, Col } from "../theme/Theme";
import logo from "../../../images/Flame_logo_white.png";
import HandleMediaQuery from "../../handleMediaQuery/HandleMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";
import { ThemeContext } from "styled-components";

const Li = styled.li`
  margin: 5px;
  padding: 5px;
  text-decoration: none;
  list-style-type: none;
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
`;

const Link = styled.a`
  text-decoration: none;
  transition: 0.2s ease-in;
  color: white;
  :hover {
    color: black;
  }
`;

const MobileMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  display: none;
`;

const MobileUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 2px solid ${(props) => props.theme.colors.secondary};
  width: 200px;
  background-color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
`;

export const Header = (props) => {
  const themeContext = useContext(ThemeContext);
  let mobileScreen = HandleMediaQuery();

  return (
    <Container
      style={{
        backgroundColor: themeContext.colors.primary,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <Row style={mobileScreen ? { alignItems: "flex-end" } : {}}>
        <Nav style={mobileScreen ? { display: "none" } : {}}>
          <Ul>
            <Li>
              <Link href="/">Home</Link>
            </Li>
            <Li>
              <Link href="/about">About us</Link>
            </Li>
            <img
              src={logo}
              width={50}
              height={"auto"}
              alt="Emberwind studios logo"
            ></img>
            <Li>
              <Link href="/services">Services</Link>
            </Li>
            <Li>
              <Link href="/contact">Contact Us</Link>
            </Li>
          </Ul>
        </Nav>
        <Col
          style={
            mobileScreen
              ? {
                  width: 100,
                  alignItems: "center",
                  justifyContent: "right",
                  cursor: "pointer",
                }
              : { display: "none" }
          }
        >
          <AiOutlineMenu fontSize={25} color={"white"}></AiOutlineMenu>
        </Col>
        <MobileMenu>
          <MobileUl>
            <Li>Home</Li>
            <Li>About us</Li>
            <Li>Services</Li>
            <Li>Contact us</Li>
          </MobileUl>
        </MobileMenu>
      </Row>
    </Container>
  );
};
