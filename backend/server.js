// ./server.js
const prisma = require("./prisma/getPrisma");

async function main() {
  const user = await prisma.user.create({
    data: { name: 'Alice', email: 'alice@example.com' },
  });
  console.log('User created:', user);
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect());
