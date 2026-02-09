import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03091a] text-gray-400 py-16 border-t border-white/5 relative z-10 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Niguse Logo" className="w-10 h-10" />
            <span className="text-white font-black text-2xl uppercase tracking-tighter">Niguse<span className="text-yellow-500">.</span></span>
          </div>
          <p className="text-xs text-gray-500 max-w-[200px] text-center md:text-left">Building digital experiences that matter.</p>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nigusie-desalegn/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Ndg19"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">&copy; {currentYear} Niguse Desalegn</p>
      </div>
    </footer>
  );
};

export default Footer;
