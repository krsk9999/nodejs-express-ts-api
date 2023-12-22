import { Request, Response } from 'express'
import { getUser, getAllUsers, createUser } from '../services/users'

const getAll = async (req: Request, res: Response) => {
    const users = await getAllUsers()
    res.status(200).send(users)
}

const get = async (req: Request, res: Response) => {
    const user = await getUser(req.params.id)
    res.status(200).send(user)
}

const create = async (req: Request, res: Response) => {
    const {body} = req
    const user = await createUser(body)
    res.status(200).send(user)
}

const update = (req: Request, res: Response) => {

}

const remove = (req: Request, res: Response) => {

}

export {
    get,
    getAll,
    create,
    update,
    remove
} 
