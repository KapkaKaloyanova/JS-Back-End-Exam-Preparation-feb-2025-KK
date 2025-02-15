import { Router } from "express";

const routes = Router();

// express setup initial http server
routes.get('/', (req, res) => {
    res.send('It works');
})


export default routes;