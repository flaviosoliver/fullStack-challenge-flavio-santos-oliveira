const utils = require('./utils');

const { School, Course } = require('../models');

const {
  C404SchoolNotExist,
  C500,
} = utils.errorMessage;

const getAllSchools = async () => {
  const schools = await School.findAll();
  if (!schools) {
    return {
      code500: true, message: C500,
    };
  }
  return schools;
};

const getSchoolById = async (id) => {
  const school = await School.findOne({ where: { id } });
  if (!school) {
      return {
        code404: true, message: C404SchoolNotExist,
      };
  }
  return school;
};

const updateSchool = async (id, name, principal) => {
  const school = await School.update({ name, principal }, { where: { id } });
  return school;
};

const deleteSchool = async (id) => {
  await School.destroy({ where: { id } });
};

const getCountAllSchools = async () => {
  const schools = await School.findAndCountAll();
  if (!schools) {
    return {
      code500: true, message: C500,
    };
  }
  return schools;
};

const createSchool = async (name, principal) => {
  const school = await School.create({ name, principal });
  return school;
};

const getSchoolFullDetailsById = async (id) => {
  const school = await School.findOne({
    where: { id },
    include: [
      { model: Course, as: 'course' },
    ]
  });
  if (!school) {
      return {
        code404: true, message: C404SchoolNotExist,
      };
  }
  return school;
}

module.exports = {
  getAllSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
  getCountAllSchools,
  createSchool,
  getSchoolFullDetailsById,
}