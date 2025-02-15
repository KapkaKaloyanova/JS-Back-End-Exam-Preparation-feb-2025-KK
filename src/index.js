import express from 'express';


const app = express();

// express config
app.get('/', (req, res) => { 
    console.log('Request');
    res.send('Home');
})

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'))
