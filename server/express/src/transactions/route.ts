import express, { Request, Response } from "express"
import * as rt from "simple-runtypes"
import transactionService from "./service"

const router = express.Router()

router.get("/transactions", (req: Request, res: Response) => {
  const transactions = transactionService.getAll()
  res.send(transactions)
})

const validateTransactionBody = rt.record({
  coinId: rt.string(),
  priceId: rt.string(),
  userId: rt.string(),
  amount: rt.number(),
  value: rt.number(),
})

router.post("/transactions", (req: Request, res: Response) => {
  const body = validateTransactionBody(req.body)
  const transaction = transactionService.create(body)
  res.send(transaction)
})

export { router as transactionRouter }
