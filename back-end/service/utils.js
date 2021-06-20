const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const SECONDS = 60;
const MULTIPLIER = 3000;
const secret = process.env.SECRET || 'developing';

const statusHttp = {
  C_200: 200,
  C_201: 201,
  C_204: 204,
  C_400: 400,
  C_401: 401,
  C_403: 403,
  C_404: 404,
  C_409: 409,
  C_422: 422,
  C_500: 500,
};

const errorMessage = {
  C400Name: '"Name" length must be at least 6 characters long',
  C400EmailValid: '"email" must be a valid email',
  C400EmailRequired: '"email" is required',
  C400PasswordLength: '"password" length must be 6 characters long',
  C400PasswordRequired: '"password" is required',
  C400ProfileRequired: '"profile" is required',
  C400ProfileRules: '"profile" must be a valid profile',
  C409: 'User already registered',
  C400EmailNotAllow: '"email" is not allowed to be empty',
  C400PasswordNotAllow: '"password" is not allowed to be empty',
  C400InvalidFields: 'Invalid fields, "email" or "password" incorrect',
  C401TokenNotFound: 'Token not found',
  C401TokenInvalid: 'Expired or invalid token',
  C404UserNotExist: 'User does not exist',
  C400NameRequired: '"name" is required',
  C400TitleRequired: '"title" is required',
  C400ContentRequired: '"content" is required',
  C400CategoryIdRequired: '"categoryIds" is required',
  C400CategoryIdNotFound: '"categoryIds" not found',
  C404PostNotExist: 'Post does not exist',
  C400CategoriesNotEdited: 'Categories cannot be edited',
  C401UserNotAuth: 'Unauthorized user',
};

const generateToken = (userId, email, password) => {
  const jwtConfig = {
    expiresIn: SECONDS * MULTIPLIER,
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { userId, email, password } }, secret, jwtConfig);
  return token;
};

const cryptPassword = (password) => {
  let key = password;
  const salt = bcrypt.genSaltSync(5);
  key = bcrypt.hashSync(key, salt);
  return key;
};

module.exports = {
  statusHttp,
  errorMessage,
  generateToken,
  cryptPassword,
  secret,
};