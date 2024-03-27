const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { authMiddleware } = require('./middlewares/authMiddleware');

const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authMiddleware);

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

app.use(routes);

mongoose.connect(`mongodb://localhost:27017/course-book`)  //Change the name of the DB!!!
    .then(() => {
        console.log(`Connected to DB`);
        app.listen(port, () => console.log(`Application is listening on http://127.0.0.1:${port}...`));
        // mongoose.connection.on('disconnected', () => console.log(`Connection to DB lost!`));
    })
    .catch(err => console.log(`Cannot connect to DB - ${err}`));