import cors from "cors"
import express from "express"
import helmet from "helmet"
import http from "http"
import setUpSocket from "./services/socket"
import updateCoins from "./services/updateCoins"
import { transactionRouter } from "./transactions/route"
import { userRouter } from "./users/route"

const app = express()
const server = http.createServer(app)

server.listen(3000, () => {
  console.log("listening on *:3000")
})

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(userRouter)
app.use(transactionRouter)

updateCoins()

setUpSocket(server)

export default app
