const METHOD_POST = 'POST';
const METHOD_GET = 'GET';
// const METHOD_PUT = 'PUT';
// const METHOD_DELETE = 'DELETE';
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

// const shoolsFetch = async ()

export {
  loginFetch,
};
