const bcrypt = require('bcrypt-nodejs');
const utils = require('./utils');
const { User } = require('../models');

const {
  C400EmailRequired,
  C400PasswordRequired,
  C400EmailNotAllow,
  C400PasswordNotAllow,
  C400InvalidFields,
  C400EmailValid,
} = utils.errorMessage;

const passwordAllow = (password) => {
  if (password === '') {
    return false;
  }
  return true;
};

const emailAllow = (email) => {
  if (email === '') {
    return false;
  }
  return true;
};

const fieldsAllow = (email, password) => {
  if (!passwordAllow(password)) {
    return { code400: true, message: C400PasswordNotAllow };
  }
  if (!emailAllow(email)) {
    return { code400: true, message: C400EmailNotAllow };
  }
  return true;
};

const emailExistis = (email) => {
  if (email === undefined) {
    return false;
  }
  return true;
};

const passwordExistis = (password) => {
  if (password === undefined) {
    return false;
  }
  return true;
};

const fieldsExistis = (email, password) => {
  if (!passwordExistis(password)) {
    return { code400: true, message: C400PasswordRequired };
  }
  if (!emailExistis(email)) {
    return { code400: true, message: C400EmailRequired };
  }
  return true;
};

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

const emailCheck = async (email) => {
  const user = await User.findAndCountAll({ where: { email } });
  if (user.count === 0) {
    return false;
  }
  return true;
};

const passwordCheck = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  const passwordValidate = bcrypt.compareSync(password, user.password);
  if (!passwordValidate) {
    return false;
  }
  return true;
};

const registerUser = async (email, password) => {
  const checkExistis = fieldsExistis(email, password);
  if (checkExistis !== true) { return checkExistis; }
  const checkAllow = fieldsAllow(email, password);
  if (checkAllow !== true) { return checkAllow; }
  const checkEmail = validateEmail(email);
  if (checkEmail !== true) {
    return { code400: true, message: C400EmailValid };
  }
  let user = await emailCheck(email);
  if (user !== true) {
    return { code400: true, message: C400InvalidFields };
  }
  const userPassword = await passwordCheck(email, password);
  if (userPassword !== true) {
    return { code400: true, message: C400InvalidFields };
  }
  user = await User.findOne({ where: { email } });
  const token = utils.generateToken(user.id, user.email, user.password);
  return token;
};

module.exports = {
  registerUser,
};