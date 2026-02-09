import { useRef, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Amazon Clone",
      category: "Full-Stack",
      image: "/images/Amazon-thumnail.png",
      link: "https://nigusieamaclone.netlify.app/",
      github: "https://github.com/Ndg19/Amazone-Clone-2025",
      description: "Full-featured Amazon Clone with product listings and auth.",
      tags: ["React", "Firebase"]
    },
    {
      id: 2,
      title: "Evangadi Forum",
      category: "Full-Stack",
      image: "/images/forum-thumbnail.jpg",
      link: "https://evangadiforumapp.netlify.app/",
      github: "https://github.com/Ndg19/evangadi-forum-frontend",
      description: "Interactive Q&A platform with responsive UI.",
      tags: ["MySQL", "React"]
    },
    {
      id: 3,
      title: "Netflix Clone",
      category: "UI/UX",
      image: "/images/netflix-thumnail.png",
      link: "https://netflix-clone-2025-z4hh.vercel.app/",
      github: "https://github.com/Ndg19/Netflix-Clone-2025",
      description: "Streaming app with TMDB API integration.",
      tags: ["React", "API"]
    },
    {
      id: 4,
      title: "Apple React Replica",
      category: "Web Dev",
      image: "/images/apple.png",
      link: "https://nigusereactapple.vercel.app/",
      github: "https://github.com/Ndg19/apples-React-Replica",
      description: "Pixel-perfect Apple website clone.",
      tags: ["React", "GSAP"]
    },
    {
      id: 6,
      title: "Document Management System",
      category: "Full-Stack",
      image: "/images/dms-thumbnail.png",
      link: "#",
      github: "https://github.com/Ndg19/DMS",
      description: "Advanced system for organizing, tracking, and storing digital documents.",
      tags: ["React", "Node", "PostgreSQL"]
    }
  ];

  // Duplicate projects for true infinite symmetry
  const duplicatedProjects = [...projects, ...projects];

  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<number | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scrollSpeed = 1.2;

    const scroll = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += scrollSpeed;

        // Infinite scroll logic: 
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
        else if (container.scrollLeft <= 0) {
          container.scrollLeft = (container.scrollWidth / 2);
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const manualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      // Pause auto-scroll
      isPausedRef.current = true;
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;

      // Handle edge cases for infinite wrapping before smooth scrolling
      if (direction === 'left' && container.scrollLeft <= 10) {
        container.scrollLeft = container.scrollWidth / 2;
      } else if (direction === 'right' && container.scrollLeft >= (container.scrollWidth / 2) - 10) {
        container.scrollLeft = 0;
      }

      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      // Resume auto-scroll after a delay
      pauseTimeoutRef.current = window.setTimeout(() => {
        isPausedRef.current = false;
      }, 2000);
    }
  };

  return (
    <section id="projects" className="py-24 bg-obsidian border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-yellow-500 font-black uppercase text-[10px] mb-4 block tracking-[0.5em]">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none flex flex-wrap justify-center gap-x-4">
            {"Digital Masterpieces".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={i === 1 ? "text-gray-800" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-yellow-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>
      </div>

      <div className="relative group w-full">
        {/* Manual Navigation Arrows - High Z-Index and Pointer Events */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 z-50 flex justify-between pointer-events-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              manualScroll('left');
            }}
            className="p-3 md:p-5 rounded-full bg-white/20 backdrop-blur-3xl border border-white/30 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 pointer-events-auto shadow-[0_0_40px_rgba(0,0,0,0.6)] group/btn transform hover:scale-125 hover:rotate-6 active:scale-90"
            aria-label="Previous Project"
          >
            <ChevronLeft size={28} className="group-hover/btn:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              manualScroll('right');
            }}
            className="p-3 md:p-5 rounded-full bg-white/20 backdrop-blur-3xl border border-white/30 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 pointer-events-auto shadow-[0_0_40px_rgba(0,0,0,0.6)] group/btn transform hover:scale-125 hover:-rotate-6 active:scale-90"
            aria-label="Next Project"
          >
            <ChevronRight size={28} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scrolling Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-10 px-10 md:px-24 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedProjects.map((project: any, index: number) => (
            <div
              key={`${project.id}-${index}`}
              className="group relative flex-shrink-0 w-[280px] md:w-[450px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-gray-950 border border-white/5 hover:border-yellow-500/40 transition-all duration-500 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 pointer-events-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-500 text-gray-900 p-4 rounded-full hover:scale-110 transition-transform shadow-xl"
                    >
                      <ExternalLink size={24} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:scale-110 transition-transform border border-white/10"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 px-2 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-yellow-500 transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex wrap gap-3 mt-4">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest text-gray-500 font-bold px-2 py-0.5 border border-white/5 rounded"># {tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default Projects;
