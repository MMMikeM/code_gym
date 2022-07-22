import fetchCoinData from "./request"
import { PrismaClient } from "@prisma/client"
import { Socket } from "socket.io"
import { Server } from "socket.io"
import http from "http"
import { writeHeapSnapshot } from "v8"
var heapdump = require("heapdump")

export default (server: http.Server) => {
  const prisma = new PrismaClient()

  let counter = 0

  const poll = async () => {
    if (counter >= 100) counter = 0
    counter++
    console.log(counter)

    try {
      const res = await fetchCoinData()

      const randNum = parseFloat((1 + Math.random() * 0.1).toFixed(2))

      const data = res.map(({ id, current_price }, index) => {
        if (counter === index) return { [id]: current_price * randNum }
        return { [id]: current_price }
      })

      if (counter % 10 === 1) {
        for (let { current_price, id } of res) {
          await prisma.prices.create({
            data: { price: current_price, coinId: id },
          })
        }
      }

      io.emit("data", data)
    } catch (err) {
      console.log(err.message)
    } finally {
      setTimeout(poll, 5000)
    }
  }

  const io = new Server(server)

  io.on("connection", (socket: Socket) => {
    console.log("a user connected")
  })

  poll()
}
