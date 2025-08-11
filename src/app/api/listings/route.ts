import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { z } from "zod";

const NewListing = z.object({
  title: z.string().min(3),
  pricePerWeek: z.number().int().min(50),
  suburb: z.string().min(2),
  state: z.string().min(2),
  description: z.string().optional(),
  availableFrom: z.string().optional(),
  images: z.array(z.string().url()).max(12).optional(),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return new Response("Unauthorized", { status: 401 });

  const role = (session.user as any).role;
  const userId = (session.user as any).id;
  if (role !== "HOST") return new Response("Host not approved", { status: 403 });

  const payload = NewListing.parse(await req.json());

  const listing = await prisma.listing.create({
    data: {
      userId,
      title: payload.title,
      description: payload.description ?? null,
      pricePerWeek: payload.pricePerWeek,
      suburb: payload.suburb,
      state: payload.state,
      availableFrom: payload.availableFrom ? new Date(payload.availableFrom) : null,
      images: { create: (payload.images ?? []).map((url, idx) => ({ url, sort: idx })) },
    },
    include: { images: true },
  });

  return Response.json(listing);
}
