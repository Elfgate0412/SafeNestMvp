'use client'
import { Button } from '@mui/material'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              End homestay frustrations with Australia’s first
              <span className="text-brand-600"> transparent marketplace</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Real reviews, verified hosts, hotel‑like booking flow, stronger compliance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/host/register" variant="contained" sx={{borderRadius: '999px'}}>
                Start hosting
              </Button>
              <Button href="/student/register" variant="outlined" color="secondary" sx={{borderRadius: '999px'}}>
                Start exploring
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white p-6 shadow-soft">
            {/* placeholder video frame */}
            <div className="aspect-video w-full rounded-xl bg-white ring-1 ring-brand-50" />
            <p className="mt-3 text-sm text-gray-500">How it works (30s)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
