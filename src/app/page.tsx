import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { mockListings } from "@/lib/mock/listings";

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Brand gradient hero */}
      <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-white text-gray-900 p-8 md:p-12 ring-1 ring-brand-50">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            End homestay frustrations with a{" "}
            <span className="text-brand-600">transparent marketplace</span>
          </h1>
          <p className="mt-3 text-gray-700">
            Built for international students. Hosts verified. Pricing transparent.
          </p>

          {/* Search bar */}
          <div className="mt-6 bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 md:items-center shadow-soft">
            <input
              className="flex-1 border border-brand-50 rounded-xl px-3 py-3 text-sm outline-brand-600"
              placeholder="Search by school (e.g., UNSW, USYD, UTS)"
            />
            <select className="border border-brand-50 rounded-xl px-3 py-3 text-sm">
              <option>Any price</option>
              <option>$150–$250</option>
              <option>$250–$350</option>
              <option>$350+</option>
            </select>
            <Link
              href="/search"
              className="bg-brand-600 hover:bg-brand-500 text-white rounded-xl px-5 py-3 text-sm text-center transition"
            >
              Search
            </Link>
          </div>

          {/* Secondary CTAs */}
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/host/register" className="rounded-full px-5 py-2 text-sm bg-black text-white">
              Start hosting
            </Link>
            <Link href="/student/register" className="rounded-full px-5 py-2 text-sm border border-gray-300">
              Start exploring
            </Link>
          </div>
        </div>
      </div>

      <SectionTitle title="Featured near popular schools" subtitle="Tap a card to view details" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockListings.slice(0, 6).map((l) => (
          <Link key={l.id} href={`/listing/${l.id}`} className="rounded-2xl border hover:shadow-sm transition block bg-white">
            <div className="aspect-[4/3] bg-gray-100 rounded-t-2xl grid place-items-center text-gray-500">
              Image
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">{l.title}</p>
                <p className="font-semibold">${l.price}/wk</p>
              </div>
              <p className="text-sm text-gray-600">
                {l.suburb} • {l.schoolShort}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
