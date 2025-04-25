import prisma from "../../prisma/prisma-client.js";

export class UserRepository {
    static async createUser(data) {
        return await prisma.user.create({ data })
    }

    static async findUserByEmail(email) {
        return await prisma.user.findUnique({ where: { email } })
    }
}