// @ts-ignore
import { users } from "@/generated/mysql";
import { mysqlPrisma as prisma } from "@/lib/prisma/prisma";

export class UserRepository {
    static async getUserByEmail(email: string): Promise<users | null> {
        return prisma.users.findUnique({
            where: { email },
        });
    }

    static async createUser(email: string, name: string): Promise<users> {
        return prisma.users.create({
            data: { email, name },
        });
    }

    static async findAll(): Promise<users[]> {
        return prisma.users.findMany();
    }
}
