require('express-async-errors');

const AppError = require('./utils/AppError');

const express = require('express');

const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);

app.use((err, request, response, next) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});