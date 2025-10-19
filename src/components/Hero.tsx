import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
 const phrases = [
   "Full-stack Web Developer",
   "UI/UX Designer",
   "Software Engineer",
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
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('/images/bg_1.png')" }}
        ></div>
      </div>

      <div className="container mx-auto px-20 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h3 className="text-yellow-500 font-medium mb-4 tracking-widest">
              HELLO!
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              I'm <span className="text-yellow-500">Niguse Desalegn</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 h-12">
              <span className="inline-block">{typedText}</span>
              <span className="animate-blink">|</span>
            </h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-8 rounded-full transition-colors"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-medium py-3 px-8 rounded-full transition-colors"
              >
                My Projects
              </a>
            </div>
          </div>

          <div className="md:w-3/2 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-500/30">
              <img
                src="/images/about.jpg"
                alt="Niguse Desalegn"
                className="w-full  object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} aria-label="Scroll down">
          <ChevronDown size={36} className="text-yellow-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
