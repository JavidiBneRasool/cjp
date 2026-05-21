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
    <section className="py-24 px-4 bg-card-bg">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.3em] mb-4">The Reality Check</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Real Problems of Kashmir</h3>
          <p className="text-lg text-foreground/60 leading-relaxed">
            While others debate ideology, we document the survival struggle of every Kashmiri. 
            The system isn't just broken; it's designed to ignore these.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`p-10 rounded-[2.5rem] border transition-all hover:shadow-xl ${problem.color}`}
            >
              <div className="mb-8">{problem.icon}</div>
              <h4 className="text-2xl font-bold mb-6">{problem.category}</h4>
              <ul className="space-y-4">
                {problem.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Pull Quote Card */}
          <div className="lg:col-span-1 p-10 rounded-[2.5rem] bg-charcoal text-white flex items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-saffron/40 transition-colors" />
            <blockquote className="text-2xl font-bold leading-tight relative z-10">
              "We are not against peace. We are against systems that profit while innocent people suffer."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
