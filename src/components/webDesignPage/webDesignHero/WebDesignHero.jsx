import React from 'react'
import { Container,Row,Col } from '../../global/theme/Theme';
import bubbles from "../../../images/purple-bubbles-hd.png";
import "./webDesignHero.css";

const WebDesignHero = () => {
  return (
    <Container className="webdesign-container">
        <Row>
            <Col>
            <img
              src={bubbles}
              width={"100%"}
              height={"auto"}
              style={{ objectFit: "cover" }}
              alt="Bubbles "
            ></img>
            </Col>
            <Col>
            hello
            </Col>
        </Row>
    </Container>
  )
}

export default WebDesignHero