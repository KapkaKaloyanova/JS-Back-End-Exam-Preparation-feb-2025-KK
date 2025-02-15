import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

// Setup handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './src');

// express config
app.get('/', (req, res) => { 
    console.log('Request');
    res.send('Home');
})

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'))
