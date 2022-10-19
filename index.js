const express = require('express');
const path = require ('path');
const app = express();
const exphbs = require('express-handlebars'); //https://github.com/express-handlebars/express-handlebars
const PORT = process.env.PORT || 3000;


const hbs = exphbs.create ({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set ('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res)=>{
   res.render('index', {
       title:"Main page",
       isMain: true
   });
})

app.get('/add', (req, res)=> {
    res.render('add', {
        title:'Add new course',
        isAdd: true
    });
})

app.get('/courses', (req, res) => {
    res.render('courses', {
        title:'Courses',
        isCourses: true
    });
})


app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})