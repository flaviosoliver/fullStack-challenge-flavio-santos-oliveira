import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Gestão Escolas Públicas</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Página Inicial</Nav.Link>
          <Nav.Link href="/docentes">Docentes</Nav.Link>
          <NavDropdown title="Turmas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Ver Turmas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Cadastrar Nova Turma</NavDropdown.Item>
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
