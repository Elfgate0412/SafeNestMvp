import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { mockListings } from "@/lib/mock/listings";

export default function HostDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-6">
      <aside className="rounded-2xl border p-4 space-y-2">
        <h3 className="font-semibold">Host Menu</h3>
        <nav className="text-sm text-gray-700 grid gap-1">
          <span className="px-3 py-2 rounded bg-gray-100">Overview</span>
          <span className="px-3 py-2 rounded hover:bg-gray-100">Listings</span>
          <span className="px-3 py-2 rounded hover:bg-gray-100">Messages</span>
          <span className="px-3 py-2 rounded hover:bg-gray-100">Payouts</span>
          <span className="px-3 py-2 rounded hover:bg-gray-100">Settings</span>
        </nav>
      </aside>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <SectionTitle title="Your Listings" subtitle="Manage, edit, and create new" />
          <Link href="/host/listing/new" className="px-4 py-2 rounded-xl bg-black text-white">
            + New listing
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {mockListings.map(l => (
            <div key={l.id} className="rounded-2xl border">
              <div className="aspect-[4/3] bg-gray-100 rounded-t-2xl grid place-items-center text-gray-500">Image</div>
              <div className="p-4 space-y-2">
                <p className="font-medium">{l.title}</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${l.price}/wk</span>
                  <span>{l.schoolShort}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <Link href={`/listing/${l.id}`} className="px-3 py-1 rounded border text-sm">Preview</Link>
                  <button className="px-3 py-1 rounded border text-sm">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
