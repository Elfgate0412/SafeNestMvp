"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const link = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={`px-3 py-2 text-sm rounded-xl ${isActive(href) ? "bg-gray-200" : "hover:bg-gray-100"}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-black" />
          <span className="font-semibold">SafeNest MVP</span>
        </Link>
        <nav className="flex items-center gap-2">
          {link("/", "Home")}
          {link("/search", "Search")}
          {link("/host/dashboard", "Host")}
        </nav>
      </div>
    </header>
  );
}
