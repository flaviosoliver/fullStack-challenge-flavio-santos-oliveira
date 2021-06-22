import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import {
  searchUserByEmail,
  emailAndPasswordValidation,
  newUserRegister,
  pathRedirectByProfile,
} from '../../services';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('');
  const [userRegisterValid, setUserRegisterValid] = useState(true);

  const registerValid = () => {
    const result = emailAndPasswordValidation(name, email, password);
    return result;
  };

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUserData = {
      name, email, password, profile,
    };
    const userExist = await searchUserByEmail(email);
    let user = '';
    if (userExist.message === 'User exists') setUserRegisterValid(false);
    if (userExist.message === 'User does not exist') {
      user = await newUserRegister(newUserData);
      localStorage.setItem('user', JSON.stringify(user));
      history.push(pathRedirectByProfile(profile));
    }
  };
  return (
    <main>
      <Form>
        <Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu e-mail"
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </Form.Group>

          <Form.Group
            controlId="formGridPassword"
          >
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha. Mínimo de 06 caracteres."
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            placeholder="Digite seu nome completo"
            onChange={({ target: { value } }) => setName(value)}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="formGridProfile">
            <Form.Label>Perfil</Form.Label>
            <Form.Control
              as="select"
              defaultInputValue="Diretoria"
              onChange={({ target: { value } }) => setProfile(value)}
            >
              <option value="Diretoria">Perfil</option>
              <option>Diretoria</option>
              <option>Docente</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Text className="text-muted" hidden={userRegisterValid}>
          E-mail já está em uso por outro usuário.
        </Form.Text>
        <Button
          variant="primary"
          type="button"
          onClick={(event) => handleSubmit(event)}
          disabled={!registerValid()}
        >
          Salvar e Entrar
        </Button>
      </Form>
    </main>
  );
}
