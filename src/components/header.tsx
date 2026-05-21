'use client'

import * as React from 'react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const navLinks = [
  { name: 'Manifesto', href: '#manifesto' },
  { name: 'Stories', href: '#stories' },
  { name: 'Transparency', href: '#transparency' },
  { name: 'News', href: '/news' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-charcoal/10 py-2'
          : 'bg-transparent border-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img 
            src="/assets/logo.jpg" 
            alt="CJP Kashmir Logo" 
            className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-saffron transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-2 pl-4 border-l border-charcoal/10">
            <button className="text-xs font-bold px-2 py-1 rounded hover:bg-charcoal/5 dark:hover:bg-white/5 transition-colors">
              اردو
            </button>
            <ThemeToggle />
            <Link
              href="#join"
              className="bg-saffron hover:bg-saffron/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-saffron/20"
            >
              Join the Swarm
            </Link>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-charcoal/10 py-6 px-4 space-y-4 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium hover:text-saffron transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            <button className="text-sm font-bold w-fit border border-charcoal/20 px-3 py-1 rounded">
              اردو / Kashmiri
            </button>
            <Link
              href="#join"
              onClick={() => setIsMenuOpen(false)}
              className="bg-saffron text-white text-center py-3 rounded-full font-bold shadow-lg shadow-saffron/20"
            >
              Join the Swarm
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
