import Image from 'next/image';

export default function Home() {
  const projects = [
    { 
      title: "Portfolio Website", 
      description: "My personal portfolio built with Next.js and Tailwind CSS, featuring a responsive design and smooth scrolling.", 
      link: "#" 
    },
    { 
      title: "Project Two", 
      description: "A software engineering project focused on clean architecture and efficient data handling.", 
      link: "#" 
    },
    { 
      title: "Project Three", 
      description: "Advanced application development showcasing my skills learned at LSU.", 
      link: "#" 
    },
  ];

  return (
    <main className="bg-white text-slate-900 scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-orange-600 cursor-pointer">
            Steven Nguyen
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#hero" className="hover:text-orange-600 transition-colors">Home</a>
            <a href="#education" className="hover:text-orange-600 transition-colors">Education</a>
            <a href="#projects" className="hover:text-orange-600 transition-colors">Projects</a>
            <a href="https://www.linkedin.com/in/steven-nguyen-a7017132a/" target="_blank" className="hover:text-orange-600 transition-colors">Linkedin</a>
            <a href="https://github.com/sngu114" target="_blank" className="hover:text-orange-600 transition-colors">GitHub</a>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section id="hero" className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-24">
        <div className="relative w-64 h-64 mb-8 rounded-full overflow-hidden ring-4 ring-orange-500 ring-offset-4 shadow-2xl transition-transform hover:scale-105 duration-300">
          <img 
            src="/me.jpg" 
            alt="Steven Nguyen"
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-orange-600">Steven</span>
        </h1>
        
        <p className="max-w-lg text-lg text-slate-600 mb-10 leading-relaxed">
          I'm a <span className="font-semibold">Computer Science: Software Engineering</span> senior at Louisiana State University. 
        </p>

        <div className="animate-bounce">
          <div className="w-1 h-10 bg-gradient-to-b from-orange-500 to-transparent mx-auto rounded-full"></div>
        </div>
      </section>

      {/* NEW SECTION: EDUCATION */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="h-1 w-16 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          {/* LSU Logo Placeholder or Icon */}
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 overflow-hidden p-2">
  <img 
    src="/lsu.png" 
    alt="LSU Logo" 
    className="w-full h-full object-contain" 
  />
</div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Louisiana State University</h3>
            <p className="text-orange-600 font-semibold text-lg">B.S. in Computer Science: Software Engineering</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-slate-500 text-sm">
              <span>📍 Baton Rouge, LA</span>
              <span>📅 Expected Graduation: May 2026</span>
            </div>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Relevant Coursework: Data Structures, Analysis of Algorithms, Software Engineering, Database Systems, and Operating Systems.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1.5 w-20 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {project.description}
              </p>
              <a 
                href={project.link} 
                className="inline-block font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-400 border-t border-slate-100 mt-12">
        <p>© {new Date().getFullYear()} Steven Nguyen</p>
      </footer>

    </main>
  );
}