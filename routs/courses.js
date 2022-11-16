const {Router} = require('express'); //var express = require('express');
const router = Router();            //var router = express.Router();

const Course = require('../models/course');//connect the "course.js" course creation model

// content download by link
router.get('/', async (req, res) => {


    //to retrieve data read from getAll()
    const courses = await Course.getAll();

    //template code output
    res.render('courses', {
        title: 'courses', // seo-title the tab
        isCourses: true, // active link to the page navbar.hbs
        courses  //object to display on the page
    });
})

//content 'course' page download by id
router.get('/:id', async (req, res) => {
    const course = await Course.getById(req.params.id);//the place where the identifier is stored
    res.render('course', {
        layout: 'empty',
        title: `Course ${course.title}`,//seo-title the tab
        course//object to display on the page
    })
})

module.exports = router;