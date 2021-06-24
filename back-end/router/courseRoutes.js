const express = require('express');

const router = express.Router();
const courseController = require('../controller/coursesController');

router.get('/course/all',
courseController.getAllCourses);

router.get('/course/:id',
courseController.getCourseById);

module.exports = router;