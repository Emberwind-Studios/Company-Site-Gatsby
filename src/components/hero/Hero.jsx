import React, { useContext } from "react";
import { Container, Row, Col } from "../theme/Theme";
import bubbles from "../../images/bubbles1.png";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 10%;
`;

const Button = styled.button`
  background-color: #526492;
  padding: 10px;
  height: auto;
  width: 150px;
  border-radius: 5px;
  align-self:center;
  justify-content:center;
  color: white;
  margin:10px;
`;

const Hero = () => {

    const theme = useContext(ThemeContext);
    
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={bubbles}
            width={500}
            height={"auto"}
            style={{ padding: 50, objectFit:"fill"}}
            alt="Bubbles "
          ></img>
        </Col>
        <Col
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{fontFamily:theme.fonts.body, textAlign:"center"}}>Website & Application<br></br> Design Made Easy</h1>
          <p style={{ paddingTop: "10%",textAlign:"center", width:"70%" }}>
              Starting a website or an application can be a daunting task. We
              want to make it as simple as possible to give you the jump start
              you need to take your business online!
            </p>
          <ButtonContainer>
            <Button>Learn More</Button>
            <Button>Learn More</Button>
          </ButtonContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
