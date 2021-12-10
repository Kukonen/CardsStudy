const Route = require('express');
const route = new Route();
const ProfileController = require('../Controllers/profile.controller');

route.post('/changename', ProfileController.changeName);
route.post('/changepassword', ProfileController.changePassword);
route.get('/changepassword/:id', ProfileController.changePasswordCheck);
route.post('/changeavatar', ProfileController.changeAvatar)
route.get('/getuserdata', ProfileController.getUserData)

export default route;
