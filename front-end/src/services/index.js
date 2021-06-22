import axios from 'axios';

const URL_BACK_END = 'http://localhost:3001';

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

export {
  login,
  emailAndPasswordValidation,
  searchUserByEmail,
  newUserRegister,
  pathRedirectByProfile,
};
