import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

class Contato extends Component {
  render() {
    return (
      <Container>
        <h1>Contato</h1>
        <p>Entre em contato conosco!</p>
        <Form>
          <Form.Group controlId="formGroupName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />
          </Form.Group>
          <Form.Group controlId="formGroupMessage">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Digite sua mensagem aqui :)"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Contato;
