const PrismaClient = require("@prisma/client").PrismaClient

const prisma = new PrismaClient()
const clearPrices = async () => {
  await prisma.prices.deleteMany({
    where: {},
  })
}

clearPrices()
