import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type TransactionCreate = Prisma.TransactionsUncheckedCreateInput

const transactionService = {
  getAll: async () => prisma.transactions.findMany(),
  getByID: async (id: string) =>
    prisma.transactions.findFirst({
      where: { id },
    }),
  create: async ({
    coinId,
    priceId,
    userId,
    amount,
    value,
  }: TransactionCreate) =>
    prisma.transactions.create({
      data: {
        Coins: {
          connect: { id: coinId },
        },
        Prices: {
          connect: { id: priceId },
        },
        Users: {
          connect: { id: userId },
        },
        amount,
        value,
      },
    }),
}

export default transactionService
