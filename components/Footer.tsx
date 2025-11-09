import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-hawkings-border">
      <div className="max-w-[1600px] mx-auto px-4 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-12">
          <div>
            <div className="font-serif text-2xl font-light tracking-wide mb-4">HAWKINGS</div>
            <div className="text-sm text-hawkings-gray font-light tracking-wide">
              Burn. Build. Leave a legacy.
            </div>
          </div>
          
          <div className="flex justify-start md:justify-end gap-4 md:gap-12">
            <a 
              href="#services" 
              className="text-xs uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings"
            >
              Service
            </a>
            <a 
              href="#careers" 
              className="text-xs uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings"
            >
              Careers
            </a>
            <a 
              href="#about" 
              className="text-xs uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-xs uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="mb-4">
            <Link 
              href="/terms" 
              className="text-[11px] text-hawkings-light-gray hover:text-hawkings-charcoal transition-hawkings mx-4"
            >
              利用規約
            </Link>
            <Link 
              href="/privacy" 
              className="text-[11px] text-hawkings-light-gray hover:text-hawkings-charcoal transition-hawkings mx-4"
            >
              プライバシーポリシー
            </Link>
          </div>
          <div className="text-[11px] text-hawkings-light-gray uppercase tracking-wide">
            © 2025 HAWKINGS INC. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  )
}
