import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Zap className="text-primary-600 mr-2" size={28} />
            <div>
              <h1 className="text-xl font-bold text-primary-700">SmartSpark Services</h1>
              <p className="text-xs text-gray-500">Where AI and Creativity Ignite</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#home" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">Get a Quote</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">About</a>
              <a href="#services" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">Services</a>
              <a href="#portfolio" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">Portfolio</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">Testimonials</a>
              <a href="#contact" className="block bg-primary-600 text-white px-3 py-2 text-base font-medium rounded-lg mt-2">Get a Quote</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}