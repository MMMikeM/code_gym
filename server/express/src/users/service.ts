import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const userService = {
  getByID: async (id: string) =>
    prisma.users.findUnique({
      where: { id },
    }),
  create: async ({ email, name, password }: Prisma.UsersCreateInput) =>
    prisma.users
      .create({
        data: {
          email,
          name,
          password,
        },
      })
      .catch(() => {
        throw new Error("Unable to create user")
      }),
}

export default userService
