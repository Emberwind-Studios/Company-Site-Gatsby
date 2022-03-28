import React from "react";
import { Container, Row, Col } from "../theme/Theme";
import styled from "styled-components";
import "./services.css";
import HostLogo from "../../images/card-images/hosting-logo.png";
import WebDLogo from "../../images/card-images/web-development-logo.png"
import AppDLogo from "../../images/card-images/app-development-logo.png"
import EcLogo from "../../images/card-images/ecommerce-logo.png"
import GraphLogo from "../../images/card-images/graphic-design-logo.png"
import MaintLogo from "../../images/card-images/maintenance-logo.png"
import { servicesVersion } from "typescript";

const Card = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Services = () => {
  return (
    <>
    <Container className='services-con'>
      <Row>
        <Col className="services-col">
          <Card>
            <img src={WebDLogo} className='card-image'></img>
          </Card>
        </Col>
        <Col className="services-col">
          <Card>
            <img src={AppDLogo} className='card-image'></img>
          </Card>
        </Col>
        <Col className="services-col">
          <Card>
            <img src={EcLogo} className='card-image'></img>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container className='services-con'>
    <Row>
      <Col className="services-col">
        <Card>
          <img src={GraphLogo} className='card-image'></img>
        </Card>
      </Col>
      <Col className="services-col">
        <Card>
          <img src={HostLogo} className='card-image'></img>
        </Card>
      </Col>
      <Col className="services-col">
        <Card>
          <img src={MaintLogo} className='card-image'></img>
        </Card>
      </Col>
    </Row>
  </Container>
  </>
  );
};


export default Services;
