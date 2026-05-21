'use client'

import * as React from 'react'

const posters = [
  { src: '/assets/whatkashmirneeds.png', alt: 'What Kashmir Needs' },
  { src: '/assets/whatwestandfor.png', alt: 'What We Stand For' },
  { src: '/assets/followthemovement.png', alt: 'Follow the Movement' },
  { src: '/assets/thisisonlythebegining.png', alt: 'This is Only the Beginning' },
  { src: '/assets/wearenotanotherpoliticalpage.png', alt: 'We Are Not Another Political Page' },
]

export function Gallery() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">Visual Dispatches</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">The Visual Resistance</h3>
          <p className="text-lg text-foreground/60">
            Art as a weapon. Every poster is a promise, every pixel a protest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[2rem] bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10"
            >
              <img 
                src={poster.src} 
                alt={poster.alt} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-saffron/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
          
          {/* Join CTA Card in Gallery */}
          <div className="p-10 rounded-[2.5rem] bg-saffron text-white flex flex-col justify-center items-center text-center">
            <h4 className="text-2xl font-bold mb-4">The Swarm is Growing</h4>
            <p className="mb-8 text-white/80">Download, share, and spread the proof.</p>
            <button className="bg-white text-saffron px-8 py-3 rounded-full font-bold shadow-lg">
              Get Assets Pack
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
