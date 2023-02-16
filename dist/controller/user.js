"use strict"
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, "__esModule", { value: true })
const jsonwebtoken_1 = require("jsonwebtoken")
const config_1 = __importDefault(require("../config/config"))
const redis_1 = __importDefault(require("../config/redis"))
const users_1 = require("../entities/users")
exports.default = {
  REGISTER: async (req, res) => {
    const client = await (0, redis_1.default)()
    const { username, password } = req.body
    const existing = await config_1.default.getRepository(users_1.Users).findOne({
      where: { username, password },
    })
    if (existing) {
      res.json("Exist")
      return
    }
    const newUser = await config_1.default
      .createQueryBuilder()
      .insert()
      .into(users_1.Users)
      .values({ username, password })
      .returning(["id"])
      .execute()
    const refreshToken = await client?.get("refresh-token")
    if (!refreshToken) {
      await client?.setEx("refresh-token", 3600, (0, jsonwebtoken_1.sign)("1", "12345"))
    }
    res.json({
      bearer_token: (0, jsonwebtoken_1.sign)({ id: newUser.raw[0].id }, "12345", {
        expiresIn: 10000,
      }),
      refresh_token: refreshToken,
    })
  },
}
