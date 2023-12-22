import { NextFunction, Request, Response } from "express"

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = `${req.headers?.authorization}`
        const jwt = jwtByUser.split(' ')
    } catch (error) {
        res.status(400).send('SESSION_NOT_VALID')
    }
}

export {
    checkJwt
}