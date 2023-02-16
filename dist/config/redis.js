"use strict"
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, "__esModule", { value: true })
const redis_1 = require("redis")
const dotenv_1 = __importDefault(require("dotenv"))
dotenv_1.default.config()
exports.default = async () => {
  try {
    const client = (0, redis_1.createClient)({
      url: String(process.env.REDIS_URL ?? "redis://127.0.0.1:6379"),
    })
    client.on("error", (err) => console.log(err))
    await client.connect()
    console.log("Connected")
    return client
  } catch (err) {
    console.log(err)
  }
}
