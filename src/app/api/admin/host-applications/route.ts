import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;
  if (!session?.user || !["STAFF","ADMIN"].includes(role)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const rows = await prisma.hostApplication.findMany({
    where: { status: { in: ["SUBMITTED","UNDER_REVIEW"] } },
    orderBy: { submittedAt: "asc" },
    include: { user: { select: { id: true, email: true, role: true } } },
  });

  return Response.json(rows);
}
