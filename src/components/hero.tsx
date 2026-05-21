'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowDown, X, BookOpen, ChevronLeft, ChevronRight, Send, Camera, Share } from 'lucide-react'

const Telegram = Send
const Instagram = Camera
const Facebook = Share

const posters = [
  { 
    id: 'entered',
    src: '/assets/cjphasenteredthesystem.png', 
    title: 'CJP Has Entered The System',
    chapter: 'The Entry',
    content: 'The system was never broken; it was built this way. We are the glitch that restores the purpose. CJP is not just a movement; it is a systemic reboot for Jammu & Kashmir.',
    quote: '"They called us pests. We became the proof that truth survives."'
  },
  { 
    id: 'needs',
    src: '/assets/whatkashmirneeds.png', 
    title: 'What Kashmir Needs',
    chapter: 'The Need',
    content: 'Kashmir needs more than just promises. It needs structural accountability, digital rights, and a system that serves the youth, not the elites.',
    quote: '"Accountability is not a request; it is a right."'
  },
  { 
    id: 'stand',
    src: '/assets/whatwestandfor.png', 
    title: 'What We Stand For',
    chapter: 'The Vision',
    content: 'We stand for a future where every Kashmiri child has access to fear-free education and every graduate has a path to a dignified life.',
    quote: '"Dignity over dependency."'
  },
  { 
    id: 'follow',
    src: '/assets/followthemovement.png', 
    title: 'Follow the Movement',
    chapter: 'The Action',
    content: 'The swarm is growing. Join the colony, report corruption, and participate in the first digital rebellion of the valley.',
    quote: '"The colony never sleeps."'
  },
  { 
    id: 'beginning',
    src: '/assets/thisisonlythebegining.png', 
    title: 'This is Only the Beginning',
    chapter: 'The Future',
    content: '2030 is our target. We are building the infrastructure for a transparent Jammu & Kashmir that cannot be shut down.',
    quote: '"The future is decentralized."'
  },
  { 
    id: 'identity',
    src: '/assets/wearenotanotherpoliticalpage.png', 
    title: 'Not Another Political Page',
    chapter: 'The Identity',
    content: 'We are a satire-powered, data-driven survival movement. We don’t want your vote; we want your voice.',
    quote: '"Voices over Votes."'
  },
]

