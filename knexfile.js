require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///coffees',
  },
  production: {
    client: 'postgresql',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }

};
