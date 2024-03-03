const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path')

const router = require('./router');
const { authentication } = require('./middlewares/authMiddleware');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views')); // where to look for views - default is views

app.use('/static', express.static(path.join(__dirname, './public'))); // app.use('./other folder', express.static('./public')); 
// if you want other folder for public materials

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(router);

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1/course-book') //name of databse

mongoose.connection.on('connected',()=> console.log('DB is connected'))
mongoose.connection.on('disconnected',()=> console.log('DB is disconnected'))
mongoose.connection.on('error',(err)=> console.log('err'))

// app.get('/', (req, res) => res.send('hello'));

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));