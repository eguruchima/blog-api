import { PrismaClient } from "@prisma/client";

const globalVar = globalThis as any;
const prisma = globalVar.__prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") {
  globalVar.__prisma = prisma;
}

export default prisma;