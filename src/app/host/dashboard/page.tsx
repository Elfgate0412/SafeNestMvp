import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function HostDashboard() {
  const s = await getServerSession(authOptions);
  if (!s?.user) return <div className="p-6">Please <a className="underline" href="/login">log in</a>.</div>;

  const user = await prisma.user.findUnique({
    where: { id: (s.user as any).id },
    include: {
      hostProfile: true,
      listings: { orderBy: { createdAt: "desc" } },
    },
  });

  const approved = !!user?.hostProfile?.approvedAt;
  const docsComplete = !!user?.hostProfile?.wwccNumber && !!user?.hostProfile?.policeCheck;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="rounded-2xl bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-semibold">Host dashboard</h1>
        <div className="mt-2 text-sm text-gray-600">Signed in as {user?.email}</div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border p-4">
            <div className="text-xs text-gray-500">Approval</div>
            <div className={`mt-1 font-medium ${approved ? "text-green-600" : "text-yellow-700"}`}>
              {approved ? "Approved" : "Pending review"}
            </div>
          </div>
          <div className="rounded-xl border p-4">
            <div className="text-xs text-gray-500">Documents</div>
            <div className={`mt-1 font-medium ${docsComplete ? "text-green-600" : "text-red-600"}`}>
              {docsComplete ? "Complete" : "Incomplete"}
            </div>
          </div>
          <div className="rounded-xl border p-4">
            <div className="text-xs text-gray-500">Listings</div>
            <div className="mt-1 font-medium">{user?.listings.length ?? 0}</div>
          </div>
        </div>

        {!docsComplete && (
          <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-sm">
            Please complete required documents before you can publish listings.{" "}
            <Link href="/host/profile" className="underline">Upload docs</Link>
          </div>
        )}

        {!approved && (
          <div className="mt-3 text-sm text-gray-600">
            Your application is under review. You’ll be able to publish after approval.
          </div>
        )}

        <div className="mt-6">
          <Link
            href="/host/listings/new"
            className={`inline-flex items-center rounded-xl px-4 py-2 text-white transition ${
              approved && docsComplete ? "bg-brand-600 hover:bg-brand-500" : "bg-gray-300 cursor-not-allowed"
            }`}
            aria-disabled={!approved || !docsComplete}
            onClick={(e) => { if (!approved || !docsComplete) e.preventDefault(); }}
          >
            Create listing
          </Link>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="text-lg font-semibold">Your listings</h2>
        <div className="mt-3 divide-y">
          {(user?.listings ?? []).length === 0 && <div className="py-6 text-gray-500">No listings yet.</div>}
          {(user?.listings ?? []).map((lst) => (
            <div key={lst.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{lst.title}</div>
                <div className="text-sm text-gray-600">{lst.suburb}, {lst.state} • ${lst.pricePerWeek}/wk</div>
              </div>
              <Link href={`/host/listings/${lst.id}/edit`} className="text-sm underline">Edit</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
