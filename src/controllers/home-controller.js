import { Router } from "express";

const homeController = Router();

// express setup initial http server
homeController.get('/', (req, res) => {
    res.render('home');
})

export default homeController;