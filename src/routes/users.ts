import { Router } from "express"
import * as usersController from '../controllers/users'

const router = Router()

router
    .get("/", usersController.getAll)
    .get("/:id", usersController.get)
    .post("/", usersController.create)
    .patch("/:id", usersController.update)
    .delete("/:id", usersController.remove)

export { router }