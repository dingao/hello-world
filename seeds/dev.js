
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dev_stars').del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('dev_stars').insert({"name": "George Green", "age": 23, "story": "I am from Wellington....Or am I?  Come on... you think I'd tell you EVERYTHING about me all at once??", "image": "https://avatars1.githubusercontent.com/u/18493037?v=3&s=460"}),
      knex('dev_stars').insert({"name": "Guanzhou Zhao", "age": 27, "story": "I am from Luoyang. I know seventeen different types of kung fu.  I know 17 ways to kill a man with a single finger knuckle.  I also enjoy high tea.", "image": "https://avatars2.githubusercontent.com/u/19282953?v=3&s=460"}),
      knex('dev_stars').insert({"name": "Steve Sharp", "age": 29, "story": "I am from Zimbabwe", "image": "https://avatars2.githubusercontent.com/u/13898345?v=3&s=460"}),
      knex('dev_stars').insert({"name": "Lisa Seeto", "age": 25, "story": "I am from Australia. U Wot mate? You wanna fight about it?", "image": "https://avatars0.githubusercontent.com/u/20085843?v=3&s=460"}),
      knex('dev_stars').insert({"name": "Jock Dalby", "age": 30, "story": "I am from Northland. Don't pretend you know where that is, mate.", "image": "https://avatars2.githubusercontent.com/u/19864300?v=3&s=460"})
    ])
  })
}
