'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/assets/cjphasenteredthesystem.png" 
          alt="Campaign Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Crawling cockroach */}
      <div className="cockroach-crawl">🪳</div>

      {/* Swarming cockroaches */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="swarm-dot absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            🪳
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-saffron/20 border border-saffron/40 text-saffron text-sm font-bold uppercase tracking-widest animate-fade-in shake">
          🪳 We Survive Everything
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-5xl mx-auto glitch hero-text">
          "They called us pests. <br />
          <span className="text-saffron">We became the proof</span> <br />
          that truth survives."
        </h1>
        
        <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed font-medium scramble">
          Unemployed. Overlooked. Overqualified. Underpaid. <br className="hidden md:block" />
          Human-centric writing with AI-backed quantum protection for valid guests and platform atmosphere.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#join"
            className="w-full sm:w-auto bg-saffron text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-saffron/30 hover:bg-saffron/90 transition-all transform hover:scale-105 active:scale-95 btn-aggressive pulse-glow"
          >
            Join the Swarm — Free
          </Link>
          <Link
            href="#manifesto"
            className="w-full sm:w-auto bg-transparent border-2 border-white/20 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/5 transition-all btn-aggressive"
          >
            Read the Kashmir Manifesto ↓
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center animate-bounce opacity-70 text-white float">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Scroll to Rise</span>
          <ArrowDown className="w-5 h-5 text-saffron" />
        </div>
      </div>
    </section>
  )
}
