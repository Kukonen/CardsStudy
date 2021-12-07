const Route = require('express');
const route = new Route();
const ProfileController = require('../Controllers/profile.controller');

route.post('/changename', ProfileController.changeName);
route.post('/changepassword', ProfileController.changePassword);
route.post('/changeavatar', ProfileController.changeAvatar)

export default route;
