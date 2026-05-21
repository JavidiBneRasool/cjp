'use client'

import * as React from 'react'
import Link from 'next/link'

export function Confrontation() {
  return (
    <section className="py-24 px-4 bg-background border-y border-charcoal/5 dark:border-white/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">They Promised. We Waited. <br className="hidden md:block" /><span className="text-saffron">Now We Act.</span></h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            A system that crushes hope doesn't deserve our silence. 
            We are not asking for permission to survive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center p-8 rounded-3xl bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 group hover:border-saffron/20 transition-all">
            <div className="text-5xl md:text-6xl font-bold text-saffron mb-4 group-hover:scale-110 transition-transform">87%</div>
            <p className="text-foreground/70 font-medium">Kashmiri youth unemployed or underemployed</p>
            <p className="text-[10px] text-foreground/40 mt-4 uppercase tracking-widest">(NSSO 2023)</p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 group hover:border-saffron/20 transition-all">
            <div className="text-5xl md:text-6xl font-bold text-green mb-4 group-hover:scale-110 transition-transform">₹2.3L Cr</div>
            <p className="text-foreground/70 font-medium">Spent on J&K development since 2019 — where did it go?</p>
            <p className="text-[10px] text-foreground/40 mt-4 uppercase tracking-widest">(RTI Data 2024)</p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 group hover:border-saffron/20 transition-all">
            <div className="text-5xl md:text-6xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform">0</div>
            <p className="text-foreground/70 font-medium">Corrupt officials permanently banned from politics</p>
            <p className="text-[10px] text-foreground/40 mt-4 uppercase tracking-widest">(National Average)</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-saffron/5 dark:bg-saffron/10 border border-saffron/20 p-8 md:p-12 rounded-[2rem] text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-saffron" />
          <blockquote className="text-2xl md:text-3xl font-medium italic mb-8 leading-relaxed">
            "A system that crushes hope doesn't deserve our silence. 
            We are not asking for permission to survive."
          </blockquote>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#transparency" 
              className="w-full sm:w-auto bg-charcoal dark:bg-white dark:text-charcoal text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              🗳️ Demand Accountability
            </Link>
            <Link 
              href="#stories" 
              className="w-full sm:w-auto bg-transparent border border-charcoal/20 dark:border-white/20 px-8 py-3 rounded-full font-bold hover:bg-charcoal/5 dark:hover:bg-white/5 transition-colors"
            >
              ✍️ Share Your Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
