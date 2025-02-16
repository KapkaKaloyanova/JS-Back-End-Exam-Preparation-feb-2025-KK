import express, { Router } from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import routes from './routes.js';
import { auth } from './middlewares/auth-middleware.js';

const app = express();

// Db setup
try {
    // TODO: change db name
    const uri = 'mongodb://localhost:27017/techStore';
    await mongoose.connect(uri)
    console.log('DB connected!');
} catch (err) {
    console.error('Cannot connect to DB!');
    console.log(err.message);

}

// Config handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        // allowProtoMethodsByDefault:true,
    },
    helpers: {
        setTitle(title){
            this.pageTitle = title;
            // return '';
        }
    }

}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

// Express setup 
app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);

// Start express
app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'))
