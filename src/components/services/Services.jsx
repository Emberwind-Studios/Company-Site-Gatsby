import React from 'react'
import { Container, Row, Col } from '../theme/Theme'
import styled from "styled-components";

const Card = styled.div`
width:200px;
height:200px;
border:1px solid black;
padding:5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius:5px;

`

const Services = () => {
  return (
    <Container style={{border:'1px solid black'}}>
        <Row>
            <Col><Card></Card></Col>
            <Col>hello</Col>
            <Col>hello</Col>
        </Row>
    </Container>
  )
}

export default Services