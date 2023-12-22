import { sign, verify } from 'jsonwebtoken'
import { USUARIO as Usuario } from '../models/USUARIO'

const JWT_SECRET = `${process.env.JWT}`

const generateToken = (user: Usuario) => {
    const {USER} = user 
    const jwt = sign({USER}, JWT_SECRET, {expiresIn: '12h'})
    return jwt
}

const veryfyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}

export {
    generateToken,
    veryfyToken
}