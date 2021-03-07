import path from "path";
import { ConnectionOptions } from "typeorm";
import { Artist } from "./entities/Artist";
import { Song } from "./entities/Song";

export const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Artist, Song],
  migrations: [path.join(__dirname, "./migrations/*")],
}