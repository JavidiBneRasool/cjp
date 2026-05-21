'use client'

import * as React from 'react'
import { 
  ShieldAlert, 
  Search, 
  Cpu, 
  School, 
  Briefcase, 
  Globe, 
  Gavel, 
  Heart, 
  Zap, 
  Scale 
} from 'lucide-react'

const promises = [
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Digital Sovereignty",
    description: "End arbitrary internet shutdowns. High-speed access for every tehsil is a non-negotiable right."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Blockchain Transparency",
    description: "Every rupee of development funds tracked on a public, immutable ledger."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "The Startup Grant",
    description: "₹10,000 Cr fund for local innovators. We build the future in the valley, not abroad."
  },
  {
    icon: <School className="w-8 h-8" />,
    title: "Reformed Education",
    description: "Coding and critical thinking from Grade 6. No more degree-mills; only skill-factories."
  },
  {
    icon: <Gavel className="w-8 h-8" />,
    title: "Systemic Accountability",
    description: "Swift, public trials for corruption cases involving public infrastructure."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Connectivity",
    description: "Direct export channels for Kashmiri artisans, bypassing exploitative middlemen."
  },
]

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-card-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <h2 className="text-[10px] font-black text-saffron uppercase tracking-[0.4em] mb-2 neon">The Kashmir Manifesto</h2>
          <h3 className="text-2xl md:text-4xl font-black mb-4 glitch tracking-tighter uppercase italic">10 Promises to the Valley</h3>
          <p className="text-sm text-foreground/50 leading-relaxed scramble italic">
            A blueprint for a dignified, transparent, and prosperous Jammu & Kashmir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {promises.map((promise, index) => (
            <div 
              key={index}
              className="promise-card card-aggressive reveal group p-6 rounded bg-background border border-white/5 hover:border-saffron/30 transition-all duration-300 shadow-sm"
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300 origin-left text-saffron">
                {promise.icon}
              </div>
              <h4 className="text-base font-black uppercase tracking-tight mb-2 group-hover:text-saffron transition-colors italic">
                {promise.title}
              </h4>
              <p className="text-xs text-foreground/50 leading-relaxed">
                {promise.description}
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-saffron text-[10px] font-black uppercase tracking-widest cursor-pointer hover:underline">
                  Action Plan →
                </span>
              </div>
            </div>
          ))}

          {/* Vision Card */}
          <div className="lg:col-span-1 p-6 rounded bg-black text-white flex flex-col justify-between border border-white/10 shadow-xl relative overflow-hidden group reveal reveal-delay-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-saffron/20 transition-colors" />
            
            <div>
              <h4 className="text-saffron font-black text-[10px] uppercase tracking-widest mb-4">2030 Milestones</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green" />
                  <span className="text-[10px] font-bold uppercase text-white/70">100% Tehsil Broadband</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green" />
                  <span className="text-[10px] font-bold uppercase text-white/70">Zero-Paper Governance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green" />
                  <span className="text-[10px] font-bold uppercase text-white/70">The 'Kashmir-Valley' Tech Hub</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-[10px] text-white/40 italic mb-4 leading-relaxed">
                "We don't need your vote. We need your brilliance. Join the digital rebellion."
              </p>
              <button className="w-full bg-white text-black py-2 rounded text-[10px] font-black uppercase tracking-widest hover:bg-saffron hover:text-white transition-all">
                Download PDF Manifesto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
