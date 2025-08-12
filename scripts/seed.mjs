import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
  const pw = await hash('password123', 10);
  await prisma.user.upsert({
    where: { email: 'staff@safenest.local' },
    create: { email: 'staff@safenest.local', passwordHash: pw, role: 'STAFF' },
    update: {},
  });
  await prisma.user.upsert({
    where: { email: 'host@safenest.local' },
    create: { email: 'host@safenest.local', passwordHash: pw, role: 'STUDENT' },
    update: {},
  });
  console.log('Seeded staff + host (password: password123)');
}
main().finally(()=>process.exit());
