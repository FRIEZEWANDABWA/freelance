import { motion } from 'framer-motion'
import { Zap, Globe, Users, Brain, Pen, Monitor, Video, Database, Star, ArrowRight, Phone, Mail, MapPin, CheckCircle, TrendingUp, Award, Shield, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import ChatBox from '../components/ChatBox'
import { useState, useEffect, useRef } from 'react'

// Hero Slideshow Component
function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Where AI and Creativity Ignite",
      subtitle: "We combine human creativity with cutting-edge technology to help businesses run smarter, faster, and more efficiently.",
      cta: "Get a Quote",
      secondaryCta: "Book Free Consultation"
    },
    {
      title: "African Talent, Global Impact",
      subtitle: "Access a diverse pool of skilled professionals delivering exceptional results for your business needs.",
      cta: "See Our Work",
      secondaryCta: "Learn More"
    },
    {
      title: "Cutting-Edge AI Solutions",
      subtitle: "Leverage the power of artificial intelligence to transform your business processes and drive growth.",
      cta: "Hire Us",
      secondaryCta: "Explore Services"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center absolute inset-0 ${currentSlide === index ? 'z-10' : '-z-10'}`}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: currentSlide === index ? 1 : 0, scale: currentSlide === index ? 1 : 0.9 }}
            transition={{ duration: 1 }}
          >
            {slide.title.split(' ').map((word, i, arr) => 
              i === arr.length - 2 ? (
                <span key={i}>
                  <span className="text-accent-200 relative">
                    {word}
                    <motion.div 
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-300 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: currentSlide === index ? 1 : 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    ></motion.div>
                  </span>{' '}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {slide.subtitle}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <motion.div 
                className="bg-accent-500 text-primary-100 px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slide.cta}
                <ArrowRight className="ml-2" size={20} />
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div 
                className="border-2 border-accent-200 text-accent-200 px-8 py-4 rounded-lg font-semibold hover:bg-accent-200 hover:text-primary-900 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slide.secondaryCta}
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Slide Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Arrow Navigation */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
}

// Define types for our components
type PortfolioItem = {
  type: string;
  title: string;
  description: string;
  image: string;
  feedback: string;
};

type Service = {
  icon: any; // Using any for Lucide icon components
  title: string;
  description: string;
  features: string[];
};

// Portfolio Carousel Component
function PortfolioCarousel({ items }: { items: PortfolioItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleItems >= items.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, items.length - visibleItems) : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleItems, items.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={carouselRef}>
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`w-full shrink-0 px-3`}
              style={{ width: `${100 / visibleItems}%` }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow group hover:-translate-y-1 duration-300">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ 
                    backgroundImage: `url(/images/portfolio/${item.title.toLowerCase().replace(/\s+/g, '-')}.jpg)`
                  }}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 to-primary-800/70 flex items-center justify-center">
                    <span className="text-accent-200 text-5xl">
                      {item.type === 'Writing' && '✍️'}
                      {item.type === 'Design' && '🎨'}
                      {item.type === 'Video' && '🎬'}
                      {item.type === 'AI' && '🤖'}
                      {item.type === 'Web Development' && '💻'}
                      {item.type === 'Marketing' && '📊'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-accent-500 font-semibold text-sm mb-2">{item.type}</div>
                  <h3 className="font-bold text-lg mb-2 text-primary-800">{item.title}</h3>
                  <p className="text-primary-700 text-sm mb-4">{item.description}</p>
                  <div className="bg-primary-100 p-3 rounded-lg italic text-sm text-primary-700 border-l-4 border-accent-500">
                    "{item.feedback}"
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide} 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-accent-500 shadow-lg rounded-full p-3 z-10 hover:bg-accent-600 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-primary-100" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-accent-500 shadow-lg rounded-full p-3 z-10 hover:bg-accent-600 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-primary-100" />
      </button>
      
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(items.length / visibleItems) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * visibleItems)}
            className={`w-2.5 h-2.5 rounded-full ${currentIndex >= index * visibleItems && currentIndex < (index + 1) * visibleItems ? 'bg-accent-500' : 'bg-primary-300'}`}
            aria-label={`Go to slide group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Service Categories Component
function ServiceCategories({ services }: { services: Service[] }) {
  const categories = [
    { name: 'All', icon: Zap },
    { name: 'Creative', icon: Pen },
    { name: 'Technical', icon: Monitor },
    { name: 'Support', icon: Users },
    { name: 'AI', icon: Brain }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredServices, setFilteredServices] = useState(services);
  const [isAnimating, setIsAnimating] = useState(false);

  const serviceCategories: Record<string, string[]> = {
    'Creative': ['Freelance Writing', 'Video Editing'],
    'Technical': ['Web & Graphic Design'],
    'Support': ['Virtual Assistance'],
    'AI': ['AI & Data Services']
  };

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      if (activeCategory === 'All') {
        setFilteredServices(services);
      } else {
        setFilteredServices(services.filter(service => 
          serviceCategories[activeCategory].includes(service.title)
        ));
      }
      setIsAnimating(false);
    }, 300);
  }, [activeCategory, services, serviceCategories]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex items-center px-6 py-3 rounded-full ${activeCategory === category.name ? 'bg-accent-500 text-primary-100' : 'bg-primary-800 text-primary-100'} transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <category.icon size={18} className="mr-2" />
            {category.name}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-primary-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-700 hover:-translate-y-2 overflow-hidden relative group"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" style={{ 
              backgroundImage: `url(/images/services/${service.title === 'Freelance Writing' ? 'writing.jpg' : 
                service.title === 'Web & Graphic Design' ? 'design.jpg' : 
                service.title === 'Video Editing' ? 'video.jpg' : 
                service.title === 'AI & Data Services' ? 'ai.jpg' : 
                service.title === 'Virtual Assistance' ? 'virtual.jpg' : ''})`
            }}></div>
            <div className="relative z-10">
              <service.icon className="text-accent-500 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4 text-accent-200">{service.title}</h3>
              <p className="text-primary-100 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-primary-200 flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const services = [
    {
      icon: Users,
      title: 'Virtual Assistance',
      description: 'Email management, data entry, research, scheduling, and administrative support to keep your business running smoothly.',
      features: ['Email Management', 'Data Entry', 'Research', 'Scheduling']
    },
    {
      icon: Pen,
      title: 'Freelance Writing',
      description: 'High-quality articles, blogs, copywriting, technical documentation, and creative content that engages your audience.',
      features: ['Blog Writing', 'Copywriting', 'Technical Writing', 'Creative Content']
    },
    {
      icon: Monitor,
      title: 'Web & Graphic Design',
      description: 'Professional website creation, management, logo design, and complete branding solutions for your business.',
      features: ['Website Design', 'Logo Creation', 'Branding', 'UI/UX Design']
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing using CapCut and Premiere Pro to create engaging content for your brand.',
      features: ['CapCut Editing', 'Premiere Pro', 'Motion Graphics', 'Color Grading']
    },
    {
      icon: Brain,
      title: 'AI & Data Services',
      description: 'Cutting-edge AI solutions including prompt engineering, ChatGPT automation, and data annotation services.',
      features: ['Prompt Engineering', 'ChatGPT Automation', 'Data Annotation', 'AI Integration']
    }
  ]

  const portfolioItems = [
    { 
      type: 'Writing', 
      title: 'Tech Blog Series', 
      description: 'Comprehensive AI and automation blog series for SaaS company',
      image: '/images/portfolio/blog-series.jpg',
      feedback: 'The blog series increased our organic traffic by 45% in just two months!'
    },
    { 
      type: 'Design', 
      title: 'Brand Identity', 
      description: 'Complete rebrand for African fintech startup',
      image: '/images/portfolio/brand-identity.jpg',
      feedback: 'Our new brand identity perfectly captures our vision and values.'
    },
    { 
      type: 'Video', 
      title: 'Product Demo', 
      description: 'Engaging product demonstration video for mobile app',
      image: '/images/portfolio/product-demo.jpg',
      feedback: 'The demo video helped us increase conversion rates by 32%.'
    },
    { 
      type: 'AI', 
      title: 'Chatbot Integration', 
      description: 'Custom ChatGPT integration for customer support',
      image: '/images/portfolio/chatbot.jpg',
      feedback: 'Our support team is now 3x more efficient thanks to the AI integration.'
    },
    { 
      type: 'Web Development', 
      title: 'E-commerce Platform', 
      description: 'Custom e-commerce solution for a boutique fashion brand',
      image: '/images/portfolio/ecommerce.jpg',
      feedback: 'Sales increased by 78% within the first quarter after launch!'
    },
    { 
      type: 'Marketing', 
      title: 'Digital Campaign', 
      description: 'Integrated digital marketing campaign for product launch',
      image: '/images/portfolio/marketing.jpg',
      feedback: 'The campaign exceeded our expectations with 2.5x ROI.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'SmartSpark Services transformed our content strategy. Their AI-driven approach combined with creative writing delivered exceptional results.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Ventures',
      text: 'The team\'s expertise in both technology and creativity is unmatched. They delivered our project ahead of schedule with outstanding quality.',
      rating: 5
    },
    {
      name: 'Amara Okafor',
      company: 'Innovation Hub',
      text: 'Working with SmartSpark was a game-changer. Their African talent pool brought fresh perspectives to our global campaigns.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ChatBox />
      
      {/* Hero Section with Slideshow */}
      <section id="home" className="pt-16 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/backgrounds/hero-bg.jpg)' }}></div>
        <div className="absolute inset-0 bg-primary-900/80"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500 opacity-5 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-accent-300 opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent-400 opacity-5 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Hero Slideshow */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white w-full">
          <HeroSlideshow />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-primary-100 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/images/backgrounds/about-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">About SmartSpark Services</h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              We're a remote freelancing company that bridges the gap between African talent and global opportunities, powered by AI innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center">
                <Globe className="text-primary-100" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-800">Global Reach</h3>
              <p className="text-primary-700">
                Serving clients worldwide with 24/7 support and seamless communication across time zones.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-accent-500 to-primary-800 flex items-center justify-center">
                <Users className="text-primary-100" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-800">African Talent</h3>
              <p className="text-primary-700">
                Leveraging the creativity, innovation, and diverse perspectives of skilled African professionals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                <Brain className="text-accent-400" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-800">AI Integration</h3>
              <p className="text-primary-700">
                Combining human creativity with artificial intelligence to deliver superior results efficiently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Slider */}
      <section id="services" className="py-20 bg-primary-900 text-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-200 mb-6">Our Services</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored for entrepreneurs, startups, and businesses worldwide.
            </p>
          </div>
          
          <ServiceCategories services={services} />
        </div>
      </section>

      {/* Portfolio Section with Carousel */}
      <section id="portfolio" className="py-20 bg-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Our Portfolio</h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Showcasing our best work across writing, design, video, and AI services.
            </p>
          </div>
          
          <PortfolioCarousel items={portfolioItems} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-primary-900 text-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-200 mb-6">Client Testimonials</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Hear what our clients say about working with SmartSpark Services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-primary-100 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center text-primary-900 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-accent-200">{testimonial.name}</div>
                    <div className="text-sm text-primary-200">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-100 text-primary-800 relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(/images/backgrounds/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to transform your business with AI-powered creativity? Get in touch for a free consultation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Mail className="mr-4 text-accent-500" size={24} />
                  <span className="text-primary-800">frizywandabwa@gmail.com</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Phone className="mr-4 text-accent-500" size={24} />
                  <span className="text-primary-800">0718300236</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Globe className="mr-4 text-accent-500" size={24} />
                  <span className="text-primary-800">Available Worldwide - 24/7 Support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-900 p-8 rounded-xl shadow-lg text-primary-100">
              <h3 className="text-2xl font-bold mb-6 text-accent-200">Quick Contact</h3>
              <form className="space-y-4" action="mailto:frizywandabwa@gmail.com" method="post" encType="text/plain">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-primary-800 border border-primary-700 placeholder-primary-300 text-primary-100 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-primary-800 border border-primary-700 placeholder-primary-300 text-primary-100 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-primary-800 border border-primary-700 placeholder-primary-300 text-primary-100 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none resize-none"
                ></textarea>
                <button type="submit" className="w-full bg-accent-500 text-primary-100 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-primary-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="text-accent-500 mr-2" size={32} />
              <div>
                <h3 className="text-xl font-bold text-accent-200">SmartSpark Services</h3>
                <p className="text-sm text-primary-300">Where AI and Creativity Ignite</p>
              </div>
            </div>
            <p className="text-primary-300 mb-4">
              Empowering businesses worldwide with African talent and AI innovation.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="bg-primary-800 p-2 rounded-full hover:bg-accent-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-100">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-primary-800 p-2 rounded-full hover:bg-accent-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-100">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="bg-primary-800 p-2 rounded-full hover:bg-accent-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-100">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <p className="text-sm text-primary-400">
              &copy; 2024 SmartSpark Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}