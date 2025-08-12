'use client';
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavSessionLinks() {
  const { data } = useSession();
  const role = (data?.user as any)?.role;

  return (
    <div className="flex items-center gap-3">
      {!data?.user && <Link href="/login" className="text-sm">Login</Link>}
      {role === "STUDENT" && <Link href="/host/register" className="text-sm">Become a host</Link>}
      {role === "HOST" && <Link href="/host/dashboard" className="text-sm">Host dashboard</Link>}
      {["STAFF","ADMIN"].includes(role) && <Link href="/staff/dashboard" className="text-sm">Staff</Link>}
      {data?.user && (
        <button onClick={()=>signOut({ callbackUrl: "/" })} className="text-sm underline">Sign out</button>
      )}
    </div>
  );
}
