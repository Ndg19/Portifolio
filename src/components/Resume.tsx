import { Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      period: "march 2025-october 2025",
      degree: "Full Stack Web Application Development",
      institution: "Evangadi Tech",
      description:
        "I completed a Full-Stack Web Development Bootcamp, learning React, Node.js, Express, MySQL/MongoDB, and building responsive web apps with frontend, backend, API integration, and deployment.",
    },
    {
      period: "2019-2020",
      degree: "Master's Degree in Project Management",
      institution: "Lunar International College",
      description:
        "Acquired advanced skills in project planning, execution, and monitoring with focus on stakeholder engagement and risk management.",
    },
    {
      period: "2014-2018",
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "Bahir Dar University",
      description:
        "Comprehensive education in both theoretical concepts and practical applications of computer engineering and software development.",
    },
  ];

  const experience = [
    {
      period: '2022-2025',
      position: 'Software Developer',
      company: 'Artificial Intelligence Institute of Ethiopia',
      description: 'Full-stack web development specialist designing and implementing software solutions with AI applications across various sectors.'
    },
    {
      period: '2019-2022',
      position: 'Junior System Engineer',
      company: 'Technology and Innovation Institute of Ethiopia',
      description: 'Conducted research projects focused on advancing technology and innovation, developing solutions for local challenges.'
    }
  ];

  return (
    <section id="resume" className="py-24 bg-obsidian border-t border-white/5">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col items-center mb-16">
          <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-3">Resume</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">My Experience</h2>
          <div className="w-20 h-1 bg-yellow-500 rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-3xl">
            I am Niguse Desalegn, a passionate Software Engineer with a background in Computer Engineering.
            I hold a BSc degree from Bahir Dar University and a Master of Science in Project Management from
            Lunar International College. Currently based in Addis Ababa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap size={28} className="text-yellow-500 mr-4" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-yellow-500/30 pb-8 group"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-500 group-hover:scale-125 transition-transform"></div>
                  <span className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm inline-block mb-3">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                  <h5 className="text-lg text-yellow-500 mb-3">{item.institution}</h5>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase size={28} className="text-yellow-500 mr-4" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-yellow-500/30 pb-8 group"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-500 group-hover:scale-125 transition-transform"></div>
                  <span className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm inline-block mb-3">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.position}</h4>
                  <h5 className="text-lg text-yellow-500 mb-3">{item.company}</h5>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 mb-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-full transition-colors inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;