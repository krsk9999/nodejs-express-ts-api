import { Router } from "express"
import * as usersController from '../controllers/users'
import { checkJwt } from "../middleware/session"

const router = Router()

router
    .get("/", checkJwt, usersController.getAll)
    .get("/:id", checkJwt, usersController.get)
    .post("/", checkJwt, usersController.create)
    .patch("/:id", checkJwt, usersController.update)
    .delete("/:id", checkJwt, usersController.remove)

export { router }