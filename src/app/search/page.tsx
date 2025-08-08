import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { mockListings } from "@/lib/mock/listings";

export default function SearchPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6">
      <aside className="space-y-4">
        <SectionTitle title="Filters" subtitle="Adjust and results update" />
        <div className="rounded-2xl border p-4 space-y-4">
          <div>
            <label className="text-sm font-medium">School</label>
            <select className="mt-1 w-full border rounded-xl px-3 py-2 text-sm">
              <option>All</option>
              <option>UNSW</option>
              <option>USYD</option>
              <option>UTS</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Price per week</label>
            <input type="range" className="w-full" />
            <div className="flex justify-between text-xs text-gray-500"><span>$150</span><span>$500+</span></div>
          </div>
          <div>
            <label className="text-sm font-medium">Amenities</label>
            <div className="mt-1 grid grid-cols-2 gap-2 text-sm">
              {["Private bathroom","Air-con","Wi-Fi","Meals","Laundry","Desk"].map(a=>(
                <label key={a} className="flex items-center gap-2">
                  <input type="checkbox" /> {a}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Sort</label>
            <select className="mt-1 w-full border rounded-xl px-3 py-2 text-sm">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Distance to school</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </aside>

      <section>
        <SectionTitle title={`${mockListings.length} stays near UNSW`} subtitle="Showing 1–12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {mockListings.map(l => (
            <Link key={l.id} href={`/listing/${l.id}`} className="rounded-2xl border hover:shadow-sm transition block">
              <div className="aspect-[4/3] bg-gray-100 rounded-t-2xl grid place-items-center text-gray-500">Image</div>
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{l.title}</p>
                  <p className="font-semibold">${l.price}/wk</p>
                </div>
                <p className="text-sm text-gray-600">{l.suburb} • {l.schoolShort}</p>
                <p className="text-xs text-gray-500">{l.amenities.slice(0,3).join(" • ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
