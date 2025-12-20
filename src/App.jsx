import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Globe, 
  Mail, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ExternalLink, 
  Code, 
  Database, 
  Cpu, 
  Layers, 
  Terminal,
  ArrowRight,
  Cloud,
  BarChart,
  Box,
  Brain,
  Award,
  FileText
} from 'lucide-react';

// --- DATA FROM RESUME ---
const RESUME_DATA = {
  name: "Rameshkumar K",
  role: "Data Scientist | Cloud & ML Engineer | GenAI & MLOps",
  tagline: "Unlocking insights as a Data Scientist and building scalable infrastructure as a Cloud & ML Engineer. Proficient in optimizing MLOps workflows and developing advanced Generative AI solutions.",
  email: "rameshkumaroff@gmail.com",
  profileImage: "https://i.ibb.co/jvVWGRTv/Whats-App-Image-2025-12-06-at-3-21-53-PM.jpg",
  resumeLink: "https://drive.google.com/drive/folders/1JBDQXGWWhgc7Q3D0EZZ9gQKw_pZHBJ_y",
  certificatesLink: "https://drive.google.com/drive/folders/18hHjcG4N5VB1VYcGvHMQqcd8tI4C_QiW?usp=sharing",
  socials: {
    linkedin: "https://www.linkedin.com/in/rameshkumark24/", // Updated Link
    github: "https://github.com/rameshkumark24", // Confirmed Link
    portfolio: "#hero" 
  },
  skills: [
    { 
      name: "Machine Learning", 
      tech: "TensorFlow, PyTorch, Scikit-learn, XGBoost, OpenCV",
      icon: <Brain size={24} /> 
    },
    { 
      name: "Data Science", 
      tech: "Pandas, NumPy, Power BI, Tableau, Excel, Statistics",
      icon: <BarChart size={24} /> 
    },
    { 
      name: "Docker & MLOps", 
      tech: "Docker, GitHub Actions, MLFlow, CI/CD",
      icon: <Box size={24} /> 
    },
    { 
      name: "Generative AI", 
      tech: "LLMs, Transformers, RAG, Prompt Engineering",
      icon: <Layers size={24} /> 
    },
    { 
      name: "Web Development & Database", 
      tech: "Vibe Coding, SQL, MongoDB", 
      icon: <Code size={24} /> 
    },
    { 
      name: "AWS & Cloud", 
      tech: "AWS (EC2, S3, IAM), Vercel, Cloud Deployment",
      icon: <Cloud size={24} /> 
    },
  ],
  experience: [
    {
      company: "Lennox India Technology Center",
      role: "Summer Intern",
      period: "Jun 2025 - Aug 2025",
      desc: "Analyzed production codebases and developed a proof-of-concept bot using Automation Anywhere. Gained exposure to corporate automation workflows and agile collaboration."
    },
    {
      company: "Web Development",
      role: "Freelance",
      period: "2024 - 2025",
      desc: "Launched 4+ digital solutions using AI-assisted platforms. Integrated authentication and databases, enhancing user engagement by 40%."
    }
  ],
  projects: [
    {
      title: "Sales Forecasting System",
      tech: ["Python", "Scikit-learn", "Power BI"],
      desc: "ML system forecasting sales for 50+ stores with 27% accuracy gain. Utilizes time-series analysis and Power BI for actionable insights.",
      link: "https://github.com/rameshkumark24/Sales-Forecasting-System"
    },
    {
      title: "Jarvis AI Assistant",
      tech: ["React", "Gemini API", "TypeScript"],
      desc: "Voice-activated AI assistant powered by Google's Gemini API. Features real-time voice visualization, spoken responses, and comprehensive task execution.",
      link: "https://github.com/rameshkumark24/Jarvis"
    },
    {
      title: "Smart Civic Reporting",
      tech: ["Node.js", "MongoDB", "Express"],
      desc: "Full-stack issue resolution system with automated routing. Connects citizens via web and USSD interfaces for inclusive civic engagement.",
      link: "https://github.com/rameshkumark24/Civic-Sense-SIH"
    },
    {
      title: "My Client Portfolio Website",
      tech: ["React", "Framer Motion", "Tailwind"],
      desc: "Responsive client website built with React and Framer Motion. Features glassmorphism UI, SEO optimization, and automated Vercel deployment.",
      link: "https://github.com/rameshkumark24/Umapandiyan"
    },
    {
      title: "GenAI Document QA System",
      tech: ["FastAPI", "Docker", "AWS", "OpenAI"],
      desc: "Document assistant extracting text from PDFs to answer queries. Features Docker containerization, AWS integration, and offline fallback capabilities.",
      link: "https://github.com/rameshkumark24/GenAI-Document-Assistant"
    },
    {
      title: "Food Delivery Time Prediction",
      tech: ["Python", "Flask", "XGBoost"],
      desc: "Production-ready ML app predicting delivery times with 90% accuracy. Analyzes weather, traffic, and distance using XGBoost algorithms.",
      link: "https://github.com/rameshkumark24/FoodDelivery_time_prediction"
    },
    {
      title: "Fashion Recommendation System",
      tech: ["ResNet50", "TensorFlow", "Flask"],
      desc: "Visual recommendation engine using ResNet50 to analyze 44k+ images. Deploys Nearest Neighbors to identify and suggest similar products.",
      link: "https://github.com/rameshkumark24/Fashion-Prediction"
    },
    {
      title: "Personal Dressing AI",
      tech: ["Python", "OpenCV", "Scikit-learn"],
      desc: "AI-powered tool detecting skin tone for personalized fashion advice. Combines OpenCV feature extraction with Random Forest for real-time inference.",
      link: "https://github.com/rameshkumark24/skincolordetector"
    },
    {
      title: "Stock Marketing System",
      tech: ["Python", "LSTM", "yfinance"],
      desc: "Deep learning model predicting 10-day stock trends using LSTM. Processes historical data to identify complex price patterns and relationships.",
      link: "https://github.com/rameshkumark24/Stockmarketfutureprediction"
    }
  ],
  certifications: [
    "Tata Data Visualization: Empowering Business with Effective Insights – Virtual Job Simulation (Forage)",
    "Deloitte Australia Data Analytics – Virtual Job Simulation (Forage)",
    "Tata GenAI - Powered Data Analytics – Virtual Job Simulation (Forage)",
    "Deep Learning with TensorFlow – IBM Developer Skills Network (CognitiveClass.ai)",
    "Google Cloud Data Analytics Certificate - Google Skills",
    "Augment your LLM Using Retrieval Augmented Generation - Nvidia",
    "Foundations of Prompt Engineering – AWS Skill Builder",
    "No-Code Machine Learning and Generative AI – AWS Skill Builder",
    "C, C++, and Java Training – Spoken Tutorial Project, IIT Bombay"
  ]
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Toggle Theme
  const toggleTheme = () => setDarkMode(!darkMode);

  // --- SEO & META TAGS MANAGEMENT ---
  useEffect(() => {
    // 1. Page Title
    document.title = `${RESUME_DATA.name} | ${RESUME_DATA.role}`;

    // 2. Set Favicon dynamically to Profile Picture
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = RESUME_DATA.profileImage;

    // 3. Search Engine Description
    const setMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', RESUME_DATA.tagline);
    setMetaTag('keywords', 'Data Scientist, AI Engineer, MLOps, GenAI, Machine Learning, Portfolio, Rameshkumar K');
    setMetaTag('author', RESUME_DATA.name);

    // 4. Open Graph (Social Media Cards)
    setMetaTag('og:title', `${RESUME_DATA.name} - ${RESUME_DATA.role}`, 'property');
    setMetaTag('og:description', "Explore my portfolio featuring GenAI, MLOps, and Data Science projects.", 'property');
    setMetaTag('og:image', RESUME_DATA.profileImage, 'property');
    setMetaTag('og:url', "https://rameshkumark.com", 'property');
    setMetaTag('og:type', 'website', 'property');

  }, []);

  // Custom Cursor Logic
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Intersection Observer for Scroll Spy & Reveal
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Handler
  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-body ${darkMode ? 'dark-theme' : 'light-theme'}`} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      {/* --- CSS VARIABLES & FONTS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap');

        /* Theme Variables */
        .light-theme {
          /* New Gold & White Palette */
          --bg-primary: #FFFFFF;
          --bg-secondary: #F9FAFB;
          --text-primary: #111827;
          --text-secondary: #4B5563;
          --accent-primary: #D4AF37; /* Premium Gold Cursor */
          --accent-glow: #FCD34D;
          --border-color: #E5E7EB;
          --font-heading: 'Neue Montreal', 'Manrope', sans-serif;
          --font-body: 'Manrope', sans-serif;
        }

        .dark-theme {
          /* Original Luxury Blue & Black Palette */
          --bg-primary: #05060A;
          --bg-secondary: #0D1117;
          --text-primary: #E8F1FF;
          --text-secondary: #98A2B3;
          --accent-primary: #2F80ED;
          --accent-glow: #00D1FF;
          --border-color: #1E293B;
          --font-heading: 'Space Grotesk', sans-serif;
          --font-body: 'Satoshi', sans-serif;
        }

        /* Base Styles */
        html {
          scroll-behavior: smooth;
        }

        body { 
          font-family: var(--font-body);
          -webkit-overflow-scrolling: touch; /* iOS Momentum Scrolling */
          overflow-x: hidden;
        }
        
        h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
        
        /* Utility Classes using vars */
        .bg-custom-primary { background-color: var(--bg-primary); }
        .bg-custom-secondary { background-color: var(--bg-secondary); }
        .text-custom-primary { color: var(--text-primary); }
        .text-custom-secondary { color: var(--text-secondary); }
        .border-custom { border-color: var(--border-color); }
        
        /* Animations */
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
        }

        /* Improved Timeline Gradient for Mobile */
        .timeline-line::before {
          content: '';
          position: absolute;
          inset: 0;
          margin-left: 20px; 
          width: 2px;
          background: linear-gradient(180deg, 
            transparent 0%, 
            var(--accent-primary) 10%, 
            var(--accent-primary) 90%, 
            transparent 100%
          );
          opacity: 0.5;
        }

        @media (min-width: 768px) {
          .timeline-line::before {
            left: 50%;
            margin-left: -1px;
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* --- CUSTOM CURSOR --- */}
      <div 
        className="hidden md:block fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{ 
          left: cursorPos.x, 
          top: cursorPos.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`
        }}
      >
        <div 
            className="w-4 h-4 rounded-full transition-opacity duration-300" 
            style={{ 
                backgroundColor: 'var(--accent-primary)',
                opacity: isHovering ? 0.3 : 1 
            }} 
        />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border transition-all duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`} style={{ borderColor: 'var(--accent-primary)' }} />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 border-custom" style={{ backgroundColor: 'rgba(var(--bg-primary), 0.8)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* TITLE WITHOUT IMAGE */}
          <a 
            href="#" 
            className="flex items-center gap-3 text-2xl font-bold tracking-tighter transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span>
                Rameshkumar<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium transition-colors touch-manipulation"
                style={{ 
                  color: activeSection === item.toLowerCase() ? 'var(--accent-primary)' : 'var(--text-secondary)'
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5 touch-manipulation"
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} style={{ color: 'var(--text-primary)' }} className="touch-manipulation p-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: 'var(--text-primary)' }} className="touch-manipulation p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] p-8 flex flex-col items-center gap-8 bg-custom-primary overflow-y-auto">
            {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-2xl font-medium text-custom-primary touch-manipulation py-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="min-h-screen flex items-center pt-28 pb-20 px-6 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ backgroundColor: 'var(--accent-primary)' }} />
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full blur-[100px] opacity-20" style={{ backgroundColor: 'var(--accent-glow)' }} />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 space-y-6">
            <div 
              className="inline-block px-3 py-1 rounded-full border text-sm font-medium mb-4"
              style={{ 
                borderColor: 'var(--accent-primary)', 
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                color: 'var(--accent-primary)'
              }}
            >
              Available for Hire
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, var(--accent-primary), var(--accent-glow))` }}>
                {RESUME_DATA.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-custom-secondary">
              {RESUME_DATA.role}
            </h2>
            <p className="max-w-lg text-lg text-custom-secondary">
              {RESUME_DATA.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={RESUME_DATA.socials.portfolio} 
                onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                }}
                className="px-8 py-3 text-white font-bold rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300 touch-manipulation"
                style={{ 
                  backgroundColor: 'var(--accent-primary)',
                  boxShadow: `0 0 20px var(--accent-primary)`
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Let's Talk
              </a>
              <a 
                href={RESUME_DATA.resumeLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-3 border rounded-lg font-bold hover:bg-opacity-10 transition-all border-custom touch-manipulation"
                style={{ hoverBackgroundColor: 'var(--accent-primary)' }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <FileText size={20} />
                View Resume
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center items-center relative">
            <div className="w-64 h-64 md:w-96 md:h-96 relative z-10">
               {/* Image Container with Blob Mask */}
              <div 
                className="w-full h-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-4 animate-[morph_8s_ease-in-out_infinite] shadow-2xl"
                style={{ 
                  borderColor: 'var(--accent-primary)', 
                  background: `linear-gradient(to bottom right, var(--bg-secondary), var(--bg-primary))`
                }}
              >
                <img 
                  src={RESUME_DATA.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
            About <span style={{ color: 'var(--accent-primary)' }}>Me</span>
          </h2>
          <p className="text-lg leading-relaxed text-custom-secondary">
            I am a B.E. CSE (AI & ML) student at KPR Institute of Engineering and Technology with a CGPA of 8.1. 
            I have a strong foundation in Data Structures, Algorithms, and Machine Learning. 
            My passion lies in creating data-driven applications, from GenAI document assistants to sales forecasting systems. 
            I thrive in solving real-world problems through code.
          </p>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 px-6 bg-custom-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-heading)' }}>
            Technical <span style={{ color: 'var(--accent-primary)' }}>Skills</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.skills.map((skill, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl flex flex-col items-center gap-4 text-center transition-all duration-300 hover:-translate-y-2 border border-custom bg-custom-primary hover:border-[var(--accent-primary)]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div style={{ color: 'var(--accent-primary)' }} className="mb-2">{skill.icon}</div>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{skill.name}</h3>
                <p className="text-sm text-custom-secondary">
                  {skill.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured <span style={{ color: 'var(--accent-primary)' }}>Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESUME_DATA.projects.map((project, idx) => (
              <div 
                key={idx}
                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-custom bg-custom-secondary hover:border-[var(--accent-primary)]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold transition-colors group-hover:text-[var(--accent-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-custom-secondary hover:text-[var(--accent-primary)]">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-custom-secondary">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs rounded-full"
                        style={{ 
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                          color: 'var(--accent-primary)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-24 px-6 bg-custom-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-heading)' }}>
            Work <span style={{ color: 'var(--accent-primary)' }}>Experience</span>
          </h2>
          
          {/* TIMELINE CONTAINER WITH CUSTOM GRADIENT */}
          <div className="space-y-12 relative timeline-line">
            {RESUME_DATA.experience.map((job, idx) => (
              <div key={idx} className="relative grid grid-cols-[auto_1fr] md:flex md:items-center md:justify-between md:justify-normal md:odd:flex-row-reverse group gap-6 md:gap-0">
                
                {/* TIMELINE DOT */}
                <div 
                  className="flex items-center justify-center w-10 h-10 rounded-full border-2 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 bg-custom-primary mt-6 md:mt-0"
                  style={{ borderColor: 'var(--accent-primary)' }}
                >
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-primary)' }} />
                </div>
                
                {/* CARD CONTENT */}
                <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] bg-custom-primary border-custom">
                  <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                    <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{job.role}</h3>
                    <span className="text-xs font-mono" style={{ color: 'var(--accent-primary)' }}>{job.period}</span>
                  </div>
                  <h4 className="text-sm font-medium mb-4 text-custom-secondary">{job.company}</h4>
                  <p className="text-sm leading-relaxed text-custom-secondary">
                    {job.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS SECTION --- */}
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-heading)' }}>
            Achievements & <span style={{ color: 'var(--accent-primary)' }}>Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg border transition-all hover:translate-x-1 border-custom bg-custom-secondary"
                style={{ hoverBorderColor: 'var(--accent-primary)' }}
                onMouseEnter={(e) => {
                    setIsHovering(true);
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                    setIsHovering(false);
                    e.currentTarget.style.borderColor = ''; // reset
                }}
              >
                <div className="mt-1" style={{ color: 'var(--accent-primary)' }}>
                    <Award size={20} />
                </div>
                <p className="text-sm md:text-base font-medium text-custom-primary">{cert}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a 
                href={RESUME_DATA.certificatesLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg font-bold hover:bg-opacity-10 transition-all border-custom touch-manipulation"
                style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <ExternalLink size={18} />
                View Certificates & Credentials
            </a>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden bg-custom-secondary">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }} />
         
         <div className="max-w-3xl mx-auto text-center relative z-10">
           <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
             Let's Work <span style={{ color: 'var(--accent-primary)' }}>Together</span>
           </h2>
           <p className="text-xl mb-12 text-custom-secondary">
             Looking for an AI Engineer, Data Scientist, GenAI, MLOps, or Cloud specialist? I'm currently available for freelance projects and internships.
           </p>
           
           <div className="flex flex-col md:flex-row justify-center gap-6">
             <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${RESUME_DATA.email}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 text-white font-bold rounded-lg transition-all touch-manipulation"
              style={{ backgroundColor: 'var(--accent-primary)' }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
             >
               <Mail size={20} />
               <span>Say Hello</span>
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </a>
           </div>

           <div className="flex justify-center gap-8 mt-16">
             {[
               { icon: <Linkedin size={24} />, link: RESUME_DATA.socials.linkedin },
               { icon: <Github size={24} />, link: RESUME_DATA.socials.github },
               { icon: <Globe size={24} />, link: RESUME_DATA.socials.portfolio }
             ].map((social, idx) => {
               // Special handling for Website/Globe icon to scroll to Hero
               const isPortfolioLink = social.link === "#hero";
               return (
                 <a 
                  key={idx}
                  href={social.link}
                  target={isPortfolioLink ? "_self" : "_blank"}
                  rel={isPortfolioLink ? "" : "noreferrer"}
                  onClick={(e) => {
                    if (isPortfolioLink) {
                      e.preventDefault();
                      scrollTo('hero');
                    }
                  }}
                  className="p-4 rounded-full border transition-all hover:-translate-y-2 border-custom bg-custom-primary touch-manipulation"
                  style={{ hoverColor: 'var(--accent-primary)', hoverBorderColor: 'var(--accent-primary)' }}
                  onMouseEnter={(e) => {
                    setIsHovering(true);
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.color = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    setIsHovering(false);
                    e.currentTarget.style.borderColor = ''; // reset to class style
                    e.currentTarget.style.color = '';
                  }}
                 >
                   {social.icon}
                 </a>
               );
             })}
           </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center border-t border-custom text-custom-secondary">
        <p>&copy; 2025 {RESUME_DATA.name}. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;
