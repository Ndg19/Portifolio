import { Code, Columns, Laptop, Layout, PenTool, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-yellow-500 mb-6 group-hover:text-gray-900 transition-colors" />,
      title: "Web Design",
      description: "Creating visually appealing and user-friendly website designs that align with your brand and business goals."
    },
    {
      icon: <Code className="w-12 h-12 text-yellow-500 mb-6 group-hover:text-gray-900 transition-colors" />,
      title: "Web Development",
      description: "Building responsive, high-performance websites and web applications using modern technologies and best practices."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500 mb-6 group-hover:text-gray-900 transition-colors" />,
      title: "App Development",
      description: "Developing mobile applications for iOS and Android platforms that deliver exceptional user experiences."
    },
    {
      icon: <PenTool className="w-12 h-12 text-yellow-500 mb-6 group-hover:text-gray-900 transition-colors" />,
      title: "Branding",
      description: "Crafting cohesive brand identities including logos, color schemes, and visual assets that communicate your brand values."
    },
    {
      icon: <Columns className="w-12 h-12 text-yellow-500 mb-6 group-hover:text-gray-900 transition-colors" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that enhance user satisfaction and engagement with your product."
    },
    {
      icon: <Laptop className="w-12 h-12 text-yellow-500 mb-6 group-hover:text-gray-900 transition-colors" />,
      title: "Photography",
      description: "Capturing high-quality, professional images that showcase your products, services, or brand in the best light."
    }
  ];

  return (
    <section id="services" className="py-10 bg-gray-900">
      <div className="container mx-auto px-20">
        <div className="flex flex-col items-center mb-16">
          <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-3">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">What I Do</h2>
          <div className="w-20 h-1 bg-yellow-500 rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-3xl">
            I offer comprehensive services tailored to meet your digital needs, from web design and development to branding and UI/UX design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 hover:bg-yellow-500 p-8 rounded-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-900 transition-colors">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-900 transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;