'use client'

import * as React from 'react'
import { Shield, Moon, RefreshCw, Users2 } from 'lucide-react'

const symbols = [
  {
    icon: <Shield className="w-10 h-10 text-saffron" />,
    title: '🛡️ Survives Poison',
    description: 'Like us — surviving corruption, neglect, and broken promises. We are immune to the political decay that kills others.',
  },
  {
    icon: <Moon className="w-10 h-10 text-gold" />,
    title: '🌑 Thrives in Darkness',
    description: 'When systems fail and the lights go out, ordinary people keep the valley alive. We work in the shadows to build the future.',
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-green" />,
    title: '🔄 Adapts to Change',
    description: 'Youth don’t wait for permission. We evolve. We build alternatives when the main path is blocked.',
  },
  {
    icon: <Users2 className="w-10 h-10 text-saffron" />,
    title: '👥 Collective Strength',
    description: 'One cockroach is ignored. A swarm cannot be stopped. Our power is in our number and our refusal to go away.',
  },
]

export function Symbolism() {
  return (
    <section className="py-24 px-4 bg-charcoal text-white relative overflow-hidden">
      {/* Subtle Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-saffron rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-gold uppercase tracking-[0.4em] mb-4">Identity</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              The Cockroach Is Not an Insult. <br />
              <span className="text-saffron">It's Our Badge.</span>
            </h3>
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              The elite see a pest. We see proof: The ones you mocked became the ones who survived. 
              We are the final witnesses to your failure.
            </p>
            
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm group hover:border-saffron/30 transition-all">
              <p className="text-2xl font-medium italic group-hover:text-saffron transition-colors">
                "The ones you mocked became the ones who survived."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {symbols.map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] cursor-default"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
