'use client'

import * as React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="text-3xl font-bold tracking-tighter text-saffron block mb-6">
              🪳 CJP KASHMIR
            </span>
            <p className="text-white/70 max-w-md text-lg italic leading-relaxed">
              "We are the generation insulted, ignored, unemployed, overqualified, underpaid, 
              digitally awake, and politically homeless. We are not weak because we survived the system. 
              <strong> We are dangerous because we learned how.</strong>"
            </p>
          </div>
          
          <div>
            <h4 className="text-gold font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="#manifesto" className="text-white/60 hover:text-saffron transition-colors">The Manifesto</Link></li>
              <li><Link href="#transparency" className="text-white/60 hover:text-saffron transition-colors">Live Dashboard</Link></li>
              <li><Link href="#stories" className="text-white/60 hover:text-saffron transition-colors">Kashmir Voices</Link></li>
              <li><Link href="/news" className="text-white/60 hover:text-saffron transition-colors">News & Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold mb-6 uppercase tracking-widest text-sm">Community</h4>
            <ul className="space-y-4">
              <li><Link href="#join" className="text-white/60 hover:text-saffron transition-colors">Join the Swarm</Link></li>
              <li><Link href="/press" className="text-white/60 hover:text-saffron transition-colors">Media Kit</Link></li>
              <li><Link href="/terms" className="text-white/60 hover:text-saffron transition-colors">Privacy & Data</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-saffron transition-colors">Contact Colony</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-sm">
          <p>
            🪳 CJP Kashmir — A satirical movement for real change. 
            Not registered with Election Commission. 
          </p>
          <div className="flex space-x-6">
            <span>Powered by rage, hope, and too much chai.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
