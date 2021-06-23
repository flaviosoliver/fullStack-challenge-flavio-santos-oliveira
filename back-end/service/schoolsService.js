const utils = require('./utils');

const { School } = require('../models');

const {
  C404UserNotExist,
  C500,
} = utils.errorMessage;

const getAllSchools = async () => {
  const users = await School.findAll();
  if (!users) {
    return {
      code500: true, message: C500,
    };
  }
  return users;
};

const getSchoolById = async (id) => {
  const school = await School.findOne({ where: { id } });
  if (!school) {
      return {
        code404: true, message: C404UserNotExist,
      };
  }
  return school;
};

module.exports = {
  getAllSchools,
  getSchoolById,
}