import { PrismaClient } from "@prisma/client"; 4

const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV === "production") globalThis.prisma = prisma;

export default prisma;