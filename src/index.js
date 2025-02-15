import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

// Setup handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './src');

// Static middleware
app.use('/static', express.static('src/public'));


// express setup initial http server
app.get('/', (req, res) => { 
    res.send('It works');
})

app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'))
