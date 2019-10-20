import React, { Component } from "react";
import { Container, Form, Button, Nav } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Container>
        <h1>Login</h1>
        <p>Faça login para entrar na área de membros!</p>
        <Form>
          <Form.Group controlId="formBasicEmail" on>
            <Form.Label>IDN</Form.Label>
            <Form.Control type="email" placeholder="Digite seu IDN" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar usuário" />
          </Form.Group>
          <Nav.Link className="active" href="/area_membro" style={{padding: "0"}}>
            <Button>
              Entrar
            </Button>
          </Nav.Link>
        </Form>
      </Container>
    );
  }
}

export default Login;
