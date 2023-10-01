import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import styles from "./styles.module.css"

const Shop = () => {
  
  const names = [
    {
    name: 'pickup',
    index: 1
  },

    {name: 'courier',
    index: 2
  }];
  let serverName = 'courier';
  
  const change = (e) => {
    console.log(e.target)
    serverName = e.target.value;
  }

  return (
    <Container>
    {names.map(({name, index}) => 
      <div className={styles.container}>
        <input
          key={index}
          type='radio'
          name="delivery"
          value={name}
          checked={serverName === name}
          onChange={change}
        />
        <label>{name}</label>
      </div>
    )}

      <Row className="mt-2">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
