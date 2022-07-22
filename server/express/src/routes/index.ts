import { app } from ".."
import transactionService from "../services"

app.get("/transactions", async (req, res) => {
  const transactions = await transactionService.getAll()
  res.send(transactions)
})

app.post("/transactions", (req, res) => {
  res.send("Hello World!")
})
