const Route = require('express');
const route = new Route();
const CardsController = require('../Controllers/cards.controller');

route.post('/savecard', CardsController.saveCard);

export default route;
