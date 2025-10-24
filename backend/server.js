// ./server.js

import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config()


console.log(process.env.PORT)

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: { name: 'Alice', email: 'alice@example.com' },
  });
  console.log('User created:', user);
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect());
