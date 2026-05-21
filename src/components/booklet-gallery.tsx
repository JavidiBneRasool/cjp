'use client'

import * as React from 'react'
import { X, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'

const booklets = [
  { 
    id: 'needs',
    src: '/assets/whatkashmirneeds.png', 
    title: 'What Kashmir Needs',
    chapter: 'The Need',
    content: 'Kashmir needs more than just promises. It needs structural accountability, digital rights, and a system that serves the youth, not the elites.'
  },
  { 
    id: 'stand',
    src: '/assets/whatwestandfor.png', 
    title: 'What We Stand For',
    chapter: 'The Vision',
    content: 'We stand for a future where every Kashmiri child has access to fear-free education and every graduate has a path to a dignified life.'
  },
  { 
    id: 'follow',
    src: '/assets/followthemovement.png', 
    title: 'Follow the Movement',
    chapter: 'The Action',
    content: 'The swarm is growing. Join the colony, report corruption, and participate in the first digital rebellion of the valley.'
  },
  { 
    id: 'beginning',
    src: '/assets/thisisonlythebegining.png', 
    title: 'This is Only the Beginning',
    chapter: 'The Future',
    content: '2030 is our target. We are building the infrastructure for a transparent Jammu & Kashmir that cannot be shut down.'
  },
  { 
    id: 'identity',
    src: '/assets/wearenotanotherpoliticalpage.png', 
    title: 'We Are Not Another Political Page',
    chapter: 'The Identity',
    content: 'We are a satire-powered, data-driven survival movement. We don’t want your vote; we want your voice.'
  },
]

export function BookletGallery() {
  const [activeChapter, setActiveChapter] = React.useState<typeof booklets[0] | null>(null)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full h-screen bg-charcoal overflow-hidden group/gallery">
      <div className="absolute top-8 left-8 z-20">
        <h2 className="text-sm font-bold text-saffron uppercase tracking-[0.5em] mb-2 neon">The Booklet Series</h2>
        <h3 className="text-2xl md:text-4xl font-bold text-white glitch">Digital Resistance Library</h3>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-4 z-20 flex items-center">
        <button 
          onClick={() => scroll('left')}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-saffron transition-all opacity-0 group-hover/gallery:opacity-100"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-20 flex items-center">
        <button 
          onClick={() => scroll('right')}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-saffron transition-all opacity-0 group-hover/gallery:opacity-100"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {booklets.map((booklet) => (
          <div 
            key={booklet.id}
            className="flex-none w-full h-full snap-center relative cursor-pointer group"
            onClick={() => setActiveChapter(booklet)}
          >
            <img 
              src={booklet.src} 
              alt={booklet.title} 
              className="w-full h-full object-cover md:object-contain bg-black/50 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-12 left-12 right-12 z-10 text-white">
              <span className="text-saffron font-bold uppercase tracking-widest text-xs mb-4 block">Chapter: {booklet.chapter}</span>
              <h4 className="text-3xl md:text-6xl font-bold mb-4 glitch">{booklet.title}</h4>
              <button className="flex items-center space-x-2 text-gold font-bold uppercase tracking-widest text-sm hover:underline">
                <BookOpen className="w-4 h-4" />
                <span>Open Chapter View</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Chapter View Modal */}
      {activeChapter && (
        <div className="fixed inset-0 z-[100] bg-background animate-in fade-in zoom-in duration-300 overflow-y-auto">
          <div className="sticky top-0 z-10 p-6 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-charcoal/10">
            <div className="flex items-center space-x-4">
              <span className="text-saffron font-bold uppercase tracking-widest text-sm">Chapter: {activeChapter.chapter}</span>
              <span className="w-1 h-1 rounded-full bg-charcoal/20" />
              <span className="font-bold text-lg">{activeChapter.title}</span>
            </div>
            <button 
              onClick={() => setActiveChapter(null)}
              className="p-2 rounded-full hover:bg-charcoal/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="sticky top-32">
                <img 
                  src={activeChapter.src} 
                  alt={activeChapter.title} 
                  className="w-full h-auto rounded-3xl shadow-2xl border border-charcoal/10"
                />
              </div>
              <div className="space-y-12">
                <div className="prose prose-lg dark:prose-invert">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight glitch">{activeChapter.title}</h2>
                  <p className="text-2xl text-foreground/80 leading-relaxed font-serif italic">
                    {activeChapter.content}
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-saffron/5 border border-saffron/20">
                  <h4 className="font-bold text-saffron uppercase tracking-widest text-sm mb-4">Chapter Vision</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    This booklet serves as a tactical guide for the Digital Rebellion. We are not just mapping 
                    problems; we are designing the decentralized infrastructure for a future Kashmir.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-charcoal text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity">
                    Download Booklet
                  </button>
                  <button className="border border-charcoal/20 py-4 rounded-2xl font-bold hover:bg-charcoal/5 transition-colors">
                    Share Insight
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for Hidden Scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
