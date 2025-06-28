import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Eye, Filter, Search } from 'lucide-react'
import { useState } from 'react'
import Header from '../components/Header'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'Design & Branding' },
    { id: 'content', name: 'Content & Writing' },
    { id: 'video', name: 'Video & Animation' },
    { id: 'ai', name: 'AI & Automation' }
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform for African Fashion",
      category: "web",
      client: "Ankara Styles Co.",
      description: "Complete e-commerce solution with payment integration, inventory management, and mobile-responsive design.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      results: ["300% increase in online sales", "50% reduction in cart abandonment", "Mobile traffic up 200%"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Brand Identity for Fintech Startup",
      category: "design",
      client: "PayFlow Africa",
      description: "Complete brand identity including logo, color palette, typography, and marketing materials.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Brand Design", "Logo", "Marketing Materials", "Style Guide"],
      results: ["Brand recognition up 400%", "User trust increased 60%", "App downloads up 250%"],
      link: "#",
      behance: "#"
    },
    {
      id: 3,
      title: "AI-Powered Customer Support System",
      category: "ai",
      client: "TechSupport Pro",
      description: "Custom ChatGPT integration for automated customer support with human handoff capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["ChatGPT API", "Python", "Machine Learning", "Integration"],
      results: ["80% reduction in response time", "60% cost savings", "95% customer satisfaction"],
      link: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Content Marketing Campaign",
      category: "content",
      client: "Green Energy Solutions",
      description: "Comprehensive content strategy including blog posts, social media content, and email campaigns.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      tags: ["Content Strategy", "SEO", "Social Media", "Email Marketing"],
      results: ["500% increase in organic traffic", "300% growth in social following", "40% lead generation boost"],
      link: "#"
    },
    {
      id: 5,
      title: "Product Demo Video Series",
      category: "video",
      client: "SaaS Innovators",
      description: "Professional video series showcasing software features with motion graphics and animations.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      tags: ["Video Editing", "Motion Graphics", "Animation", "Storytelling"],
      results: ["200% increase in conversion rate", "1M+ video views", "50% reduction in support tickets"],
      link: "#",
      youtube: "#"
    },
    {
      id: 6,
      title: "Restaurant Management System",
      category: "web",
      client: "Taste of Lagos",
      description: "Complete restaurant management system with online ordering, inventory tracking, and analytics.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Laravel", "MySQL", "Payment Integration"],
      results: ["40% increase in orders", "30% operational efficiency", "25% cost reduction"],
      link: "#",
      github: "#"
    },
    {
      id: 7,
      title: "Healthcare App UI/UX Design",
      category: "design",
      client: "MedConnect Africa",
      description: "User-centered design for telemedicine app focusing on accessibility and ease of use.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      results: ["90% user satisfaction", "50% faster task completion", "30% increase in app usage"],
      link: "#",
      figma: "#"
    },
    {
      id: 8,
      title: "Automated Data Processing Pipeline",
      category: "ai",
      client: "DataFlow Analytics",
      description: "AI-powered data processing and analysis system for large-scale business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Python", "Machine Learning", "Data Analysis", "Automation"],
      results: ["90% time savings", "99.5% accuracy rate", "Real-time insights"],
      link: "#",
      github: "#"
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-secondary-500 to-accent-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent-200">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Showcasing successful projects that have transformed businesses across the globe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-3">
                      <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Eye size={20} />
                      </button>
                      {project.github && (
                        <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <Github size={20} />
                        </button>
                      )}
                      <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-primary-600 font-semibold mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2 text-gray-800">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together. Join our portfolio of successful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors">
                View More Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}