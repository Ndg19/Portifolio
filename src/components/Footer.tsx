import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Niguse Logo" className="w-8 h-8" />
          <span className="text-yellow-500 font-bold text-xl">Niguse</span>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            className="p-2 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nigusie-desalegn/"
            className="p-2 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Ndg19"
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
