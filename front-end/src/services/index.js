const METHOD_POST = 'POST';
// const METHOD_PUT = 'PUT';
const CONTENT_TYPE = 'application/json';
const URL_USER_LOGIN = 'http://localhost:3001/login';

const loginFetch = async (userLogin) => {
  const { email, password } = userLogin;
  let user;
  await fetch(URL_USER_LOGIN, {
    method: METHOD_POST,
    headers: {
      'Content-type': CONTENT_TYPE,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((response) => response.json())
    .then((responseJSON) => {
      user = responseJSON;
    });
  return user;
};

export {
  loginFetch,
};
