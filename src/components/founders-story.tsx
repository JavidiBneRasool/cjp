'use client'

import * as React from 'react'

export function FoundersStory() {
  return (
    <section className="py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-6">The Origin</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">Founder's Story: <br /><span className="text-foreground/60 italic">"Silence has become too expensive"</span></h3>
          
          <div className="space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed font-serif">
            <p>
              I grew up in the valleys of Kashmir, where the beauty of the mountains often masked the 
              ugliness of the systems meant to govern us. I saw friends with double masters degrees 
              selling apples on the roadside. I saw parents losing sleep over school fees while 
              development funds vanished into thin air.
            </p>
            
            <div className="relative py-12 my-12">
              <div className="absolute top-0 left-0 w-16 h-1 bg-saffron" />
              <blockquote className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                "Kashmir has rivers powerful enough to light nations, yet our villages face 
                electricity shortages every winter. This is not bad luck. This is a choice made by those in power."
              </blockquote>
              <div className="absolute bottom-0 right-0 w-16 h-1 bg-green" />
            </div>

            <p>
              CJP Kashmir wasn't born in a boardroom. It was born out of a realization that the traditional 
              political parties only cared about our votes, not our lives. They mocked our struggle, 
              calling us a 'nuisance' and 'pests'. 
            </p>
            
            <p className="font-bold text-foreground">
              Fine. If we are pests to your corruption, then let us be the Cockroaches that survive 
              your poison. 
            </p>

            <p>
              We are not against peace. We are against systems that profit while innocent people suffer. 
              We are here to rebuild Kashmir, one village at a time, through the only thing that 
              actually terrifies a corrupt man: <span className="text-saffron underline decoration-2 underline-offset-4">Radical Transparency.</span>
            </p>
          </div>

          <div className="mt-16 flex items-center space-x-6">
            <div className="w-16 h-16 rounded-full bg-charcoal dark:bg-white/10 flex items-center justify-center text-saffron text-2xl font-bold">🪳</div>
            <div>
              <p className="font-bold text-lg">Javidi Bne Rasool</p>
              <p className="text-sm text-foreground/50 uppercase tracking-widest">Founder, CJP Kashmir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
