'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hawkings-bg/95 backdrop-blur-md border-b border-hawkings-border">
      <nav className="max-w-[1600px] mx-auto px-4 md:px-16 py-8 flex justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center hover:opacity-70 transition-hawkings"
        >
          <Image 
            src="/logo.png" 
            alt="Hawkings" 
            width={135} 
            height={25}
            priority
          />
        </Link>
        
        <div className="flex gap-4 md:gap-12">
          <a 
            href="#services" 
            className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings"
          >
            Service
          </a>
          <a 
            href="#careers" 
            className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings"
          >
            Careers
          </a>
          <a 
            href="#about" 
            className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
