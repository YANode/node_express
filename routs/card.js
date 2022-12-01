//get the router object from the library
const {Router} = require('express');
const router = Router();

//connect the Card model, Course model
const Card = require('../models/card')
const Course = require('../models/course');

//sending data to the server
router.post('/add', async (req, res) => {
    const course = await Course.getById(req.body.id);
    await Card.add(course);
    res.redirect('/card')//redirecting the response
})

//add a route to the Router object
router.get('/', async (req, res) => {
    const card = await Card.fetch();
    res.render('card', {
        title: 'Cart',
        isCard: true,
        courses: card.courses,
        price: card.price
    })

})

//export the router object
module.exports = router;

