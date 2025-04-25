import { UserRepository } from "../repositories/user-repository.js";

export class UserService {
    static async createUser(data) {
        const userExists = await UserRepository.findUserByEmail(data.email)
        
        if (userExists) throw new Error("O e-mail informado já pertence a outro usuário.");


        const user = await UserRepository.createUser(data)

        return user
    }
}