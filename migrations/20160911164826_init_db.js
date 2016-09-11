
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('dev_stars', function (table) {
      table.increments()
      table.string('name')
      table.integer('age')
      table.text('story')
      table.string('image')
      table.timestamps()
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('dev_stars')
  ])
}
