import { Router } from "express";
import authService from "../services/auth-service.js";


const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', (req, res) => {
    const userData = req.body;

    authService.register(userData);

    res.redirect('/auth/login');
});

authController.get('/login', (req, res) => {
    res.render('auth/login');
});

authController.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log(email);
    console.log(password);

    res.redirect('/');
})

export default authController;