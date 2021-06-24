import axios from 'axios';
import jwt from 'jsonwebtoken';

require('dotenv');

const URL_BACK_END = 'http://localhost:3001';

const invalidToken = 'Token inválido ou não encontrado';

const secret = process.env.SECRET || 'developing';

const userLogged = JSON.parse(localStorage.getItem('user'));
const { token } = userLogged === null ? '' : userLogged;

const config = {
  headers: {
    'Content-Type': 'application/json',
    authorization: token,
  },
};

const login = async (userLogin) => {
  const { email, password } = userLogin;
  const result = await axios.post(`${URL_BACK_END}/login`, {
    email,
    password,
  })
    .then((response) => response.data)
    .catch((error) => {
      if (error) return { error: 'Usuário ou senha inválido' };
    });
  return result;
};

const emailAndPasswordValidation = (name, email, password) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordMinLength = 6;
  const verifyName = !name;

  return emailRegex.test(email)
    && password.length >= passwordMinLength
    && !verifyName;
};

const pathRedirectByProfile = (profile) => {
  if (profile === 'Diretoria') return '/home/diretoria';
  if (profile === 'Docente') return '/home/docente';
};

const searchUserByEmail = async (userEmail) => {
  let result;
  await fetch(`${URL_BACK_END}/user/search`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: userEmail,
    }),
  }).then((response) => response.json())
    .then((responseJSON) => {
      result = responseJSON;
    });
  return result;
};

const newUserRegister = async (newUserData) => {
  const {
    name, email, password, profile,
  } = newUserData;
  const result = await axios.post(`${URL_BACK_END}/user/register`, {
    name,
    email,
    password,
    profile,
  })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
  return result;
};

const decodedToken = (userToken) => {
  const decoded = jwt.verify(userToken, secret);
  const { userId, email, profile } = decoded.data;
  return { userId, email, profile };
};

const schoolList = async () => {
  const schools = await axios.get(`${URL_BACK_END}/school/all`, config).then((response) => response.data)
    .catch((error) => {
      if (error) return { error: invalidToken };
    });
  return schools;
};

export {
  login,
  emailAndPasswordValidation,
  searchUserByEmail,
  newUserRegister,
  pathRedirectByProfile,
  decodedToken,
  schoolList,
};
