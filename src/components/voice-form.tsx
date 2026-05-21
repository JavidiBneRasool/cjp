'use client'

import * as React from 'react'
import { Send, ShieldCheck, MapPin } from 'lucide-react'

export function VoiceForm() {
  const [isAnonymous, setIsAnonymous] = React.useState(true)

  return (
    <section id="stories" className="py-24 px-4 bg-card-bg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">Community Input</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Tell Us What to Fight For.</h3>
            <p className="text-lg text-foreground/60 leading-relaxed mb-8">
              What's broken in your corner of Kashmir? Education? Jobs? Water? Internet? 
              Tell the Colony — anonymously if you want. We turn your stories into data, and data into demands.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center text-saffron shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">End-to-End Encrypted</h4>
                  <p className="text-sm text-foreground/50">Your identity is protected by default. We never share raw data.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-green shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">District-Based Mapping</h4>
                  <p className="text-sm text-foreground/50">We group reports by district to identify regional systemic failures.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-charcoal/10 dark:border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-charcoal/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 pl-1">What's the issue?</label>
                <textarea 
                  className="w-full bg-card-bg border border-charcoal/10 dark:border-white/10 rounded-2xl p-4 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all resize-none"
                  placeholder="Describe the systemic failure you're facing... (e.g., 'No electricity in our village for 3 days', 'Degree verification pending for 2 years')"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 pl-1">District</label>
                  <select className="w-full bg-card-bg border border-charcoal/10 dark:border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all appearance-none cursor-pointer">
                    <option>Srinagar</option>
                    <option>Jammu</option>
                    <option>Anantnag</option>
                    <option>Baramulla</option>
                    <option>Budgam</option>
                    <option>Pulwama</option>
                    <option>Shopian</option>
                    <option>Kulgam</option>
                    <option>Ganderbal</option>
                    <option>Bandipora</option>
                    <option>Kupwara</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 pl-1">Category</label>
                  <select className="w-full bg-card-bg border border-charcoal/10 dark:border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all appearance-none cursor-pointer">
                    <option>Unemployment</option>
                    <option>Corruption</option>
                    <option>Infrastructure</option>
                    <option>Education</option>
                    <option>Internet/Digital</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-3">
                  <button 
                    type="button"
                    onClick={() => setIsAnonymous(!isAnonymous)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${isAnonymous ? 'bg-saffron' : 'bg-charcoal/20 dark:bg-white/20'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isAnonymous ? 'left-7' : 'left-1'}`} />
                  </button>
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">Share Anonymously</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-saffron text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-saffron/90 transition-all group"
              >
                <span>Send to the Colony</span>
                <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
