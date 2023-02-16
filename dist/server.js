"use strict"
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, "__esModule", { value: true })
const express_1 = __importDefault(require("express"))
const config_1 = __importDefault(require("./config/config"))
const routes_1 = __importDefault(require("./routes"))
const app = (0, express_1.default)()
app.use(express_1.default.json())
const main = async () => {
  try {
    await config_1.default.initialize()
    app.use(routes_1.default)
  } catch (err) {
    console.log(err)
  } finally {
    app.listen(9090, () => console.log(9090))
  }
}
main()
