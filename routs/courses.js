const {Router} = require('express'); //var express = require('express');
const router = Router();            //var router = express.Router();

const Course = require('../models/course');//connect the "course.js" course creation model

// content download by link
router.get('/', async (req, res) => {// добавляем оператор async, т.к. испол. Promise в course.js



     //to retrieve data read from getAll()
    const courses = await Course.getAll();

    //template code output
    res.render('courses', {
        title:'Courses', // seo-title the tab
        isCourses: true, // active link to the page navbar.hbs
        courses  //object to display on the page
    });
})

module.exports = router;