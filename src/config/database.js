require('dotenv').config();

module.exports = {
  development: {
      username: process.env.DB_USERNAME_DEV,
      password: process.env.DB_PASSWORD_DEV,
      database: process.env.DB_DATABASE_DEV,
      host: process.env.DB_HOST_DEV,
      port: process.env.DB_PORT_DEV,
      dialect: 'postgres',
      define: {
        timesStamps: true,
        freezeTableName: true,
        underscored: true,
        underscored_all: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      } 
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_DATABASE_TEST,
    host: process.env.DB_HOST_TEST,
    port: process.env.DB_PORT_TEST,
    dialect: 'postgres',
    define: {
      timesStamps: true,
      freezeTableName: true,
      underscored: true,
      underscored_all: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    } 
  },
  production: {
    username: process.env.DB_USERNAME_PROD,
    password: process.env.DB_PASSWORD_PROD,
    database: process.env.DB_DATABASE_PROD,
    host: process.env.DB_HOST_PROD,
    port: process.env.DB_PORT_PROD,
    dialect: 'postgres',
    define: {
      timesStamps: true,
      freezeTableName: true,
      underscored: true,
      underscored_all: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    } 
  }
}; 