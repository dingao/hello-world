var knex_config = require('./knexfile')

var knex = require('knex')(knex_config.development)

knex.select().from('dev_stars')
  .map(function (row) {
    console.log(row)
  })
// knex.schema.createTableIfNotExists('dev_stars', function (table) {
//   table.increments()
//   table.string('name')
//   table.integer('age')
//   table.text('story')
//   table.string('image')
//   table.timestamps()
// }).then(function () {
//   return knex('dev_stars').insert({
//     name: 'Guanzhou Zhao',
//     age: 27,
//     story: 'I am from Luoyang. I can play kung fu',
//     image: 'https://avatars2.githubusercontent.com/u/19282953?v=3&s=460'
//   })
// }).then(function () {
//   return knex.select().from('dev_stars')
// }).map(function (row) {
//   console.log(row)
// }).catch(function(e) {
//   console.error(e)
// })
