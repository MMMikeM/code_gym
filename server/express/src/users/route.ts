import express, { Request, Response } from "express"
import * as rt from "simple-runtypes"
import userService from "./service"

const router = express.Router()

router.get("/users/", (req: Request, res: Response) => {
  res.send(userService.getByID(req.params.id))
})

const validateUserBody = rt.record({
  id: rt.string(),
  email: rt.string(),
  name: rt.string(),
  password: rt.string(),
})

router.post("/users/", async (req, res: Response) => {
  try {
    const user = validateUserBody(req.body)
    res.send(await userService.create(user))
  } catch (e) {
    res.status(400).send(e.message)
  }
})

export { router as userRouter }
