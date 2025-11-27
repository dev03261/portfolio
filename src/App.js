import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Maida Tariq
            </h1>
            <div className="flex gap-6">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-4xl font-bold">
              MT
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Software Engineer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Passionate about cloud infrastructure, data pipelines, and building scalable applications
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="mailto:maidatariq2017@gmail.com" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center gap-2">
              <Mail size={20} />
              Contact Me
            </a>
            <button onClick={() => scrollToSection('projects')} className="px-6 py-3 border border-purple-400 hover:bg-purple-400/10 rounded-lg transition-colors">
              View Projects
            </button>
          </div>
          <ChevronDown className="mx-auto animate-bounce" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 mb-6">
              I'm a Software Engineer at DEVSINC with a passion for digital identity and cloud technologies. 
              I live every day with passion and purpose, constantly learning and adapting to new challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 text-purple-400" size={32} />
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-400">DHA Phase 6, Lahore</p>
              </div>
              <div className="text-center">
                <Phone className="mx-auto mb-2 text-purple-400" size={32} />
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">03261106636</p>
              </div>
              <div className="text-center">
                <Mail className="mx-auto mb-2 text-purple-400" size={32} />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-400">maidatariq2017@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Backend Frameworks */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-purple-400" size={28} />
                  <h4 className="text-xl font-bold">Backend Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Django', 'Flask', 'FastAPI'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Programming Languages */}
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-blue-400" size={28} />
                  <h4 className="text-xl font-bold">Programming Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'SQL'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud Platforms */}
              <div className="bg-gradient-to-br from-orange-600/20 to-yellow-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="text-orange-400" size={28} />
                  <h4 className="text-xl font-bold">Cloud Platforms</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Azure', 'Google Cloud Platform'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Monitoring & Observability */}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="text-green-400" size={28} />
                  <h4 className="text-xl font-bold">Monitoring & Observability</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['CloudWatch', 'Grafana', 'Uptime Robot'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="text-red-400" size={28} />
                  <h4 className="text-xl font-bold">Databases</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-indigo-400" size={28} />
                  <h4 className="text-xl font-bold">DevOps & Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Jenkins', 'Apache Airflow', 'Git', 'Celery'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-cyan-400" size={28} />
                  <h4 className="text-xl font-bold">Frontend & API Development</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React JS', 'REST APIs', 'OAuth', 'Webhooks', 'Postman', 'Cypress.js', 'Pytest'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AWS Services */}
              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="text-yellow-400" size={28} />
                  <h4 className="text-xl font-bold">AWS Services</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['EC2', 'RDS', 'S3', 'Lambda', 'CloudWatch', 'IAM', 'VPC', 'Route53'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          
          {/* Current Role */}
          <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <Briefcase className="text-purple-400 flex-shrink-0" size={32} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
                <p className="text-purple-400 mb-2">DEVSINC</p>
                <p className="text-gray-400 mb-4">May 2023 - Present</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 ml-12">
              <li>• Led cloud infrastructure migration to AWS, optimizing EC2 and RDS setups</li>
              <li>• Integrated multiple CRMs including Salesforce, HubSpot, and Salesloft using custom APIs</li>
              <li>• Demonstrated expertise in AWS, Docker, Celery, and Flask</li>
              <li>• Currently working with petroleum industry client to build data ingestion pipelines using Apache Airflow</li>
              <li>• Collecting and processing data from 250+ counties through automated ETL pipelines</li>
            </ul>
          </div>

          {/* Internship */}
          <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-4">
              <Code className="text-purple-400 flex-shrink-0" size={32} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Software Engineering Intern</h3>
                <p className="text-purple-400 mb-2">CLOUD PACER</p>
                <p className="text-gray-400 mb-4">March 2023 - May 2023</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 ml-12">
              <li>• Developed and maintained web applications using React and JavaScript</li>
              <li>• Supported troubleshooting, debugging, and performance optimization</li>
              <li>• Learned agile methodologies and best practices</li>
            </ul>
          </div>

          {/* Education */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-start gap-4">
              <GraduationCap className="text-purple-400 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold mb-2">BS Computer Science</h3>
                <p className="text-purple-400 mb-2">FAST-NUCES, Lahore</p>
                <p className="text-gray-400">August 2019 - June 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Petroleum Data Pipeline */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400 transition-all hover:scale-105">
              <Database className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Petroleum Data Pipeline</h3>
              <p className="text-gray-300 mb-4">
                Enterprise-scale data ingestion pipeline for petroleum industry client, collecting and processing data from 250+ counties using Apache Airflow for orchestration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">Apache Airflow</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">ETL</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">AWS</span>
              </div>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Automated data collection from 250+ sources</li>
                <li>• Built scalable ETL pipelines with Airflow</li>
                <li>• Implemented data validation and quality checks</li>
                <li>• Optimized database performance for large datasets</li>
              </ul>
            </div>

            {/* LeaderBird */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400 transition-all hover:scale-105">
              <Cloud className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">LeaderBird</h3>
              <p className="text-gray-300 mb-4">
                Slack-integrated platform for team organization, performance tracking, and engagement with CRM integrations and daily trivia features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">Docker</span>
              </div>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Integrated with Salesforce, HubSpot, Salesloft</li>
                <li>• Real-time notifications and performance metrics</li>
                <li>• Implemented Stripe for payment processing</li>
                <li>• CI/CD with Jenkins and Docker</li>
              </ul>
            </div>

            {/* Prescription Generator */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400 transition-all hover:scale-105">
              <Code className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Prescription Generator</h3>
              <p className="text-gray-300 mb-4">
                AI-powered application using BERT model to automate medical prescription generation with natural language processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">BERT AI</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">REST APIs</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">NLP</span>
              </div>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Integrated BERT for NLP capabilities</li>
                <li>• Fine-tuned AI model for accuracy</li>
                <li>• Designed user-friendly React interface</li>
                <li>• Real-time data synchronization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="space-y-6">
              <a href="mailto:maidatariq2017@gmail.com" className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Mail className="text-purple-400" size={24} />
                <span>maidatariq2017@gmail.com</span>
              </a>
              
              <a href="tel:03261106636" className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Phone className="text-purple-400" size={24} />
                <span>03261106636</span>
              </a>
              
              <a href="https://www.linkedin.com/in/maida-tariq-6668b1224/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Linkedin className="text-purple-400" size={24} />
                <span>LinkedIn Profile</span>
              </a>
              
              <a href="https://github.com/maidatariq" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Github className="text-purple-400" size={24} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Maida Tariq. All rights reserved.</p>
          <p className="mt-2">Built with React & Deployed on Digital Ocean</p>
        </div>
      </footer>
    </div>
  );
}