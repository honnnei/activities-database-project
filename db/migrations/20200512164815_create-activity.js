exports.up = function(knex) {
    return knex.schema.createTable('activity',function (table){ 
        table.increments('id').primary().index();
        table.timestamps(true, true);
        table.string('title', 255).notNullable();
        table.string('type', 255).notNullable();
        table.string('location', 255).notNullable();
        table.float('price').notNullable();
        table.float('time_needed').notNullable();
        table.float('commute_time').notNullable();
        table.string('description').notNullable();
    });
  };
  
  
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('activity');
};