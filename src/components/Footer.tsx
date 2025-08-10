export default function Footer() {
  return (
    <footer className="mt-20 border-t border-brand-50 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-10 md:grid-cols-4">
        <div>
          <h4 className="font-semibold">SafeNest</h4>
          <p className="mt-2 text-sm text-gray-600">A safer, clearer path to great homestays.</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Contact</h5>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>hello@safenest.au</li>
            <li>+61 (0)2 0000 0000</li>
            <li>Level 1, Sydney NSW</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Compliance</h5>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>Child Safe Principles</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Company</h5>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>Team</li>
            <li>Partners</li>
            <li>Press</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-50 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SafeNest. All rights reserved.
      </div>
    </footer>
  )
}
