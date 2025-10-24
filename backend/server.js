// ./server.js

// import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaClient } from '../backend/generated/prisma/index.js';

const prisma = new PrismaClient();

import dotenv from 'dotenv';

dotenv.config()
 


console.log(process.env.PORT,"env")


async function main() {
  const user = await prisma.user.create({
    data: { name: 'Alice' },
  });
  console.log('User created:', user);
}

main()
  // .catch(console.error)
  // .finally(async () => await prisma.$disconnect());
