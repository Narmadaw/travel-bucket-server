/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex){
    return knex.schema.createTable('users',(table) =>{
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('user_avatar').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('users')
}