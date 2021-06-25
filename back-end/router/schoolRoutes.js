const express = require('express');

const router = express.Router();
const schoolController = require('../controller/schoolsController');

const middleware = require('../middleware');

const { validateToken } = middleware;

router.get('/school/all',
validateToken,
schoolController.getAllSchools);

router.get('/school/id/:id',
validateToken,
schoolController.getSchoolById);

router.put('/school/id/:id',
validateToken,
schoolController.updateSchool);

router.delete('/school/id/:id',
validateToken,
schoolController.deleteSchool);

router.get('/school/count',
validateToken,
schoolController.getCountAllSchools);

router.post('/school/new',
validateToken,
schoolController.createSchool);

router.get('/school/full/:id',
validateToken,
schoolController.getSchoolFullDetailsById);

module.exports = router;