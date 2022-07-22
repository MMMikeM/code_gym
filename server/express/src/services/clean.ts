const PrismaClient = require("@prisma/client").PrismaClient
const prisma = new PrismaClient()
const clearPrices = async () => {
  // await prisma.prices.deleteMany({
  //   where: {},
  // })
  const data = await prisma.coins.findFirst({})
  console.log(data)
}

clearPrices()
