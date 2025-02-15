import express, { Router } from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js';

const app = express();

// Config handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

// Static middleware
app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }))
app.use(routes);

// Start express
app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'))
