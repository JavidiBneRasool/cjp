'use client'

import * as React from 'react'
import { 
  GraduationCap, 
  Sprout, 
  Briefcase, 
  Search, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Users, 
  HeartPulse, 
  Scale 
} from 'lucide-react'

const promises = [
  {
    icon: <GraduationCap className="w-8 h-8 text-saffron" />,
    title: '1. Education Without Fear',
    description: 'Scrap punitive exam systems. Fund skill centers in every tehsil. Protect students from political victimization.',
  },
  {
    icon: <Sprout className="w-8 h-8 text-green" />,
    title: '2. Farmer Dignity First',
    description: "Direct MSP payments. Cold-chain infrastructure. Zero middlemen. Kashmir's apples, saffron, walnuts — fair price, guaranteed.",
  },
  {
    icon: <Zap className="w-8 h-8 text-gold" />,
    title: '3. Jobs That Respect Skills',
    description: 'Startup grants for village innovators. Remote work hubs. AI training in local languages. Degrees don’t feed families — skills do.',
  },
  {
    icon: <Search className="w-8 h-8 text-saffron" />,
    title: '4. Radical Transparency',
    description: "Every rupee of J&K development funds tracked live on public dashboard. Politicians' attendance, promises, assets — visible to all.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-green" />,
    title: '5. Youth Voice in Governance',
    description: 'Verified app-based voting on local issues. Monthly constituency feedback loops. Not every 5 years — every 30 days.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    title: '6. Digital Rights as Human Rights',
    description: 'End arbitrary internet shutdowns. High-speed access for rural schools. Protect digital privacy from surveillance.',
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-saffron" />,
    title: '7. Mental Health for a New Gen',
    description: 'Trauma-informed counseling in every college. Zero-cost mental health clinics. Breaking the stigma of the "conflict generation".',
  },
  {
    icon: <Scale className="w-8 h-8 text-green" />,
    title: '8. Legal Aid for the Overlooked',
    description: 'Free legal support for youth facing systemic bias. Dedicated wing for labor rights and workplace harassment.',
  },
  {
    icon: <Users className="w-8 h-8 text-gold" />,
    title: '9. Women-Led Economy',
    description: 'Micro-loans for rural women entrepreneurs. 50% representation in local CJP chapters. Safety in public transport & workplaces.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-saffron" />,
    title: '10. Reverse Brain Drain',
    description: 'Incentives for Kashmiri diaspora to mentor local startups. Research fellowships for solving local problems (water, energy, climate).',
  },
]

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 px-4 bg-card-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4 neon">The Kashmir Manifesto</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 glitch">10 Promises to the Valley That Fed Us</h3>
          <p className="text-lg text-foreground/60 leading-relaxed scramble">
            We are not just a protest. We are a blueprint. These are our non-negotiable pillars for a 
            dignified, transparent, and prosperous Kashmir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div 
              key={index}
              className="promise-card card-aggressive reveal group p-8 rounded-2xl bg-background border border-charcoal/5 dark:border-white/5 hover:border-saffron/30 transition-all duration-300 hover:shadow-2xl hover:shadow-saffron/10 hover:-translate-y-1"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300 origin-left">
                {promise.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-saffron transition-colors">
                {promise.title}
              </h4>
              <p className="text-foreground/60 leading-relaxed">
                {promise.description}
              </p>
              <div className="mt-6 pt-6 border-t border-charcoal/5 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-saffron text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline shake">
                  See Action Plan →
                </span>
              </div>
            </div>
          ))}

          {/* Vision Sticky-style Card */}
          <div className="lg:col-span-1 p-8 rounded-2xl bg-charcoal text-white flex flex-col justify-between border border-white/10 shadow-xl relative overflow-hidden group reveal reveal-delay-4 card-aggressive">
            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-saffron/40 transition-colors" />
            
            <div>
              <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-6 neon">CJP Kashmir 2030 Goals</h4>
              <ul className="space-y-4">
                {[
                  '100% digital literacy in rural schools',
                  'Zero farmer suicides (debt relief)',
                  '50% women in local governance',
                  'Corruption cases resolved in <90 days',
                  'Mental health support in every college'
                ].map((goal, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm">
                    <span className="text-green mt-1">✓</span>
                    <span className="text-white/80">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <p className="text-xs text-white/40 italic leading-relaxed scramble">
                "Not every 5 years — <br />Every 30 days."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
