const express = require('express');

const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/configExpress');
const routes = require('./routes');

const app = express();
const port = 3300;

configHandlebars(app);
configExpress(app);

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
