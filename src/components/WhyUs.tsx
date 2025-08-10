export default function WhyUs() {
  const student = [
    'Robust in‑person vetting for every host/listing',
    'Stripe + Alipay/WeChat Pay',
    'Subclass 500 compliant for under‑18 (provider approval required)',
    'Built by ex‑international students',
    'Transparent pricing, no hidden fees',
  ]
  const host = [
    '15% flat commission, no hidden fees',
    'Set your own weekly price',
    'Automated flow + weekly Stripe payouts',
    '2‑way selection: hosts choose students',
  ]
  const List = ({items}:{items:string[]}) => (
    <ul className="mt-4 space-y-2">
      {items.map((t,i)=>(<li key={i} className="flex gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-brand-600" />
        <span className="text-gray-700">{t}</span>
      </li>))}
    </ul>
  )
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold">Why us?</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-brand-50">
          <h3 className="text-xl font-semibold">Students</h3>
          <List items={student}/>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-brand-50">
          <h3 className="text-xl font-semibold">Hosts</h3>
          <List items={host}/>
        </div>
      </div>
    </section>
  )
}
