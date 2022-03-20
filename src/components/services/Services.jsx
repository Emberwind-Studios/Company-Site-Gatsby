import React from "react";
import { Container, Row, Col } from "../theme/Theme";
import styled from "styled-components";
import "./services.css";
import CardImage from "../../images/Cardlogothinker.png";
import { servicesVersion } from "typescript";

const Card = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Services = () => {
  return (
    <Container className='services-con'>
      <Row>
        <Col className="services-col">
          <Card>
            <img src={CardImage} className='card-image'></img>
          </Card>
        </Col>
        <Col className="services-col">
          <Card>
            <img src={CardImage} className='card-image'></img>
          </Card>
        </Col>
        <Col className="services-col">
          <Card>
            <img src={CardImage} className='card-image'></img>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
