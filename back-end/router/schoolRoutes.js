const express = require('express');

const router = express.Router();
const schoolController = require('../controller/schoolsController');

router.get('/school/all',
schoolController.getAllSchools);

router.get('/school/:id',
schoolController.getSchoolById);

module.exports = router;