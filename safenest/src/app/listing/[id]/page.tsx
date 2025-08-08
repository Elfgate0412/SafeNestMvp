import SectionTitle from "@/components/SectionTitle";
import { mockListings } from "@/lib/mock/listings";
import type { PageProps } from "next";

export default async function ListingDetail(
  { params }: PageProps<{ id: string }>
) {
  const { id } = await params;

  const listing = mockListings.find(l => String(l.id) === id);
  if (!listing) return <div>Not found</div>;

  return (
    <div className="space-y-6">
      <SectionTitle title={listing.title} subtitle={`${listing.suburb} • Near ${listing.schoolShort}`} />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 aspect-video rounded-2xl border-2 border-dashed grid place-items-center text-gray-500">Hero Image</div>
            <div className="grid grid-rows-2 gap-2">
              <div className="aspect-video rounded-2xl border-2 border-dashed grid place-items-center text-gray-500">Img</div>
              <div className="aspect-video rounded-2xl border-2 border-dashed grid place-items-center text-gray-500">Img</div>
            </div>
          </div>
          <div className="rounded-2xl border p-4 space-y-2">
            <h3 className="font-semibold">About this stay</h3>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Private room with desk and wardrobe</li>
              <li>10 minutes walk to campus</li>
              <li>Meals available (extra)</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-4 space-y-2">
            <h3 className="font-semibold">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
              {listing.amenities.map(a => (
                <div key={a} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-400" />{a}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border p-4 h-fit sticky top-24">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl font-semibold">${listing.price}</div>
              <div className="text-xs text-gray-500">per week</div>
            </div>
            <div className="text-xs text-gray-500">⭐⭐⭐⭐☆ 4.8 (120)</div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <input className="border rounded-xl px-3 py-2 text-sm" placeholder="Start date" />
            <input className="border rounded-xl px-3 py-2 text-sm" placeholder="End date" />
            <select className="col-span-2 border rounded-xl px-3 py-2 text-sm">
              <option>1 student</option>
              <option>2 students</option>
            </select>
          </div>
          <button className="mt-3 w-full bg-black text-white rounded-xl py-2">Request to Book</button>
          <p className="text-xs text-gray-500 mt-3">No payment yet • Request goes to host</p>
        </div>
      </div>
    </div>
  );
}
