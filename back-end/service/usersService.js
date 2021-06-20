// const bcrypt = require('bcrypt-nodejs');
// const jwt = require('jsonwebtoken');
const utils = require('./utils');

const { User } = require('../models');

const minimumLength = 6;

const {
  C400Name,
  C400EmailValid,
  C400EmailRequired,
  C400PasswordLength,
  C400PasswordRequired,
  C400ProfileRequired,
  C400ProfileRules,
  C409,
} = utils.errorMessage;

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

const emailExistis = (email) => {
  if (email === '' || email === undefined) {
    return false;
  }
  return true;
};

const profileExistis = (profile) => {
  if (profile === '' || profile === undefined) {
    return false;
  }
  return true;
};

const nameLength = (name) => {
  if (name.length < minimumLength) {
      return false;
    }
    return true;
};

const nameExistis = (name) => {
  if (name === ''
  || name === undefined) {
    return false;
  }
  return true;
};

const passwordExistis = (password) => {
  if (password === ''
  || password === undefined) {
    return false;
  }
  return true;
};

const passwordLength = (password) => {
  if (password.length < minimumLength) {
      return false;
  }
  return true;
};

const validateProfile = (profile) => {
  if (profile !== 'Diretoria'
  || profile !== 'Docente'
  || profile !== 'Estudante') {
    return false;
  }
  return true;
};

const verifyCountEmail = async (email) => {
  const countEmail = await User.findOne({ where: { email } });
  if (countEmail) {
    return true;
  }
  return false;
};

const verifyRequired = (name, email, password, profile) => {
  if (!passwordExistis(password)) {
    return { code400: true, message: C400PasswordRequired };
  }
  if (!emailExistis(email)) {
    return { code400: true, message: C400EmailRequired };
  }
  if (!profileExistis(profile)) {
    return { code400: true, message: C400ProfileRequired };
  }
  if (!nameExistis(name)) {
    return { code400: true, message: C400Name };
  }
  if (!validateEmail(email)) {
    return { code400: true, message: C400EmailValid };
  }
  return true;
};

const verifyLength = (password, name) => {
  if (!passwordLength(password)) {
    return { code400: true, message: C400PasswordLength };
  }
  if (!nameLength(name)) {
    return { code400: true, message: C400Name };
  }
  return true;
};

const create = async (name, email, password, profile) => {
  const checkRequired = verifyRequired(name, email, password, profile);
  const key = utils.cryptPassword(password);
  if (checkRequired !== true) {
    return checkRequired;
  }
  const checkLength = verifyLength(name, password);
  if (await verifyCountEmail(email) === true) {
    return { code409: true, message: C409 };
  }
  if (checkLength !== true) {
    return checkLength;
  }
  if (validateProfile(profile) !== true) {
    return { code400: true, message: C400ProfileRules };
  }
  const login = await User.create({ name, email, password: key, profile });
  const token = utils.generateToken(login.id, login.email, login.key);
  return token;
};

module.exports = {
  create,
};
