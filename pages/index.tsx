import { motion } from 'framer-motion'
import { Zap, Globe, Users, Brain, Pen, Monitor, Video, Database, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import Header from '../components/Header'

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
    { type: 'Writing', title: 'Tech Blog Series', description: 'Comprehensive AI and automation blog series for SaaS company' },
    { type: 'Design', title: 'Brand Identity', description: 'Complete rebrand for African fintech startup' },
    { type: 'Video', title: 'Product Demo', description: 'Engaging product demonstration video for mobile app' },
    { type: 'AI', title: 'Chatbot Integration', description: 'Custom ChatGPT integration for customer support' }
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
      
      {/* Hero Section */}
      <section id="home" className="pt-16 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-500 to-accent-500 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Where AI and <span className="text-accent-200">Creativity</span> Ignite
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              We combine human creativity with cutting-edge technology to help businesses run smarter, faster, and more efficiently. Global services powered by African talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Get a Quote
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors">
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About SmartSpark Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a remote freelancing company that bridges the gap between African talent and global opportunities, powered by AI innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <Globe className="text-primary-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Serving clients worldwide with 24/7 support and seamless communication across time zones.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                <Users className="text-secondary-500" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">African Talent</h3>
              <p className="text-gray-600">
                Leveraging the creativity, innovation, and diverse perspectives of skilled African professionals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                <Brain className="text-accent-500" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
              <p className="text-gray-600">
                Combining human creativity with artificial intelligence to deliver superior results efficiently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored for entrepreneurs, startups, and businesses worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <service.icon className="text-primary-600 mb-6" size={48} />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our best work across writing, design, video, and AI services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 font-semibold text-sm mb-2">{item.type}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary-700 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to transform your business with AI-powered creativity? Get in touch for a free consultation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4" size={24} />
                  <span>hello@smartsparkservices.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4" size={24} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-4" size={24} />
                  <span>Available Worldwide - 24/7 Support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                ></textarea>
                <button className="w-full bg-white text-primary-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="text-primary-400 mr-2" size={32} />
              <div>
                <h3 className="text-xl font-bold">SmartSpark Services</h3>
                <p className="text-sm text-gray-400">Where AI and Creativity Ignite</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering businesses worldwide with African talent and AI innovation.
            </p>
            <p className="text-sm text-gray-500">
              &copy; 2024 SmartSpark Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}