import path from "path"
import { DataSource } from "typeorm"

export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "boburbek0119",
  database: "typeorm",
  entities: [path.join(__dirname, "..", "entities", "*.{ts,js}")],
  migrations: [path.join(__dirname, "..", "migrations", "*.{ts,js}")],
  logging: true,
  synchronize: false,
})
