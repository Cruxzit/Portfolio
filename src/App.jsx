import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import AuroraBackground from './components/StarfallBackground';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Code2, 
  Palette, 
  Rocket,
  Terminal,
  Sparkles,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
  {
    title: "Mestre Cuca",
    description: "Full-stack recipe website with dynamic search and content management",
    tags: ["React", "Node.js", "MySQL"],
    gradient: "from-blue-500 to-cyan-500",
    image: "/projects/mestre-cuca.png", // Adiciona a tua imagem aqui
    link: "https://mestrecuca.com" // Adiciona o link do projeto
  },
  {
    title: "PocketList",
    description: "Mobile app for managing personal tasks and shopping lists with real-time sync",
    tags: ["React Native"],
    gradient: "from-purple-500 to-pink-500",
    image: "/projects/pocketlist.png",
    link: "https://pocketlist.app"
  },
  {
    title: "ExploreMundo",
    description: "Full-stack travel website with destination search and content management",
    tags: ["React", "Node.js", "MySQL"],
    gradient: "from-orange-500 to-red-500",
    image: "/projects/exploremundo.png",
    link: "https://exploremundo.com"
  },
  {
    title: "TJM Tech Store Website",
    description: "Company website built with WordPress, including design, structure and content",
    tags: ["WordPress", "HTML", "CSS"],
    gradient: "from-green-500 to-emerald-500",
    image: "/projects/tjm-tech.png",
    link: "https://tjmtech.com"
  },
  {
    title: "n8n Chatbot",
    description: "Automated chatbot integrated with external services for intelligent responses",
    tags: ["n8n", "PostgreSQL"],
    gradient: "from-indigo-500 to-blue-500",
    image: "/projects/n8n-chatbot.png",
    link: "https://github.com/yourname/n8n-chatbot"
  }
];


  const skills = [
    { name: "Frontend", icon: Code2, items: ["React", "Vue", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: Terminal, items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
    { name: "Design", icon: Palette, items: ["Figma", "UI/UX", "Animation", "Branding"] },
    { name: "DevOps", icon: Rocket, items: ["Docker", "AWS", "CI/CD", "Kubernetes"] }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden relative">
      {/* Aurora Background */}
      <AuroraBackground />
      
      {/* Floating Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl rounded-full px-8 py-3 shadow-lg border border-white/10">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Hugo Oliveira
          </motion.div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">About</a>
            <a href="#skills" className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Projects</a>
            <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg transition-all">
              <a href="#contact" className="flex items-center gap-2">
                Contact <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">Full Stack</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building complete web and mobile applications with clean code and responsive design.
              Turning ideas into functional and engaging experiences, from the frontend to the backend.
            </p>

            

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all text-lg px-8 py-6">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/5 border-white/20 text-white hover:bg-white/10">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="w-8 h-8 text-gray-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                About Me
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm an enthusiastic full-stack developer with a passion for building complete web and mobile applications. 
                  I enjoy working on both frontend and backend, creating responsive interfaces, reusable components, 
                  and seamless user experiences.
                </p>
                <p>
                  My approach combines technical skills with problem-solving and creativity, integrating databases, APIs, 
                  and automation tools to deliver functional and efficient software.
                </p>
                <p>
                  Outside of development, I like exploring new technologies, participating in personal projects, and 
                  preparing to take part in hackathons to challenge myself and grow as a developer.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="icon" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/foto_CV.png" 
                    alt="Hugo Oliveira" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl border border-indigo-500/50">
                <div className="text-base text-indigo-100">Looking for an Internship</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">Skills & Expertise</h2>
            <p className="text-xl text-gray-300">Technologies and tools I work with daily</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white/5 backdrop-blur-sm hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border-2 border-white/10 hover:border-indigo-500/50 group cursor-pointer">
                  <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <skill.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <Badge key={item} variant="secondary" className="bg-white/10 text-gray-300 hover:bg-white/20 border-white/10">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-xl text-gray-300">A selection of my recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="group h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer">
                    <div className="p-6">
                      <div className={`rounded-xl h-32 mb-4 flex items-center justify-center bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity relative overflow-hidden`}>
                        {project.image ? (
                          <>
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="hidden absolute inset-0 items-center justify-center">
                              <ExternalLink className="w-12 h-12 text-white/80" />
                            </div>
                          </>
                        ) : (
                          <ExternalLink className="w-12 h-12 text-white/80" />
                        )}
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 rounded text-xs bg-white/5 text-gray-400 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-indigo-950/40 via-purple-950/40 to-pink-950/40 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. 
              Let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all text-lg px-8 py-6">
                <Mail className="w-5 h-5 mr-2" />
                hello@portfolio.com
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/5 border-white/20 text-white hover:bg-white/10">
                Download Resume
              </Button>
            </div>

            <div className="flex gap-6 justify-center">
              <motion.a 
                href="https://github.com" 
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a 
                href="mailto:hello@portfolio.com"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/60 backdrop-blur-sm text-white relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Portfolio. Designed & Built with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
