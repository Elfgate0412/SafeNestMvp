export default function NewListingForm() {
  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold">Create a new listing</h2>
        <p className="text-sm text-gray-600 mt-1">Wireframe — fields reflect MVP</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-6">
        <div className="space-y-6">
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold mb-3">Basic Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-sm">
                <div className="font-medium mb-1">Title</div>
                <input className="w-full border rounded-xl px-3 py-2" placeholder="Cozy room near UNSW" />
              </label>
              <label className="text-sm">
                <div className="font-medium mb-1">School</div>
                <select className="w-full border rounded-xl px-3 py-2">
                  <option>UNSW</option><option>USYD</option><option>UTS</option><option>Macquarie</option>
                </select>
              </label>
              <label className="text-sm">
                <div className="font-medium mb-1">Address</div>
                <input className="w-full border rounded-xl px-3 py-2" placeholder="Street, suburb" />
              </label>
              <label className="text-sm">
                <div className="font-medium mb-1">Price per week (AUD)</div>
                <input className="w-full border rounded-xl px-3 py-2" placeholder="320" />
              </label>
              <label className="text-sm">
                <div className="font-medium mb-1">Room Type</div>
                <select className="w-full border rounded-xl px-3 py-2">
                  <option>Private room</option><option>Shared room</option><option>Entire place</option>
                </select>
              </label>
              <label className="text-sm">
                <div className="font-medium mb-1">Bathroom</div>
                <select className="w-full border rounded-xl px-3 py-2">
                  <option>Shared</option><option>Private</option>
                </select>
              </label>
            </div>
          </div>

          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold mb-3">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {["Wi-Fi","Air-conditioning","Heating","Laundry","Meals included","Desk","Parking","Private entrance"].map(a=>(
                <label key={a} className="flex items-center gap-2"><input type="checkbox" /> {a}</label>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold mb-3">Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Array.from({length:4}).map((_,i)=>(
                <div key={i} className="aspect-square rounded-2xl border-2 border-dashed grid place-items-center text-gray-500">Upload</div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 h-fit">
          <div className="rounded-2xl border p-4">
            <h4 className="font-semibold">Live Preview</h4>
            <p className="text-xs text-gray-500">Auto-updates as you enter details.</p>
            <div className="mt-3 rounded-xl border p-3 text-sm text-gray-600">Card preview placeholder</div>
          </div>
          <div className="rounded-2xl border p-4 space-y-2">
            <button className="w-full bg-black text-white rounded-xl py-2">Save Draft</button>
            <button className="w-full border rounded-xl py-2">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}
