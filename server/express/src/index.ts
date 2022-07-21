import express, { Request, Response } from "express"
import http from "http"
import { Socket } from "socket.io"
import { Server } from "socket.io"
import poller from "./request"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html")
})

io.on("connection", (socket: Socket) => {
  console.log("a user connected")
})

server.listen(3000, () => {
  console.log("listening on *:3000")
})

const poll = async () => {
  try {
    const res = await poller()
    console.log(res)
    io.emit("data", res)
  } catch (err) {
    console.log(err)
  } finally {
    setTimeout(poll, 2000)
  }
}

poll()
