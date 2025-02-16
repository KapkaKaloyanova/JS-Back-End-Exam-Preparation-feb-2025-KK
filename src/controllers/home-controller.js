import { Router } from "express";

const homeController = Router();

// express setup initial http server
homeController.get('/', (req, res) => {
    res.render('home', {pageTitle: 'TechStore | Home'});
})

export default homeController;