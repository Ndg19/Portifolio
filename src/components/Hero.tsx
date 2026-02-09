import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const phrases = [
  "Full-stack Web Developer",
  "UI/UX Designer",
  "Software Engineer",
  "Project Manager",
];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(
      () => {
        const currentPhrase = phrases[currentPhraseIndex];

        if (isTyping) {
          if (charIndex < currentPhrase.length) {
            setTypedText(currentPhrase.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setIsTyping(false);
            setTimeout(() => clearInterval(typingInterval), 1500);
          }
        } else {
          if (charIndex > 0) {
            setTypedText(currentPhrase.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsTyping(true);
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          }
        }
      },
      isTyping ? 100 : 50
    );

    return () => clearInterval(typingInterval);
  }, [charIndex, currentPhraseIndex, isTyping]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-obsidian"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-30"></div>
        {/* Animated Background Blur */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-yellow-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-20 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <span className="text-yellow-500 font-medium mb-4 tracking-widest block uppercase text-sm">
              Available for projects
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Crafting <span className="text-yellow-500">Digital</span> Experiences
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 h-12 text-gray-300">
              <span className="inline-block">{typedText}</span>
              <span className="animate-pulse text-yellow-500">|</span>
            </h2>
            <div className="flex flex-row items-center justify-center md:justify-start gap-4">
              <Magnetic>
                <a
                  href="#contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all flex items-center shadow-lg shadow-yellow-500/20 text-sm md:text-base whitespace-nowrap"
                >
                  Hire Me
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#projects"
                  className="border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-base whitespace-nowrap"
                >
                  My Projects
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-full animate-spin-slow" />
              <div className="absolute -inset-4 border border-yellow-500/10 rounded-full animate-reverse-spin-slow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-gray-800 shadow-2xl">
                <img
                  src="/images/about.jpg"
                  alt="Niguse Desalegn"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <button onClick={scrollToAbout} aria-label="Scroll down">
          <ChevronDown size={36} className="text-yellow-500/50 hover:text-yellow-500 transition-colors" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

