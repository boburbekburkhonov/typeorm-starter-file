import { createClient } from "redis"
import dotenv from "dotenv"

dotenv.config()

export default async () => {
  try {
    const client = createClient({
      url: String(process.env.REDIS_URL ?? "redis://127.0.0.1:6379"),
    })

    client.on("error", (err) => console.log(err))

    await client.connect()
    console.log("Connected")

    return client
  } catch (err: unknown) {
    console.log(err)
  }
}
