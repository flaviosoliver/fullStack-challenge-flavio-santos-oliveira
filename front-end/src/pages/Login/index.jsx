import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { loginFetch } from '../../services';
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
    const user = await loginFetch(userLoginData);

    localStorage.setItem('user', JSON.stringify(user));
    console.log('submit');
    history.push('/home');
  };
  const handleRegister = () => {
    history.push('/register');
  };
  return (
    <main>
      <div className='container-login'>
        <Form className='form-login'>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type='email'
              placeholder='Informe seu e-mail'
              onChange={ ({ target: { value } }) => setEmail(value) } />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>
              Senha
            </Form.Label>
            <Form.Control
              type='password'
              placeholder='Insira sua senha'
              onChange={ ({ target: { value } }) => setPassword(value) } />
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
            onClick={ (event) => handleSubmit(event) }
            disabled={ !inputValidation() }
            >
            Entrar
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={ handleRegister }
          >
            Ainda não tenho cadastro
          </Button>
        </Form>
      </div>
    </main>
  );
}
