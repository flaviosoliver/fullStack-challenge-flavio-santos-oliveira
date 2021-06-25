const utils = require('./utils');

const { Course } = require('../models');

const {
  C404CourseNotExist,
  C500,
} = utils.errorMessage;

const getAllCourses = async () => {
  const courses = await Course.findAll();
  if (!courses) {
    return {
      code500: true, message: C500,
    };
  }
  return courses;
};

const getCourseById = async (id) => {
  const course = await Course.findOne({ where: { id } });
  if (!course) {
      return {
        code404: true, message: C404CourseNotExist,
      };
  }
  return course;
};

module.exports = {
  getAllCourses,
  getCourseById,
}