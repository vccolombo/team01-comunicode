import React, { Component, Input } from "react";
import { Container, Form, Button } from "react-bootstrap";

class AreaMembro extends Component {
  render() {
    return (
      <Container>
        <h5>Olá Víctor!</h5>
        <br />
        <Form>
          <Form.Group>
            <Form.Label>
              Insira aqui o arquivo .csv para cadastrar os novos membros da planilha:
            </Form.Label>
            <br />
            <input type="file" />
            <br />
            <br />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    );
  }
}

export default AreaMembro;
