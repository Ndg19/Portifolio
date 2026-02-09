import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Database, Layout, Server } from "lucide-react";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <Layout className="text-yellow-500" size={32} />,
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
        { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <Server className="text-yellow-500" size={32} />,
      skills: [
        { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#ffffff" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
      ]
    },
    {
      id: "database",
      title: "Database Management",
      icon: <Database className="text-yellow-500" size={32} />,
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-obsidian border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-yellow-500 font-bold uppercase text-[10px] mb-4 block tracking-[0.5em]"
          >
            Technical Stack
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            My <span className="text-gray-700">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="relative rounded-3xl overflow-hidden border border-white/5 bg-gray-800/20 backdrop-blur-md transition-all duration-500 hover:border-yellow-500/20"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className="p-8 md:p-10 flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-6">
                  <div className="bg-gray-900/50 p-4 rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: hoveredCategory === category.id ? 180 : 0 }}
                  className="text-gray-600 group-hover:text-yellow-500 transition-colors"
                >
                  <ChevronDown size={32} />
                </motion.div>

                {/* Glow Background */}
                <div className={`absolute inset-0 bg-yellow-500/5 opacity-0 transition-opacity duration-500 pointer-events-none ${hoveredCategory === category.id ? 'opacity-100' : ''}`} />
              </div>

              {/* Skills Dropdown Content */}
              <AnimatePresence>
                {hoveredCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-12 pt-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {category.skills.map((skill, sIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: sIndex * 0.05 }}
                            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-900/40 hover:bg-gray-900/80 transition-all group/skill"
                          >
                            <div className="w-12 h-12 flex items-center justify-center grayscale group-hover/skill:grayscale-0 transition-all duration-300">
                              <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" title={skill.name} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 group-hover/skill:text-yellow-500 uppercase tracking-widest transition-colors">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none z-0" />
    </section>
  );
};

export default Skills;