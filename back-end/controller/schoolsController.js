const utils = require('../service/utils');
const schoolsService = require('../service/schoolsService');

const {
  C_200, C_404, C_500,
} = utils.statusHttp;


const getAllSchools = async (req, res) => {
  try {
    const users = await schoolsService.getAllSchools();
    return res
      .status(C_200)
      .send(users);
  } catch (error) {
    console.error(error);
    return res
      .status(C_500)
      .json({ message: error.message });
  }
};

const getSchoolById = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await schoolsService.getSchoolById(id);
    if (school.code404) {
      return res
        .status(C_404)
        .send({ message: school.message });
    }
    return res
      .status(C_200)
      .send(school);
  } catch (error) {
    console.error(error);
    return res
      .status(C_500)
      .json({ message: error.message });
  }
};

module.exports = {
  getAllSchools,
  getSchoolById,
}