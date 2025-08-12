// app/host/profile/page.tsx
'use client';
import { useEffect, useState } from 'react';

type HP = { wwccNumber?: string|null; policeCheck?: boolean|null };

export default function HostProfileDocs() {
  const [loading, setLoading] = useState(true);
  const [hp, setHp] = useState<HP>({});
  const [msg, setMsg] = useState<string|null>(null);

  useEffect(() => {
    (async () => {
      const r = await fetch('/api/host/profile');
      if (r.ok) setHp(await r.json());
      setLoading(false);
    })();
  }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const f = new FormData(e.target as HTMLFormElement);
    const res = await fetch('/api/host/profile', {
      method: 'PATCH',
      headers: { 'content-type':'application/json' },
      body: JSON.stringify({
        wwccNumber: f.get('wwccNumber') || null,
        policeCheck: f.get('policeCheck') === 'on',
      })
    });
    setMsg(res.ok ? 'Saved' : await res.text());
  }

  if (loading) return <div className="p-6">Loading…</div>;

  return (
    <form onSubmit={save} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-soft space-y-4">
      <h1 className="text-2xl font-semibold">Host documents</h1>
      {msg && <div className="text-sm text-gray-600">{msg}</div>}
      <input name="wwccNumber" defaultValue={hp.wwccNumber ?? ''} placeholder="WWCC number" className="border rounded-xl px-3 py-2 w-full" />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="policeCheck" defaultChecked={!!hp.policeCheck} /> I have a valid AFP Police Check
      </label>
      <button className="bg-brand-600 text-white rounded-xl px-4 py-2">Save</button>
    </form>
  );
}
