import { Prisma, PrismaClient } from "@prisma/client"

// interface ICreateTransaction
//   extends Omit<Prisma.TransactionsCreateInput, "Coins"> {}

const prisma = new PrismaClient()

const transactionService = {
  getAll: () => {
    return prisma.transactions.findMany()
  },
  getByID: (id: string) => {
    return prisma.transactions.findFirst({
      where: { id },
    })
  },
  create: (transaction) => {
    const { userId, amount, coinId, value } = transaction
    return prisma.transactions.create({ data: transaction })
  },
}

export default transactionService
