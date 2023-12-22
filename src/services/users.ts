import { USUARIOAttributes, USUARIO as Usuario } from '../models/init-models'
import { encrypt } from '../utils/bcrypt.handle';

const getAllUsers = async () => {
    try {
        const users = await Usuario.findAll({
            attributes: { exclude: ['PASSWORD', 'rol', 'CREATEDDATE', 'UsuarioModificacion', 'FechaModificacion'] },
        });
        return { users: users };
    } catch (err) {
        console.error(err);
    }
}

const getUser = async (id: string) => {
    try {
        const user = await Usuario.findOne({
            where: { ID: id },
            attributes: { exclude: ['PASSWORD', 'rol', 'CREATEDDATE', 'UsuarioModificacion', 'FechaModificacion'] },
        });
        // console.dir({ pacientes: pacientes });
        return { user: user };
    } catch (err) {
        console.error(err);
    }
}

const createUser = async (user: Usuario) => {
    try {
        const existingUser = await Usuario.findOne({ where: { USER: user.USER } })
        if (existingUser) return { msg: "USER_EXISTS" }
        const passwordHash = await encrypt(user.PASSWORD)
        const registeredNewUser = await Usuario.create({ ...user, PASSWORD: passwordHash })
        return { user: registeredNewUser };
    } catch (err) {
        console.error(err);
    }
}



export {
    getUser,
    getAllUsers,
    createUser
}