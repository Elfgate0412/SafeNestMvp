'use client'
import { useState } from 'react'

export default function NewListingPage() {
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const f = new FormData(e.currentTarget)
    const payload = {
      title: f.get('title'),
      pricePerWeek: Number(f.get('pricePerWeek') || 0),
      suburb: f.get('suburb'),
      state: f.get('state'),
      description: f.get('description') || ''
    }
    const res = await fetch('/api/listings', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(payload) })
    setLoading(false)
    if (res.ok) window.location.href = '/host/dashboard'
    else alert(await res.text())
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-soft space-y-3">
      <h1 className="text-2xl font-semibold">Create listing</h1>
      <input name="title" placeholder="Title" className="border rounded-xl px-3 py-2" required />
      <div className="grid grid-cols-2 gap-3">
        <input name="pricePerWeek" type="number" placeholder="Price per week" className="border rounded-xl px-3 py-2" required />
        <input name="suburb" placeholder="Suburb" className="border rounded-xl px-3 py-2" required />
      </div>
      <input name="state" placeholder="State" className="border rounded-xl px-3 py-2" required />
      <textarea name="description" placeholder="Description" className="border rounded-xl px-3 py-2 min-h-[120px]" />
      <button disabled={loading} className="bg-brand-600 text-white rounded-xl px-4 py-2">
        {loading ? 'Saving…' : 'Publish draft'}
      </button>
    </form>
  )
}
