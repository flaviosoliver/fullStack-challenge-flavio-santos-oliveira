const utils = require('../service/utils');
const coursesService = require('../service/coursesService');

const {
  C_200, C_404, C_500,
} = utils.statusHttp;


const getAllCourses = async (req, res) => {
  try {
    const courses = await coursesService.getAllCourses();
    return res
      .status(C_200)
      .send(courses);
  } catch (error) {
    console.error(error);
    return res
      .status(C_500)
      .json({ message: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await coursesService.getCourseById(id);
    if (course.code404) {
      return res
        .status(C_404)
        .send({ message: course.message });
    }
    return res
      .status(C_200)
      .send(course);
  } catch (error) {
    console.error(error);
    return res
      .status(C_500)
      .json({ message: error.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
}