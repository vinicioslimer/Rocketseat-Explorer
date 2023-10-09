const { Router } = require('express');

const usersRoutes = Router();

function myMiddleware(request, response, next) {
    console.log('Executando middleware');
    next();
}

const UsersController = require('../controllers/UsersControllers');

const usersController = new UsersController();

usersRoutes.post('/', myMiddleware, usersController.create);

module.exports = usersRoutes;