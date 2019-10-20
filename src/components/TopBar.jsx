import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button, Image, Container } from "react-bootstrap";
import logo from "../assets/LogoOp.png";

class TopBar extends Component {
  render() {
    return (
      <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <Image src={logo} style={{height:"36px", width:"95px"}}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="Quem somos?" id="basic-nav-dropdown" style={{margin:"14px"}}>
              <NavDropdown.Item href="/conheca">Conheça</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/times">Times</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/atividades">Atividades Realizadas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/impacto">Impacto Social</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Transparência" id="basic-nav-dropdown" style={{margin:"14px"}}>
              <NavDropdown.Item href="/relatorios">Relatórios de desempenho</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/prestacao">Prestação de contas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Chega mais!" id="basic-nav-dropdown" style={{margin:"14px"}}>
              <NavDropdown.Item href="/contato">Contato</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/seja_membro">Seja membro</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{margin:"14px"}} href="#link">Área do membro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    );
  }
}

export default TopBar;
