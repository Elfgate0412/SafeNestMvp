import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function StaffListings() {
  const s = await getServerSession(authOptions);
  const role = (s?.user as any)?.role;
  if (!s?.user || !["STAFF","ADMIN"].includes(role)) return <div className="p-6">Unauthorized</div>;

  const rows = await prisma.listing.findMany({ include: { user: true }, orderBy: { createdAt: "desc" } });
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-soft">
      <h1 className="text-2xl font-semibold">All listings</h1>
      <div className="mt-4 divide-y">
        {rows.length === 0 && <div className="py-6 text-gray-500">No listings yet.</div>}
        {rows.map((l) => (
          <div key={l.id} className="py-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{l.title}</div>
              <div className="text-sm text-gray-600">{l.suburb}, {l.state} • ${l.pricePerWeek}/wk • {l.user.email}</div>
            </div>
            <Link href={`/host/listings/${l.id}/edit`} className="text-sm underline">Open</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
