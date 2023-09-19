import React, { useState }  from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRAION_ROUTE } from "../utils/consts";
import { registration, login } from "../http/userAPI";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE  ? true : false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
          data = await login(email, password);
          console.log(data);
      } else {
          data = await registration(email, password);
          console.log(data);
      }
  } catch (e) {
      alert(e)
  }
};

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control 
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control 
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Form.Group className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ?
              <div>
                Нет аккаунта? <NavLink to={REGISTRAION_ROUTE}>Регистрация</NavLink>
              </div>
            : 
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
              </div>
            }
            <Button 
              variant="outline-success"
              onClick={click}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;