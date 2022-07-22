import { Prisma, PrismaClient } from "@prisma/client"
import fetchCoinData from "./request"

export default async () => {
  const prisma = new PrismaClient()

  const res = await fetchCoinData()

  for (let { id, name } of res) {
    try {
      await prisma.coin.upsert({
        where: { id },
        update: { name },
        create: { id, name },
      })
    } catch (err) {
      console.error(err.code)
    }
  }
}
