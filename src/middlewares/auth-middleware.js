import jsonwebtoken from 'jsonwebtoken';

import { AUTH_COOKIE_NAME, JWT_SECRET } from "../config.js"

export const auth = (req, res, next) => {
    const token = req.cookies[AUTH_COOKIE_NAME];

    if (!token) { // check if guest
        return next();
    };

    try {
        const decodedToken = jsonwebtoken.verify(token, JWT_SECRET);

        req.user = decodedToken; // Attach user to request
        res.locals.user = decodedToken; // Attach user to handlebars context

    } catch (err) {
        res.clearCookie(AUTH_COOKIE_NAME);
        return res.redirect('/auth/login');
    }

    next();
};

export const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }

    next();
}