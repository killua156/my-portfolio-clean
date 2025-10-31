import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'Python', level: 95, type: 'Enhancement', color: 'from-green-400 to-emerald-600' },
    { name: 'Machine Learning', level: 90, type: 'Manipulation', color: 'from-cyan-400 to-blue-600' },
    { name: 'AWS & Cloud', level: 85, type: 'Emission', color: 'from-purple-400 to-pink-600' },
    { name: 'Data Engineering', level: 92, type: 'Transmutation', color: 'from-yellow-400 to-orange-600' },
    { name: 'React & Full Stack', level: 88, type: 'Conjuration', color: 'from-red-400 to-rose-600' },
    { name: 'SQL & Databases', level: 90, type: 'Enhancement', color: 'from-green-400 to-teal-600' }
  ];

  const projects = [
    {
      name: 'LLM Rule-Engine PR Copilot',
      difficulty: 'S-RANK',
      type: 'Specialization',
      tech: ['Python', 'FastAPI', 'Gemini', 'Redis', 'Kafka'],
      desc: 'Real-time GitHub App with LLM-assisted policy gates, streaming evaluations, and automated code review with SARIF annotations.',
      color: 'border-purple-500',
      glow: 'shadow-purple-500/50'
    },
    {
      name: 'Empathetic AI Journal',
      difficulty: 'A-RANK',
      type: 'Manipulation',
      tech: ['React', 'Node.js', 'MongoDB', 'Gemini'],
      desc: 'Emotion-aware journaling with sentiment detection, 40% engagement boost, and voice-enabled feedback using ElevenLabs TTS.',
      color: 'border-cyan-500',
      glow: 'shadow-cyan-500/50'
    },
    {
      name: 'Chicago Crime Predictor',
      difficulty: 'A-RANK',
      type: 'Enhancement',
      tech: ['Python', 'TensorFlow', 'Power BI'],
      desc: '25 years of CPD data analysis with geospatial patterns and interactive Power BI dashboards for law enforcement planning.',
      color: 'border-green-500',
      glow: 'shadow-green-500/50'
    }
  ];

  const experience = [
    {
      title: 'Graduate Teaching Assistant',
      company: 'UT Arlington',
      period: 'Aug 2024 - Present',
      achievements: [
        'Mentored 40+ peers in ML - 20% grade improvement, 30% participation increase',
        'Created 15+ interactive study guides for statistical modeling and ML concepts',
        'Led SQL workshop with hands-on database design and optimization'
      ]
    },
    {
      title: 'Data Engineer',
      company: 'LTIMindtree',
      period: 'Mar 2021 - Nov 2023',
      achievements: [
        'Secured 100+ enterprise databases with key-based masking - 40% risk reduction',
        'Automated data-masking via CI/CD pipelines - 50% efficiency boost',
        'Orchestrated SQL to PostgreSQL migration with AWS Glue - 30% cost savings',
        'Optimized workforce operations saving $100K+ annually'
      ]
    },
    {
      title: 'AI/ML Engineer',
      company: 'Bridged.co',
      period: 'Oct 2020 - Mar 2021',
      achievements: [
        'Built NAICS classifier for 10K+ companies - 25% accuracy improvement',
        'Engineered PHP data pipeline for 12K+ labeled samples - 40% faster preprocessing'
      ]
    }
  ];

  const awards = [
    { title: 'UTA Datathon 2025 Winner', subtitle: 'Dungeons & Dragons Challenge', color: 'text-yellow-400' },
    { title: 'Best Teaching Assistant', subtitle: 'Spring 2025 • Academic Excellence', color: 'text-purple-400' },
    { title: 'AWS Solutions Architect', subtitle: 'Associate Certified • 2025', color: 'text-cyan-400' },
    { title: 'Best Presentation Award', subtitle: 'UTA Data Science Faculty', color: 'text-green-400' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="absolute top-8 right-8 flex gap-4">
            <a href="https://github.com/jeansusid" target="_blank" rel="noopener noreferrer" 
               className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/jean-paul" target="_blank" rel="noopener noreferrer"
               className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Linkedin size={28} />
            </a>
          </div>

          <div className="text-center max-w-4xl">
            <div className="text-cyan-400 text-sm mb-3 tracking-widest font-mono">データ念能力者 • DATA NEN SPECIALIST</div>
            
            {/* Image placeholder - you can add your photo here */}
            <div className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-cyan-400 bg-gradient-to-br from-purple-900 to-cyan-900 flex items-center justify-center shadow-lg shadow-cyan-400/50">
              <div className="text-6xl">⚡</div>
            </div>

            <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              JEAN PAUL
            </h1>
            
            <div className="text-2xl md:text-3xl text-purple-400 mb-6 font-light">
              Software Engineer • Data Engineer • ML Specialist
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                Arlington, Texas
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                jeansusid@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                +1 682 247 1312
              </div>
            </div>

            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-lg">
              4.0 GPA • MS in Applied Statistics & Data Science
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-4 py-20 bg-gradient-to-b from-black to-purple-950/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              念 NEN ABILITIES
            </h2>
            <p className="text-center text-gray-500 mb-16 text-sm tracking-widest">
              MASTERY LEVEL: ADVANCED • TYPE: SPECIALIST
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="bg-black/50 border border-gray-800 p-6 rounded-lg backdrop-blur-sm hover:border-cyan-400 transition-all hover:shadow-xl hover:shadow-cyan-400/20"
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className={`text-xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{skill.type}</div>
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </div>
                  </div>
                  <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{ width: hoveredSkill === i ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="bg-black/50 border border-purple-900/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">TECH ARSENAL</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Java', 'C++', 'JavaScript', 'React', 'Node.js', 'Next.js', 'Flask', 'FastAPI', 
                  'AWS', 'Azure', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 
                  'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'Git', 'Power BI', 'D3.js'].map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-cyan-400/30 rounded-lg text-sm hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MISSION LOG
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <div 
                  key={i} 
                  className={`bg-black border-2 ${project.color} rounded-xl p-6 hover:scale-105 transition-transform hover:shadow-2xl ${project.glow}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.color === 'border-purple-500' ? 'from-purple-500/20 to-purple-500/40 text-purple-400' : project.color === 'border-cyan-500' ? 'from-cyan-500/20 to-cyan-500/40 text-cyan-400' : 'from-green-500/20 to-green-500/40 text-green-400'}`}>
                      {project.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">{project.type}</span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${project.color === 'border-purple-500' ? 'text-purple-400' : project.color === 'border-cyan-500' ? 'text-cyan-400' : 'text-green-400'}`}>
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-xs px-2 py-1 bg-gray-900 rounded border border-gray-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="px-4 py-20 bg-gradient-to-b from-black to-cyan-950/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              MISSION HISTORY
            </h2>

            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className="bg-black/50 border border-cyan-900/50 p-8 rounded-lg backdrop-blur-sm hover:border-cyan-400 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-1">{exp.title}</h3>
                      <div className="text-lg text-purple-400">{exp.company}</div>
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-900 px-4 py-2 rounded-lg mt-2 md:mt-0">
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="text-gray-300 flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">▹</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              ACHIEVEMENTS
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, i) => (
                <div key={i} className="bg-black/50 border-2 border-yellow-500/30 p-6 rounded-lg backdrop-blur-sm hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/20">
                  <Award className={award.color} size={40} />
                  <h3 className={`text-xl font-bold ${award.color} mt-4 mb-2`}>{award.title}</h3>
                  <p className="text-gray-400 text-sm">{award.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-20 bg-gradient-to-b from-black to-purple-950/20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              INITIALIZE CONTACT
            </h2>

            <div className="bg-black border-2 border-green-500/50 p-8 rounded-lg font-mono text-sm">
              <div className="text-green-400 mb-6">
                <div className="mb-2">$ whoami</div>
                <div className="text-gray-500">jean_paul@data-specialist:~$</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-cyan-400 w-20">Email:</span>
                  <a href="mailto:jeansusid@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                    jeansusid@gmail.com
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan-400 w-20">Phone:</span>
                  <span className="text-purple-400">+1 682 247 1312</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan-400 w-20">GitHub:</span>
                  <a href="https://github.com/jeansusid" target="_blank" rel="noopener noreferrer" 
                     className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2">
                    github.com/jeansusid <ExternalLink size={14} />
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan-400 w-20">LinkedIn:</span>
                  <a href="https://linkedin.com/in/jean-paul" target="_blank" rel="noopener noreferrer"
                     className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2">
                    linkedin.com/in/jean-paul <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="text-green-400 mt-6 flex items-center gap-1">
                $ <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 border-t border-gray-900">
          <div className="text-sm mb-2">Crafted with Nen • Powered by Data</div>
          <div className="text-xs">© 2025 Jean Paul • All Rights Reserved</div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;