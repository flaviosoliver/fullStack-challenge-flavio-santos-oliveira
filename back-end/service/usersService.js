const jwt = require('jsonwebtoken');
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
  C404UserNotExist,
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
  console.log('profile função', profile);
  if (profile !== 'Diretoria'
  && profile !== 'Docente') {
    return { code400: true, message: C400ProfileRules };
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

const catchUser = (req) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, utils.secret);
  const { userId } = decoded.data;
  return userId;
};

const create = async (name, email, password, profile) => {
  const checkRequired = verifyRequired(name, email, password, profile);
  const checkProfileRule = validateProfile(profile);
  const key = utils.cryptPassword(password);
  if (checkRequired !== true) { return checkRequired; }
  const checkLength = verifyLength(name, password);
  if (await verifyCountEmail(email) === true) {
    return { code409: true, message: C409 };
  }
  if (checkLength !== true) { return checkLength; }
  if (checkProfileRule !== true) { return checkProfileRule; }
  const login = await User.create({ name, email, password: key, profile });
  const token = utils.generateToken(login.id, login.email, login.profile);
  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  if (!users) {
    return {
      code500: true, message: 'It was not possible to complete your request.',
    };
  }
  return users;
};

const getUserById = async (id) => {
  const result = await User.findOne({ where: { id } });
  if (!result) {
      return {
        code404: true, message: C404UserNotExist,
      };
  }
  return result;
};

const deleteUser = async (req) => {
  const userId = catchUser(req);
  await User.destroy({ where: { id: userId } });
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
    if (!user) {
      return {
        code404: true, message: C404UserNotExist,
      };
  }
  return user;
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
  deleteUser,
  getUserByEmail,
};
