const AppError = require('../utils/AppError');

class UsersController {
  
    /**
     * Index - GET para listar varios registros
     * Show - GET para listar um registro especifico
     * Create - POST para criar um novo registro
     * Update - PUT para atualizar um registro
     * Delete - DELETE para deletar um registro
     */

    create(req, res) {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new AppError('Missing parameters', 400);
        }

        res.status(201).json({ name, email, password })
    }
}

module.exports = UsersController;