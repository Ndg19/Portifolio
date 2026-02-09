import { GraduationCap, Mail, MapPin, Phone, User } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-obsidian border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 group">
              <img
                src="/images/bg_2.png"
                alt="Niguse Desalegn"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>
            </div>
            {/* Decor elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute top-10 -right-10 w-20 h-20 border-2 border-yellow-500/20 rounded-full z-0"></div>
          </motion.div>

          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-4 block">
                The Backstory
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                Software Engineer & <span className="text-gray-500 italic">Leader</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl">
                I am <span className="text-white font-medium">Niguse Desalegn</span>, a passionate Software Engineer with a
                deep background in Computer Engineering and a Master's in Project Management.
                This unique combination allows me to bridge the gap between complex technical
                execution and strategic business delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              {[
                { icon: User, label: "Name", value: "Niguse Desalegn" },
                { icon: MapPin, label: "Location", value: "Addis Ababa" },
                { icon: Phone, label: "Phone", value: "+251-9-60-78-33" },
                { icon: Mail, label: "Email", value: "kingniguse81@.." },
                { icon: GraduationCap, label: "Master's", value: "Project Management" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-gray-900 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-tighter block">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-6"
            >
              <a
                href="#contact"
                className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-yellow-500 transition-colors"
              >
                Hire Me
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-gray-700 text-white font-bold rounded-full hover:border-yellow-500 transition-colors"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

