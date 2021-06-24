const utils = require('../service/utils');
const schoolsService = require('../service/schoolsService');

const {
  C_200, C_201, C_404, C_500,
} = utils.statusHttp;

const {
  C201School,
} = utils.successMessage;


const getAllSchools = async (req, res) => {
  try {
    const schools = await schoolsService.getAllSchools();
    return res.status(C_200).send(schools);
  } catch (error) {
    console.error(error);
    return res.status(C_500).json({ message: error.message });
  }
};

const getSchoolById = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await schoolsService.getSchoolById(id);
    if (school.code404) {
      return res.status(C_404).send({ message: school.message });
    }
    return res.status(C_200).send(school);
  } catch (error) {
    console.error(error);
    return res.status(C_500).json({ message: error.message });
  }
};

const updateSchool = async (req, res) => {
  try {
    const { name, principal } = req.body;
    const { id } = req.params;
    const school = await schoolsService.updateSchool(id, name, principal);
    if (school.code404) {
      return res.status(C_404).send({ message: school.message });
    }
    return res.status(C_201).send(C201School);
  } catch (error) {
    console.error(error);
    return res.status(C_500).json({ message: error.message });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    await schoolsService.deleteSchool(id);
    return res.status(C_204).send();
  } catch (error) {
    console.error(error);
    return res.status(C_500).json({ message: error.message });
  }
};

const getCountAllSchools = async (req, res) => {
  try {
    const schools = await schoolsService.getCountAllSchools();
    return res.status(C_200).send(schools);
  } catch (error) {
    console.error(error);
    return res.status(C_500).json({ message: error.message });
  }
};

const createSchool = async (req, res) => {
  try {
    const { name, principal } = req.body;
    const school = await schoolsService.createSchool(name, principal);
    return res.status(C_201).send({ school });
  } catch (error) {
    console.error(error);
    return res.status(C_500).json({ message: error.message });
  }
};

module.exports = {
  getAllSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
  getCountAllSchools,
  createSchool,
}