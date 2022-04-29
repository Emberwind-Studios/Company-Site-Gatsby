import React, { useContext } from "react";
import { Container, Row, Col } from "../../global/theme/Theme";
import bubbles from "../../../images/bubbles-purple-dark.png";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import "./hero.css";

const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 10%;
`;

const Button = styled.button`
  background-color: #4F499F;
  font-size: ${(props) => props.theme.fontSizes[3] + "px"};
  padding: 15px;
  height: auto;
  width: 200px;
  border-radius: 5px;
  align-self: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  margin: 10px;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transition: 0.2s;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-10px);
  }
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
  font-weight: 100;
  font-size: ${(props) => props.theme.fontSizes[6] + "px"};
  color: ${(props) => props.theme.colors.heading};
`;

const SubText = styled.p`
  padding-top: 10%;
  text-align: center;
  line-height: ${(props) => props.theme.lineHeights.body};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes[3] + "px"};
  width: 70%;
  color: #ffffff;
`;

const Hero = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Container>
        <Row syle={{ width: "100%;" }}>
          <Col>
            <img
              src={bubbles}
              width={"100%"}
              height={"auto"}
              style={{ objectFit: "cover" }}
              alt="Bubbles"
            ></img>
          </Col>
          <Col
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Title>
              Website & Application<br></br> Design Made Easy
            </Title>
            <SubText>
              Starting a website or an application can be a daunting task. We
              want to make it as simple as possible to give you the jump start
              you need to take your business online!
            </SubText>
            <ButtonContainer>
              <Button>Request A Quote</Button>
              <Button>See Services</Button>
            </ButtonContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
