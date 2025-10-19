import { GraduationCap, Mail, MapPin, Phone, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-10 bg-gray-900">
      <div className="container mx-auto px-20">
        <div className="flex flex-col items-center mb-12">
          <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-3">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-1 text-center">
            Who Am I?
          </h2>
          <div className="w-20 h-1 bg-yellow-500 rounded-full mb-5"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="w-full h-full max-w-md mx-auto">
                <div className="relative rounded-lg overflow-hidden border-4 border-yellow-500/20">
                  <img
                    src="/images/bg_2.png"
                    alt="Niguse Desalegn"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-yellow-500 rounded-lg z-[-1]"></div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Full-stack Web Application Developer & Project Manager
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I am Niguse Desalegn, a passionate Software Engineer with a
              background in Computer Engineering. I hold a BSc degree from Bahir
              Dar University and a Master of Science in Project Management from
              Lunar International College. Currently based in Addis Ababa, I
              specialize in full-stack web development with a focus on creating
              innovative digital solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
              <div className="flex items-center gap-3">
                <User className="text-yellow-500" size={20} />
                <div>
                  <span className="text-gray-400 font-medium">Name:</span>
                  <span className="text-white ml-2">Niguse Desalegn</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-500" size={20} />
                <div>
                  <span className="text-gray-400 font-medium">Location:</span>
                  <span className="text-white ml-2">Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-500" size={20} />
                <div>
                  <span className="text-gray-400 font-medium">Phone:</span>
                  <span className="text-white ml-2">+251-9-60-78-33-17</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-500" size={20} />
                <div>
                  <span className="text-gray-400 font-medium">Email:</span>
                  <span className="text-white ml-2">
                    kingniguse81@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-yellow-500" size={20} />
                <div>
                  <span className="text-gray-400 font-medium">Education:</span>
                  <span className="text-white ml-2">
                    MSc. Project Management
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-full transition-colors inline-block"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-medium rounded-full transition-colors ml-4 inline-block"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
