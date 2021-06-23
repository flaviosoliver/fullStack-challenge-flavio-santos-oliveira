const jwt = require('jsonwebtoken');
const { User } = require('../models');
const utils = require('../service/utils');

const { secret } = utils;

const {
  C_401,
} = utils.statusHttp;

const {
  C401TokenInvalid,
  C401TokenNotFound,
  C404UserNotExist,
} = utils.errorMessage;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(C_401).json({ message: C401TokenNotFound });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const { email } = decoded.data;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(C_404).json({ message: C404UserNotExist });
    }
    next();
  } catch (error) {
    return res.status(C_401).json({ message: C401TokenInvalid });
  }
};

module.exports = validateToken;