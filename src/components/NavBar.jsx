import React from "react";
import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite';
import { Context } from "..";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav.Link style={{color: '#fff'}} to={SHOP_ROUTE}>Мой магазин</Nav.Link>
          {user.isAuth ?
          <Nav className="ml-auto" style={{color: '#fff'}}>
            <Button 
              variant="outline-light"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button 
              variant="outline-light"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Выйти
            </Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: '#fff'}}>
            <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;