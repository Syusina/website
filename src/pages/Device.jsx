import React from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import star from '../assets/star.png';

const Device = () => {
  const device = {id: 1, name: 'Холодильник1', rating: 5, price: 50000, img: 'https://kitchen-planet.ru/wp-content/uploads/2020/06/k15.jpg'};
  const description = [
    {id: 1, title: 'Оперативная память', description: '5 гб'},
    {id: 2, title: 'Камера', description: '12 мп'},
    {id: 3, title: 'Процессор', description: 'Пентиум 3'},
    {id: 4, title: 'Кол-во ядер', description: '2'},
    {id: 5, title: 'Фккумулятор', description: '4800'},
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column">
            <h2>{device.name}</h2>
            <div 
              className="d-flex justify-content-center align-items-center"
              style={{background: `url(${star}) no-repeat center center`, width:240, height:240, backgroundSize:'cover', fontSize:64}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{width:300, height:300, fontSize:32, border:'5px solid lightgray'}}
          >
            <h3>от {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
          )}
      </Row>
    </Container>
  );
};

export default Device;