// app/api/host/profile/route.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const s = await getServerSession(authOptions);
  if (!s?.user) return new Response("Unauthorized", { status: 401 });

  const hp = await prisma.hostProfile.findUnique({ where: { userId: (s.user as any).id } });
  // ensure row exists (created on approval normally; create a row now for editing)
  if (!hp) {
    await prisma.hostProfile.create({ data: { userId: (s.user as any).id } });
  }
  const fresh = await prisma.hostProfile.findUnique({ where: { userId: (s.user as any).id } });
  return Response.json({ wwccNumber: fresh?.wwccNumber, policeCheck: fresh?.policeCheck });
}

export async function PATCH(req: Request) {
  const s = await getServerSession(authOptions);
  if (!s?.user) return new Response("Unauthorized", { status: 401 });
  const { wwccNumber, policeCheck } = await req.json();
  await prisma.hostProfile.upsert({
    where: { userId: (s.user as any).id },
    create: { userId: (s.user as any).id, wwccNumber: wwccNumber ?? null, policeCheck: !!policeCheck },
    update: { wwccNumber: wwccNumber ?? null, policeCheck: !!policeCheck },
  });
  return Response.json({ ok: true });
}
