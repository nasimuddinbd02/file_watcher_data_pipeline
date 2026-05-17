import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const username = 'admin';
  const plain = 'admin';

  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) {
    console.log('Admin user already exists — skipping seed.');
    return;
  }

  const password = await bcrypt.hash(plain, 10);
  const admin = await prisma.user.create({
    data: { username, password, role: 'admin' },
  });

  console.log(`Default admin user created: id=${admin.id}, username=${admin.username}`);
  console.log('Login with: username=admin  password=admin');
  console.log('IMPORTANT: Change the admin password immediately in production!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
