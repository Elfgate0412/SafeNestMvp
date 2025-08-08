const base = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

export async function fetchListings(params?: Record<string, string>) {
  const qp = params ? `?${new URLSearchParams(params)}` : '';
  const res = await fetch(`${base}/api/listings${qp}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch listings');
  return res.json();
}
