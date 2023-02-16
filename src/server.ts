import express, { Application } from "express"
import dataSource from "./config/config"

const app: Application = express()

app.use(express.json())

const main = async (): Promise<void> => {
  try {
    await dataSource.initialize()

  } catch (err: unknown) {
    console.log(err)
  } finally {
    app.listen(9090, (): void => console.log(9090))
  }
}

main()
