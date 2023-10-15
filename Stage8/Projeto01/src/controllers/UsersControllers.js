const { hash, compare } = require('bcryptjs');
const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');

class UsersController {
  
    /**
     * Index - GET para listar varios registros
     * Show - GET para listar um registro especifico
     * Create - POST para criar um novo registro
     * Update - PUT para atualizar um registro
     * Delete - DELETE para deletar um registro
     */

    async create(req, res) {
        const { name, email, password } = req.body;

        const database = await sqliteConnection();

        const checkUserExists = await database.get(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        if (checkUserExists) {
            throw new AppError('Este e-mail já está sendo utilizado.');
        }

        const hashedPassword = await hash(password, 8);

        await database.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [
            name,
            email,
            hashedPassword
        ]);

        return res.status(201).json();

    }

    async update(req, res) {
        const { name, email, password, old_password } = req.body;
        const { id } = req.params;

        const database = await sqliteConnection();

        const user = await database.get(
            'SELECT * FROM users WHERE id = ?',
            [id]
        );

        if (!user) {
            throw new AppError('Usuário não encontrado.');
        }

        const checkUserExists = await database.get(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        if (checkUserExists && checkUserExists.id !== user.id) {
            throw new AppError('Este e-mail já está sendo utilizado.');
        }

        if (password && !old_password) {
            throw new AppError('Você precisa informar a senha antiga para atualizar a senha.');
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) {
                throw new AppError('Senha antiga incorreta.');
            }
        }

        const hashedPassword = await hash(password, 8);

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        await database.run(`UPDATE users SET name = ?, email = ?, password = ?, updated_at = DATETIME('now') WHERE id = ?`, [
            name,
            email,
            hashedPassword,           
            id
        ]);

        return res.status(200).json();
    }
}

module.exports = UsersController;