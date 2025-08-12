import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function PATCH(_req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;
  const staffId = (session?.user as any)?.id;
  if (!session?.user || !["STAFF","ADMIN"].includes(role)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const app = await prisma.hostApplication.update({
    where: { id: params.id },
    data: { status: "APPROVED", reviewedAt: new Date(), reviewedBy: staffId },
  });

  await prisma.$transaction([
    prisma.hostProfile.upsert({
      where: { userId: app.userId },
      create: { userId: app.userId, approvedAt: new Date() },
      update: { approvedAt: new Date() },
    }),
    prisma.user.update({ where: { id: app.userId }, data: { role: "HOST" } }),
  ]);

  return Response.json({ ok: true });
}
