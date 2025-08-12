import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function StaffDashboard() {
  const s = await getServerSession(authOptions);
  const role = (s?.user as any)?.role;
  if (!s?.user || !["STAFF","ADMIN"].includes(role)) return <div className="p-6">Unauthorized</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-soft space-y-4">
      <h1 className="text-2xl font-semibold">Staff dashboard</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href="/staff/hosts" className="rounded-xl border p-4 hover:shadow-soft transition">
          <div className="font-medium">Review host applications</div>
          <div className="text-sm text-gray-600">Approve / Reject</div>
        </Link>
        <Link href="/staff/listings" className="rounded-xl border p-4 hover:shadow-soft transition">
          <div className="font-medium">Manage listings</div>
          <div className="text-sm text-gray-600">View and edit any listing</div>
        </Link>
      </div>
    </div>
  );
}
