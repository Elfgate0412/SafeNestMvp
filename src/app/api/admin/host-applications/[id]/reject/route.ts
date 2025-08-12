import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;
  const staffId = (session?.user as any)?.id;
  if (!session?.user || !["STAFF","ADMIN"].includes(role)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { notes } = await req.json().catch(() => ({ notes: "" }));

  await prisma.hostApplication.update({
    where: { id: params.id },
    data: { status: "REJECTED", reviewedAt: new Date(), reviewedBy: staffId, notes },
  });

  return Response.json({ ok: true });
}
