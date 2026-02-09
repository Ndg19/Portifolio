import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-4 left-0 w-full px-4 md:px-10 z-50 transition-all duration-500"
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-3 md:py-4 border border-black/5 backdrop-blur-2xl transition-all duration-500 rounded-full ${isScrolled ? "bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-black/5 scale-[0.98]" : "bg-white/40 shadow-lg border-white/10"
        }`}>
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold text-black"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <img src="/images/logo.png" alt="Niguse Logo" className="w-8 h-8" />
          <span className="text-black">Niguse</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors hover:text-primary text-black/80 ${activeSection === link.id ? "text-black font-bold" : ""
                }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-3xl py-10 px-8 rounded-[2.5rem] shadow-2xl border border-black/5 animate-in fade-in zoom-in duration-500 overflow-hidden">
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`py-2 transition-colors hover:text-primary text-black/80 ${activeSection === link.id ? "text-black font-bold" : ""
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
