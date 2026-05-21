'use client'

import * as React from 'react'
import { Eye, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react'

export function TransparencyDashboard() {
  return (
    <section id="transparency" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">Accountability</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Live Transparency Dashboard</h3>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Because promises mean nothing without proof. We are mapping every rupee of the 
              ₹2.3L Cr spent on J&K development since 2019.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-green bg-green/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-green/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
            </span>
            <span>Live System Monitoring</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Funds Tracked */}
          <div className="p-8 rounded-3xl bg-card-bg border border-charcoal/5 dark:border-white/5 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 rounded-2xl bg-saffron/10 text-saffron">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Metric 01</span>
            </div>
            <h4 className="text-foreground/60 text-sm font-bold uppercase tracking-widest mb-2">Funds Tracked</h4>
            <div className="text-4xl font-bold mb-2">₹0</div>
            <p className="text-xs text-foreground/40 mb-6">of ₹2.3L Cr development funds publicly mapped</p>
            <div className="w-full bg-charcoal/5 dark:bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-saffron h-full w-[0%] rounded-full" />
            </div>
          </div>

          {/* Corruption Reports */}
          <div className="p-8 rounded-3xl bg-card-bg border border-charcoal/5 dark:border-white/5 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 rounded-2xl bg-gold/10 text-gold">
                <AlertCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Metric 02</span>
            </div>
            <h4 className="text-foreground/60 text-sm font-bold uppercase tracking-widest mb-2">Corruption Reports</h4>
            <div className="text-4xl font-bold mb-2">0</div>
            <p className="text-xs text-foreground/40 mb-6">verified cases under investigation by the Colony</p>
            <button className="text-xs font-bold text-saffron hover:underline uppercase tracking-widest">View Open Cases →</button>
          </div>

          {/* Youth Policy Votes */}
          <div className="p-8 rounded-3xl bg-card-bg border border-charcoal/5 dark:border-white/5 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 rounded-2xl bg-green/10 text-green">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Metric 03</span>
            </div>
            <h4 className="text-foreground/60 text-sm font-bold uppercase tracking-widest mb-2">Policy Votes</h4>
            <div className="text-4xl font-bold mb-2">0</div>
            <p className="text-xs text-foreground/40 mb-6">Kashmiri youth decisions recorded this month</p>
            <button className="text-xs font-bold text-green hover:underline uppercase tracking-widest">Active Polls →</button>
          </div>
        </div>

        <div className="mt-8 p-6 bg-charcoal/5 dark:bg-white/5 rounded-2xl border border-charcoal/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center text-green">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold">Open-Source Ledger</p>
              <p className="text-xs text-foreground/40">All data is public. No login required. Powered by blockchain.</p>
            </div>
          </div>
          <button className="bg-foreground text-background px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
            Audit Data
          </button>
        </div>
      </div>
    </section>
  )
}
