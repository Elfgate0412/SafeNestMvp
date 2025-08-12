// app/host/register/page.tsx
'use client';

import { useState } from 'react';

export default function HostRegisterPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const f = new FormData(e.currentTarget);
    const payload = {
      firstName: f.get('firstName'),
      lastName: f.get('lastName'),
      phone: f.get('phone'),
      wwccHas: f.get('wwccHas') === 'on',
      policeHas: f.get('policeHas') === 'on',
    };

    const res = await fetch('/api/host/applications', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    if (res.ok) setDone(true);
    else setError(await res.text());
  }

  if (done) {
    return (
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-soft">
        <h1 className="text-2xl font-semibold">Application submitted</h1>
        <p className="mt-2 text-gray-600">
          Thanks! Our staff will review your details. You’ll be able to create listings once approved.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-soft space-y-4">
      <h1 className="text-2xl font-semibold">Become a Host</h1>

      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="firstName" placeholder="First name" className="border rounded-xl px-3 py-2" required />
        <input name="lastName" placeholder="Last name" className="border rounded-xl px-3 py-2" required />
      </div>

      <input name="phone" placeholder="Mobile" className="border rounded-xl px-3 py-2" required />

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="wwccHas" /> I have a valid WWCC
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="policeHas" /> I have an AFP Police Check
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white rounded-xl px-4 py-2 transition disabled:opacity-60"
      >
        {loading ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  );
}