export function Hero() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [activeChapter, setActiveChapter] = React.useState<typeof posters[0] | null>(null)
  const [showJoinModal, setShowJoinModal] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [isSending, setIsSending] = React.useState(false)

  const nextPoster = () => setActiveIndex((prev) => (prev + 1) % posters.length)
  const prevPoster = () => setActiveIndex((prev) => (prev - 1 + posters.length) % posters.length)

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setTimeout(() => {
      alert(`Encrypted message sent to the Colony: ${message}`)
      setIsSending(false)
      setShowJoinModal(false)
      setMessage('')
    }, 1500)
  }

  const scrollToNext = () => {
    const nextSection = document.getElementById('manifesto')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen w-full flex flex-col bg-black text-white pt-16">
      {/* Poster Display - Top Half */}
      <div className="relative w-full h-[55vh] flex items-center justify-center p-4">
        {posters.map((poster, index) => (
          <div
            key={poster.id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
          >
            <img 
              src={poster.src} 
              alt={poster.title} 
              className="max-w-full max-h-full w-auto h-auto object-contain mag-border shadow-2xl shadow-saffron/5"
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center z-20 pointer-events-none">
          <button onClick={prevPoster} className="p-2 rounded bg-black/40 hover:bg-saffron transition-all pointer-events-auto">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextPoster} className="p-2 rounded bg-black/40 hover:bg-saffron transition-all pointer-events-auto">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Overlay - Strictly Below Posters */}
      <div className="container mx-auto px-4 py-6 flex flex-col items-center text-center z-10 flex-grow">
        <div 
          className="inline-block px-3 py-1 mb-3 rounded bg-saffron/10 border border-saffron/30 text-saffron text-[9px] font-black uppercase tracking-[0.2em] animate-fade-in shake cursor-pointer"
          onClick={() => setActiveChapter(posters[activeIndex])}
        >
          🪳 CH. {activeIndex + 1}: {posters[activeIndex].chapter}
        </div>
        
        <h1 
          className="text-2xl md:text-5xl font-black tracking-tighter mb-3 leading-none glitch cursor-pointer uppercase italic"
          onClick={() => setActiveChapter(posters[activeIndex])}
        >
          {posters[activeIndex].title}
        </h1>
        
        <p className="text-xs md:text-base text-white/50 max-w-xl mx-auto mb-6 font-medium italic scramble">
          {posters[activeIndex].quote}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <button
            onClick={() => setShowJoinModal(true)}
            className="w-full sm:w-auto bg-saffron text-white px-6 py-2.5 rounded text-[10px] font-black uppercase tracking-widest btn-aggressive"
          >
            Join the Swarm
          </button>
          <button
            onClick={() => setActiveChapter(posters[activeIndex])}
            className="w-full sm:w-auto bg-transparent border border-white/20 px-6 py-2.5 rounded text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all btn-aggressive"
          >
            Details ↓
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://instagram.com/cjpkasmir" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-saffron transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://facebook.com/cjpkasmir" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-saffron transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://t.me/cjpkashmir" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-saffron transition-colors">
            <Telegram className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Crawling cockroach */}
      <div className="cockroach-crawl"></div>

      {/* Scroll Indicator */}
      <div 
        onClick={scrollToNext}
        className="pb-4 flex flex-col items-center opacity-30 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
      >
        <span className="text-[7px] uppercase tracking-[0.4em] font-black mb-1">Scroll</span>
        <ArrowDown className="w-3 h-3 text-saffron" />
      </div>

      {/* Chapter View Modal */}
      {activeChapter && (
        <div className="fixed inset-0 z-[100] bg-black/95 animate-in fade-in duration-300 overflow-y-auto">
          <div className="sticky top-0 z-10 p-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center space-x-4">
              <span className="text-saffron font-black uppercase tracking-widest text-[10px]">Chapter: {activeChapter.chapter}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-black text-xs uppercase tracking-tighter">{activeChapter.title}</span>
            </div>
            <button onClick={() => setActiveChapter(null)} className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="max-w-md mx-auto lg:max-w-none">
                <img src={activeChapter.src} alt={activeChapter.title} className="w-full h-auto rounded mag-border shadow-2xl" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-black leading-none glitch text-white uppercase italic">{activeChapter.title}</h2>
                <p className="text-lg text-white/70 leading-relaxed italic font-serif">{activeChapter.content}</p>
                <div className="p-6 rounded bg-saffron/5 border border-saffron/20">
                  <h4 className="font-black text-saffron uppercase tracking-widest text-[10px] mb-2">Colony Intel</h4>
                  <p className="text-xs text-white/50 leading-relaxed italic">Strategic narrative mapping for the systemic glitch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join the Swarm Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
          <div className="bg-black border border-white/10 p-6 md:p-10 rounded max-w-lg w-full shadow-2xl relative">
            <button onClick={() => setShowJoinModal(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-saffron font-black uppercase tracking-widest text-[10px] mb-2">Transmission Channel</h2>
            <h3 className="text-2xl font-black mb-4 glitch text-white uppercase italic">Join the Swarm</h3>
            <p className="text-[10px] text-white/40 mb-6 uppercase tracking-tight">Data sent to: <span className="text-saffron">info@cjpkashmir.in</span></p>
            <form onSubmit={handleJoinSubmit} className="space-y-4">
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded p-4 h-32 text-xs text-white focus:outline-none focus:ring-1 focus:ring-saffron transition-all resize-none italic"
                placeholder="Transmission details..."
              />
              <button type="submit" disabled={isSending} className="w-full bg-saffron text-white py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-saffron/90 transition-all flex items-center justify-center space-x-2">
                <span>{isSending ? 'Encrypting...' : 'Send Transmission'}</span>
                {!isSending && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
