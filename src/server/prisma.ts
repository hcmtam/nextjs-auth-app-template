import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingletonType = ReturnType<typeof PrismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingletonType | undefined;
};

export const prismaClient = globalForPrisma.prisma ?? PrismaClientSingleton();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prismaClient;
