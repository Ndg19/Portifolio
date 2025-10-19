const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Node JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      color: "#06B6D4",
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800">
      <div className="container mx-auto px-20">
        <div className="flex flex-col items-center mb-16">
          <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-3">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">My Expertise</h2>
          <div className="w-20 h-1 bg-yellow-500 rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-3xl">
            As a full-stack developer, I've honed my skills across various technologies to deliver comprehensive web solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-white font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;