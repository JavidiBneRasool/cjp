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
    // Simulate sending to info@cjpkashmir.in
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
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Poster Backgrounds - Fitted and Centered */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-4 md:p-12 lg:p-16">
        {posters.map((poster, index) => (
          <div
            key={poster.id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
          >
            <img 
              src={poster.src} 
              alt={poster.title} 
              className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl shadow-saffron/10 rounded-lg"
            />
            {/* Darkening overlay for text readability, only on the active poster */}
            <div className="absolute inset-0 bg-black/40 z-[1]" />
          </div>
        ))}
      </div>

      {/* Crawling cockroach */}
      <div className="cockroach-crawl"></div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center justify-center h-full pt-20 relative">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-saffron/20 border border-saffron/40 text-saffron text-sm font-bold uppercase tracking-widest animate-fade-in shake cursor-pointer" onClick={() => setActiveChapter(posters[activeIndex])}>
          🪳 Chapter {activeIndex + 1}: {posters[activeIndex].chapter}
        </div>
        
        <h1 
          className="text-4xl md:text-8xl font-bold tracking-tight mb-6 leading-tight max-w-6xl mx-auto glitch cursor-pointer transition-transform hover:scale-105"
          onClick={() => setActiveChapter(posters[activeIndex])}
        >
          {posters[activeIndex].title}
        </h1>
        
        <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium scramble">
          {posters[activeIndex].quote}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => setShowJoinModal(true)}
            className="w-full sm:w-auto bg-saffron text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-saffron/30 hover:bg-saffron/90 transition-all transform hover:scale-105 active:scale-95 btn-aggressive pulse-glow"
          >
            Join the Swarm
          </button>
          <button
            onClick={() => setActiveChapter(posters[activeIndex])}
            className="w-full sm:w-auto bg-transparent border-2 border-white/20 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/5 transition-all btn-aggressive"
          >
            Read Chapter Details ↓
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-8 mb-12">
          <a href="https://instagram.com/cjpkasmir" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-saffron transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/cjpkasmir" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-saffron transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://t.me/cjpkashmir" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-saffron transition-colors">
            <Telegram className="w-6 h-6" />
          </a>
        </div>

        {/* Navigation */}
        <div className="absolute inset-y-0 left-4 flex items-center z-20">
          <button onClick={prevPoster} className="p-3 rounded-full bg-white/10 hover:bg-saffron transition-all">
            <ChevronLeft className="w-8 h-8" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center z-20">
          <button onClick={nextPoster} className="p-3 rounded-full bg-white/10 hover:bg-saffron transition-all">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={scrollToNext}
          className="absolute bottom-8 flex flex-col items-center animate-bounce opacity-70 text-white cursor-pointer hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Scroll to Rise</span>
          <ArrowDown className="w-5 h-5 text-saffron" />
        </div>
      </div>

      {/* Chapter View Modal */}
      {activeChapter && (
        <div className="fixed inset-0 z-[100] bg-black/95 animate-in fade-in duration-300 overflow-y-auto">
          <div className="sticky top-0 z-10 p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center space-x-4">
              <span className="text-saffron font-bold uppercase tracking-widest text-sm">Chapter: {activeChapter.chapter}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-bold text-lg">{activeChapter.title}</span>
            </div>
            <button 
              onClick={() => setActiveChapter(null)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <img 
                  src={activeChapter.src} 
                  alt={activeChapter.title} 
                  className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
                />
              </div>
              <div className="space-y-12">
                <div className="prose prose-lg dark:prose-invert">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight glitch text-white">{activeChapter.title}</h2>
                  <p className="text-2xl text-white/80 leading-relaxed font-serif italic">
                    {activeChapter.content}
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-saffron/5 border border-saffron/20">
                  <h4 className="font-bold text-saffron uppercase tracking-widest text-sm mb-4">Colony Intel</h4>
                  <p className="text-white/70 leading-relaxed">
                    This poster is part of our strategic narrative mapping. Each chapter reveals a different 
                    layer of the systemic glitch we are here to expose and fix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join the Swarm Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
          <div className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full shadow-2xl relative">
            <button 
              onClick={() => setShowJoinModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-saffron font-bold uppercase tracking-widest text-sm mb-4">Transmission Channel</h2>
            <h3 className="text-3xl font-bold mb-6 glitch text-white">Join the Swarm</h3>
            <p className="text-white/60 mb-8">
              Send an encrypted message directly to the Colony. Your voice is your weapon. 
              Data sent to: <span className="text-saffron">info@cjpkashmir.in</span>
            </p>

            <form onSubmit={handleJoinSubmit} className="space-y-6">
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-2xl p-6 min-h-[200px] text-white focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all resize-none"
                placeholder="Write your message to the colony... Why do you want to join? What can you contribute?"
              />

              <button 
                type="submit"
                disabled={isSending}
                className="w-full bg-saffron text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-saffron/90 transition-all group disabled:opacity-50"
              >
                <span>{isSending ? 'Encrypting...' : 'Send Encrypted Message'}</span>
                {!isSending && <Send className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
