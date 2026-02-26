"use client";

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { 
      title: "AI Animal and Species Identifier", 
      description: "Developed and deployed a multimodal animal species classification web application that identifies 854 species using image data and geospatial/temporal metadata. The system integrates a pretrained ConvNeXt Convolutional Network (CNN) with a late-fusion architecture, applies robust data augmentation to handle limited labeled data, and delivers real-time top-5 predictions with confidence scores.", 
      image: "/project1.jpg", 
      link: "https://github.com/sngu114/CSC-4444-AI-Group-G-Final-Project" 
    },
    { 
      title: "LIF Neuron Model Simulation", 
      description: "Python-based simulation of a Leaky Integrate-and-Fire (LIF) neuron with an alpha synapse model, designed to model basic neuronal dynamics. It supports two simulation modes: constant input current or spike-rate–driven synaptic input, both configurable through a config.json file and command-line arguments.", 
      image: "/project2.png", 
      link: "https://github.com/nathsoto1/NeuroSim" 
    },
    { 
      title: "Gym Management Database System", 
      description: "Developed a Gym Management System to streamline operations for a medium-sized fitness center. Designed a relational database to manage members, trainers, classes, enrollments, and payments, and built Python-based interfaces for member management and reporting.", 
      image: "/project3.png", 
      link: "https://drive.google.com/file/d/16-fXr1zefPTu-bICMGqaP0_jfAnzdf-s/view?usp=sharing" 
    },
    { 
      title: "Simple GUI Chat Application", 
      description: "Complete web-based GUI chat application using Flask, Python Sockets and SQLite.", 
      image: "/project4.png", 
      link: "https://www.youtube.com/watch?v=URf6mlNETMw",
      linkText: "View Explanation Video",
      isVideo: true 
    },
  ];

  const electiveProjects = [
    { 
      title: "Future Fugitive (3D Platformer Game)", 
      description: "3D platformer built using the Godot Engine and developed in C#. The game focuses on object-oriented design principles to create modular, reusable, and maintainable systems for player movement, physics interactions, and level mechanics.", 
      image: "/eproject1.jpg", 
      link: "https://github.com/CSC-3380-Spring-2024/Team-6" 
    },
    { 
      title: "Cheesy Scavenger (JS Game)", 
      description: "Interactive JavaScript game built with p5.js and integrated with an Arduino Uno R3. The game combines dynamic digital graphics with real-world hardware input, allowing players to control gameplay through physical components.", 
      image: "/eproject2.jpg", 
      link: "https://www.youtube.com/watch?v=URf6mlNETMw", 
      linkText: "View Demonstration Video",
      isVideo: true 
    },
    { 
      title: "Pesto: Judgement Day (Unity2D Platformer Game)", 
      description: "Direct Sequel to 'Pesto: Rise of the Machines'. You play as Pesto, the famous penguin all grown up, equipped with an AK-47, a teleporter gun, and a tiny shotgun. Features enemy AIs, Scripting, and Physics.", 
      image: "/eproject3.png", 
      link: "https://sngu114.itch.io/pesto-judgment-day", 
      linkText: "Play Game",
      isItch: true 
    },
    { 
      title: "Golden Monk (Unity2D Platformer Game)", 
      description: "Simple 2D platformer game made with Unity. You play a Golden Monk that can shrink and also fight enemies. Deployed on itch.io.", 
      image: "/eproject4.jpg", 
      link: "https://sngu114.itch.io/golden-monk", 
      linkText: "Play Game",
      isItch: true 
    },
  ];

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Game Projects', href: '#elective-projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // CLEANED UP ICONS
  const SocialIcons = () => (
    <>
      {/* Resume */}
      <a href="/Steven Nguyen Resume 12-19-25.pdf" target="_blank" className="text-slate-400 hover:text-orange-600 transition-colors" title="Resume">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/steven-nguyen-a7017132a/" target="_blank" className="text-slate-400 hover:text-orange-600 transition-colors" title="LinkedIn">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      {/* GitHub - Standard Path */}
      <a href="https://github.com/sngu114" target="_blank" className="text-slate-400 hover:text-orange-600 transition-colors" title="GitHub">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
      </a>
    </>
  );

  return (
    <main className="bg-white text-slate-900 scroll-smooth min-h-screen">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold tracking-tighter text-orange-600">Steven Nguyen</div>
            {/* Desktop Socials */}
            <div className="hidden sm:flex items-center gap-3 border-l pl-4 border-slate-200">
              <SocialIcons />
            </div>
          </div>
          
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-orange-600 transition-colors">{link.name}</a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 flex flex-col gap-6 text-sm font-medium text-slate-600 shadow-lg animate-in slide-in-from-top duration-300">
            <div className="flex items-center gap-6 pb-4 border-b border-slate-100">
              <SocialIcons />
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-orange-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-24">
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden ring-4 ring-orange-500 ring-offset-4 shadow-2xl transition-transform hover:scale-105 duration-300">
          <img src="/me.jpg" alt="Steven Nguyen" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Hi, I'm <span className="text-orange-600">Steven</span></h1>
        <p className="max-w-lg text-base md:text-lg text-slate-600 mb-10 leading-relaxed">I'm a <span className="font-semibold">Computer Science: Software Engineering</span> senior at Louisiana State University.</p>
        <div className="animate-bounce"><div className="w-1 h-10 bg-gradient-to-b from-orange-500 to-transparent mx-auto rounded-full"></div></div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="h-1 w-16 bg-orange-600 mx-auto rounded-full"></div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden p-2">
            <img src="/lsu.png" alt="LSU Logo" className="w-full h-full object-contain" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">Louisiana State University</h3>
            <p className="text-orange-600 font-semibold text-base md:text-lg">B.S. in Computer Science: Software Engineering</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 mt-2 text-slate-500 text-sm">
              <span>📍 Baton Rouge, LA</span>
              <span>📅 Expected Graduation: May 2026</span>
            </div>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">Relevant Coursework: AI, Systems Programming, Object Oriented Design, Operating Systems, Database Systems, Advanced Data Structures, Software Quality & Testing, and Cloud Fundamentals.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1.5 w-20 bg-orange-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{project.description}</p>
                <a href={project.link} target="_blank" className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                  {project.linkText || "View Project"}
                  {project.isVideo ? (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21,12L9,21V3L21,12M7,3V21H5V3H7Z" /></svg>
                  ) : (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GAME PROJECTS SECTION */}
      <section id="elective-projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-50 bg-slate-50/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Game Projects</h2>
          <div className="h-1.5 w-20 bg-orange-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {electiveProjects.map((project, index) => (
            <div key={index} className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{project.description}</p>
                <a href={project.link} target="_blank" className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                  {project.linkText || "View Project"}
                  {project.isItch ? (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M3.504 3C2.124 3 1.002 4.122 1.002 5.504v13.018l4.498-4.508h14.996c1.38 0 2.502-1.122 2.502-2.504V5.504C22.998 4.122 21.876 3 20.496 3H3.504zM8.502 6c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm7 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-5 5h3c.552 0 1 .448 1 1s-.448 1-1 1h-3c-.552 0-1-.448-1-1s.448-1 1-1z"/></svg>
                  ) : project.isVideo ? (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21,12L9,21V3L21,12M7,3V21H5V3H7Z" /></svg>
                  ) : (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 border-t border-slate-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="bg-orange-50 border-2 border-orange-200 text-orange-700 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold text-sm md:text-base">stevennguyen896@gmail.com</div>
          <a href="https://www.linkedin.com/in/steven-nguyen-a7017132a/" target="_blank" className="flex items-center gap-3 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold hover:border-orange-600 hover:text-orange-600 hover:scale-105 transition-all text-sm md:text-base">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 border-t border-slate-100">
        <p className="text-xs md:text-sm">© {new Date().getFullYear()} Steven Nguyen. Last Updated: 2/25/26.</p>
      </footer>
    </main>
  );
}