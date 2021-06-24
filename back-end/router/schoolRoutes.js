const express = require('express');

const router = express.Router();
const schoolController = require('../controller/schoolsController');

router.get('/school/all',
schoolController.getAllSchools);

router.get('/school/:id',
schoolController.getSchoolById);

router.put('/school/:id',
schoolController.updateSchool);

// router.delete('/school/:id',
// schoolController.deleteSchool);

module.exports = router;