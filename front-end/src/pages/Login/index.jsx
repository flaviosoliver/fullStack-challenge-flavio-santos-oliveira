import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { login, pathRedirectByProfile, decodedToken } from '../../services';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputValidation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordMinLength = 6;

    return emailRegex.test(email) && password.length >= passwordMinLength;
  };

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userLoginData = { email, password };
    const user = await login(userLoginData);

    localStorage.setItem('user', JSON.stringify(user));
    if (!user.token) {
      return alert('E-mail ou Senha incorretos. Tente novamente.');
    }
    const { token } = user;
    const { profile } = decodedToken(token);
    return history.push(pathRedirectByProfile(profile));
  };
  const handleRegister = () => {
    history.push('/register');
  };
  return (
    <main className="form-login">
      <div className="container">
        <Form>
          <Form.Row className="row">
            <Form.Group
              className="col-sm-12"
              controlId="formBasicEmail"
            >
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Informe seu e-mail"
                onChange={({ target: { value } }) => setEmail(value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row className="row">
            <Form.Group
              className="col-sm-12"
              controlId="formBasicPassword"
            >
              <Form.Label>
                Senha
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Insira sua senha"
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="row">
            <Button
              variant="primary"
              type="submit"
              onClick={(event) => handleSubmit(event)}
              disabled={!inputValidation()}
            >
              Entrar
            </Button>
          </Form.Row>

          <Form.Row className="row">
            <Button
              variant="primary"
              type="button"
              onClick={handleRegister}
            >
              Ainda não tenho cadastro
            </Button>
          </Form.Row>

        </Form>
      </div>
    </main>
  );
}
