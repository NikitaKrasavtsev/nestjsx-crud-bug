module.exports = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'crud_serialization_bug_test',
  entities: [
    __dirname + '/**/*.entity.js'
  ],
  migrations: [
    'dist/migrations/*.js'
  ],
  cli: {
    migrationsDir: 'src/migrations',
  },
  logging: true,
  synchronize: true,
};
