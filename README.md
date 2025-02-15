# JS-Back-End-Exam-Preparation-feb-2025-KK
JS Back-End Exam preparation february 2025

## Cheat Sheet

1. Initialize project
 - [x] `npm init --yes`
 - [x] Change module system
 - [x] Nodemon setup `npm i -D nodemon`
 - [x] Add start/dev scripts
 - [x] Add startup file in src folder
 - [x] Setup debugging `run and debug/add configuration with nodemon`
 2. Express
 - [x] Install express `npm i express` 
 - [x] Setup initial http server (import/app instance/app.get/app.listen(3000))
 - [x] Add public resources (images, css, ...) !!!
 - [x] Add static middleware (app.use(express.static))
 - [x] Add body parser (app.use(express.urlencoded({extended:false})))
 - [x] Add routes modular router (app.use(routs); - add routes.js)
 - [x] Add home controller
3. Handlebars
 - [x] Install `npm i express-handlebars`
 - [x] Config handlebars as view engine (app.set('view engine', ...))
 - [x] Change view directory (app.set('views', ...))
 - [x] Add template resources to folder (initial views)
 - [x] Add home view
 - [x] Add layout
 - [x] Add partials dir
 4. Database
 - [x] Install `npm i mongoose`
 - [x] Setup db connection (try/catch)
 - [x] Add user model/schema
 5. Register
 - [x] Fix navigation links
 - [x] Add register view
 - [x] Add authController (authController.get/register)
 - [x] Add register page
 - [x] Fix register form
 - [x] Add post register action (authController.post/register)
 - [x] Add authService with register
 - [x] Install bcrypt `npm i bcrypt`
 - [x] Hash password
 - [x] Check confirmPassword (in authService)
 - [x] Check if user exists (in authService )
 6. Login
 - [x] Add cookie-parser `npm i cookie-parser`
 - [x] Add jsonwebtoken `npm i jsonwebtoken`
 - [x] Add cookie-parser middleware
 - [x] Add login view
 - [x] Add get login action (authController.get/login)
 - [x] Fix login form
 - [x] Add post login action (authController.post/login)
 - [x] Add login to authService
 - [x] Validate user
 - [x] Validate password
 - [x] Generate token on success login
 - [x] Return token as cookie
 - [x] Auto login on register 
 7. Logout
 - [x] Add get logout action (authController/get/logout)
 - [ ] 
 8. Authentication and Authorization
 - [ ] 
 9. Navigation
  - [ ] 
 10. Error handling
  - [ ] 