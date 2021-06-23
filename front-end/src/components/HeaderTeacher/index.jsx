import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';

export default function HeaderTeacher() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Gestão Escolas Públicas</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Página Inicial</Nav.Link>

          <NavDropdown title="Turmas" id="basic-nav-dropdown">
            <NavDropdown.Item href="/turmas/minhasturmas">Ver minhas Turmas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/anotacoes">Ver minhas Anotações</NavDropdown.Item>
            <NavDropdown.Item href="/anotacoes/cadastrar">Fazer Anotações</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Estudantes" id="basic-nav-dropdown">
            <NavDropdown.Item href="/estudantes">Ver Estudantes</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Buscar por..." className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
