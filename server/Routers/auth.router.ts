const Route = require('express');
const route = new Route();
const AuthController = require('../Controllers/auth.controller');

route.post('/register', AuthController.register);
route.post('/login', AuthController.login);
route.get('/logout', AuthController.logout)

export default route;
