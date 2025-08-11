import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function StaffHostsPage() {
  const s = await getServerSession(authOptions);
  const role = (s?.user as any)?.role;
  if (!s?.user || !["STAFF", "ADMIN"].includes(role)) {
    return <div className="p-6">Unauthorized</div>;
  }

  const rows = await prisma.hostApplication.findMany({
    where: { status: { in: ["SUBMITTED", "UNDER_REVIEW"] } },
    orderBy: { submittedAt: "asc" },
    include: { user: { select: { email: true } } },
  });

  async function Row(a: (typeof rows)[number]) {
    return (
      <div key={a.id} className="py-3 flex items-center justify-between">
        <div>
          <div className="font-medium">{a.firstName} {a.lastName}</div>
          <div className="text-sm text-gray-600">{a.user?.email} • {a.phone}</div>
        </div>
        <div className="flex gap-2">
          <form action={`/api/admin/host-applications/${a.id}/approve`} method="post">
            <button
              formMethod="patch"
              className="px-3 py-1 rounded-lg bg-brand-600 text-white"
            >
              Approve
            </button>
          </form>
          <form action={`/api/admin/host-applications/${a.id}/reject`} method="post">
            <button
              formMethod="patch"
              className="px-3 py-1 rounded-lg border"
            >
              Reject
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-soft">
      <h1 className="text-2xl font-semibold">Host Applications</h1>
      <div className="mt-4 divide-y">
        {rows.length === 0 && <div className="py-6 text-gray-500">No applications to review.</div>}
        {rows.map((a) => <Row key={a.id} {...a} />)}
      </div>
      <div className="mt-6">
        <Link href="/staff/dashboard" className="text-sm underline">Back to Staff dashboard</Link>
      </div>
    </div>
  );
}
