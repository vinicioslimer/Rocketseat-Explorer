
exports.up = knex => knex.schema.createTable('tags', table => {

    table.increments('id');
    table.text('name').notNullable();    
    table.integer('note_id')
        .references('notes.id')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE'); 
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

});

exports.down = knex => knex.schema.dropTable('tags');