import express from "express"
import http from "http"
import setUpSocket from "./services/socket"
import updateCoins from "./services/updateCoins"

const app = express()
const server = http.createServer(app)

server.listen(3000, () => {
  console.log("listening on *:3000")
})

updateCoins()

setUpSocket(server)
