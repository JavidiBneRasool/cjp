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
    <section id="news" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-green uppercase tracking-[0.3em] mb-4">Latest Updates</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Swarm News</h3>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Dispatches from the colony. Real stories, real data, no political filter.
            </p>
          </div>
          <Link 
            href="/news" 
            className="group flex items-center space-x-2 text-saffron font-bold uppercase tracking-widest text-sm hover:underline"
          >
            <span>View All Dispatches</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((post, index) => (
            <article 
              key={index}
              className="group bg-card-bg border border-charcoal/5 dark:border-white/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-charcoal/5 transition-all flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-saffron/10 text-saffron text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-foreground/30 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-saffron transition-colors leading-tight">
                  <Link href={`/news/${post.slug}`}>{post.title}</Link>
                </h4>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>
              <div className="px-8 pb-8">
                <Link 
                  href={`/news/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:text-saffron transition-colors"
                >
                  <span>Read Article</span>
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
