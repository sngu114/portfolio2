"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const certifications = [
    {
      title: "Generative AI with Diffusion Models",
      organization: "Nvidia",
      status: "In Progress",
      image: "/nvidia.png", 
      description: "In this course, learners will take a deeper dive into denoising diffusion models, which are a popular choice for text-to-image pipelines"
    },
  ];

  const volunteering = [
    {
      role: "Volunteer",
      organization: "St. Anthony Catholic Church",
      image: "/church.PNG",
      location: "Baton Rouge, Louisiana",
      date: "Present",
      description: "Assisted with event setup and cleanup for church gatherings, services, and special events (Weddings, Funerals, Sunday School). "
    }
  ];

  const projects = [
    { 
      title: "Vigiloo", 
      description: "Senior Capstone Project. An easy to use cybersecurity educational platform for non-technical users. Our solution will be an interactive learning application that simplifies cybersecurity concepts and presents them in a clear, engaging, and practical way. The platform will feature gamified learning courses, real world scam simulation, and tools to assist users on recognizing scams. ", 
      image: "/vigiloLOGO2.png", 
      link: "https://github.com/sngu114/Vigiloo" 
    },
    { 
      title: "AI Animal and Species Identifier", 
      description: "Developed and deployed a multimodal animal species classification web application that identifies 854 species using image data and geospatial/temporal metadata.", 
      image: "/project1.jpg", 
      link: "https://github.com/sngu114/CSC-4444-AI-Group-G-Final-Project" 
    },
    { 
      title: "LIF Neuron Model Simulation", 
      description: "Python-based simulation of a Leaky Integrate-and-Fire (LIF) neuron with an alpha synapse model.", 
      image: "/project2.png", 
      link: "https://github.com/nathsoto1/NeuroSim" 
    },
    { 
      title: "Gym Management Database System", 
      description: "Developed a Gym Management System to streamline operations for a medium-sized fitness center. Designed a relational database to manage members, trainers, classes, enrollments, and payments.", 
      image: "/project3.PNG", 
      link: "https://github.com/nathsoto1/gym-database" 
    },
    { 
      title: "Simple GUI Chat Application", 
      description: "Complete web-based GUI chat application using Flask, Python Sockets and SQLite.", 
      image: "/project4.PNG", 
      link: "https://www.youtube.com/watch?v=URf6mlNETMw",
      linkText: "View Explanation Video",
      isVideo: true 
    },
    { 
      title: "First Portfolio Website", 
      description: "My first portfolio website. Helped me with the basics. Made with HTML, CSS, and JS. Deployed on Netlify.", 
      image: "/project5.png", 
      link: "https://github.com/sngu114/html-css-js-portfolio-website", 
      websiteLink: "https://stevennguyenportfolio.netlify.app/", 
      isDualLink: true 
    },
  ];

  const electiveProjects = [
    { 
      title: "Future Fugitive (3D Platformer Game)", 
      description: "3D platformer built using the Godot Engine and developed in C#.", 
      image: "/futurefugitive.gif", 
      link: "https://github.com/CSC-3380-Spring-2024/Team-6" 
    },
    { 
      title: "Cheesy Scavenger (JS Game)", 
      description: "Interactive JavaScript game built with p5.js and integrated with an Arduino Uno R3.", 
      image: "/eproject2.jpg", 
      link: "https://www.youtube.com/watch?v=URf6mlNETMw", 
      linkText: "View Demonstration Video",
      isVideo: true,
      githubLink: "https://github.com/sngu114/PDM2025"
    },
    { 
      title: "Pesto: Judgement Day (Unity2D Platformer Game)", 
      description: "Direct Sequel to 'Pesto: Rise of the Machines'. Created with Unity. Deployed on itch.io", 
      image: "/pesto.gif", 
      link: "https://sngu114.itch.io/pesto-judgment-day", 
      linkText: "Play Game",
      isItch: true 
    },
    { 
      title: "Golden Monk (Unity2D Platformer Game)", 
      description: "Simple 2D platformer game made with Unity. Deployed on itch.io.", 
      image: "/goldenmonk.gif", 
      link: "https://sngu114.itch.io/golden-monk", 
      linkText: "Play Game",
      isItch: true 
    },
  ];

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Game Projects', href: '#elective-projects' },
    { name: 'Volunteering', href: '#volunteering' }, 
    { name: 'Contact', href: '#contact' },
  ];

  const SocialIcons = () => (
    <>
      <a href="/Steven Nguyen Resume 12-19-25.pdf" target="_blank" className="text-slate-400 hover:text-orange-600 transition-colors" title="Resume">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>
      </a>
      <a href="https://www.linkedin.com/in/steven-nguyen-a7017132a/" target="_blank" className="text-slate-400 hover:text-orange-600 transition-colors" title="LinkedIn">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a href="https://github.com/sngu114" target="_blank" className="text-slate-400 hover:text-orange-600 transition-colors" title="GitHub">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
      </a>
      <button onClick={toggleDarkMode} className="text-slate-400 hover:text-orange-600 transition-colors" title="Toggle Dark Mode">
        {isDarkMode ? (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,7.5C6.83,8.24 6.38,9.15 6.13,10.15L3.34,7M20.66,7L17.87,10.15C17.62,9.15 17.17,8.24 16.5,7.5L20.66,7M22,12L18.58,14.39C18.85,13.65 19,12.84 19,12C19,11.16 18.85,10.35 18.58,9.61L22,12M3.34,17L6.13,13.85C6.38,14.85 6.83,15.76 7.5,16.5L3.34,17M20.66,17L16.5,16.5C17.17,15.76 17.62,14.85 17.87,13.85L20.66,17M12,22L9.61,18.58C10.35,18.85 11.16,19 12,19C12.84,19 13.65,18.85 14.39,18.58L12,22Z" /></svg>
        ) : (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4.09L13.5,1L14.56,4.09L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,11L18.5,9L19.19,11L21.25,11M18.97,15.59C17.45,15.36 15.97,14.65 14.85,13.53C12.7,11.39 12.7,7.91 14.85,5.77C15.44,5.18 16.14,4.72 16.9,4.39C15.44,2.3 12.95,1 10,1C5.03,1 1,5.03 1,10C1,14.97 5.03,19 10,19C13.67,19 16.8,16.81 18.16,13.65C18.42,14.29 18.69,14.95 18.97,15.59Z" /></svg>
        )}
      </button>
    </>
  );

  return (
    <main className={`scroll-smooth min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      
      {/* BACKGROUND EFFECTS */}
      {isDarkMode && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-slate-950" />
          
          {/* Randomized Stars */}
          {[...Array(50)].map((_, i) => (
            <div 
              key={`star-${i}`}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}

          {/* Meteors distributed across both sides */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`meteor-${i}`}
              className="absolute h-[2px] w-[120px] bg-gradient-to-r from-orange-500 to-transparent animate-meteor"
              style={{
                top: Math.random() * 80 - 10 + '%',
                left: i % 2 === 0 ? Math.random() * 40 + '%' : Math.random() * 40 + 60 + '%',
                animationDelay: Math.random() * 10 + 's',
                animationDuration: Math.random() * 2 + 3 + 's',
                transform: 'rotate(-45deg)', // Fix: Set rotation on base state
                opacity: 0 // Keep hidden until animation starts
              }}
            />
          ))}
        </div>
      )}

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-500 ${isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-100'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`text-xl font-bold tracking-tighter ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>Steven Nguyen</div>
            <div className={`hidden sm:flex items-center gap-3 border-l pl-4 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
              <SocialIcons />
            </div>
          </div>
          
          <div className={`hidden md:flex gap-6 text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`transition-colors ${isDarkMode ? 'hover:text-orange-400' : 'hover:text-orange-600'}`}>{link.name}</a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className={`md:hidden border-b px-6 py-6 flex flex-col gap-6 text-sm font-medium shadow-lg animate-in slide-in-from-top duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
            <div className={`flex items-center gap-6 pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
              <SocialIcons />
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className={`text-lg transition-colors ${isDarkMode ? 'text-slate-300 hover:text-orange-400' : 'hover:text-orange-600'}`}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section id="hero" className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-24">
          <div className={`relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden ring-4 ring-orange-500 ring-offset-4 shadow-2xl transition-transform hover:scale-105 duration-300 ${isDarkMode ? 'ring-offset-slate-950' : 'ring-offset-white'}`}>
            <img src="/me.jpg" alt="Steven Nguyen" className="object-cover w-full h-full" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Hi, I'm <span className={isDarkMode ? 'text-orange-400' : 'text-orange-600'}>Steven</span></h1>
          <p className={`max-w-lg text-base md:text-lg mb-10 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>I'm a <span className="font-semibold">Computer Science: Software Engineering</span> senior at Louisiana State University. My expected graduation is <span className="font-semibold">May 2026</span> and I hope to be a <span className="font-semibold">Full Stack Developer.</span></p>
          <div className="animate-bounce"><div className="w-1 h-10 bg-gradient-to-b from-orange-500 to-transparent mx-auto rounded-full"></div></div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Education</h2>
            <div className="h-1 w-16 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className={`border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm ${isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden p-2">
              <img src="/lsu.png" alt="LSU Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Louisiana State University</h3>
              <p className="text-orange-600 font-semibold text-base md:text-lg">B.S. in Computer Science: Software Engineering</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 mt-2 text-slate-500 text-sm">
                <span>📍 Baton Rouge, LA</span>
                <span>📅 Expected Graduation: May 2026</span>
              </div>
              <p className={`mt-4 leading-relaxed text-sm md:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Relevant Coursework: Artificial Intelligence, Systems Programming, Object Oriented Design, Operating Systems, Database Systems, Advanced Data Structures, Software Quality & Testing, and Cloud Fundamentals.</p>
            </div>
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <section id="certificates" className={`max-w-4xl mx-auto px-6 py-20 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-50'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Certifications</h2>
            <div className="h-1 w-16 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-col gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm transition-all duration-300 hover:scale-[1.01] ${isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden p-3">
                  <img src={cert.image} alt={cert.organization} className="w-full h-full object-contain" />
                </div>
                <div className="text-center md:text-left flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{cert.title}</h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">
                      Status: {cert.status}
                    </span>
                  </div>
                  <p className="text-orange-600 font-semibold text-base md:text-lg">{cert.organization}</p>
                  <p className={`mt-3 leading-relaxed text-sm md:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className={`max-w-6xl mx-auto px-6 py-24 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-50'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="h-1.5 w-20 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col ${isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white hover:text-orange-400' : 'group-hover:text-orange-600'}`}>{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {project.isDualLink ? (
                      <>
                        <a href={project.link} target="_blank" className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                          View Project
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
                        </a>
                        <a href={project.websiteLink} target="_blank" className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                          View Website
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                        </a>
                      </>
                    ) : (
                      <a href={project.link} target="_blank" className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                        {project.linkText || "View Project"}
                        {project.isVideo ? (
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21,12L9,21V3L21,12M7,3V21H5V3H7Z" /></svg>
                        ) : (
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GAME PROJECTS SECTION */}
        <section id="elective-projects" className={`max-w-6xl mx-auto px-6 py-24 border-t ${isDarkMode ? 'border-slate-800 bg-slate-900/20' : 'border-slate-50 bg-slate-50/50'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Game Projects</h2>
            <div className="h-1.5 w-20 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {electiveProjects.map((project, index) => (
              <div key={index} className={`group rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'group-hover:text-orange-600'}`}>{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a href={project.link} target="_blank" className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                      {project.linkText || "View Project"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VOLUNTEERING SECTION */}
        <section id="volunteering" className={`max-w-4xl mx-auto px-6 py-20 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-50'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Volunteering</h2>
            <div className="h-1 w-16 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-col gap-6">
            {volunteering.map((item, index) => (
              <div key={index} className={`border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm transition-all duration-300 hover:scale-[1.01] ${isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden p-3">
                  <img src={item.image} alt={item.organization} className="w-full h-full object-contain" />
                </div>
                <div className="text-center md:text-left flex-grow">
                  <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.role}</h3>
                  <p className="text-orange-600 font-semibold text-base md:text-lg">{item.organization}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 mt-2 text-slate-500 text-sm">
                    <span>📍 {item.location}</span>
                    <span>📅 {item.date}</span>
                  </div>
                  <p className={`mt-3 leading-relaxed text-sm md:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className={`max-w-4xl mx-auto px-6 py-24 border-t text-center ${isDarkMode ? 'border-slate-800' : 'border-slate-50'}`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : ''}`}>Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className={`border-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold text-sm md:text-base ${isDarkMode ? 'bg-slate-900 border-orange-500/30 text-orange-400' : 'bg-orange-50 border-orange-200 text-orange-700'}`}>stevennguyen896@gmail.com</div>
            <a href="https://www.linkedin.com/in/steven-nguyen-a7017132a/" target="_blank" className={`flex items-center gap-3 border-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold transition-all text-sm md:text-base ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-orange-600 hover:text-orange-600' : 'bg-white border-slate-200 text-slate-700 hover:border-orange-600 hover:text-orange-600 hover:scale-105'}`}>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
          </div>
        </section>

        <footer className={`py-12 text-center border-t transition-colors ${isDarkMode ? 'text-slate-500 border-slate-900' : 'text-slate-400 border-slate-100'}`}>
          <p className="text-xs md:text-sm">© {new Date().getFullYear()} Steven Nguyen. Last Updated: 2/28/26.</p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes meteor {
          0% { 
            transform: rotate(-45deg) translateX(0); 
            opacity: 0; 
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: rotate(-45deg) translateX(-1200px); 
            opacity: 0; 
          }
        }
        .animate-meteor {
          animation: meteor linear infinite;
          /* Ensure rotation is prioritized during mount */
          animation-fill-mode: forwards;
        }
      `}</style>
    </main>
  );
}