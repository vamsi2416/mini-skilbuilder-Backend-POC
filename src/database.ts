import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pgadmin",
  database: "postgres",
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: true, // disable synchronize if you are using migrations
  migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
  cli: {
    migrationsDir: "src/migrations",
  },
};

export default config;
