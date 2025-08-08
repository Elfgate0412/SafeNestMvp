import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { mockListings } from "@/lib/mock/listings";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 md:p-12">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Find a trusted homestay near your school
          </h1>
        <p className="mt-3 text-gray-200">
            Built for international students. Hosts verified. Pricing transparent.
          </p>
          <div className="mt-6 bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 md:items-center">
            <input className="flex-1 border rounded-xl px-3 py-3 text-sm" placeholder="Search by school (e.g., UNSW, USYD, UTS)" />
            <select className="border rounded-xl px-3 py-3 text-sm">
              <option>Any price</option>
              <option>$150–$250</option>
              <option>$250–$350</option>
              <option>$350+</option>
            </select>
            <Link href="/search" className="bg-black text-white rounded-xl px-5 py-3 text-sm text-center">
              Search
            </Link>
          </div>
        </div>
      </div>

      <SectionTitle title="Featured near popular schools" subtitle="Tap a card to view details" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockListings.slice(0, 6).map((l) => (
          <Link key={l.id} href={`/listing/${l.id}`} className="rounded-2xl border hover:shadow-sm transition block">
            <div className="aspect-[4/3] bg-gray-100 rounded-t-2xl grid place-items-center text-gray-500">Image</div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">{l.title}</p>
                <p className="font-semibold">${l.price}/wk</p>
              </div>
              <p className="text-sm text-gray-600">{l.suburb} • {l.schoolShort}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
