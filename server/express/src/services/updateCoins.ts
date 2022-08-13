import { PrismaClient } from "@prisma/client"
import fetchCoinData from "./request"

export default async () => {
  const prisma = new PrismaClient()

  const res = await fetchCoinData()

  for (const { id, name } of res) {
    try {
      await prisma.coins.upsert({
        where: { id },
        update: { name },
        create: { id, name },
      })
    } catch (err) {
      console.error(err.code)
    }
  }
}
