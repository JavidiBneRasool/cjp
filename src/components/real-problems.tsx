'use client'

import * as React from 'react'
import { 
  Users, 
  UserPlus, 
  GraduationCap, 
  HardHat, 
  AlertCircle 
} from 'lucide-react'

const problems = [
  {
    category: 'Youth Problems',
    icon: <Users className="w-8 h-8 text-saffron" />,
    items: ['Endemic Unemployment', 'Drug Addiction Epidemic', 'Forced Migration', 'Loss of Hope'],
    color: 'border-saffron/20 bg-saffron/5'
  },
  {
    category: "Women's Problems",
    icon: <UserPlus className="w-8 h-8 text-green" />,
    items: ['Public Safety Gaps', 'Maternal Healthcare Access', 'Lack of Representation', 'Economic Dependence'],
    color: 'border-green/20 bg-green/5'
  },
  {
    category: 'Student Problems',
    icon: <GraduationCap className="w-8 h-8 text-gold" />,
    items: ['Interrupted Education', 'Outdated Curriculums', 'Exam System Failures', 'Political Victimization'],
    color: 'border-gold/20 bg-gold/5'
  },
  {
    category: 'Worker Problems',
    icon: <HardHat className="w-8 h-8 text-saffron" />,
    items: ['Wage Exploitation', 'Runaway Inflation', 'Seasonal Job Insecurity', 'Lack of Labor Protections'],
    color: 'border-saffron/20 bg-saffron/5'
  },
  {
    category: 'Public Problems',
    icon: <AlertCircle className="w-8 h-8 text-green" />,
    items: ['Systemic Corruption', 'Infrastructure Decay', 'Deep Systemic Distrust', 'Broken Public Services'],
    color: 'border-green/20 bg-green/5'
  }
]

export function RealProblems() {
  return (
    <section className="bg-card-bg border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <h2 className="text-[10px] font-black text-saffron uppercase tracking-[0.4em] mb-2">Reality Check</h2>
          <h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase italic">Real Problems</h3>
          <p className="text-sm text-foreground/50 leading-relaxed italic">
            Documenting the survival struggle. The system isn't broken; it's designed this way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`p-6 rounded border transition-all card-aggressive ${problem.color}`}
            >
              <div className="mb-4">{problem.icon}</div>
              <h4 className="text-lg font-black uppercase tracking-tight mb-4 italic">{problem.category}</h4>
              <ul className="space-y-2">
                {problem.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-[10px] font-bold uppercase text-foreground/60">
                    <span className="w-1 h-1 rounded-full bg-saffron" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Pull Quote Card */}
          <div className="lg:col-span-1 p-6 rounded bg-black text-white flex items-center justify-center text-center relative overflow-hidden group border border-white/10">
            <blockquote className="text-lg font-black leading-tight relative z-10 uppercase italic tracking-tighter">
              "We are against systems that profit while innocent people suffer."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
