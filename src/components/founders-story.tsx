'use client'

import * as React from 'react'

export function FoundersStory() {
  return (
    <section className="bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[10px] font-black text-saffron uppercase tracking-[0.4em] mb-4">The Origin</h2>
          <h3 className="text-2xl md:text-4xl font-black mb-8 leading-none tracking-tighter uppercase italic">Founder's Story: <br /><span className="text-foreground/40">Silence is too expensive</span></h3>
          
          <div className="space-y-4 text-xs md:text-sm text-foreground/70 leading-relaxed italic">
            <p>
              I grew up in the valleys of Kashmir, where the beauty of the mountains often masked the 
              ugliness of the systems meant to govern us. I saw friends with double masters degrees 
              selling apples on the roadside. I saw parents losing sleep over school fees while 
              development funds vanished into thin air.
            </p>
            
            <div className="relative py-8 my-8 border-l-2 border-saffron pl-6">
              <blockquote className="text-lg md:text-2xl font-black text-foreground leading-tight tracking-tight uppercase">
                "Kashmir has rivers powerful enough to light nations, yet our villages face 
                electricity shortages every winter. This is not bad luck. This is a choice made by those in power."
              </blockquote>
            </div>

            <p>
              CJP Kashmir wasn't born in a boardroom. It was born out of a realization that the traditional 
              political parties only cared about our votes, not our lives. They mocked our struggle, 
              calling us a 'nuisance' and 'pests'. 
            </p>
            
            <p className="font-black text-foreground uppercase tracking-tight">
              Fine. If we are pests to your corruption, then let us be the Cockroaches that survive 
              your poison. 
            </p>

            <p>
              We are not against peace. We are against systems that profit while innocent people suffer. 
              We are here to rebuild Kashmir, one village at a time, through <span className="text-saffron underline decoration-2 underline-offset-4 font-black">Radical Transparency.</span>
            </p>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <div className="w-12 h-12 rounded bg-black flex items-center justify-center text-saffron text-xl font-bold mag-border shadow-lg">🪳</div>
            <div>
              <p className="text-[10px] font-black uppercase text-foreground">iBneRasool</p>
              <p className="text-[8px] font-bold uppercase text-foreground/40">Founder, CJP Kashmir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
