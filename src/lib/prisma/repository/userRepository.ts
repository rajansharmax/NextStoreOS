// @ts-ignore
import { prisma } from '@/lib/prisma/prisma';

export class UserRepository {
    static async getUserByEmail(email: string) {
        return prisma.users.findUnique({
        where: { email },
        });
    }

    static async createUser(email: string, name: string) {
        return prisma.users.create({
        data: { email, name },
        });
    }

    static async findAll() {
        return prisma.users.findMany();
    }
}
