'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('host@safenest.local');
  const [password, setPassword] = useState('password123');
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    const res = await signIn('credentials', { redirect: false, email, password });
    setLoading(false);
    if (res?.ok) router.push('/host/register'); else setErr(res?.error || 'Login failed');
  }

  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto bg-white p-6 rounded-2xl shadow-soft space-y-3">
      <h1 className="text-2xl font-semibold">Login</h1>
      {err && <div className="text-sm text-red-600">{err}</div>}
      <input className="border rounded-xl px-3 py-2 w-full" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input className="border rounded-xl px-3 py-2 w-full" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
      <button type="submit" disabled={loading} className="bg-brand-600 text-white rounded-xl px-4 py-2">
        {loading ? 'Signing in…' : 'Sign in'}
      </button>
      <p className="text-xs text-gray-500">Try host@safenest.local / password123</p>
    </form>
  );
}
