'use client'

import * as React from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const newsItems = [
  {
    title: "Tracking J&K Development Funds: The RTI Mystery",
    date: "May 20, 2026",
    category: "Transparency",
    excerpt: "Why is ₹2.3L Cr spent since 2019 still invisible on the ground? We dive into the latest RTI responses.",
    slug: "tracking-jk-funds-rti"
  },
  {
    title: "The Unemployment Crisis: A Generation on Pause",
    date: "May 18, 2026",
    category: "Economy",
    excerpt: "With 87% youth unemployment, Kashmir faces a brain drain. CJP proposes a new Startup Grant for tehsil innovators.",
    slug: "unemployment-crisis-kashmir"
  },
  {
    title: "Internet Rights: Beyond the Kill-Switch",
    date: "May 15, 2026",
    category: "Digital",
    excerpt: "Internet is a human right. How arbitrary shutdowns are crippling Kashmir's emerging tech ecosystem.",
    slug: "internet-rights-kill-switch"
  }
]

export function NewsFeed() {
  return (
    <section id="news" className="bg-background border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6 border-b border-white/5">
          <h3 className="text-xl font-black uppercase tracking-tighter italic">Swarm Dispatches</h3>
          <Link 
            href="/news" 
            className="group flex items-center space-x-2 text-saffron text-[10px] font-black uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            <span>All Articles</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="divide-y divide-white/5">
          {newsItems.map((post, index) => (
            <article 
              key={index}
              className="group py-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-white/[0.02] transition-colors"
            >
              <div className="md:w-32 shrink-0">
                <span className="text-[10px] font-black text-saffron uppercase tracking-widest bg-saffron/10 px-2 py-0.5 rounded">
                  {post.category}
                </span>
              </div>
              
              <div className="flex-grow">
                <h4 className="text-lg font-bold group-hover:text-saffron transition-colors leading-none mb-1">
                  <Link href={`/news/${post.slug}`}>{post.title}</Link>
                </h4>
                <p className="text-xs text-foreground/40 line-clamp-1 italic">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center space-x-4 md:text-right">
                <div className="flex items-center space-x-1 text-foreground/20 text-[10px] font-bold">
                  <Calendar className="w-2.5 h-2.5" />
                  <span>{post.date.split(',')[0]}</span>
                </div>
                <Link 
                  href={`/news/${post.slug}`}
                  className="p-2 rounded-full border border-white/10 hover:bg-saffron hover:border-saffron transition-all"
                >
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
