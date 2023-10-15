const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers');

async function migrationsRun() {
    const schemas = [
        createUsers,
    ].join('');

    sqliteConnection()
    .then(async db => {
        await db.exec(schemas);
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = migrationsRun;
