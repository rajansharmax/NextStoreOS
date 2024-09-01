import { PrismaClient as MySQLPrismaClient } from "../../../generated/mysql";
import { PrismaClient as PostgresPrismaClient } from "../../../generated/postgres";

declare global {
    var mysqlPrisma: MySQLPrismaClient | undefined;
    var postgresPrisma: PostgresPrismaClient | undefined;
}

let mysqlPrisma: MySQLPrismaClient;
let postgresPrisma: PostgresPrismaClient;

async function initializePrisma() {
    try {
        mysqlPrisma = global.mysqlPrisma || new MySQLPrismaClient({
            log: ["query", "info", "warn", "error"],
        });
        await mysqlPrisma.$connect();
        console.log("Connected to MySQL");
        global.mysqlPrisma = mysqlPrisma; // Cache the Prisma client in the global scope
    } catch (error: any) {
        console.error("MySQL connection failed, trying PostgreSQL...", error);

        try {
            postgresPrisma = global.postgresPrisma || new PostgresPrismaClient({
                log: ["query", "info", "warn", "error"],
            });
            await postgresPrisma.$connect();
            console.log("Connected to PostgreSQL");
            global.postgresPrisma = postgresPrisma; // Cache the Prisma client in the global scope
        } catch (postgresError: any) {
            console.error("PostgreSQL connection failed", postgresError);
            console.error("Failed to connect to both MySQL and PostgreSQL");
            throw new Error("Failed to connect to both MySQL and PostgreSQL");
        }
    }

    if (process.env.NODE_ENV !== "production" && (mysqlPrisma || postgresPrisma)) {
        global.mysqlPrisma = mysqlPrisma;
        global.postgresPrisma = postgresPrisma;
    }
}

if (!global.mysqlPrisma && !global.postgresPrisma) {
    initializePrisma().catch((err) => {
        console.error(err.message);
    });
} else {
    mysqlPrisma = global.mysqlPrisma!;
    postgresPrisma = global.postgresPrisma!;
}

export { mysqlPrisma, postgresPrisma };
