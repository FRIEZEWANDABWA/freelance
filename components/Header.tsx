import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary-900 shadow-lg fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Zap className="text-accent-500 mr-2" size={28} />
            <div>
              <h1 className="text-xl font-bold text-accent-200">SmartSpark Services</h1>
              <p className="text-xs text-primary-300">Where AI and Creativity Ignite</p>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className="text-primary-100 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-primary-100 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors">About</Link>
              <Link href="/services" className="text-primary-100 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors">Services</Link>
              <Link href="/portfolio" className="text-primary-100 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors">Portfolio</Link>
              <Link href="/blog" className="text-primary-100 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors">Blog</Link>
              <Link href="/contact" className="bg-accent-500 text-primary-100 px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-600 transition-colors">Get a Quote</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-100 hover:text-accent-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-800 border-t border-primary-700">
              <Link href="/" className="block text-primary-100 hover:text-accent-500 px-3 py-2 text-base font-medium">Home</Link>
              <Link href="/about" className="block text-primary-100 hover:text-accent-500 px-3 py-2 text-base font-medium">About</Link>
              <Link href="/services" className="block text-primary-100 hover:text-accent-500 px-3 py-2 text-base font-medium">Services</Link>
              <Link href="/portfolio" className="block text-primary-100 hover:text-accent-500 px-3 py-2 text-base font-medium">Portfolio</Link>
              <Link href="/blog" className="block text-primary-100 hover:text-accent-500 px-3 py-2 text-base font-medium">Blog</Link>
              <Link href="/contact" className="block bg-accent-500 text-primary-100 px-3 py-2 text-base font-medium rounded-lg mt-2">Get a Quote</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}