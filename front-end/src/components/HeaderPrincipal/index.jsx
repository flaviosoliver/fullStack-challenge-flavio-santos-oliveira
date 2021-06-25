import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';

export default function HeaderPrincipal() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Gestão Escolas Públicas</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home/diretoria">Página Inicial</Nav.Link>

          <NavDropdown title="Escolas" id="basic-nav-dropdown">
            <NavDropdown.Item href="diretoria/escolas">Ver Escolas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/escolas/cadastrar">Cadastrar Escola</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Turmas" id="basic-nav-dropdown">
            <NavDropdown.Item href="/turmas">Ver Turmas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/turmas/cadastrar">Cadastrar Turma</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Docentes" id="basic-nav-dropdown">
            <NavDropdown.Item href="/docentes">Ver Docentes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/docentes">Cadastrar Docente</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Estudantes" id="basic-nav-dropdown">
            <NavDropdown.Item href="/estudantes">Ver Estudantes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/estudantes/cadastrar">Cadastrar Estudante</NavDropdown.Item>
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
