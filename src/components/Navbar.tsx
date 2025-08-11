import Link from "next/link";
import NavSessionLinks from "./NavSessionLinks";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">SafeNest</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/browse">Browse</Link>
          <NavSessionLinks />
        </nav>
      </div>
    </header>
  );
}
