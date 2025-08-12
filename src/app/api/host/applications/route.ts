import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { z } from "zod";

const HostAppSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().min(6),
  dob: z.string().optional(),
  wwccHas: z.boolean().optional(),
  policeHas: z.boolean().optional(),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return new Response("Unauthorized", { status: 401 });

  const data = HostAppSchema.parse(await req.json());

  const existing = await prisma.hostApplication.findFirst({
    where: { userId: (session.user as any).id, status: { in: ["SUBMITTED","UNDER_REVIEW","APPROVED"] } },
  });
  if (existing) return new Response("Application already exists", { status: 400 });

  await prisma.hostApplication.create({
    data: {
      userId: (session.user as any).id,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      dob: data.dob ? new Date(data.dob) : null,
      wwccHas: !!data.wwccHas,
      policeHas: !!data.policeHas,
      status: "SUBMITTED",
    },
  });

  return Response.json({ ok: true });
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return new Response("Unauthorized", { status: 401 });

  const app = await prisma.hostApplication.findFirst({
    where: { userId: (session.user as any).id },
    orderBy: { submittedAt: "desc" },
  });

  return Response.json(app);
}
