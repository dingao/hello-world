// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './mydb.sqlite3'
    },
    pool: {
      min: 1,
      max: 7
    },
    acquireConnectionTimeout: 1000,
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      // database: 'my_db',
      // user:     'username',
      // password: 'password'
      filename: './mydb.sqlite3'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
